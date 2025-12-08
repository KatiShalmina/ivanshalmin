import styles from './PublicationText.module.scss'

export default function PublicationText({ text }) {
  return (
    <div className={styles.textContainer}>
      {text.split('\n').map((line, i) => {
        const trimmed = line.trim()

        if (trimmed && trimmed === trimmed.toUpperCase()) {
          return (
            <h2 key={i} className={styles.sectionTitle}>
              {trimmed}
            </h2>
          )
        }

        if (trimmed) {
          return <p key={i}>{trimmed}</p>
        }

        return <br key={i} />
      })}
    </div>
  )
}