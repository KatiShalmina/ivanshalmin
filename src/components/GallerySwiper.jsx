import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Scrollbar, A11y } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'

import styles from './GallerySwiper.module.scss'

export default function GallerySwiper({ slides }) {
  return (
    <div className={styles.galleryWrapper}>
      <Swiper
        modules={[Navigation, Scrollbar, A11y]}
        navigation
        scrollbar={{ draggable: true }}
        spaceBetween={0}
        slidesPerView={1}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <img
              src={slide.src}
              srcSet={slide.srcSet}
              sizes='100vw'
              alt={slide.alt || ''}
              className={styles.slideImage}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}