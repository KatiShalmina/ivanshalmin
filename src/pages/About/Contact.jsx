import styles from './Contact.module.scss'
import { interior } from '../../data/contact'
import GallerySwiper from '../../components/GallerySwiper'
import MobTabSlides from '../../components/MobTabSlides'
import useMediaQuery from '../../hooks/useMediaQuery'
import useI18n from '../../hooks/useI18n'

export default function Contact() {
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  const { isRu } = useI18n()

  const mainTitleHidden = isRu ? 'Контакты' : 'Contact'

  const message = isRu ? 'Eсли вы хотите купить картину, пожалуйста, свяжитесь с Сашей Шалминой' : 'For sales, please contact Sasha Shalmina'

  const text = isRu
    ? `
      Мы всегда рады помочь вам выбрать идеальное произведение искусства для вашего интерьера. Просто отправьте нам фотографию помещения, в котором будет висеть картина, и мы подготовим мокапы, показывающие, как работа будет смотреться в интерьере, а также дадим рекомендации по наиболее подходящему цветовому решению и размеру.

      При заказе доступны разные варианты обрамления, включая остекление, позволяющие легко ухаживать за картиной и долго наслаждаться ее яркими, свежими красками.

      Мы можем организовать профессиональную печать и доставку по указанному адресу или проконтролировать производство арт-объекта в удобной для вас типографии или студии в вашем регионе.

      Будем рады ответить на любые ваши вопросы.

      Все цены указаны без учета стоимости обрамления и остекления.
    `
    : `
      We’re always happy to help you select the perfect piece for your interior. Simply send us an image of your space and we can create visual mock-ups showing how the painting would look in situ, along with guidance on the most suitable artwork and ideal size.

      Custom framing and glazing options are available to ensure the finished piece integrates beautifully within your setting.

      We can arrange professional printing and shipping directly to you, or coordinate production with a trusted local printer and framing studio in your area — overseeing the entire process for a seamless, stress-free experience.

      If you have any questions, please don’t hesitate to get in touch.

      Please note that all prices exclude framing and glazing.
    `
  return (
    <section className={styles.contact}>
      <h1 className='visuallyHidden'>{mainTitleHidden}</h1>
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
