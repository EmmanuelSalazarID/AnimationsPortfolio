import { ImageSourcePropType } from 'react-native';

export type Section = {
  title: string;
  leftColor: string;
  rightColor: string;
  image: ImageSourcePropType;
};

// Navigation types
export type AuthStackParams = {
  Login: undefined;
};

export type AppStackParams = {
  Home: undefined;
  YoutubeTransition: undefined;
  FlutterAnimations: undefined;
};
