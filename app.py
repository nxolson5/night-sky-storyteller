import os
from datetime import date

import streamlit as st
from dotenv import load_dotenv

from src.astronomy import get_sky_data
from src.location import geocode_location
from src.narrative import generate_narrative

load_dotenv()

st.set_page_config(
    page_title="Night Sky Storyteller",
    page_icon="🌌",
    layout="wide",
)

st.markdown(
    """
    <style>
        .stApp { background: linear-gradient(180deg, #05051a 0%, #0a0a2e 100%); color: #d4d4f0; }
        h1, h2, h3 { color: #c8c8ff; }
        .stButton > button {
            background-color: #1a1a4e;
            border: 1px solid #4040a0;
            color: #d4d4f0;
            width: 100%;
        }
        .stButton > button:hover { background-color: #2a2a6e; border-color: #6060c0; }
        .stMetric { background-color: #0d0d30; border-radius: 8px; padding: 8px; }
        div[data-testid="stExpander"] { background-color: #0d0d30; border: 1px solid #2a2a5e; }
    </style>
    """,
    unsafe_allow_html=True,
)

st.title("Night Sky Storyteller")
st.caption("Real astronomy. Real night. Your story.")

# --- Sidebar ---
with st.sidebar:
    st.header("Your Sky")
    location_input = st.text_input(
        "Location",
        placeholder="City, State or Country",
        help="Any city or place name — uses OpenStreetMap geocoding.",
    )
    selected_date = st.date_input("Date", value=date.today())
    style = st.selectbox(
        "Narrative Style",
        ["Sky Guide", "Poetic", "Mythological", "Children's Story"],
    )
    st.divider()
    generate = st.button("Generate Sky Story", type="primary")

    if not os.environ.get("ANTHROPIC_API_KEY"):
        st.warning("Set ANTHROPIC_API_KEY in your .env file to enable story generation.")

# --- Main content ---
if not generate:
    st.markdown(
        """
        ### Welcome

        Enter your location in the sidebar and click **Generate Sky Story** to receive a
        personalized narrative built from real astronomical data — the actual positions of
        the moon and planets above your horizon tonight.

        Each story is unique to your place, your date, and the sky overhead.
        """
    )
else:
    if not location_input:
        st.warning("Please enter a location.")
    elif not os.environ.get("ANTHROPIC_API_KEY"):
        st.error("ANTHROPIC_API_KEY not set. Add it to a .env file in the project root.")
    else:
        with st.spinner("Finding your location..."):
            coords = geocode_location(location_input)

        if not coords:
            st.error(f"Could not find '{location_input}'. Try a different city or country.")
        else:
            with st.spinner("Reading the stars..."):
                sky_data = get_sky_data(coords["lat"], coords["lon"], selected_date)

            with st.spinner("Weaving your sky story..."):
                try:
                    narrative = generate_narrative(sky_data, location_input, style)
                except ValueError as e:
                    st.error(str(e))
                    st.stop()

            # Sky summary
            st.subheader(f"The sky over {location_input}")
            st.caption(
                f"{sky_data['date_str']} — {sky_data['season']}, "
                f"{sky_data['hemisphere']} Hemisphere"
            )

            col1, col2, col3 = st.columns(3)
            col1.metric("Moon Phase", sky_data["moon"]["phase_name"])
            col2.metric("Illumination", f"{sky_data['moon']['phase']}%")
            col3.metric("Visible Planets", len(sky_data["planets"]))

            if sky_data["planets"]:
                with st.expander("Planet Details"):
                    for p in sky_data["planets"]:
                        st.write(
                            f"**{p['name']}** — {p['altitude']}° altitude, "
                            f"magnitude {p['magnitude']}"
                        )

            st.divider()
            st.markdown(narrative)
            st.divider()
            st.caption(f"Generated for {coords.get('name', location_input)} | Night Sky Storyteller")
