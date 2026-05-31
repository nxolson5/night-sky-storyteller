import math
from datetime import date
from pathlib import Path

import ephem
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles

from src.planets import PLANETS

load_dotenv()

app = FastAPI(title="Solar System Explorer")

STATIC_DIR = Path(__file__).parent / "static"
app.mount("/static", StaticFiles(directory=STATIC_DIR), name="static")


@app.get("/")
def index():
    return FileResponse(STATIC_DIR / "index.html")


@app.get("/api/planets")
def get_all_planets():
    summary = []
    for key, p in PLANETS.items():
        summary.append({
            "key": key,
            "display_name": p["display_name"],
            "color": p["color"],
            "glow_color": p["glow_color"],
            "radius_px": p["radius_px"],
            "orbit_radius_px": p["orbit_radius_px"],
            "orbit_period_s": p["orbit_period_s"],
            "has_rings": p["has_rings"],
            "order": p["order"],
        })
    summary.sort(key=lambda x: x["order"])
    return summary


@app.get("/api/planets/{name}")
def get_planet(name: str):
    key = name.lower()
    if key not in PLANETS:
        raise HTTPException(status_code=404, detail=f"Planet '{name}' not found")
    return PLANETS[key]


@app.get("/api/positions")
def get_positions():
    """Return each planet's current heliocentric ecliptic longitude in degrees (0-360)."""
    today = date.today()
    d = ephem.Date(f"{today.year}/{today.month}/{today.day}")

    planet_classes = {
        "mercury": ephem.Mercury,
        "venus": ephem.Venus,
        "earth": None,
        "mars": ephem.Mars,
        "jupiter": ephem.Jupiter,
        "saturn": ephem.Saturn,
        "uranus": ephem.Uranus,
        "neptune": ephem.Neptune,
    }

    positions = {}
    for key, cls in planet_classes.items():
        if cls is None:
            # Earth: heliocentric longitude = Sun's geocentric longitude + 180
            sun = ephem.Sun()
            sun.compute(d)
            lon = (math.degrees(float(sun.hlong)) + 180) % 360
        else:
            body = cls()
            body.compute(d)
            lon = math.degrees(float(body.hlong)) % 360
        positions[key] = round(lon, 2)

    return positions
