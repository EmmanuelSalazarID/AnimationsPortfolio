import React from 'react';
import { Image, ImageSourcePropType, StyleSheet } from 'react-native';
import { Container } from 'components';

interface Props {
  image: ImageSourcePropType;
}

const MockCard: React.FC<Props> = ({ image }) => (
  <Container>
    <Image style={styles.image} source={image} />
  </Container>
);

const styles = StyleSheet.create({
  image: {
    borderRadius: 5,
    height: 200,
    width: null,
    resizeMode: 'cover',
    margin: 8,
  },
});

export { MockCard };
