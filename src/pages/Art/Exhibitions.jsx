import styles from './Exhibitions.module.scss'
import PubCard from '../../components/PubCard'
import useI18n from '../../hooks/useI18n'
import { EXHIBITION_COVERS, EXHIBITION_PAPER } from '../../data/exhibitions/exhibitions'

export default function Exhibitions() {
  const { t, isRu } = useI18n()

  const tDescription = t(EXHIBITION_PAPER)

  const paperCatalog = isRu ? 'каталог бумажной архитектуры' : 'full paper catalogue'
  const mainTitleHidden = isRu ? 'Выставки' : 'Exhibitions'
  const unitTitle = isRu ? 'выставки бумажной архитектуры' : 'the paper architecture movement'

  return (
    <section className={styles.exhibitions}>
      <h1 className='visuallyHidden'>{mainTitleHidden}</h1>
      <div className={styles.exhCardsList}>
        {EXHIBITION_COVERS.map(e => (
          <PubCard
            key={e.slug}
            to={`/paintings/exhibitions/${e.slug}`}
            title={e.title}
            subtitle={e.subtitle}
            cover={e.cover}
          />
        ))}
      </div>
      <div className={styles.exhUnit}>
        <h2 className={styles.exhTitle}>{unitTitle}</h2>
        <div className={styles.exhDescription}>
          {tDescription
            .trim()
            .split('\n')
            .map((line, i) => (
              <p key={i}>{line.trim()}</p>
            ))}
        </div>
        <a
          href='/pdf/paper-architecture-catalogue.pdf'
          target='_blank'
          rel='noopener noreferrer'
          className={styles.exhPdfLink}
        >
          {paperCatalog}
        </a>
      </div>
    </section >
  )
}
