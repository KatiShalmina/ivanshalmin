import { Fragment } from 'react'
import { useLocation } from 'react-router-dom'
import styles from './Laconism.module.scss'
import { laconismContent } from '../../data/laconism/laconism'
import MoreButton from '../../components/MoreButton.jsx'
import Video from '../../components/Video.jsx'
import GallerySwiper from '../../components/GallerySwiper.jsx'
import MobTabSlides from '../../components/MobTabSlides.jsx'
import { presentation } from '../../data/laconism/presentation'
import useMediaQuery from '../../hooks/useMediaQuery'

export default function Laconism() {
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  const { pathname } = useLocation()

  const isRu = pathname === '/ru' || pathname.startsWith('/ru/')
  const base = isRu ? '/ru' : ''
  const lang = isRu ? 'ru' : 'en'

  const content = laconismContent[lang]

  const renderBlock = (block) => {
    if (block.type === 'p') return <p>{block.text}</p>

    if (block.type === 'highlight') {
      return <p className={styles.laconismHighlight}>{block.text}</p>
    }

    if (block.type === 'awards') {
      return (
        <div className={styles.awardsWrapper}>
          {block.items.map((award, idx) => (
            <div className={styles.awardsUnit} key={idx}>
              <h3 className={styles.awardsTitle}>{award.title}</h3>
              {award.lines.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          ))}
        </div>
      )
    }

    if (block.type === 'ol') {
      const listClass = block.className
        ? `${styles.laconismList} ${styles[block.className]}`
        : styles.laconismList

      return (
        <ol className={listClass}>
          {block.items.map((item, idx) => (
            <li key={idx} className={styles.laconismItem}>
              {Array.isArray(item)
                ? item.map((line, i) => <p key={i}>{line}</p>)
                : item}
            </li>
          ))}
        </ol>
      )
    }

    if (block.type === 'quote') {
      return (
        <p className={styles.laconismHighlight}>
          <q>{block.text}</q>{' '}
          <cite className={styles.quoteAuthor}>
            [{block.author}]
          </cite>
        </p>
      )
    }

    if (block.type === 'more') {
      return (
        <MoreButton to={`${base}${block.to}`}>
          {block.label}
        </MoreButton>
      )
    }

    if (block.type === 'video') {
      return (
        <Video
          videoId={block.videoId}
          coverOriginal={block.cover.original}
          cover1024={block.cover.cover1024}
          cover480={block.cover.cover480}
        />
      )
    }

    if (block.type === 'gallery') {
      return isDesktop ? (
        <GallerySwiper slides={presentation.slides} />
      ) : (
        <MobTabSlides slides={presentation.slides} />
      )
    }

    return null
  }

  return (
    <section className={styles.laconism}>
      <h1 className='visuallyHidden'>{content.pageTitle}</h1>

      <div className={styles.laconismWrapper}>
        {content.sections.map((section) => (
          <div className={styles.laconismUnit} key={section.id}>
            <h2 className={styles.laconismTitle}>{section.title}</h2>

            {section.blocks.map((block, i) => (
              <Fragment key={`${section.id}-${block.type}-${i}`}>
                {renderBlock(block)}
              </Fragment>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
