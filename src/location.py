from geopy.geocoders import Nominatim
from typing import Optional, Dict

_geolocator = Nominatim(user_agent="night-sky-storyteller-v1")


def geocode_location(location_str: str) -> Optional[Dict]:
    try:
        result = _geolocator.geocode(location_str, timeout=10)
        if result:
            return {
                "lat": result.latitude,
                "lon": result.longitude,
                "name": result.address,
            }
    except Exception:
        pass
    return None
