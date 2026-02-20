import styles from "./MoodCard.module.css";

export default function MoodCard({ result, onReset }) {
  const { song, artist, mood, vibe, energy, emotions, colors, description, bestListenedWhen, tempo, decade } = result;

  const gradientStyle = colors && colors.length >= 2
    ? { background: `linear-gradient(135deg, ${colors[0]}22, ${colors[1]}22, ${colors[2] || colors[0]}22)` }
    : {};

  const accentColor = colors?.[0] || "#c8b4ff";
  const accentColor2 = colors?.[1] || "#a78bfa";

  return (
    <div className={styles.card} style={gradientStyle}>
      {/* Glowing orbs */}
      <div className={styles.orb1} style={{ background: accentColor }} />
      <div className={styles.orb2} style={{ background: accentColor2 }} />

      <div className={styles.inner}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.songInfo}>
            <h2 className={styles.songName}>{song}</h2>
            {artist && <p className={styles.artistName}>by {artist}</p>}
          </div>
          <div className={styles.colorDots}>
            {colors?.map((c, i) => (
              <span key={i} className={styles.dot} style={{ background: c }} />
            ))}
          </div>
        </div>

        {/* Mood */}
        <div className={styles.moodBadge} style={{ borderColor: accentColor + "66", color: accentColor }}>
          {mood}
        </div>

        {/* Vibe */}
        <p className={styles.vibe}>&ldquo;{vibe}&rdquo;</p>

        {/* Stats row */}
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statLabel}>Energy</span>
            <div className={styles.energyBar}>
              <div
                className={styles.energyFill}
                style={{ width: `${energy}%`, background: `linear-gradient(90deg, ${accentColor}, ${accentColor2})` }}
              />
            </div>
            <span className={styles.statValue}>{energy}/100</span>
          </div>

          <div className={styles.statBadges}>
            <div className={styles.badge}>
              <span className={styles.badgeLabel}>Tempo</span>
              <span className={styles.badgeValue}>{tempo}</span>
            </div>
            <div className={styles.badge}>
              <span className={styles.badgeLabel}>Decade Vibe</span>
              <span className={styles.badgeValue}>{decade}</span>
            </div>
          </div>
        </div>

        {/* Emotion tags */}
        <div className={styles.emotions}>
          {emotions?.map((emotion, i) => (
            <span key={i} className={styles.tag} style={{ borderColor: accentColor + "44" }}>
              {emotion}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className={styles.description}>{description}</p>

        {/* Best listened when */}
        <div className={styles.listenWhen}>
          <span className={styles.listenLabel}>✦ Best listened when</span>
          <p className={styles.listenText}>{bestListenedWhen}</p>
        </div>

        {/* Reset */}
        <button className={styles.resetBtn} onClick={onReset}>
          ← Analyze another song
        </button>
      </div>
    </div>
  );
}
