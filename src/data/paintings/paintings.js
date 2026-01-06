export const COLLECTIONS = [
  { key: 'all', label: 'all paintings' },
  { key: 'landscapes', label: 'landscapes' },
  { key: 'psychedelics', label: 'psychedelics' },
  { key: 'portraits', label: 'portraits' },
  { key: 'still-life', label: 'still life' },
  { key: 'structures', label: 'structures' },
]

export const COLLECTION_TEXT = {
  landscapes: { 
    tagline: 'The genre of landscape in shalmin’s art is more of an association than a genre, because the basis of the paintings is formed not through observing nature, but rather through the use of geometric modules. As the artist begins to develop and work on these building blocks or modules, they eventually transform into landscapes.', 

    body: `
      These are more like internal landscapes, the landscapes of memories. Memories of places previously seen by the artist, as well as memories of other artist’s landscapes, for example William Turner and Claude Monet. In the realm of digital painting, these compositions start to inherit the qualities of ‘hyper landscapes’, where there is no such thing as a plan or a set of coordinates to describe the space, no static or substantial vision or an internal or an external space. As the viewer begins to examine the paintings, they may at first perceive these works as three dimensional and in perspective, but the layers soon merge into one, forming a two dimensional plane. As you continue to examine the painting, it appears to remain in a state of flux, gently changing between a two dimensional plane and a three dimensional space.
      
      The plan view, or the view from above is a dominant theme in the artist’s work, much like in the late works of Claude Monet. It is precisely this view point, the view from above that allows Shalmin to depart from the surface of the Earth and to travel to greater heights, out into open space and into the realm of interstellar compositions and landscapes.
    `
  },

  psychedelics: { 
    tagline: 'The classification of Shalmin’s paintings into ‘landscape’ and ‘psychedelics’ is notional because his psychedelic paintings often arise from the landscapes as the next level of their perception and interpretation.', 
    body: `
      In a traditional sense, psychedelic art assumes the use of psychedelics within the creative process or at the very least, the artist usually produces their works within an altered state of consciousness. 
      
      In the context of digital art and more specifically in the context of Shalmin’s paintings, we see psychedelia of a different kind. The artist is not using psychedelics; it is his life experiences and consequently his emotions towards them that serve as the mind-altering substances. In this case, the artist gets pulled into the painting, dissolves into it and sometimes temporarily loses control over its creation. To an extent, he denounces his ego and gives into his intuition, his internal impulses. 
      
      As a result, in these psychedelic compositions, the image becomes softer in focus and a wider sense of perception opens up, discerned not only through the eyes but also through the rest of the body. This process of perception is reminiscent of a dream, when an ability to see with the eyes closed is acquired. A process where the body reacts to the images that arise in the subconscious mind.
    ` 
  },

  portraits: { 
    tagline: 'Shalmin’s portraits are not literal depictions of specific people, but rather illustrations of archetypes as well as the artist’s emotional response towards the archetype itself.', 
    body: `
      ‘Emotions’, ‘temperament’, ‘feelings’ — all these are popular subjects of paintings that prevailed during the baroque era, often associated with portraits, but not connected to them directly. For example, depictions of a young man holding a glass in Dutch paintings of the 17th century are allegories of taste. In this way, through a specific symbol, the artists were attempting to convey emotions and sensations of a general order.
      
      In this digital age and daily social media interaction full of avatars, the portrait genre has become increasingly more abstract and is more predisposed to anonymity and concealment, rather than the exposure of personality. In this way, Shalmin’s art sees the formation of a new genre of the ‘anonymous portrait’ with a plethora of collective, rather than individual emotions.
    ` 
  },

  'still-life': {
    tagline: 'In contrast to his landscapes — substantial vision works, Shalmin’s ‘still life’ series are static vision works. The modules or building blocks that make up his still life pieces are larger here than his landscapes. The number of layers also decreases and the shapes start to look as though they are opening up and sliding off into the surrounding space.', 
    body: `
      These digital paintings take the cubist still life principles, namely the relationship between the different components and take them to a new level. 
      
      However, when the image is already non-representational, the artist doesn’t need to disassemble the object within an illusory space the way the cubists did at the beginning of the 20th century. Thus, Shalmin’s works are quite the opposite, the forms begin to cluster and compress within the digital space that they inhabit. 
      
      It’s also important to note that within the realm of digital painting, the light comes from within the picture frame itself, which inevitably affects the perception and interpretation of the objects depicted.
    ` 
  },

  structures: {
    tagline: 'The ‘structure’ series is the most architectural. It’s linked with the traditions of geometric abstraction and the technique of endlessly replicating a single building block or module.',
    body: `
      At the start of the 20th century, the French cubists were striving to conquer the inertia of physical objects, by developing the idea of looking directly through the object and aiming to perceive it in its entirety, as well as creating a multidimensional space by capturing different viewpoints within the same piece of work. Throughout this journey, they have made several new discoveries, including the effect of ‘pop-up windows’, which are now so familiar to the contemporary audience following the advent of computers and virtual reality.
      
      Multiplying the same module over and over again, whilst changing its size allows the artist to create new spatial illusions. The geometric structures also begin to resemble the connections between cells and microorganisms. In this way, the ‘structure’ series can also be classified as visual experiments in the field of biotechnology.
    ` 
  },
}

