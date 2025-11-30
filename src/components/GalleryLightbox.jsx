import Lightbox from 'yet-another-react-lightbox';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

export default function GalleryLightbox({ open, index, onClose, gallery, slug }) {
  return (
    <Lightbox
      open={open}
      index={index}
      close={onClose}
      slides={gallery.map(img => ({
        src: img.src,
        srcSet: img.srcSet,
        thumbnail: img.thumbnail,
        thumbSet: img.thumbSet,
        alt: `${slug} photo ${img.id}`,
      }))}
      plugins={[Thumbnails]}
      carousel={{
        finite: false,
        preload: 2,
      }}
      thumbnails={{
        position: 'bottom',
        border: 0,
        gap: 8,
        width: 100,
        height: 70,
      }}
    />
  );
}