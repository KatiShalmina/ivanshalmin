import { useState } from 'react'
import { useParams } from 'react-router-dom'
import GalleryLightbox from '../../components/GalleryLightbox'
import { types } from '../../data/projects/project-types'
import styles from './ProjectType.module.scss'
import BackButton from '../../components/BackButton'
import MoreButton from '../../components/MoreButton'
import Video from '../../components/Video'

export default function ProjectType() {
  const { slug } = useParams()
  const type = types.find(p => p.slug === slug)

  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  if (!type) return <p>Not found</p>

  return (
    <section className={styles.type}>
      <BackButton>all projects</BackButton>
      <h1 className={styles.typeTitle}>{type.title}</h1>
      <p className={styles.typeSubtitle}>{type.subtitle}</p>
      <div className={styles.typeDescription}>
        {type.description
          .trim()
          .split('\n')
          .map((line, i) => (
            <p key={i}>{line.trim()}</p>
          ))}
      </div>
      <div className={styles.typeTagline}>
        {type.tagline
          .trim()
          .split('\n')
          .map((line, i) => (
            <p key={i}>{line.trim()}</p>
          ))
        }
      </div>
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
              alt={`${type.title} photo ${img.id}`}
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
              title={type.video.title}
              coverOriginal={type.video.coverOriginal}
              cover1024={type.video.cover1024}
              cover480={type.video.cover480}
            />
          )}
        </div>
      </div>
      <div className={styles.textWrapper}>
        <div className={styles.typeText}>
          {type.text
            .trim()
            .split('\n\n')
            .map((paragraph, i) => (
              <p className={styles.typeParagraph} key={i}>
                {paragraph.trim()}
              </p>
            ))
          }
        </div>
        <MoreButton to={type.more}>find out more</MoreButton>
      </div>
      <GalleryLightbox
        open={open}
        index={index}
        onClose={() => setOpen(false)}
        gallery={type.gallery}
        title={type.title}
      />
    </section>
  )
}