export const PAINTINGS = [
  {
    slug: 'discussion',
    title: 'discussion',
    collections: ['psychedelics'],
    cover: {
      src: '/images/paintings/480/discussion.webp',
      srcSet: `
        /images/paintings/480/discussion.webp 480w,
        /images/paintings/1024/discussion.webp 1024w,
        /images/paintings/original/discussion.webp 1754w
        `,
        sizes: '1440px',
    }
  },
  {
    slug: 'at-6-am',
    title: 'at 6 am',
    collections: ['landscapes'],
    cover: {
      src: '/images/paintings/480/at-6-am.webp',
      srcSet: `
        /images/paintings/480/at-6-am.webp 480w,
        /images/paintings/1024/at-6-am.webp 1024w,
        /images/paintings/original/at-6-am.webp 1754w
        `,
        sizes: '1440px',
    }
  },
  {
    slug: 'blazing-heat',
    title: 'blazing heat',
    collections: ['landscapes'],
    cover: {
      src: '/images/paintings/480/blazing-heat.webp',
      srcSet: `
        /images/paintings/480/blazing-heat.webp 480w,
        /images/paintings/1024/blazing-heat.webp 1024w,
        /images/paintings/original/blazing-heat.webp 1754w
        `,
        sizes: '1440px',
    }
  },
  {
    slug: 'meeting',
    title: 'the meeting',
    collections: ['portraits'],
    cover: {
      src: '/images/paintings/480/meeting.webp',
      srcSet: `
        /images/paintings/480/meeting.webp 480w,
        /images/paintings/1024/meeting.webp 1024w,
        /images/paintings/original/meeting.webp 1754w
        `,
        sizes: '1440px',
    }
  },
  {
    slug: 'dusk',
    title: 'dusk',
    collections: ['landscapes'],
    cover: {
      src: '/images/paintings/480/dusk.webp',
      srcSet: `
        /images/paintings/480/dusk.webp 480w,
        /images/paintings/1024/dusk.webp 1024w,
        /images/paintings/original/dusk.webp 1754w
        `,
        sizes: '1440px',
    }
  },
  {
    slug: 'fears',
    title: 'fears',
    collections: ['portraits'],
    cover: {
      src: '/images/paintings/480/fears.webp',
      srcSet: `
        /images/paintings/480/fears.webp 480w,
        /images/paintings/1024/fears.webp 1024w,
        /images/paintings/original/fears.webp 1754w
        `,
        sizes: '1440px',
    }
  },
  {
    slug: 'iron-man',
    title: 'the iron man',
    collections: ['portraits'],
    cover: {
      src: '/images/paintings/480/iron-man.webp',
      srcSet: `
        /images/paintings/480/iron-man.webp 480w,
        /images/paintings/1024/iron-man.webp 1024w,
        /images/paintings/original/iron-man.webp 1754w
        `,
        sizes: '1440px',
    }
  },
  {
    slug: 'race',
    title: 'the race',
    collections: ['portraits'],
    cover: {
      src: '/images/paintings/480/race.webp',
      srcSet: `
        /images/paintings/480/race.webp 480w,
        /images/paintings/1024/race.webp 1024w,
        /images/paintings/original/race.webp 1754w
        `,
        sizes: '1440px',
    }
  },
  {
    slug: 'gwynplaine',
    title: 'gwynplaine',
    collections: ['portraits'],
    cover: {
      src: '/images/paintings/480/gwynplaine.webp',
      srcSet: `
        /images/paintings/480/gwynplaine.webp 480w,
        /images/paintings/1024/gwynplaine.webp 1024w,
        /images/paintings/original/gwynplaine.webp 1754w
        `,
        sizes: '1440px',
    }
  },
  {
    slug: 'secret',
    title: 'secret',
    collections: ['portraits'],
    cover: {
      src: '/images/paintings/480/secret.webp',
      srcSet: `
        /images/paintings/480/secret.webp 480w,
        /images/paintings/1024/secret.webp 1024w,
        /images/paintings/original/secret.webp 1754w
        `,
        sizes: '1440px',
    }
  },
  {
    slug: 'ghoul',
    title: 'ghoul',
    collections: ['portraits'],
    cover: {
      src: '/images/paintings/480/ghoul.webp',
      srcSet: `
        /images/paintings/480/ghoul.webp 480w,
        /images/paintings/1024/ghoul.webp 1024w,
        /images/paintings/original/ghoul.webp 1754w
        `,
        sizes: '1440px',
    }
  },
  {
    slug: 'faculty',
    title: 'faculty',
    collections: ['landscapes'],
    cover: {
      src: '/images/paintings/480/faculty.webp',
      srcSet: `
        /images/paintings/480/faculty.webp 480w,
        /images/paintings/1024/faculty.webp 1024w,
        /images/paintings/original/faculty.webp 1754w
        `,
        sizes: '1440px',
    }
  },
  {
    slug: 'tree',
    title: 'tree',
    collections: ['landscapes'],
    cover: {
      src: '/images/paintings/480/tree.webp',
      srcSet: `
        /images/paintings/480/tree.webp 480w,
        /images/paintings/1024/tree.webp 1024w,
        /images/paintings/original/tree.webp 1754w
        `,
        sizes: '1440px',
    }
  },
  {
    slug: 'small-yard',
    title: 'a small yard in n-sk',
    collections: ['landscapes'],
    cover: {
      src: '/images/paintings/480/small-yard.webp',
      srcSet: `
        /images/paintings/480/small-yard.webp 480w,
        /images/paintings/1024/small-yard.webp 1024w,
        /images/paintings/original/small-yard.webp 1754w
        `,
        sizes: '1440px',
    }
  },
  {
    slug: 'headache',
    title: 'headache',
    collections: ['portraits'],
    cover: {
      src: '/images/paintings/480/headache.webp',
      srcSet: `
        /images/paintings/480/headache.webp 480w,
        /images/paintings/1024/headache.webp 1024w,
        /images/paintings/original/headache.webp 1754w
        `,
        sizes: '1440px',
    }
  },
  {
    slug: 'brain',
    title: 'brain',
    collections: ['portraits'],
    cover: {
      src: '/images/paintings/480/brain.webp',
      srcSet: `
        /images/paintings/480/brain.webp 480w,
        /images/paintings/1024/brain.webp 1024w,
        /images/paintings/original/brain.webp 1754w
        `,
        sizes: '1440px',
    }
  },
  {
    slug: 'blood-drop',
    title: 'a drop of blood',
    collections: ['psychedelics'],
    cover: {
      src: '/images/paintings/480/blood-drop.webp',
      srcSet: `
        /images/paintings/480/blood-drop.webp 480w,
        /images/paintings/1024/blood-drop.webp 1024w,
        /images/paintings/original/blood-drop.webp 1754w
        `,
        sizes: '1440px',
    }
  },
  {
    slug: 'decadence',
    title: 'decadence',
    collections: ['psychedelics'],
    cover: {
      src: '/images/paintings/480/decadence.webp',
      srcSet: `
        /images/paintings/480/decadence.webp 480w,
        /images/paintings/1024/decadence.webp 1024w,
        /images/paintings/original/decadence.webp 1754w
        `,
        sizes: '1440px',
    }
  },
  {
    slug: 'splash',
    title: 'the splash',
    collections: ['psychedelics'],
    cover: {
      src: '/images/paintings/480/splash.webp',
      srcSet: `
        /images/paintings/480/splash.webp 480w,
        /images/paintings/1024/splash.webp 1024w,
        /images/paintings/original/splash.webp 1754w
        `,
        sizes: '1440px',
    }
  },
  {
    slug: 'summer',
    title: 'summer',
    collections: ['psychedelics'],
    cover: {
      src: '/images/paintings/480/summer.webp',
      srcSet: `
        /images/paintings/480/summer.webp 480w,
        /images/paintings/1024/summer.webp 1024w,
        /images/paintings/original/summer.webp 1754w
        `,
        sizes: '1440px',
    }
  },
  {
    slug: 'journey',
    title: 'journey',
    collections: ['structures'],
    cover: {
      src: '/images/paintings/480/journey.webp',
      srcSet: `
        /images/paintings/480/journey.webp 480w,
        /images/paintings/1024/journey.webp 1024w,
        /images/paintings/original/journey.webp 1754w
        `,
        sizes: '1440px',
    }
  },
  {
    slug: 'madam',
    title: 'madam',
    collections: ['portraits'],
    cover: {
      src: '/images/paintings/480/madam.webp',
      srcSet: `
        /images/paintings/480/madam.webp 480w,
        /images/paintings/1024/madam.webp 1024w,
        /images/paintings/original/madam.webp 1754w
        `,
        sizes: '1440px',
    }
  },
  {
    slug: 'by-the-river',
    title: 'by the river',
    collections: ['landscapes'],
    cover: {
      src: '/images/paintings/480/by-the-river.webp',
      srcSet: `
        /images/paintings/480/by-the-river.webp 480w,
        /images/paintings/1024/by-the-river.webp 1024w,
        /images/paintings/original/by-the-river.webp 1754w
        `,
        sizes: '1440px',
    }
  },
  {
    slug: 'autumn',
    title: 'autumn',
    collections: ['landscapes'],
    cover: {
      src: '/images/paintings/480/autumn.webp',
      srcSet: `
        /images/paintings/480/autumn.webp 480w,
        /images/paintings/1024/autumn.webp 1024w,
        /images/paintings/original/autumn.webp 1754w
        `,
        sizes: '1440px',
    }
  },
  {
    slug: 'structure',
    title: 'structure',
    collections: ['structures'],
    cover: {
      src: '/images/paintings/480/structure.webp',
      srcSet: `
        /images/paintings/480/structure.webp 480w,
        /images/paintings/1024/structure.webp 1024w,
        /images/paintings/original/structure.webp 1754w
        `,
        sizes: '1440px',
    }
  },
  {
    slug: 'city',
    title: 'city',
    collections: ['structures'],
    cover: {
      src: '/images/paintings/480/city.webp',
      srcSet: `
        /images/paintings/480/city.webp 480w,
        /images/paintings/1024/city.webp 1024w,
        /images/paintings/original/city.webp 1754w
        `,
        sizes: '1440px',
    }
  },
  {
    slug: 'contact',
    title: 'contact',
    collections: ['portraits'],
    cover: {
      src: '/images/paintings/480/contact.webp',
      srcSet: `
        /images/paintings/480/contact.webp 480w,
        /images/paintings/1024/contact.webp 1024w,
        /images/paintings/original/contact.webp 1754w
        `,
        sizes: '1440px',
    }
  },
  {
    slug: 'crazy-color',
    title: 'a crazy color',
    collections: ['landscapes'],
    cover: {
      src: '/images/paintings/480/crazy-color.webp',
      srcSet: `
        /images/paintings/480/crazy-color.webp 480w,
        /images/paintings/1024/crazy-color.webp 1024w,
        /images/paintings/original/crazy-color.webp 1754w
        `,
        sizes: '1440px',
    }
  },
  {
    slug: 'damn',
    title: 'don’t give a damn',
    collections: ['landscapes'],
    cover: {
      src: '/images/paintings/480/damn.webp',
      srcSet: `
        /images/paintings/480/damn.webp 480w,
        /images/paintings/1024/damn.webp 1024w,
        /images/paintings/original/damn.webp 1754w
        `,
        sizes: '1440px',
    }
  },
  {
    slug: 'deep-forest',
    title: 'deep forest',
    collections: ['landscapes'],
    cover: {
      src: '/images/paintings/480/deep-forest.webp',
      srcSet: `
        /images/paintings/480/deep-forest.webp 480w,
        /images/paintings/1024/deep-forest.webp 1024w,
        /images/paintings/original/deep-forest.webp 1754w
        `,
        sizes: '1440px',
    }
  },
  {
    slug: 'demons',
    title: 'demons',
    collections: ['portraits'],
    cover: {
      src: '/images/paintings/480/demons.webp',
      srcSet: `
        /images/paintings/480/demons.webp 480w,
        /images/paintings/1024/demons.webp 1024w,
        /images/paintings/original/demons.webp 1754w
        `,
        sizes: '1440px',
    }
  },
  {
    slug: 'dream',
    title: 'dream',
    collections: ['landscapes'],
    cover: {
      src: '/images/paintings/480/dream.webp',
      srcSet: `
        /images/paintings/480/dream.webp 480w,
        /images/paintings/1024/dream.webp 1024w,
        /images/paintings/original/dream.webp 1754w
        `,
        sizes: '1440px',
    }
  },
  {
    slug: 'drowning',
    title: 'drowning',
    collections: ['psychedelics'],
    cover: {
      src: '/images/paintings/480/drowning.webp',
      srcSet: `
        /images/paintings/480/drowning.webp 480w,
        /images/paintings/1024/drowning.webp 1024w,
        /images/paintings/original/drowning.webp 1754w
        `,
        sizes: '1440px',
    }
  },
  {
    slug: 'fright',
    title: 'a fright',
    collections: ['portraits'],
    cover: {
      src: '/images/paintings/480/fright.webp',
      srcSet: `
        /images/paintings/480/fright.webp 480w,
        /images/paintings/1024/fright.webp 1024w,
        /images/paintings/original/fright.webp 1754w
        `,
        sizes: '1440px',
    }
  },
  {
    slug: 'first-snow',
    title: 'first snow',
    collections: ['landscapes'],
    cover: {
      src: '/images/paintings/480/first-snow.webp',
      srcSet: `
        /images/paintings/480/first-snow.webp 480w,
        /images/paintings/1024/first-snow.webp 1024w,
        /images/paintings/original/first-snow.webp 1754w
        `,
        sizes: '1440px',
    }
  },
  {
    slug: 'hallucination',
    title: 'hallucination',
    collections: ['portraits'],
    cover: {
      src: '/images/paintings/480/hallucination.webp',
      srcSet: `
        /images/paintings/480/hallucination.webp 480w,
        /images/paintings/1024/hallucination.webp 1024w,
        /images/paintings/original/hallucination.webp 1754w
        `,
        sizes: '1440px',
    }
  },
  {
    slug: 'hungover',
    title: 'hungover',
    collections: ['portraits'],
    cover: {
      src: '/images/paintings/480/hungover.webp',
      srcSet: `
        /images/paintings/480/hungover.webp 480w,
        /images/paintings/1024/hungover.webp 1024w,
        /images/paintings/original/hungover.webp 1754w
        `,
        sizes: '1440px',
    }
  },
  {
    slug: 'lightness-of-being',
    title: 'lightness of being',
    collections: ['landscapes'],
    cover: {
      src: '/images/paintings/480/lightness-of-being.webp',
      srcSet: `
        /images/paintings/480/lightness-of-being.webp 480w,
        /images/paintings/1024/lightness-of-being.webp 1024w,
        /images/paintings/original/lightness-of-being.webp 1754w
        `,
        sizes: '1440px',
    }
  },
  {
    slug: 'look',
    title: 'the look',
    collections: ['portraits'],
    cover: {
      src: '/images/paintings/480/look.webp',
      srcSet: `
        /images/paintings/480/look.webp 480w,
        /images/paintings/1024/look.webp 1024w,
        /images/paintings/original/look.webp 1754w
        `,
        sizes: '1440px',
    }
  },
  {
    slug: 'mountain',
    title: 'mountain',
    collections: ['landscapes'],
    cover: {
      src: '/images/paintings/480/mountain.webp',
      srcSet: `
        /images/paintings/480/mountain.webp 480w,
        /images/paintings/1024/mountain.webp 1024w,
        /images/paintings/original/mountain.webp 1754w
        `,
        sizes: '1440px',
    }
  },
  {
    slug: 'oceania',
    title: 'oceania',
    collections: ['psychedelics'],
    cover: {
      src: '/images/paintings/480/oceania.webp',
      srcSet: `
        /images/paintings/480/oceania.webp 480w,
        /images/paintings/1024/oceania.webp 1024w,
        /images/paintings/original/oceania.webp 1754w
        `,
        sizes: '1440px',
    }
  },
  {
    slug: 'wave',
    title: 'wave',
    collections: ['psychedelics'],
    cover: {
      src: '/images/paintings/480/wave.webp',
      srcSet: `
        /images/paintings/480/wave.webp 480w,
        /images/paintings/1024/wave.webp 1024w,
        /images/paintings/original/wave.webp 1754w
        `,
        sizes: '1440px',
    }
  },
  {
    slug: 'wet-conversation',
    title: 'a wet conversation',
    collections: ['psychedelics'],
    cover: {
      src: '/images/paintings/480/wet-conversation.webp',
      srcSet: `
        /images/paintings/480/wet-conversation.webp 480w,
        /images/paintings/1024/wet-conversation.webp 1024w,
        /images/paintings/original/wet-conversation.webp 1754w
        `,
        sizes: '1440px',
    }
  },
  {
    slug: 'still-life-1',
    title: 'still life 1',
    collections: ['still-life'],
    cover: {
      src: '/images/paintings/480/still-life-1.webp',
      srcSet: `
        /images/paintings/480/still-life-1.webp 480w,
        /images/paintings/1024/still-life-1.webp 1024w,
        /images/paintings/original/still-life-1.webp 1754w
        `,
        sizes: '1440px',
    }
  },
  {
    slug: 'still-life-2',
    title: 'still life 2',
    collections: ['still-life'],
    cover: {
      src: '/images/paintings/480/still-life-2.webp',
      srcSet: `
        /images/paintings/480/still-life-2.webp 480w,
        /images/paintings/1024/still-life-2.webp 1024w,
        /images/paintings/original/still-life-2.webp 1754w
        `,
        sizes: '1440px',
    }
  },
  {
    slug: 'still-life-3',
    title: 'still life 3',
    collections: ['still-life'],
    cover: {
      src: '/images/paintings/480/still-life-3.webp',
      srcSet: `
        /images/paintings/480/still-life-3.webp 480w,
        /images/paintings/1024/still-life-3.webp 1024w,
        /images/paintings/original/still-life-3.webp 1754w
        `,
        sizes: '1440px',
    }
  },
  {
    slug: 'roses',
    title: 'roses',
    collections: ['still-life'],
    cover: {
      src: '/images/paintings/480/roses.webp',
      srcSet: `
        /images/paintings/480/roses.webp 480w,
        /images/paintings/1024/roses.webp 1024w,
        /images/paintings/original/roses.webp 1754w
        `,
        sizes: '1440px',
    }
  },
  {
    slug: 'leaf',
    title: 'leaf',
    collections: ['still-life'],
    cover: {
      src: '/images/paintings/480/leaf.webp',
      srcSet: `
        /images/paintings/480/leaf.webp 480w,
        /images/paintings/1024/leaf.webp 1024w,
        /images/paintings/original/leaf.webp 1754w
        `,
        sizes: '1440px',
    }
  },
  {
    slug: 'sea',
    title: 'the sea',
    collections: ['still-life'],
    cover: {
      src: '/images/paintings/480/sea.webp',
      srcSet: `
        /images/paintings/480/sea.webp 480w,
        /images/paintings/1024/sea.webp 1024w,
        /images/paintings/original/sea.webp 1754w
        `,
        sizes: '1440px',
    }
  },
  {
    slug: 'mountains',
    title: 'mountains',
    collections: ['still-life'],
    cover: {
      src: '/images/paintings/480/mountains.webp',
      srcSet: `
        /images/paintings/480/mountains.webp 480w,
        /images/paintings/1024/mountains.webp 1024w,
        /images/paintings/original/mountains.webp 1754w
        `,
        sizes: '1440px',
    }
  },
  {
    slug: 'party',
    title: 'party',
    collections: ['still-life'],
    cover: {
      src: '/images/paintings/480/party.webp',
      srcSet: `
        /images/paintings/480/party.webp 480w,
        /images/paintings/1024/party.webp 1024w,
        /images/paintings/original/party.webp 1754w
        `,
        sizes: '1440px',
    }
  },
  {
    slug: 'electricity',
    title: 'electricity',
    collections: ['psychedelics'],
    cover: {
      src: '/images/paintings/480/electricity.webp',
      srcSet: `
        /images/paintings/480/electricity.webp 480w,
        /images/paintings/1024/electricity.webp 1024w,
        /images/paintings/original/electricity.webp 1754w
        `,
        sizes: '1440px',
    }
  },
  {
    slug: 'fish',
    title: 'fish',
    collections: ['psychedelics'],
    cover: {
      src: '/images/paintings/480/fish.webp',
      srcSet: `
        /images/paintings/480/fish.webp 480w,
        /images/paintings/1024/fish.webp 1024w,
        /images/paintings/original/fish.webp 1754w
        `,
        sizes: '1440px',
    }
  },
  {
    slug: 'vine',
    title: 'the vine',
    collections: ['landscapes'],
    cover: {
      src: '/images/paintings/480/vine.webp',
      srcSet: `
        /images/paintings/480/vine.webp 480w,
        /images/paintings/1024/vine.webp 1024w,
        /images/paintings/original/vine.webp 1754w
        `,
        sizes: '1440px',
    }
  },
  {
    slug: 'wasted-day',
    title: 'a wasted day',
    collections: ['landscapes'],
    cover: {
      src: '/images/paintings/480/wasted-day.webp',
      srcSet: `
        /images/paintings/480/wasted-day.webp 480w,
        /images/paintings/1024/wasted-day.webp 1024w,
        /images/paintings/original/wasted-day.webp 1754w
        `,
        sizes: '1440px',
    }
  },
  {
    slug: 'fishing',
    title: 'night time fishing',
    collections: ['landscapes'],
    cover: {
      src: '/images/paintings/480/fishing.webp',
      srcSet: `
        /images/paintings/480/fishing.webp 480w,
        /images/paintings/1024/fishing.webp 1024w,
        /images/paintings/original/fishing.webp 1754w
        `,
        sizes: '1440px',
    }
  },
  {
    slug: 'hearth',
    title: 'the hearth',
    collections: ['landscapes'],
    cover: {
      src: '/images/paintings/480/hearth.webp',
      srcSet: `
        /images/paintings/480/hearth.webp 480w,
        /images/paintings/1024/hearth.webp 1024w,
        /images/paintings/original/hearth.webp 1754w
        `,
        sizes: '1440px',
    }
  },
  {
    slug: 'waterfall',
    title: 'waterfall',
    collections: ['landscapes'],
    cover: {
      src: '/images/paintings/480/waterfall.webp',
      srcSet: `
        /images/paintings/480/waterfall.webp 480w,
        /images/paintings/1024/waterfall.webp 1024w,
        /images/paintings/original/waterfall.webp 1754w
        `,
        sizes: '1440px',
    }
  },
  {
    slug: 'grail',
    title: 'the grail',
    collections: ['landscapes'],
    cover: {
      src: '/images/paintings/480/grail.webp',
      srcSet: `
        /images/paintings/480/grail.webp 480w,
        /images/paintings/1024/grail.webp 1024w,
        /images/paintings/original/grail.webp 1754w
        `,
        sizes: '1440px',
    }
  },
  {
    slug: 'whisper',
    title: 'whisper',
    collections: ['portraits'],
    cover: {
      src: '/images/paintings/480/whisper.webp',
      srcSet: `
        /images/paintings/480/whisper.webp 480w,
        /images/paintings/1024/whisper.webp 1024w,
        /images/paintings/original/whisper.webp 1754w
        `,
        sizes: '1440px',
    }
  },  
]
