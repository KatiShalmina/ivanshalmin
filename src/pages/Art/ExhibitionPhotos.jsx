import styles from './ExhibitionPhotos.module.scss'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import { EXHIBITION_PHOTOS } from '../../data/exhibitions/exhibitions'
import BackButton from '../../components/BackButton'
import useI18n from '../../hooks/useI18n'

export default function ExhibitionPhotos() {
  const { slug } = useParams()
  const [index, setIndex] = useState(-1)
  const { isRu } = useI18n()

  const photos = EXHIBITION_PHOTOS[slug] ?? []

  if (!photos.length) return <p>Not found</p>

  const mainTitleHidden = isRu ? 'Фотоотчет' : 'All photos'
  const backLabel = isRu ? 'назад к выставке' : 'back to exhibition' 

  return (
    <section className={styles.exhPhotos}>
      <BackButton to={`/paintings/exhibitions/${slug}`}>
        {backLabel}
      </BackButton>
      <h1 className='visuallyHidden'>{mainTitleHidden}</h1>
      <div className={styles.masonry}>
        {photos.map((p, i) => (
          <button
            key={p.src}
            type='button'
            className={styles.item}
            onClick={() => setIndex(i)}
            aria-label={`Open photo ${i + 1}`}
          >
            <img
              src={p.src}
              alt={p.alt}
              loading='lazy'
              decoding='async'
            />
          </button>
        ))}
      </div>
      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={photos.map(p => ({ 
          src: p.src, 
          alt: p.alt 
        }))}
      />
    </section>
  )
}
