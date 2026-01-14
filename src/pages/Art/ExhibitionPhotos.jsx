import styles from './ExhibitionPhotos.module.scss'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import { EXHIBITION_PHOTOS } from '../../data/exhibitions/exhibition-photos'
import BackButton from '../../components/BackButton'

export default function ExhibitionPhotos() {
  const { slug } = useParams()
  const [index, setIndex] = useState(-1)

  const exhibition = EXHIBITION_PHOTOS[slug]

  if (!exhibition) return <p>Not found</p>

  return (
    <section className={styles.exhPhotos}>
      <BackButton>all exhibitions</BackButton>
      <h1 className='visuallyHidden'>More photos</h1>
      <div className={styles.masonry}>
        {exhibition.photos.map((p, i) => (
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
        slides={exhibition.photos.map(p => ({ 
          src: p.src, 
          alt: p.alt 
        }))}
      />
    </section>
  )
}
