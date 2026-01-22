import { useState } from 'react'
import Video from '../../components/Video'
import styles from './Bio.module.scss'
import { bio } from '../../data/bio'
import GalleryLightbox from '../../components/GalleryLightbox'
import MoreButton from '../../components/MoreButton'
import useI18n from '../../hooks/useI18n'

export default function Bio() {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)
  const { isRu, lang } = useI18n()

  return (
    <section className={styles.bio}>
      <h1 className={styles.bioMainTitle}>ivan shalmin</h1>
      <p className={styles.bioSubtitle}>18.06.1959—17.07.2022</p>
      <div className={styles.videoWrapper}>
        <Video
          videoId='uWJyeehJ29Y'
          coverOriginal='/images/video-covers/original/ivanshalmin.webp'
          cover1024='/images/video-covers/1024/ivanshalmin1024.webp'
          cover480='/images/video-covers/480/ivanshalmin480.webp'
        />
      </div>
      <div className={styles.bioWrapper}>
        <div className={styles.bioTextUnit}>
          <h2 className={styles.bioTitle}>university</h2>
          <p>Born on 18 June 1959 in Novosibirsk, into a family of geologists. Graduated from the Novosibirsk Engineering and Construction Institute (NISU), Faculty of Architecture, Department of Urban Planning.</p>
          <blockquote>
            <p>Ivan Shalmin: We were taught primarily academic drawing and painting skills. This was done in order to develop motor skills and form a connection between what you have in mind and the hand that embodies your idea.</p>
          </blockquote>
          <p>In the 1980s, Ivan was an active participant in the Novosibirsk branch of the paper architecture movement. His works have travelled around the world and have been exhibited in Amsterdam, Paris, London, Milan, Berlin, Cologne, Stockholm, Frankfurt, Brussels, Zurich, New Orleans, Austin, Jerusalem, Helsinki and other cities. Two of them are now part of the collection of The Museum of Modern Art (MoMA) in New York.</p>
          <blockquote>
            <p>We were not allowed to build. We wrote books, defended our doctoral theses, and ‘played’ in conceptual competitions announced by The Japan Architect magazine.</p>
            <p>We couldn’t even imagine that one day we would be able to build our own projects, so we put our thoughts on paper in the form of architectural symbols and images with the aim of awakening a faceless environment filled with the soviet mass culture.</p>
          </blockquote>
          <MoreButton 
            to='/architecture/publications/paper'
          >
            more about paper architecture
          </MoreButton>
        </div>
        <div className={styles.bioGallery}>
          {bio.gallery.map((img, i) => {
            const img480 = img.srcSet.find(pic => pic.width === 480)

            return (
              <img
                className={styles.bioImage}
                key={img.id}
                src={img480.src}
                srcSet={img.srcSet
                  .map(pic => `${pic.src} ${pic.width}w`)
                  .join(', ')
                }
                sizes='(max-width: 1023px) 360px, 720px'
                alt={`${bio.title} photo ${img.id}`}
                onClick={() => {
                  setIndex(i)
                  setOpen(true)
                }}
              />
            )
          })}
        </div>
        <div className={styles.bioTextUnit}>
          <h2 className={styles.bioTitle}>laconism</h2>
          <p>Ivan designed and implemented about 100 projects during his lifetime, the smallest of which was 16 square metres in size, and the largest 45 000 square metres. The construction of each project was accompanied by strict author supervision. He controlled everything from the construction of the foundation to the elaboration of small interior details.</p>
          <blockquote>
            <p>An architectural project is just an idea, an illusion of a project that still needs to be turned into reality. An architect is always both a composer and a conductor. It’s not enough to come up with a concept and agree on it with the client: if you don’t conduct the whole process, someone is bound to mess up and play out of tune.</p>
            <p>Builders are like-minded people. Together with the architect, who guides their craftsmanship, they create the art of architecture.</p>
          </blockquote>
          <p>Ivan considered architecture to be the main art form. He defined his style as laconism — the art of necessary sufficiency.</p>
          <blockquote>
            <p>For me, architecture is like a hole in a bagel. It is a space for human activity, created with the help of walls and other architectural elements. Everything superfluous is cut off from the customer’s ‘wishes’, leaving only what is necessary, without which he cannot live.</p>
            <p>The architect’s task is to find the only correct solution, which the person himself does not yet realize. The client is always wrong, which is why they turned to a professional for help.</p>
          </blockquote>
          <p>Ivan distinguished three types of spatial organisation: external — mountain or exterior, internal — cave or interior, intermediate — forest or surroundings. The relationship and interconnection between these spaces create a unified architectural image in which, thanks to the use of certain materials and the play of light and reflections, the boundaries between the external and internal dissolve, the surroundings appear to be inside, and the person is outside, but at the same time protected by the wall.</p>
          <blockquote>
            <p>Space cannot exist without walls. But in reality, walls exist only in our minds. They are obstacles that we create for ourselves and then heroically overcome.</p>
            <p>My creativity is both a struggle against walls and a wall in life. A bad painting or sculpture can be put away in a closet, a film can be ignored, music can be ignored, but architecture cannot be hidden because we live in it.</p>
          </blockquote>
          <p>Ivan often rethought and questioned standard architectural solutions. He was not afraid to invent new unique elements where necessary, from building components and structures to furniture and interior items. He paid special attention to lighting design. He developed not only the concept, but also the lighting fixtures themselves, which included the careful selection of materials, equipment, small details, and complete control over production.</p>
          <blockquote>
            <p>For some reason, it is now commonly believed that architects only design the ‘box’ and then invite designers, furniture makers and decorators to complete the project. But it is impossible to achieve the right perception and execute part of a work well if you do not understand and love it as a whole.</p>
            <p>Antoni Gaudí and Fyodor Schechtel designed and thought through everything in their projects, right down to the door handles.</p>
          </blockquote>
          <MoreButton 
            to='/architecture/projects'
          >
            more about projects
          </MoreButton>
        </div>
        <div className={styles.bioTextUnit}>
          <h2 className={styles.bioTitle}>digital paintings</h2>
          <p>In 2016, while searching for adequate solutions for interior decoration, Ivan began painting digital pictures. This exploration resulted in an incredible creative explosion and his establishment as an artist.</p>
          <blockquote>
            <p>The display is a palette where colours are mixed, the computer mouse replaces the brush, and the printer applies the paint to the canvas.</p>
            <p>In my work, I use all the techniques and principles of traditional painting, but I add modern technologies that allow me to make the colour cleaner and deeper and to convey the entire range of shades available to our eyes as accurately as possible.</p>
          </blockquote>
          <p>In 2020, Ivan’s first solo exhibitions were held in Moscow and Novosibirsk, curated by art expert and critic, responsible for the latest trends and developments at the Tretiyakov Art Gallery in Moscow, Kirill Svetlyakov.</p>
          <blockquote>
            <p>Painting — is the outburst of an artist’s emotions onto a two dimensional plane. A painting destroys the wall on which it hangs, creating a new world within it.</p>
            <p>A classic example of this is Leonardo da Vinci’s ‘The Last Supper’, where the perspective of the hall continues into the canvas itself, thus breaking the plane of the wall and immersing us in the infinity of contemplation.</p>
          </blockquote>
          <p>In 2021, his digital canvases were exhibited at the Saatchi Gallery in London, and in 2022 at the Passenger Terminal contemporary art gallery in Amsterdam and the Louvre in Paris. During the last seven years of his life, Ivan created more than 80 paintings. He believed that art, having played with various concepts, is now returning to its traditional aesthetic origins.</p>
          <blockquote>
            <p>For me, there is no difference between representational and abstract art. Real art is when you look at a work and don’t know how it was made, how the artist or architect, using only images and space, evokes these feelings in you.</p>
          </blockquote>
          <MoreButton 
            to='/paintings'
          >
            more about paintings
          </MoreButton>
        </div>
      </div>
      <GalleryLightbox
        open={open}
        index={index}
        onClose={() => setOpen(false)}
        gallery={bio.gallery}
      />
    </section>
  )
}
