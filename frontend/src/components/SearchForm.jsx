import { useState } from "react";
import styles from "./SearchForm.module.css";

export default function SearchForm({ onSubmit, loading }) {
  const [song, setSong] = useState("");
  const [artist, setArtist] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (song.trim()) onSubmit(song.trim(), artist.trim());
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputGroup}>
        <label className={styles.label} htmlFor="song">
          Song Name <span className={styles.required}>*</span>
        </label>
        <input
          id="song"
          className={styles.input}
          type="text"
          placeholder="e.g. Bohemian Rhapsody"
          value={song}
          onChange={(e) => setSong(e.target.value)}
          disabled={loading}
          maxLength={200}
          autoComplete="off"
          autoFocus
        />
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label} htmlFor="artist">
          Artist <span className={styles.optional}>(optional)</span>
        </label>
        <input
          id="artist"
          className={styles.input}
          type="text"
          placeholder="e.g. Queen"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
          disabled={loading}
          maxLength={100}
          autoComplete="off"
        />
      </div>

      <button
        className={styles.button}
        type="submit"
        disabled={loading || !song.trim()}
      >
        {loading ? (
          <span className={styles.loadingInner}>
            <span className={styles.dot} />
            <span className={styles.dot} />
            <span className={styles.dot} />
            <span>Analyzing vibe...</span>
          </span>
        ) : (
          "✦ Decode the Vibe"
        )}
      </button>
    </form>
  );
}
