import React from 'react';
import { useWindowDimensions } from 'react-native';
import { Container, MockCard, MockEntry } from 'components';
import { SMALL_HEADER_HEIGHT, Section } from 'utils';
import Animated, { SharedValue, useAnimatedStyle } from 'react-native-reanimated';

interface Props {
  sections: Section[];
  x: SharedValue<number>;
  y: SharedValue<number>;
}

const Pages: React.FC<Props> = ({ sections, x, y }) => {
  const { width, height } = useWindowDimensions();

  const containerStyle = useAnimatedStyle(() => ({
    flexDirection: 'row',
    transform: [{ translateX: -x.value }, { translateY: -y.value }],
  }));

  return (
    <Animated.View style={containerStyle}>
      {
        sections.map(({ image }, key) => (
          <Container key={key} width={width} height={height - SMALL_HEADER_HEIGHT} backgroundColor="white">
            <MockEntry image={image} />
            <MockCard image={image} />
            <MockEntry image={image} />
            <MockEntry image={image} />
            <MockEntry image={image} />
            <MockEntry image={image} />
          </Container>
        ))
      }
    </Animated.View>
  );
};

export { Pages };
