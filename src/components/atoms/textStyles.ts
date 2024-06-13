import { StyleSheet } from 'react-native';
import Theme from 'theme';

const typographyLightStyle = StyleSheet.create({
  header: {
    fontSize: Theme.Sizes.Header,
    fontWeight: 'bold',
    color: Theme.Colors.Black,
    lineHeight: 22,
  },
  title: {
    fontSize: Theme.Sizes.Title,
    fontWeight: 'bold',
    color: Theme.Colors.Black,
    lineHeight: 25,
  },
  subtitle: {
    fontSize: Theme.Sizes.Subtitle,
    color: Theme.Colors.Black,
    lineHeight: 25,
  },
  body: {
    fontSize: Theme.Sizes.Body,
    color: Theme.Colors.Black,
    lineHeight: 21,
  },
  caption: {
    fontSize: Theme.Sizes.Caption,
    fontWeight: '500',
    color: Theme.Colors.Black,
  },
});

export { typographyLightStyle };
