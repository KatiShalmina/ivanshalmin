import { useState } from 'react'
import { useParams } from 'react-router-dom'
import GalleryLightbox from '../../components/GalleryLightbox'
import { types } from '../../data/object-types'
import styles from './ObjectType.module.scss'
import BackButton from '../../components/BackButton'

export default function ObjectType() {
  const { slug } = useParams();
  const type = types.find(o => o.slug === slug);

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  if (!type) return <p>Not found</p>;

  return (
    <section className={styles.type}>
      <BackButton>all objects</BackButton>
      <h1 className={styles.typeTitle}>{type.title}</h1>
      <p className={styles.typeSubtitle}>{type.subtitle}</p>
      <div className={styles.typeDescription}>
        {type.description
          .trim()
          .split("\n")
          .map((line, i) => (
            <p key={i}>{line.trim()}</p>
          ))}
      </div>
      <p className={styles.typeTagline}>{type.tagline}</p>
      <div className={styles.typeGallery}>
        {type.gallery.map((img, i) => (
          <img
            className={styles.typeImage}
            key={img.id}
            src={img.srcSet.find(pic => pic.width === 1024).src}
            srcSet={img.srcSet.map(pic => `${pic.src} ${pic.width}w`).join(', ')}
            sizes='(max-width: 1023px) 100vw, 50vw'
            alt={`${type.title} photo ${img.id}`}
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          />
        ))}
      </div>
      <div className={styles.typeText}>
        {type.text
          .trim()
          .split("\n\n")
          .map((paragraph, i) => (
            <p className={styles.typeParagraph} key={i}>{paragraph.trim()}</p>
          ))
        }
      </div>
      <GalleryLightbox
        open={open}
        index={index}
        onClose={() => setOpen(false)}
        gallery={type.gallery}
        title={type.title}
      />
    </section>
  );
}