import { Router } from "express";
import { analyzeSongMood } from "../services/claudeService.js";

export const analyzeRoute = Router();

analyzeRoute.post("/analyze", async (req, res) => {
  const { song, artist } = req.body;

  if (!song || typeof song !== "string" || song.trim().length === 0) {
    return res.status(400).json({ error: "Please provide a song name." });
  }

  if (song.trim().length > 200) {
    return res.status(400).json({ error: "Song name is too long." });
  }

  try {
    const result = await analyzeSongMood(song.trim(), artist?.trim());
    res.json({
      song: song.trim(),
      artist: artist?.trim() || null,
      ...result,
    });
  } catch (err) {
    console.error("Analysis error:", err);

    if (err.status === 401) {
      return res.status(500).json({ error: "Invalid API key. Check your .env file." });
    }

    if (err instanceof SyntaxError) {
      return res.status(500).json({ error: "AI returned unexpected response. Try again." });
    }

    res.status(500).json({ error: "Failed to analyze song. Please try again." });
  }
});
