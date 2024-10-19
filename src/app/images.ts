export type Image = {
  path: string;
  alt: string;
  width: number;
  height: number;
  bgColor: string;
}

export const IMAGES: Image[] = [
  {
    path: '/beach.jpg',
    alt: 'Beach in Brazil',
    height: 3642,
    width: 5827,
    bgColor: 'rgb(77,123,134)',
  },
  {
    path: '/plant.jpg',
    alt: 'Plant in San Diego',
    height: 1200,
    width: 960,
    bgColor: 'rgb(77 98 60)',
  },
  {
    path: '/beach-2.jpg',
    width: 5482,
    height: 3376,
    alt: 'Beach in Portugal',
    bgColor: 'rgb(194,128,71)'
  }
];
