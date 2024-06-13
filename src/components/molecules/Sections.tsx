import React from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';
import { Container } from 'components/atoms';
import { SMALL_HEADER_HEIGHT, Section } from 'utils';
import { Headers } from './Headers';
import { Pages } from './Pages';

interface Props {
  sections: Section[];
}

const Sections: React.FC<Props> = ({ sections }) => {
  const { width, height } = useWindowDimensions();

  const x = useSharedValue(0);
  const y = useSharedValue(0);

  const onScrollX = useAnimatedScrollHandler({
    onScroll: (event) => {
      x.value = event.contentOffset.x;
    },
  });

  const onScrollY = useAnimatedScrollHandler({
    onScroll: (event) => {
      y.value = event.contentOffset.y;
    },
  });

  return (
    <Container flex>
      <Headers sections={sections} x={x} y={y} />
      <Pages sections={sections} x={x} y={y} />
      <Animated.ScrollView
        style={StyleSheet.absoluteFill}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        contentContainerStyle={{ width: width * sections.length }}
        onScroll={onScrollX}
        snapToInterval={width}
        decelerationRate="fast"
        horizontal
        bounces={false}
      >
        <Animated.ScrollView
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          contentContainerStyle={{ height: height + height - SMALL_HEADER_HEIGHT }}
          onScroll={onScrollY}
          decelerationRate="fast"
          bounces={false}
        />
      </Animated.ScrollView>
    </Container>
  );
};

export { Sections };
