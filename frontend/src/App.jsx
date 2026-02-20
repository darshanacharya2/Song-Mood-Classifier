import { useAnalyze } from "./hooks/useAnalyze.js";
import SearchForm from "./components/SearchForm.jsx";
import MoodCard from "./components/MoodCard.jsx";
import styles from "./App.module.css";

export default function App() {
  const { result, loading, error, analyze, reset } = useAnalyze();

  return (
    <div className={styles.app}>
      {/* Background grid */}
      <div className={styles.grid} aria-hidden="true" />

      {/* Ambient glow */}
      <div className={styles.glow} aria-hidden="true" />

      <main className={styles.main}>
        {/* Hero section - always visible */}
        <header className={styles.hero}>
          <div className={styles.badge}>AI-Powered Music Analysis</div>
          <h1 className={styles.title}>
            Decode
            <br />
            <span className={styles.titleAccent}>the Vibe</span>
          </h1>
          <p className={styles.subtitle}>
            Drop a song name. Get its mood, energy, and emotional fingerprint — instantly.
          </p>
        </header>

        {/* Search form - shown when no result */}
        {!result && (
          <section className={styles.formSection}>
            <SearchForm onSubmit={analyze} loading={loading} />

            {error && (
              <div className={styles.error}>
                <span className={styles.errorIcon}>⚠</span>
                {error}
              </div>
            )}

            <p className={styles.hint}>
              Try: <em>Blinding Lights</em>, <em>Clair de Lune</em>, or <em>HUMBLE.</em>
            </p>
          </section>
        )}

        {/* Result card */}
        {result && (
          <section className={styles.resultSection}>
            <MoodCard result={result} onReset={reset} />
          </section>
        )}
      </main>

      <footer className={styles.footer}>
        Built with Claude AI · Song Mood Classifier
      </footer>
    </div>
  );
}
