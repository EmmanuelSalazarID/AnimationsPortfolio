/* eslint-disable global-require */
import { subDays } from 'date-fns';

export type Video = {
  id: string,
  thumbnail: number,
  video: any,
  title: string,
  username: string,
  avatar: number,
  views: number,
  published: Date,
};

export const videos: Video[] = [
  {
    id: '3',
    thumbnail: require('assets/images/thumbnails/3.jpg'),
    video: require('assets/videos/3.mp4'),
    title: 'Sending Firebase Data Messages to Expo: iOS',
    username: 'Expo',
    avatar: require('assets/images/avatars/1.png'),
    views: 189,
    published: subDays(new Date(), 5),
  },
  {
    id: '1',
    thumbnail: require('assets/images/thumbnails/1.jpg'),
    video: require('assets/videos/1.mp4'),
    title: 'React Native Image Picker Tutorial',
    username: 'Expo',
    avatar: require('assets/images/avatars/1.png'),
    views: 63,
    published: subDays(new Date(), 10),
  },
  {
    id: '2',
    thumbnail: require('assets/images/thumbnails/2.jpg'),
    video: require('assets/videos/2.mp4'),
    title: 'PIXI.js in React Native for beginners',
    username: 'Expo',
    avatar: require('assets/images/avatars/1.png'),
    views: 216,
    published: subDays(new Date(), 17),
  },
  {
    id: '4',
    thumbnail: require('assets/images/thumbnails/4.jpg'),
    video: require('assets/videos/1.mp4'),
    title: 'Permissions in React Native for absolute beginners',
    username: 'Expo',
    avatar: require('assets/images/avatars/1.png'),
    views: 273,
    published: subDays(new Date(), 31),
  },
];
