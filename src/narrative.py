import os
from typing import Any, Dict

import anthropic

_client = None

STYLE_INSTRUCTIONS = {
    "Poetic": (
        "Write in lyrical, evocative prose. Use metaphor and imagery. "
        "The tone should feel like a love letter to the cosmos — intimate, wonder-filled, alive."
    ),
    "Mythological": (
        "Draw on ancient mythology — Greek, Roman, Mesopotamian, Norse — to weave the planetary "
        "positions into a mythic narrative. The planets are gods enacting their eternal dramas. "
        "Give the reader the feeling of witnessing something sacred."
    ),
    "Scientific": (
        "Ground the narrative in real astrophysics. Reference distances, magnitudes, and phenomena "
        "accurately, but write with awe. Think Carl Sagan meets a nature documentary — rigorous "
        "but never dry."
    ),
    "Children's Story": (
        "Write a gentle, imaginative story for young readers (ages 6–10). The moon and planets "
        "are friendly characters going on adventures tonight. Keep it warm, curious, and magical."
    ),
}


def generate_narrative(sky_data: Dict[str, Any], location: str, style: str) -> str:
    moon = sky_data["moon"]
    planets = sky_data["planets"]

    if planets:
        planets_text = "\n".join(
            f"  - {p['name']} at {p['altitude']}° altitude, magnitude {p['magnitude']} — {p['lore']}"
            for p in planets
        )
    else:
        planets_text = "  No planets are above the horizon at the observation time."

    moon_status = (
        f"{moon['phase_name']}, {moon['phase']}% illuminated, "
        f"{'visible at {:.0f}° altitude'.format(moon['altitude']) if moon['visible'] else 'below the horizon'}"
    )

    prompt = f"""You are a cosmic storyteller. The data below is real astronomical information for tonight's sky.

Location: {location} ({sky_data["hemisphere"]} Hemisphere)
Date: {sky_data["date_str"]}
Season: {sky_data["season"]}
Moon: {moon_status}
Visible Planets (above 5° altitude at 10 PM local time):
{planets_text}

Style: {STYLE_INSTRUCTIONS.get(style, STYLE_INSTRUCTIONS["Poetic"])}

Write a narrative about tonight's sky for someone standing outside at this location. Structure it as follows:
1. Open with a scene-setting paragraph — the act of stepping outside and looking up.
2. Give the moon a full moment: its current phase, what that means for darkness and visibility, its character tonight.
3. For each visible planet, give it its own beat — position, brightness, what it means in this style.
4. If no planets are visible, find poetry in that absence.
5. Close with a reflection that connects this specific viewer to the larger, indifferent, beautiful universe.

Write 4–6 paragraphs of flowing prose. No headers. No bullet points. No markdown formatting."""

    message = _get_client().messages.create(
        model="claude-sonnet-4-6",
        max_tokens=1200,
        messages=[{"role": "user", "content": prompt}],
    )
    return message.content[0].text


def _get_client() -> anthropic.Anthropic:
    global _client
    if _client is None:
        api_key = os.environ.get("ANTHROPIC_API_KEY")
        if not api_key:
            raise ValueError("ANTHROPIC_API_KEY environment variable is not set.")
        _client = anthropic.Anthropic(api_key=api_key)
    return _client
