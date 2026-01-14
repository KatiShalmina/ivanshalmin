import styles from './Contact.module.scss'
import { interior } from '../../data/contact'
import GallerySwiper from '../../components/GallerySwiper'
import MobTabSlides from '../../components/MobTabSlides'
import useMediaQuery from '../../hooks/useMediaQuery'

export default function Contact() {
  const isDesktop = useMediaQuery('(min-width: 1024px)')

  return (
    <section className={styles.contact}>
      <h1 className={styles.contactTitle}>for sales, <span className='nowrap'>please contact</span></h1>
      <div className={styles.contactLinkWrapper}>
        <a className={styles.contactLink} href='mailto:sasha.shalmina@gmail.com' target='_blank' rel='noopener noreferrer'>
          sasha.shalmina@gmail.com
        </a>
        <a className={styles.contactLink} href='tel:+447472063877'>
          +44 747 206 38 77
        </a>
      </div>
      {isDesktop ? (
        <GallerySwiper slides={interior.slides} />
      ) : (
        <MobTabSlides slides={interior.slides} />
      )}
    </section>
  )
}
