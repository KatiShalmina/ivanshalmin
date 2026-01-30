import { cube } from './cube'
import { nsk } from './nsk'
import { cubePhotos } from './cube-photos'
import { nskPhotos } from './nsk-photos'

export const EXHIBITION_COVERS = [
  {
    slug: 'cube',
    title: {
      en: 'first solo exhibition',
      ru: 'первая персональная выставка'
    },

    subtitle: {
      en: 'digital paintings or the seasonal fluctuations of an architect',
      ru: 'цифровая живопись или сезонные колебания архитектора'
    },

    cover: {
      src: '/images/exhibitions/covers/cube-cover.webp',
      srcSet: `
          /images/exhibitions/covers/cube-cover480.webp 480w,
          /images/exhibitions/covers/cube-cover.webp 667w
        `,
      sizes: '400px',
    }
  },
  {
    slug: 'nsk',
    title: {
      en: 'second solo exhibition',
      ru: 'вторая персональная выставка'
    },

    subtitle: {
      en: 'laconism in architecture, paintings without paint',
      ru: 'лаконизм в архитектуре, живопись без красок'
    },

    cover: {
      src: '/images/exhibitions/covers/nsk-cover.webp',
      srcSet: `
          /images/exhibitions/covers/nsk-cover480.webp 480w,
          /images/exhibitions/covers/nsk-cover.webp 1000w
        `,
      sizes: '400px',
    }
  }
]

export const EXHIBITION_PAPER = {
  en: `
    2017: Paris, Tallin, Berlin
    2015: Moscow
    2000: Moscow
    1996—2000: Rotterdam
    1992: Jerusalem
    1990—1991: New Orleans
    1990: Cologne, Berlin, Brussels, Zurich
    1989: Moscow, Frankfurt
    1988: Paris, Milan, Austin, London
    1987: Moscow
    1986: Ljubljana, Helsinki, Stockholm, Amsterdam
    1985: Moscow
    1984: Moscow
  `,
  ru: `
    2017: Париж, Таллин, Берлин
    2015: Москва
    2000: Москва
    1996—2000: Роттердам
    1992: Иерусалим
    1990—1991: Новый Орлеан
    1990: Кельн, Берлин, Брюссель, Цюрих
    1989: Москва, Франкфурт
    1988: Париж, Милан, Остин, Лондон
    1987: Москва
    1986: Любляна, Хельсинки, Стокгольм, Амстердам
    1985: Москва
    1984: Москва
  `
}

export const EXHIBITION_DETAIL = {
  cube: {
    slug: 'cube',
    title: {
      en: 'first solo exhibition',
      ru: 'первая персональная выставка'
    },
    subtitle: {
      en: 'digital paintings or the seasonal fluctuations of an architect',
      ru: 'цифровая живопись или сезонные колебания архитектора'
    },
    description: {
      en: `
        13 january — 1 february 2020
        location: Cube.Moscow Art centre
        curator: Kirill Svetlyakov
      `,
      ru: `
        13 января — 1 февраля 2020
        локация: галерея Cube.Moscow, Москва
        куратор: Кирилл Светляков
      `
    },
    videos: [
      {
        id: 'zBI22kyMwNY',
        coverOriginal: '/images/video-covers/original/cube-1.webp',
        cover1024: '/images/video-covers/1024/cube1024-1.webp',
        cover480: '/images/video-covers/480/cube480-1.webp'
      },
      {
        id: 'AiCg08FO8AY',
        coverOriginal: '/images/video-covers/original/cube-2.webp',
        cover1024: '/images/video-covers/1024/cube1024-2.webp',
        cover480: '/images/video-covers/480/cube480-2.webp'
      }
    ]
  },
  nsk: {
    slug: 'nsk',
    title: {
      en: 'second solo exhibition',
      ru: 'вторая персональная выставка'
    },
    subtitle: {
      en: 'laconism in architecture, paintings without paint',
      ru: 'лаконизм в архитектуре, живопись без красок'
    },
    description: {
      en: `
        6—22 march 2020
        locations: White Gallery; Cultural Centre TsK 19, Novosibirsk
        curator: Kirill Svetlyakov
      `,
      ru: `
        6—22 марта 2020
        локации: Белая галерея; ЦК 19, Новосибирск
        куратор: Кирилл Светляков
      `
    },
    videos: [
      {
        id: 'iheO9xoTCdc',
        coverOriginal: '/images/video-covers/original/novosibirsk.webp',
        cover1024: '/images/video-covers/1024/novosibirsk1024.webp',
        cover480: '/images/video-covers/480/novosibirsk480.webp'
      },
    ]
  }
}

export const EXHIBITION_SLIDES = {
  cube: cube.slides,
  nsk: nsk.slides,
}


export const EXHIBITION_PHOTOS = {
  cube: cubePhotos,
  nsk: nskPhotos,
}
