/* eslint-disable global-require */
import Theme from 'theme';
import { Section } from './types';

export const sections: Section[] = [
  {
    title: 'SUNGLASSES',
    leftColor: Theme.Colors.MediumPurple,
    rightColor: Theme.Colors.Mariner,
    image: require('assets/images/sunnies.png'),
  },
  {
    title: 'FURNITURE',
    leftColor: Theme.Colors.Tomato,
    rightColor: Theme.Colors.MediumPurple,
    image: require('assets/images/table.png'),
  },
  {
    title: 'JEWELRY',
    leftColor: Theme.Colors.MySin,
    rightColor: Theme.Colors.Tomato,
    image: require('assets/images/earrings.png'),
  },
  {
    title: 'HEADWEAR',
    leftColor: 'white',
    rightColor: Theme.Colors.Tomato,
    image: require('assets/images/hat.png'),
  },
];
