import styles from './Laconism.module.scss'
import Video from '../../components/Video.jsx'
import { presentation } from '../../data/presentation.js'
import GallerySwiper from '../../components/GallerySwiper.jsx'
import useMediaQuery from '../../hooks/useMediaQuery'
import MobTabSlides from '../../components/MobTabSlides'
import MoreButton from '../../components/MoreButton.jsx'

export default function Laconism() {
  const isDesktop = useMediaQuery('(min-width: 1024px)')

  return (
    <section className={styles.laconism}>
      <h1 className='visuallyHidden'>Laconism</h1>
      <div className={styles.laconismWrapper}>
        <div className={styles.laconismUnit}>
          <h2 className={styles.laconismTitle}>awards</h2>
          <div className={styles.awardsWrapper}>
            <div className={styles.awardsUnit}>
              <h2 className={styles.awardsTitle}>international architectural festival ‘zodchestvo’ 2020</h2>
              <p>laureate</p>
            </div>
            <div className={styles.awardsUnit}>
              <h2 className={styles.awardsTitle}>international festival of architecture and interior design</h2>
              <p>2019: third place</p>
              <p>2018: first place</p>
              <p>2009: first place</p>
              <p>2008: first place</p>
              <p>2007: first place</p>
              <p>2006: second place</p>
              <p>2005: second place</p>
              <p>2003: first place, third place</p>
              <p>2002: first place</p>
              <p>2001: third place</p>
            </div>
            <div className={styles.awardsUnit}>
              <h2 className={styles.awardsTitle}>a-z of rural construction 2003</h2>
              <p>first place</p>
            </div>
          </div>
        </div>
        <div className={styles.laconismUnit}>
          <h2 className={styles.laconismTitle}>the beginning</h2>
          <p>My parents were geologists, so they taught me to love nature from early childhood. Every summer, my older brother and I went to our dacha, 60 km away from Novosibirsk, down the Ob River, where we could do whatever we wanted, under granddad’s supervision. Back then we built shelters and huts, made of branches and twigs. This was our first experience of construction.</p>
          <p className={styles.laconismHighlight}>Even then we understood that it’s very difficult to build anything without a sketch. This was our first experience of understanding design and construction technology.</p>
          <p>The structures were as it was possible for children to build. Our first shelter [on third attempt] was 4 meters tall.</p>
          <p>My first teacher was my older brother [3 years older that me]. In his childhood he drew a lot, whilst I preferred to make 3D objects out of modelling clay.</p>
        </div>
        <div className={styles.laconismUnit}>
          <h2 className={styles.laconismTitle}>preparation</h2>
          <p>And so, without hesitation I followed my brother to preparatory drawing lessons before university.</p>
          <p>I remember the first lecture — ‘Introduction to architectural design’, by Nicolay Kuzmin [an associate of architects Moisei Ginzburg and El Lissitzky]. He spoke a lot about architectural imagery and made brilliant sketches of landscapes using chalk. He explained the origin of dome cathedrals, and the hierarchy of the city skyline.</p>
          <p className={styles.laconismHighlight}>But the most important phrase, that modern architecture <q>should open like a flower,</q> although met with many smiles was not yet understood by the audience. Only 40 years later did I begin to fully comprehend the meaning of that phrase.</p>
        </div>
        <div className={styles.laconismUnit}>
          <h2 className={styles.laconismTitle}>university</h2>
          <p>Up until third year, I gained a lot of knowledge from my peers as well as my tutors. They always won in debates. But soon our interests diverged and I got absorbed into mathematical models for town planning.</p>
          <p className={styles.laconismHighlight}>To me it became certain that the city, much like a living organism is developing according to its own rules.</p>
          <p> This is partially my mother’s merit — back then she was developing regional, geographic and economic predictions for the USSR. My dissertation [and 60% of my PHD — tutored by A.E. Gutnov] was called ‘The general patterns of territorial expansion of major cities’.</p>
          <p>We could never imagine that we would eventually gain the ability to build and materialize our own projects. So for the time being, we focused on satisfying our curiosity at the government’s expense [a dissertation].</p>
          <p>In order to liven up the dull, grey soviet environment, we took part in many architectural competitions, including those hosted by Japan. This was our training in conceptual thinking. Sadly, the term ‘concept’ is so overused today, that it has lost its original meaning.</p>
        </div>
        <div className={styles.laconismUnit}>
          <h2 className={styles.laconismTitle}>a conceptual joke</h2>
          <p>Vasya is hideously drunk. Screaming and shouting, he barges back into his own home. His wife greets him at the door: ‘Vasiya! Dearest! What happened? Are you ok? Wait a second, I’ll bring you a bucket. I’m coming! I’m coming!’ She runs off.</p>
          <p className={styles.laconismHighlight}>Vasya — shouting after her: ‘Darling, the concept has changed! I’ve shat myself.’</p>
        </div>
        <div className={styles.laconismUnit}>
          <h2 className={styles.laconismTitle}>modern art</h2>
          <p>Modern artists have managed to recreate this joke as cans of faeces and bananas taped to the wall, the list goes on… The concept of a gesture is indeed very profound.</p>
          <p>Only in architecture it’s impossible to do anything using mere gestures. You can’t exactly install a dummy to keep declaring a genius concept of a poorly designed structure instead of actually building something.</p>
        </div>
        <div className={styles.laconismUnit}>
          <h2 className={styles.laconismTitle}>a concept</h2>
          <p className={styles.laconismHighlight}>A concept is a system of understanding or a system used to solve a design problem. In architecture — it’s more of an additional limitation, that aids the architect to formulate and execute his idea more clearly.</p>
          <p>It’s starting to look like people have forgotten the difference between good and bad. We are talking about the aesthetic beginning of all art as a secondary habitat, created by man.</p>
        </div>
        <div className={styles.laconismUnit}>
          <h2 className={styles.laconismTitle}>architecture</h2>
          <p>So what is architecture?</p>
          <p>The art and the science of building.</p>
          <p className={styles.laconismHighlight}>
            <q>Functionality, durability, beauty.</q> <cite className={styles.quoteAuthor}>[Vitruvius]</cite>
          </p>
          <p>What then is the main characteristic of architecture?</p>
          <p className={styles.laconismHighlight}>Architecture is the hole within a bagel.</p>
          <p>As in the space that we create using walls and other architectural elements, to house all activities of man and society.</p>
        </div>
        <div className={styles.laconismUnit}>
          <h2 className={styles.laconismTitle}>three notes</h2>
          <p>Since the beginning of time, the architect has only had three notes or three types of space:</p>
          <ol className={styles.laconismList}>
            <li className={styles.laconismItem}>
              External — a mountain — exterior.</li>
            <li className={styles.laconismItem}>
              Internal — a cave — interior.</li>
            <li className={styles.laconismItem}>
              Interim — a forest — surroundings.</li>
          </ol>
          <p className={styles.laconismHighlight}>The proportional relationship between these spaces, as well as the connections that unite them is what creates architectural imagery. This imagery can conjure up emotions and feelings.</p>
          <p>Like in painting, where colour combinations are synthesized into different compositions to create imagery.</p>
          <p>Propylaeum [2010]. The intersection of two volumes of different textures blurs the boundaries between the interior and the exterior. The walls dissolve...</p>
          <MoreButton to='/architecture/projects/propylaeum'>more about Propylaeum</MoreButton>
        </div>
        <div className={styles.laconismUnit}>
          <h2 className={styles.laconismTitle}>definitions</h2>
          <p>Painting — is the communication of imagery through the application of paint to a surface. Once we omit the workmanship aspect from our definitions:</p>
          <p>Painting — is the outburst of an artist’s emotions onto a two dimensional plane.</p>
          <p>Sculpture — is the outburst of an artist’s emotions onto a three dimensional form.</p>
          <p>Architecture — is the outburst of an architect’s emotions onto the walls that form space.</p>
        </div>
        <div className={styles.laconismUnit}>
          <h2 className={styles.laconismTitle}>space</h2>
          <p>So what is that we encounter most frequently on a day to day basis? Painting?</p>
          <p>No. You can refuse to look at a bad painting and you can certainly hide a bad piece of sculpture. But you can’t hide architecture, because we inhabit it. This is why architecture is the mother of art.</p>
          <p className={styles.laconismHighlight}>Let’s assume that the bagel got eaten. What happens to space then? It dissolves into nothingness. This means that space can not exist without its walls.</p>
        </div>
        <div className={styles.laconismUnit}>
          <h2 className={styles.laconismTitle}>the wall</h2>
          <p>The wall is the most interchangeable element of architecture. As it’s moved through thousands of year, it has changed a lot. Today, it’s impossible to build a monolith wall thicker that necessary [economics].</p>
          <p>The wall became thinner and got separated out into structure, insulation and finishes. It became less durable. Modern materials, concrete for example, will last for 100—500 years, the other layers — insulation and cladding will perish after 50—75 years. Metal ages over 100—200 years. Glass starts to run, even if it’s been toughened. It will last 150—400 years, not to mention all the fillers that it contains. Wood will last 25—50 years.</p>
          <p className={styles.laconismHighlight}>In the modern world, eternity has taken on a new meaning. Eternity is now equal to present day requirements. In comparison to ancient masterpieces, architecture has become disposable.</p>
          <p>It does not meant that the fairy tale straw house built by the three little pigs has taken the world of architecture by storm. Nor does it mean that people will go to live in storage boxes. Either way, 200 years — is a substantial amount of time for future generations to rethink.</p>
          <p>We are talking about being true to architecture, to her spatial structure that has to meet the needs of her inhabitants.</p>
        </div>
        <div className={styles.laconismUnit}>
          <h2 className={styles.laconismTitle}>trends</h2>
          <p>Top 10 global trends in design and architecture 2020—2021:</p>
          <ol className={styles.laconismList}>
            <li className={styles.laconismItem}>
              Green design and sustainable technologies. [These are just materials.]</li>
            <li className={styles.laconismItem}>
              Smart and automated houses. [This is technological progress, not architecture.]</li>
            <li className={styles.laconismItem}>
              The kitchen as the main course. [Not new — F.L. Wright.]</li>
            <li className={styles.laconismItem}>
              The bathroom as a space for relaxation. [Already done — in palaces.]</li>
            <li className={styles.laconismItem}>
              The development of an industrial style. [This is plain stupidity, not a style.]</li>
            <li className={styles.laconismItem}>
              A new minimalism. [Laconism.]</li>
            <li className={styles.laconismItem}>
              Reformation and restoration of historic and industrial buildings. [Not new — loft.]</li>
            <li className={styles.laconismItem}>
              Less noise, more light. [Not new.]</li>
            <li className={styles.laconismItem}>
              Development of outdoor spaces, landscaping. [Interim spaces have always been there.]</li>
            <li className={styles.laconismItem}>
              The passive house. [Not new — energy efficiency.]</li>
          </ol>
        </div>
        <div className={styles.laconismUnit}>
          <h2 className={styles.laconismTitle}>architecture, fashion, style</h2>
          <p className={styles.laconismHighlight}>
            <q>The devil showed us fashion and went down under, lashing.</q> <cite className={styles.quoteAuthor}><span className='nowrap'>[my grandma,</span> may she rest in peace]</cite>
          </p>
          <p>Fashion is a capricious child, an unconscious desire exclaiming ‘I want!’ Her aim is nihilistic — to change an already-existing and well-established style, just for the hell of it.</p>
          <p>Architecture as an art from always has a specific style. This style forms the art of living. If the author starts to unconsciously juggle and play with too many fashionable elements, his work becomes ‘overstyled’ [and is often a terrible sight]. However, this ‘overstyle’ has the capacity [once it sheds all the unnecessary] to turn into a completely new style.</p>
          <p>In this way, style can’t exist without fashion [but fashion always ruins it].</p>
          <p>Fashion is the search for a new style.</p>
        </div>
        <div className={styles.laconismUnit}>
          <h2 className={styles.laconismTitle}>‘overstyle’ in architecture</h2>
          <p>Why is ‘overstyle’ so bad in architecture?</p>
          <p className={styles.laconismHighlight}>A building is so much more than just a seasonal outfit, it encapsulates all of life’s processes. You can’t just throw it away, like an uncomfortable shoe. It will stand there and it will ruin everyone’s lives.</p>
        </div>
        <div className={styles.laconismUnit}>
          <h2 className={styles.laconismTitle}>ghost [2020]</h2>
          <p>All our lives, we surround ourselves with walls. These very walls ruin our lives but at the same time, we cannot live without them.</p>
          <p className={styles.laconismHighlight}>Life next to the wall is the homeless. Life behind the wall is what everyone dreams about. In truth, the wall is inside our lives. [1985—2020].</p>
          <p>This text was written together with Kostya Vronskiy, when we were working on a Japanese competition — ‘The bastion of resistance’. However, we were unable to come up with a graphic representation, neither together, nor individually.</p>
          <p>33 years later, whilst working on a project in a small village of Ilinskoe, I finally understood how to build it.</p>
          <p>This is what the relationship between the interim, the external and the internal spaces looks like, as one whole, in the style of laconism.</p>
          {isDesktop ? (
            <GallerySwiper slides={presentation.slides} />
          ) : (
            <MobTabSlides slides={presentation.slides} />
          )}
          <MoreButton to='/architecture/projects/ghost'>more about Ghost</MoreButton>
        </div>
        <div className={styles.laconismUnit}>
          <h2 className={styles.laconismTitle}>the art of sufficient necessity</h2>
          <p className={styles.laconismHighlight}>The client is always wrong.</p>
          <p>Wrong by definition, because he is seeking help from a professional. [Otherwise, he wouldn’t need an architect and would be able to build whatever he needs by himself.]</p>
          <p>He know what he wants. But he doesn’t know what he needs.</p>
          <p>The aim is to find the optimal design solution for a specific case. If you do this correctly, it will always be beautiful.</p>
          <p className={styles.laconismHighlight}>In order to create a reverse brief, it’s important to gradually exclude all of the client’s ‘empty wants’ and to leave only the things that he can’t live without. This will form the perfect guidelines.</p>
          <p>The main principles of working with the client are always based on understanding, trust and mutual responsibility on both sides.</p>
          <p>The general contractor is responsible for the execution of your work. Without knowing and understanding it fully, he will not play his part well. This is why it’s impossible to work with a general contractor who does not understand or appreciate your work.</p>
        </div>
        <div className={styles.laconismUnit}>
          <h2 className={styles.laconismTitle}>project economics</h2>
          <p className={styles.laconismHighlight}>Correct distribution of investor’s funds for maximum result.</p>
          <p>Design happens in two main stages:</p>
          <ol className={styles.laconismList}>
            <li className={styles.laconismItem}>
              Preparation + concept design + economic grounds to determine budget [what we are building].</li>
            <li className={styles.laconismItem}>
              Project documentation + quotations + schedule [how we are building it].</li>
          </ol>
        </div>
        <div className={styles.laconismUnit}>
          <h2 className={styles.laconismTitle}>the principles of site surveillance</h2>
          <p>[Everything is to be executed strictly according to technical drawings as well as adopted rules and principles.]</p>
          <ol className={styles.laconismList}>
            <li className={styles.laconismItem}>
              Development and agreement of all technical processes on site, in advance, with the general contractor.
            </li>
            <li className={styles.laconismItem}>
              Execution.
            </li>
            <li className={styles.laconismItem}>
              Amendment of technical drawings if necessary.
            </li>
            <li className={styles.laconismItem}>
              Strict and regular surveillance of all works at all stages, with zero compromise.
            </li>
          </ol>
        </div>
        <div className={styles.laconismUnit}>
          <h2 className={styles.laconismTitle}>the key players</h2>
          <ol className={styles.laconismList}>
            <li className={styles.laconismItem}>
              Client-developer-investor [one person].
            </li>
            <li className={styles.laconismItem}>
              Author-architect [one person].
            </li>
            <li className={styles.laconismItem}>
              Contractor-general/contractor [one person] + subcontractors.
            </li>
          </ol>
          <p className={styles.laconismHighlight}>This triangle works like a Kalashnikov. The only condition is that the first two have to be on the same level, with the contractor subordinate to them both.</p>
          <p>I even used this system abroad. Unfortunately, I did come across some unpleasant nuances. Some contractors prefer rest over work. Sometimes I had to bring in my own team to finish.</p>
        </div>
        <div className={styles.laconismUnit}>
          <h2 className={styles.laconismTitle}>exhibitions</h2>
          <p>Professional communications:</p>
          <ol className={styles.laconismList}>
            <li className={styles.laconismItem}>
              Publications [online and physical]
            </li>
            <li className={styles.laconismItem}>
              Exhibitions
            </li>
            <li className={styles.laconismItem}>
              Lectures
            </li>
            <li className={styles.laconismItem}>
              Competitions [In recent years, everything became internet-based, including the voting process. This is not right.]
            </li>
          </ol>
          <p>We should return to having physical exhibitions, so that the participants and the spectators can see all the works in the same format, on one wall. It would be best to have presentations to introduce the projects and then discussions.</p>
          <p className={styles.laconismHighlight}>Judging should also be done within the gallery.</p>
          <p>The jury: 1—5 [not more] professionals — active architects. Otherwise, as often is the case, the jury consists of more than 40 people. This means it’s impossible to judge the work properly and their verdict starts to equate to public opinion.</p>
        </div>
        <div className={styles.laconismUnit}>
          <h2 className={styles.laconismTitle}>business</h2>
          <p>Business is defined as an activity designed for systematic profit, or directed towards making a maximum profit from a minimal base cost.</p>
          <p className={styles.laconismHighlight}>This approach can never accommodate architecture as an art form.</p>
          <p>Unless the author is the client and the investor, working for himself and selling his own work on the market, the architecture is destined to suffer. Existing models of architectural business will always lead to loss of quality and failure, because the architect is working within a company for a set salary.</p>
        </div>
        <div className={styles.laconismUnit}>
          <h2 className={styles.laconismTitle}>architecture is an art, not <span className='nowrap'>a business</span></h2>
          <p>In terms of profit, art is a minus, and business is a plus.</p>
          <p className={styles.laconismHighlight}>Architecture always has and always will develop according to the needs of man and society, with a caring attitude towards nature.</p>
        </div>
        <Video
          videoId='kUtD1xkwEjI'
          coverOriginal='/images/video-covers/original/laconism.webp'
          cover1024='/images/video-covers/1024/laconism1024.webp'
          cover480='/images/video-covers/480/laconism480.webp'
        />
        <div className={styles.laconismUnit}>
          <h2 className={styles.laconismTitle}>laconism <span className='nowrap'>[in short]</span></h2>
          <ol className={styles.laconismList}>
            <li className={styles.laconismShortItem}>
              <p>Style = the art of living.</p>
              <p>Fashion = the search of a new style.</p>
            </li>
            <li className={styles.laconismShortItem}>
              <p>Architecture = <q>functionality + durability + beauty.</q> <cite className={styles.quoteAuthor}>[Vitruvius]</cite>
              </p>
              <p>Architectural space = the hole in the centre of a ring doughnut.</p>
            </li>
            <li className={styles.laconismShortItem}>
              <p>Laconism [as a style] = living within what is necessarily sufficient.</p>
              <p>Laconism [in architecture] = the necessary sufficiency of functionality + strength + beauty.</p>
            </li>
            <li className={styles.laconismShortItem}>
              <p>Painting = the outburst of an artist’s emotions onto a two dimensional plane.</p>
              <p>Sculpture = the outburst of an artist’s emotions onto a three dimensional form.</p>
              <p>Architecture = the outburst of an architect’s emotions onto the walls that form space.</p>
            </li>
          </ol>
        </div>
        <div className={styles.laconismUnit}>
          <h2 className={styles.laconismTitle}>the architect and <span className='nowrap'>the artist</span></h2>
          <p>All our lives, we surround ourselves with walls. These very walls ruin our lives but at the same time, we cannot live without them.</p>
          <p>If the main object of visual art is to communicate through imagery, then the main object of architecture is to create spatial imagery that supports the activities of its inhabitants.</p>
          <p className={styles.laconismHighlight}>The architect creates spaces through building walls. When the artist paints on these walls, he creates his own space. In this way, the artist breaks the walls.</p>
        </div>
        <div className={styles.laconismUnit}>
          <h2 className={styles.laconismTitle}>digital paintings</h2>
          <p>This is the emotional outburst of an architect onto a two dimensional plane as frustrated protection from the two-legged brainless creatures that are everywhere. They make our heads explode because they always want to ruin everything with self indulgence, as though they are in awe of themselves.</p>
          <p>
            <q>If you can’t build, you should write.</q> <cite className={styles.quoteAuthor}>[A.E. Gutnov]</cite>
          </p>
          <p className={styles.laconismHighlight}>If you don’t want to have a heart attack or go insane, you should paint. Paper is patient, the canvas can take anything, For me, there is no difference between figurative and abstract art.</p>
          <p>The art is either there or it is not.</p>
          <MoreButton to='/paintings/collections'>more about paintings</MoreButton>
        </div>
      </div>
    </section>
  )
}
