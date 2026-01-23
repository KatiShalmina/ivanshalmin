import { useState } from 'react'
import Video from '../../components/Video'
import styles from './Bio.module.scss'
import { PHOTOS, TEXT } from '../../data/bio'
import GalleryLightbox from '../../components/GalleryLightbox'
import MoreButton from '../../components/MoreButton'
import useI18n from '../../hooks/useI18n'

export default function Bio() {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)
  const { lang } = useI18n()

  const text = TEXT?.[lang] ?? TEXT?.en

  const renderBlock = (block, key) => {
    if (block.type === 'p') return <p key={key}>{block.text}</p>

    if (block.type === 'highlight') {
      return <p key={key} className={styles.bioHighlight}>{block.text}</p>
    }

    if (block.type === 'more') {
      return (
        <MoreButton key={key} to={block.to}>
          {block.label}
        </MoreButton>
      )
    }
    return null
  }

  return (
    <section className={styles.bio}>
      <h1 className={styles.bioMainTitle}>{text.pageTitle}</h1>
      <p className={styles.bioSubtitle}>{text.pageSubtitle}</p>
      <div className={styles.videoWrapper}>
        <Video
          videoId='uWJyeehJ29Y'
          coverOriginal='/images/video-covers/original/ivanshalmin.webp'
          cover1024='/images/video-covers/1024/ivanshalmin1024.webp'
          cover480='/images/video-covers/480/ivanshalmin480.webp'
        />
      </div>
      <div className={styles.bioWrapper}>
        <div className={styles.bioText}>
          {text.sections.map((section) => (
            <div className={styles.bioTextUnit} key={section.id}>
              <h2 className={styles.bioTitle}>{section.title}</h2>
              {section.blocks.map((block, i) =>
                (renderBlock(block, `${section.id}-${block.type}-${i}`))
              )}
            </div>
          ))}
        </div>
        <div className={styles.bioGallery}>
          {PHOTOS.gallery.map((img, i) => {
            const img480 = img.srcSet.find(pic => pic.width === 480)

            return (
              <img
                className={styles.bioImage}
                key={img.id}
                src={img480.src}
                srcSet={img.srcSet
                  .map(pic => `${pic.src} ${pic.width}w`)
                  .join(', ')
                }
                sizes='(max-width: 1023px) 360px, 720px'
                alt={`${text.pageTitle} photo ${img.id}`}
                onClick={() => {
                  setIndex(i)
                  setOpen(true)
                }}
              />
            )
          })}
        </div>
      </div>
      <GalleryLightbox
        open={open}
        index={index}
        onClose={() => setOpen(false)}
        gallery={PHOTOS.gallery}
      />
    </section>
  )
}
