import { useState } from "react";
import { analyzeSong } from "../utils/api.js";

export function useAnalyze() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const analyze = async (song, artist) => {
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const data = await analyzeSong(song, artist);
      setResult(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setResult(null);
    setError(null);
  };

  return { result, loading, error, analyze, reset };
}
