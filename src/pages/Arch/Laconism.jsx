import styles from './Laconism.module.scss'
import Video from '../../components/Video.jsx'
import { presentation } from '../../data/presentation.js'
import GallerySwiper from '../../components/GallerySwiper.jsx'

export default function Laconism() {
  return (
    <section className={styles.laconism}>
      <h1 className={styles.pageTitle}>architecture is an art, <span className='nowrap'>not a business</span></h1>
      <GallerySwiper
        slides={presentation.slides}
      />
      <div className={styles.shortWrapper}>
        <div className={styles.shortUnit}>
          <h2 className={styles.shortTitle}>laconism <span className='nowrap'>[in short]</span></h2>
          <ul className={styles.shortList}>
            <li className={styles.shortItem}>
              <p>Style = the art of living.</p>
              <p>Fashion = the search of a new style.</p>
            </li>
            <li className={styles.shortItem}>
              <p>Architecture = functionality + strength + beauty. [Vitruvius]</p>
              <p>Architectural space = the hole in the centre of a ring doughnut.</p>
            </li>
            <li className={styles.shortItem}>
              <p>Laconism [as a style] = living within what is necessarily sufficient.</p>
              <p>Laconism [in architecture] = the necessary sufficiency of functionality + strength + beauty.</p>
            </li>
            <li className={styles.shortItem}>
              <p>Painting = the eruption or outburst of an artist’s emotions onto a two dimensional plane.</p>
              <p>Sculpture = the eruption of an artist’s emotions onto a three dimensional form.</p>
            </li>
          </ul>
        </div>
        <div className={styles.shortUnit}>
          <h2 className={styles.shortTitle}>the architect and <span className='nowrap'>the artist</span></h2>
          <p>All our lives, we surround ourselves with walls. These very walls ruin our lives but at the same time, we cannot live without them.</p>
          <p>If the main object of visual art is to communicate through imagery, then the main object of architecture is to create spatial imagery that supports the activities of its inhabitants.</p>
          <p>The architect creates spaces through building walls. When the artist paints on these walls, he creates his own space. In this way, the artist breaks the walls.</p>
        </div>
        <div className={styles.shortUnit}>
          <h2 className={styles.shortTitle}>digital paintings</h2>
          <p>This is the emotional outburst of an architect onto a two dimensional plane as frustrated protection from the two-legged brainless creatures that are everywhere. They make our heads explode because they always want to ruin everything with self indulgence, as though they are in awe of themselves.</p>
          <p>If you can’t build, you should write. [A. Gutnov, architect]</p>
          <p>If you don’t want to have a heart attack or go insane, you should paint. Paper is patient, the canvas can take anything, For me, there is no difference between figurative and abstract art.</p>
          <p>The art is either there or it is not.</p>
        </div>
      </div>
      <div className={styles.videoWrapper}>
        <Video
          videoId='kUtD1xkwEjI'
          title='laconism'
          coverOriginal='/images/video-covers/original/laconism-movie.webp'
          cover480='/images/video-covers/480/laconism-movie480.webp'
        />
        <Video
          videoId='tr66ctBXim0'
          title='architecture'
          coverOriginal='/images/video-covers/original/laconism-lecture.webp'
          cover480='/images/video-covers/480/laconism-lecture480.webp'
        />
        <Video
          videoId='iheO9xoTCdc'
          title='novosibirsk'
          coverOriginal='/images/video-covers/original/nsk.webp'
          cover480='/images/video-covers/480/nsk480.webp'
        />
        <Video
          videoId='zBI22kyMwNY'
          title='cube.moscow 1'
          coverOriginal='/images/video-covers/original/cube-1.webp'
          cover480='/images/video-covers/480/cube480-1.webp'
        />
        <Video
          videoId='AiCg08FO8AY'
          title='cube.moscow 2'
          coverOriginal='/images/video-covers/original/cube-2.webp'
          cover480='/images/video-covers/480/cube480-2.webp'
        />
        <Video
          videoId='uWJyeehJ29Y'
          title='ivan shalmin'
          coverOriginal='/images/video-covers/original/ivanshalmin.webp'
          cover480='/images/video-covers/480/ivanshalmin480.webp'
        />
      </div>
    </section>
  )
}