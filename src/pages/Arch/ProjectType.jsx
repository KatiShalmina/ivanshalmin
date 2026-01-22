import { useState } from 'react'
import { useParams } from 'react-router-dom'
import GalleryLightbox from '../../components/GalleryLightbox'
import { types } from '../../data/projects/project-types'
import styles from './ProjectType.module.scss'
import BackButton from '../../components/BackButton'
import MoreButton from '../../components/MoreButton'
import Video from '../../components/Video'
import useI18n from '../../hooks/useI18n'

export default function ProjectType() {
  const { t, isRu } = useI18n()

  const { slug } = useParams()
  const type = types.find(p => p.slug === slug)

  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  if (!type) return <p>Not found</p>

  const tTitle = t(type.title)
  const tSubtitle = t(type.subtitle)
  const tDescription = t(type.description)
  const tTagline = t(type.tagline)
  const tText = t(type.text)

  const moreLabel = isRu ? 'узнать больше' : 'find out more'
  const backLabel = isRu ? 'все проекты' : 'all projects'

  return (
    <section className={styles.type}>
      <BackButton to='/architecture/projects'>
        {backLabel}        
      </BackButton>
      <h1 className={styles.typeTitle}>{tTitle}</h1>
      <p className={styles.typeSubtitle}>{tSubtitle}</p>
      <div className={styles.typeDescription}>
        {tDescription
          .trim()
          .split('\n')
          .map((line, i) => (
            <p key={i}>{line.trim()}</p>
          ))}
      </div>
      <p className={styles.typeTagline}>{tTagline}</p>
      <div className={styles.typeGallery}>
        {type.gallery.map((img, i) => {
          const img480 = img.srcSet.find(pic => pic.width === 480)

          return (
            <img
              className={styles.typeImage}
              key={img.id}
              src={img480.src}
              srcSet={img.srcSet
                .map(pic => `${pic.src} ${pic.width}w`)
                .join(', ')
              }
              sizes='(max-width: 1023px) 360px, 720px'
              alt={`${tTitle} photo ${img.id}`}
              onClick={() => {
                setIndex(i)
                setOpen(true)
              }}
            />
          )
        })}
        <div className={styles.typeVideo}>
          {type.video && (
            <Video
              videoId={type.video.id}
              coverOriginal={type.video.coverOriginal}
              cover1024={type.video.cover1024}
              cover480={type.video.cover480}
            />
          )}
        </div>
      </div>
      <div className={styles.textWrapper}>
        <div className={styles.typeText}>
          {tText
            .trim()
            .split('\n\n')
            .map((paragraph, i) => (
              <p className={styles.typeParagraph} key={i}>
                {paragraph.trim()}
              </p>
            ))
          }
        </div>
        <MoreButton to={type.more}>
          {moreLabel}
        </MoreButton>
      </div>
      <GalleryLightbox
        open={open}
        index={index}
        onClose={() => setOpen(false)}
        gallery={type.gallery}
        title={tTitle}
      />
    </section>
  )
}
