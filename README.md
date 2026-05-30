# Night Sky Storyteller

A Streamlit app that uses real astronomical data and Claude AI to generate personalized narratives about what's visible in your sky tonight.

## Setup

```bash
# 1. Create and activate a virtual environment
python3 -m venv .venv
source .venv/bin/activate

# 2. Install dependencies
pip install -r requirements.txt

# 3. Add your Anthropic API key
cp .env.example .env
# Edit .env and set ANTHROPIC_API_KEY

# 4. Run the app
streamlit run app.py
```

## Features

- Real planet positions and moon phase via `ephem`
- Geocoding via OpenStreetMap (no API key required)
- Four narrative styles: Poetic, Mythological, Scientific, Children's Story
- Works for any location and date

## Stack

- [Streamlit](https://streamlit.io) — UI
- [Anthropic Claude](https://anthropic.com) — narrative generation
- [ephem](https://rhodesmill.org/pyephem/) — astronomical calculations
- [geopy](https://geopy.readthedocs.io) — geocoding
