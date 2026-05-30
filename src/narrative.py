import os
from typing import Any, Dict

import anthropic

_client = None

# Style controls voice and framing only — facts are always present regardless of style.
STYLE_INSTRUCTIONS = {
    "Sky Guide": (
        "Clear, direct, and conversational — like a knowledgeable friend standing next to you "
        "pointing things out. Precise but never dry. Use plain language; let the real numbers "
        "and facts speak for themselves."
    ),
    "Poetic": (
        "Lyrical and evocative, but always grounded in the real data. Use metaphor to illuminate "
        "facts, not replace them. A reader should finish knowing both what they're looking at "
        "and feeling something about it."
    ),
    "Mythological": (
        "Weave the real astronomical data into the mythologies built around these objects — "
        "Greek, Roman, Mesopotamian, Norse. Name the gods, tell their stories, but always anchor "
        "them to what's physically real: distance, brightness, motion."
    ),
    "Children's Story": (
        "Warm, curious, and imaginative for ages 6–10. Give the moon and planets friendly "
        "personalities, but sneak in the real facts — actual distances, what the planet is made of, "
        "why it looks the way it does. Kids can handle real science if it's fun."
    ),
}


def generate_narrative(sky_data: Dict[str, Any], location: str, style: str) -> str:
    moon = sky_data["moon"]
    planets = sky_data["planets"]
    constellations = sky_data.get("constellations", [])

    moon_lines = [
        f"  Phase: {moon['phase_name']} ({moon['phase']}% illuminated)",
        f"  Distance tonight: {moon['distance_km']:,} km",
        f"  Altitude: {moon['altitude']}° ({'visible' if moon['visible'] else 'below horizon'})",
        f"  Trend: {'brightening (waxing)' if moon['waxing'] else 'fading (waning)'}",
    ]

    if planets:
        planet_lines = []
        for p in planets:
            planet_lines.append(
                f"  {p['name']}: {p['altitude']}° altitude, magnitude {p['magnitude']}, "
                f"{p['earth_distance_au']} AU away ({p['light_minutes']} light-minutes), "
                f"in {p['constellation']}. Key fact: {p['facts']}"
            )
        planets_text = "\n".join(planet_lines)
    else:
        planets_text = "  No planets above 5° altitude at observation time."

    constellations_text = ", ".join(constellations) if constellations else "not available"

    prompt = f"""You are an expert astronomy communicator writing a sky guide for tonight.

Your core job: give the reader genuinely useful, interesting information about what they're seeing.
Always include real numbers — distances, light travel times, magnitudes, physical facts about each object.
Style influences your voice and framing, but never replaces factual content.

--- TONIGHT'S SKY DATA ---
Location: {location} ({sky_data["hemisphere"]} Hemisphere)
Date: {sky_data["date_str"]}
Season: {sky_data["season"]}

Moon:
{chr(10).join(moon_lines)}

Visible Planets (above 5° at 10 PM local time):
{planets_text}

Prominent seasonal constellations overhead: {constellations_text}
--- END DATA ---

Voice/style: {STYLE_INSTRUCTIONS.get(style, STYLE_INSTRUCTIONS["Sky Guide"])}

Write exactly 5 paragraphs of flowing prose (no headers, no bullet points, no markdown):

1. Overview — what kind of night this is for observing, what dominates the sky, the overall character of tonight.
2. The Moon — its current phase, what that phase means for sky darkness and observing conditions, its actual distance from Earth tonight, what it looks like and what to notice.
3. The planets — for each visible planet: where to find it, how bright it is compared to stars, how far away it is right now (in light-minutes), one compelling physical fact about the planet itself. If none are visible, discuss what's absent and why.
4. The wider sky — the seasonal constellations that are prominent, any notable deep-sky objects in those constellations (Andromeda Galaxy, Orion Nebula, Pleiades, etc.) that are worth finding, and what the Milky Way is doing from this location and season.
5. Scale and perspective — leave the reader with a concrete sense of the distances involved and what it means that this light left these objects minutes, years, or millennia ago.

Be specific. Cite the actual numbers from the data. A reader should be able to step outside and use this."""

    message = _get_client().messages.create(
        model="claude-sonnet-4-6",
        max_tokens=1400,
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
