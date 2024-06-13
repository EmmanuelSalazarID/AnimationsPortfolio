import React from 'react';
import { Image, ImageSourcePropType, StyleSheet } from 'react-native';
import { Container, Text } from 'components';

interface Props {
  image: ImageSourcePropType;
}

const MockEntry: React.FC<Props> = ({ image }) => (
  <Container row>
    <Container style={styles.leftCell}>
      <Image style={styles.image} source={image} />
    </Container>
    <Container style={styles.rightCell}>
      <Text text="React Native enables interactive animation" />
      <Text text="3K Containers - 5 days" textColor="gray" />
    </Container>
  </Container>
);

const styles = StyleSheet.create({
  leftCell: {
    padding: 8,
  },
  rightCell: {
    paddingVertical: 8,
    paddingRight: 8,
    justifyContent: 'center',
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 5,
  },
});

export { MockEntry };
