import styles from './Contact.module.scss'
import { interior } from '../../data/contact'
import GallerySwiper from '../../components/GallerySwiper'
import MobTabSlides from '../../components/MobTabSlides'
import useMediaQuery from '../../hooks/useMediaQuery'
import useI18n from '../../hooks/useI18n'

export default function Contact() {
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  const { isRu } = useI18n()

  const message = isRu ? 'Eсли вы хотите купить картину, пожалуйста, свяжитесь с Сашей Шалминой' : 'For sales, please contact Sasha Shalmina'

  const text = isRu
    ? `
      При покупке вы получаете работу в высоком разрешении, подходящем для крупноформатной печати и цифрового использования.

      Мы будем рады помочь вам с выбором картины для вашего интерьера.
    `
    : `
      Upon purchase, you receive the artwork in high resolution, suitable for large-format printing and digital use.

      We will be happy to help you choose a painting for your interior.
    `

  return (
    <section className={styles.contact}>
      <h1 className='visuallyHidden'>Contact</h1>
      <p className={styles.contactMessage}>{message}</p>
      <div className={styles.contactLinkWrapper}>
        <a className={styles.contactLink} href='mailto:sasha.shalmina@gmail.com' target='_blank' rel='noopener noreferrer'>
          sasha.shalmina@gmail.com
        </a>
        <a className={styles.contactLink} href='tel:+447472063877'>
          +44 747 206 38 77
        </a>
      </div>
      <div className={styles.contactText}>
        {text
          .trim()
          .split(/\n\s*\n/)
          .map((paragraph, i) => (
            <p key={i}>{paragraph.trim()}</p>
          ))}
      </div>
      {isDesktop ? (
        <GallerySwiper slides={interior.slides} />
      ) : (
        <MobTabSlides slides={interior.slides} />
      )}
    </section>
  )
}
