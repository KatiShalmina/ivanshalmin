import { useState, useEffect } from 'react';
import Lightbox from 'yet-another-react-lightbox'
import Inline from 'yet-another-react-lightbox/plugins/inline'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import 'yet-another-react-lightbox/styles.css'
import 'yet-another-react-lightbox/plugins/thumbnails.css'

export default function GalleryWithCover({ slides, title, className }) {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [refresh, setRefresh] = useState(0)

  const toggleOpen = (state) => () => setOpen(state)

  const updateIndex = (when) => ({ index: current }) => {
    if (when === open) setIndex(current)
  }

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 800px)')

    const update = () => setIsMobile(mq.matches)

    update()
    mq.addEventListener('change', update)

    return () => mq.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    const handleResize = () => setRefresh(prev => prev + 1)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <div className={className}>
        <Lightbox
          key={refresh}
          index={index}
          slides={slides.map(img => ({
            src: img.src,
            srcSet: img.srcSet,
            thumbnail: img.thumbnail,
            thumbSet: img.thumbSet,
            alt: `${title} slide ${img.id}`,
          }))}
          plugins={[Inline]}
          on={{
            view: updateIndex(false),
            click: toggleOpen(true),
          }}
          render={{
            buttonPrev: isMobile ? () => null : undefined,
            buttonNext: isMobile ? () => null : undefined,
          }}
          carousel={{
            padding: 0,
            spacing: 0,
            imageFit: 'cover',
          }}
          inline={{
            style: {
              width: '100%',
              maxWidth: '1024px',
              aspectRatio: '3 / 2',
              margin: '0',
            },
          }}
        />
      </div>

      <Lightbox
        open={open}
        close={toggleOpen(false)}
        index={index}
        slides={slides}
        on={{ view: updateIndex(true) }}
        plugins={[Thumbnails]}
        animation={{ fade: 0 }}
        controller={{
          closeOnPullDown: true,
          closeOnBackdropClick: true,
        }}
        render={{
          buttonPrev: isMobile ? () => null : undefined,
          buttonNext: isMobile ? () => null : undefined,
        }}
        thumbnails={{
          position: 'bottom',
          gap: 8,
          width: 100,
          height: 70,
        }}
      />
    </>
  );
}