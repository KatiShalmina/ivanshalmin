import styles from './CubePhotos.module.scss'
import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import { cubePhotos } from '../../data/exhibitions/cube-photos'
import BackButton from '../../components/BackButton'

export default function CubePhotos() {
  const [index, setIndex] = useState(-1)

  return (
    <section className={styles.cubePhotos}>
      <BackButton>exhibitions</BackButton>
      <h1 className='visuallyHidden'>Cube Photos</h1>
      <div className={styles.masonry}>
        {cubePhotos.map((p, i) => (
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
        slides={cubePhotos.map(p => ({ src: p.src, alt: p.alt }))}
      />
    </section>
  )
}
