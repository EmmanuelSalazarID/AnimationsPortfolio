import React from 'react';
import { Image, StyleSheet, useWindowDimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Container } from 'components';
import { Section } from 'utils';

interface Props {
  section: Section;
}

const Header: React.FC<Props> = ({ section }) => {
  const { width } = useWindowDimensions();

  const colors = [section.leftColor, section.rightColor];

  return (
    <Container flex width={width}>
      <Image source={section.image} style={styles.image} />
      <LinearGradient
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        {...{ colors }}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  image: {
    ...StyleSheet.absoluteFillObject,
    width: null,
    height: null,
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.9,
  },
});

export { Header };
