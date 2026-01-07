import styles from './MobTabSlides.module.scss'

export default function MobTabSlides({ slides }) {
  return (
    <div className={styles.mobileStack}>
      {slides.map((slide) => (
        <picture key={slide.id}>
          <source
            srcSet={slide.srcSet}
            sizes='100vw'
          />
          <img
            src={slide.src}
            alt={slide.alt || ''}
            className={styles.image}
            loading='lazy'
            decoding='async'
          />
        </picture>
      ))}
    </div>
  );
}
