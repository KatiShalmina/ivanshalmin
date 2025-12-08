import Lightbox from 'yet-another-react-lightbox'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import 'yet-another-react-lightbox/styles.css'
import 'yet-another-react-lightbox/plugins/thumbnails.css'

export default function GalleryLightbox({ open, index, onClose, gallery, title }) {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024

  return (
    <Lightbox
      open={open}
      index={index}
      close={onClose}
      slides={gallery.map(img => ({
        ...img,
        alt: `${title} photo ${img.id}`,
      }))}
      plugins={isMobile ? [] : [Thumbnails]}
      carousel={{
        finite: false,
        preload: 2,
      }}
      thumbnails={{
        position: 'bottom',
        border: 0,
        gap: 0,
        width: 160,
        height: 100,
      }}
    />
  );
}