# Solar System Explorer

An interactive solar system visualization built with FastAPI and vanilla HTML/CSS/JS. Click any planet to explore detailed facts, view real-time orbital positions calculated from live astronomical data, and watch planets animate along their orbits.

## Features

- Animated top-down solar system with accurate relative orbital speeds
- Real-time planet positions using live ephemeris calculations (`ephem`)
- Detailed info panels per planet: composition, size, gravity, moons, and more
- Saturn's rings rendered in the visualization
- No external API keys required

## Setup

**Requirements:** Python 3.9+

```bash
# 1. Clone the repo and enter the directory
git clone <repo-url>
cd night-sky-storyteller

# 2. Create and activate a virtual environment
python3 -m venv .venv
source .venv/bin/activate

# 3. Install dependencies
pip install -r requirements.txt

# 4. Start the server
./start.sh
```

Then open [http://localhost:8000](http://localhost:8000) in your browser.

## Running manually

If you prefer not to use `start.sh`:

```bash
source .venv/bin/activate
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```

## API Endpoints

| Endpoint | Description |
|---|---|
| `GET /api/planets` | List of all planets with display metadata |
| `GET /api/planets/{name}` | Full detail for a single planet (e.g. `/api/planets/saturn`) |
| `GET /api/positions` | Current heliocentric ecliptic longitude (degrees) for all planets |

## Stack

- [FastAPI](https://fastapi.tiangolo.com) — backend API
- [uvicorn](https://www.uvicorn.org) — ASGI server
- [ephem](https://rhodesmill.org/pyephem/) — astronomical position calculations
- Vanilla HTML/CSS/JS — frontend (no build step)
