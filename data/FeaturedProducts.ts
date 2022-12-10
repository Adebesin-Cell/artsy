export type FeaturedProduct = {
  id: number
  image: string
  title: string
  description: string
  creators: { id: number; image: string }[]
  totalCreators: number
  placeImageRight?: boolean
}

export const FEATURED_PRODUCTS: FeaturedProduct[] = [
  {
    id: 1,
    title: 'The Boolean Egyptian',
    image: './images/featured--1.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur',
    totalCreators: 64,
    creators: [
      {
        id: 101,
        image: './images/creator--1.png',
      },
      {
        id: 102,
        image: './images/creator--2.png',
      },
      {
        id: 103,
        image: './images/creator--3.png',
      },
      {
        id: 104,
        image: './images/creator--4.png',
      },
      {
        id: 105,
        image: './images/creator--5.png',
      },
    ],
  },
  {
    id: 2,
    title: 'The Boolean Egyptian',
    image: './images/featured--2.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur',
    totalCreators: 64,
    creators: [
      {
        id: 101,
        image: './images/creator--1.png',
      },
      {
        id: 102,
        image: './images/creator--2.png',
      },
      {
        id: 103,
        image: './images/creator--3.png',
      },
      {
        id: 104,
        image: './images/creator--4.png',
      },
      {
        id: 105,
        image: './images/creator--5.png',
      },
    ],
    placeImageRight: true,
  },
  {
    id: 3,
    title: 'The Boolean Egyptian',
    image: './images/featured--3.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur',
    totalCreators: 64,
    creators: [
      {
        id: 101,
        image: './images/creator--1.png',
      },
      {
        id: 102,
        image: './images/creator--2.png',
      },
      {
        id: 103,
        image: './images/creator--3.png',
      },
      {
        id: 104,
        image: './images/creator--4.png',
      },
      {
        id: 105,
        image: './images/creator--5.png',
      },
    ],
  },
]
