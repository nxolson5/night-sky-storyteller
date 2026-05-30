import ephem
import math
from datetime import datetime, date as date_type
from typing import Any, Dict, List

PLANET_FACTS = {
    "Mercury": "smallest planet, no atmosphere, surface temperatures swing 600°C between day and night",
    "Venus": "hottest planet (465°C), thick CO₂ atmosphere, rotates backwards, brighter than any star",
    "Mars": "half Earth's diameter, home to Olympus Mons (3× Everest), thin CO₂ atmosphere, red from iron oxide",
    "Jupiter": "largest planet, 1,300 Earths could fit inside, the Great Red Spot is a storm older than 350 years",
    "Saturn": "least dense planet — it would float on water, rings are 90% water ice, 146 known moons",
}

# AU to light-minutes conversion
_AU_TO_LIGHT_MIN = 8.317


def get_sky_data(lat: float, lon: float, target_date: date_type = None) -> Dict[str, Any]:
    if target_date is None:
        target_date = date_type.today()

    obs = _make_observer(lat, lon, target_date)

    moon = ephem.Moon(obs)
    obs_tomorrow = _make_observer(lat, lon, target_date, hour_offset=24)
    moon_tomorrow = ephem.Moon(obs_tomorrow)
    waxing = float(moon_tomorrow.phase) > float(moon.phase)

    moon_alt = math.degrees(float(moon.alt))
    moon_dist_km = round(float(moon.earth_distance) * 149_597_870.7)

    season = _get_season(lat, target_date)
    hemisphere = "Northern" if lat >= 0 else "Southern"
    visible_planets = _get_visible_planets(obs)

    return {
        "moon": {
            "phase": round(float(moon.phase), 1),
            "phase_name": _moon_phase_name(float(moon.phase), waxing),
            "visible": moon_alt > 0,
            "altitude": round(moon_alt, 1),
            "waxing": waxing,
            "distance_km": moon_dist_km,
        },
        "planets": visible_planets,
        "season": season,
        "constellations": _seasonal_constellations(season, hemisphere),
        "date_str": datetime(target_date.year, target_date.month, target_date.day).strftime("%B %d, %Y"),
        "hemisphere": hemisphere,
        "lat": lat,
        "lon": lon,
    }


def _make_observer(lat: float, lon: float, d: date_type, hour_offset: int = 22) -> ephem.Observer:
    obs = ephem.Observer()
    obs.lat = str(lat)
    obs.lon = str(lon)
    obs.elevation = 0
    obs.date = datetime(d.year, d.month, d.day, hour_offset % 24, 0, 0)
    return obs


def _get_visible_planets(obs: ephem.Observer) -> List[Dict[str, Any]]:
    bodies = {
        "Mercury": ephem.Mercury(obs),
        "Venus": ephem.Venus(obs),
        "Mars": ephem.Mars(obs),
        "Jupiter": ephem.Jupiter(obs),
        "Saturn": ephem.Saturn(obs),
    }

    visible = []
    for name, body in bodies.items():
        alt = math.degrees(float(body.alt))
        if alt > 5:
            dist_au = round(float(body.earth_distance), 3)
            try:
                constellation = ephem.constellation(body)[1]
            except Exception:
                constellation = "unknown"
            visible.append({
                "name": name,
                "altitude": round(alt, 1),
                "magnitude": round(float(body.mag), 1),
                "earth_distance_au": dist_au,
                "light_minutes": round(dist_au * _AU_TO_LIGHT_MIN, 1),
                "constellation": constellation,
                "facts": PLANET_FACTS[name],
            })

    visible.sort(key=lambda p: p["altitude"], reverse=True)
    return visible


def _moon_phase_name(phase: float, waxing: bool) -> str:
    if phase < 2:
        return "New Moon"
    if phase < 48:
        return "Waxing Crescent" if waxing else "Waning Crescent"
    if phase < 52:
        return "First Quarter" if waxing else "Last Quarter"
    if phase < 98:
        return "Waxing Gibbous" if waxing else "Waning Gibbous"
    return "Full Moon"


_SEASONAL_CONSTELLATIONS = {
    "Spring": {
        "Northern": ["Leo", "Virgo", "Boötes", "Hydra", "Cancer"],
        "Southern": ["Centaurus", "Crux", "Vela", "Carina", "Corvus"],
    },
    "Summer": {
        "Northern": ["Scorpius", "Sagittarius", "Cygnus", "Lyra", "Aquila", "Hercules"],
        "Southern": ["Scorpius", "Sagittarius", "Centaurus", "Lupus", "Corona Australis"],
    },
    "Autumn": {
        "Northern": ["Pegasus", "Andromeda", "Perseus", "Cassiopeia", "Aries"],
        "Southern": ["Grus", "Piscis Austrinus", "Sculptor", "Phoenix", "Fornax"],
    },
    "Winter": {
        "Northern": ["Orion", "Taurus", "Gemini", "Canis Major", "Canis Minor", "Auriga"],
        "Southern": ["Orion", "Taurus", "Canis Major", "Puppis", "Pictor", "Columba"],
    },
}


def _seasonal_constellations(season: str, hemisphere: str) -> List[str]:
    return _SEASONAL_CONSTELLATIONS.get(season, {}).get(hemisphere, [])


def _get_season(lat: float, d: date_type) -> str:
    month = d.month
    northern = {3: "Spring", 4: "Spring", 5: "Spring",
                6: "Summer", 7: "Summer", 8: "Summer",
                9: "Autumn", 10: "Autumn", 11: "Autumn"}
    southern = {3: "Autumn", 4: "Autumn", 5: "Autumn",
                6: "Winter", 7: "Winter", 8: "Winter",
                9: "Spring", 10: "Spring", 11: "Spring"}
    lookup = northern if lat >= 0 else southern
    return lookup.get(month, "Winter")
