import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const SYSTEM_PROMPT = `You are a music mood analyst. When given a song name (and optionally an artist), you analyze its emotional character and return a structured JSON object.

You must return ONLY valid JSON with no extra text, markdown, or code fences. The JSON must have exactly these fields:

{
  "mood": "string — 2-4 word mood label (e.g., 'Melancholic & Dreamy')",
  "vibe": "string — one evocative sentence describing the song's atmosphere",
  "energy": number between 0-100 (0 = ultra chill, 100 = maximum hype),
  "emotions": ["array", "of", "3-6", "emotion", "tags"],
  "colors": ["#hex1", "#hex2", "#hex3"] — 3 colors that represent the mood,
  "description": "string — 2-3 sentences about the song's emotional journey",
  "bestListenedWhen": "string — a poetic scenario when this song fits perfectly",
  "tempo": "Slow" | "Medium" | "Fast" | "Variable",
  "decade": "string — the decade this song's vibe belongs to (even if newer), e.g. '90s'"
}

Be creative and insightful. If you don't know the specific song, make an educated guess based on the name, artist genre, or general knowledge. Always return valid JSON.`;

export async function analyzeSongMood(song, artist) {
  const userMessage = artist
    ? `Song: "${song}" by ${artist}`
    : `Song: "${song}"`;

  const response = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 1024,
    system: SYSTEM_PROMPT,
    messages: [{ role: "user", content: userMessage }],
  });

  const text = response.content[0].text.trim();

  // Strip markdown code fences if present
  const cleaned = text.replace(/^```json?\n?/, "").replace(/\n?```$/, "");

  const parsed = JSON.parse(cleaned);
  return parsed;
}
