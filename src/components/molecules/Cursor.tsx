import React from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';
import { Container } from 'components';
import {
  CURSOR_WIDTH, MEDIUM_HEADER_HEIGHT, PADDING, SMALL_HEADER_HEIGHT,
} from 'utils';
import Animated, {
  Extrapolation, SharedValue, interpolate, useAnimatedStyle,
} from 'react-native-reanimated';

interface Props {
  index: number;
  x: SharedValue<number>;
  y: SharedValue<number>;
  fullHeaderHeight: number;
}

const Cursor: React.FC<Props> = ({
  index, x, y, fullHeaderHeight,
}) => {
  const { width, height } = useWindowDimensions();

  const style = useAnimatedStyle(() => {
    const headerHeight = interpolate(
      y.value,
      [0, height - MEDIUM_HEADER_HEIGHT, height - SMALL_HEADER_HEIGHT],
      [fullHeaderHeight, MEDIUM_HEADER_HEIGHT, SMALL_HEADER_HEIGHT],
    );

    const translateX1 = interpolate(
      y.value,
      [0, height - MEDIUM_HEADER_HEIGHT],
      [-width / 2 + CURSOR_WIDTH / 2 + 21, 0],
      Extrapolation.CLAMP,
    );
    const translateX2 = interpolate(
      y.value,
      [0, height - MEDIUM_HEADER_HEIGHT, height - SMALL_HEADER_HEIGHT],
      [0, (width / 2) * index, (CURSOR_WIDTH + 21) * index - width / 4 + PADDING * 2],
      Extrapolation.CLAMP,
    );

    return {
      position: 'absolute',
      top: 0,
      left: 0,
      width,
      height: headerHeight,
      opacity: interpolate(
        x.value,
        [width * (index - 1), width * index, width * (index + 1)],
        [0.5, 1, 0.5],
        Extrapolation.CLAMP,
      ),
      transform: [
        {
          translateY: interpolate(
            y.value,
            [0, height - MEDIUM_HEADER_HEIGHT],
            [headerHeight * index, 0],
            Extrapolation.CLAMP,
          ),
        },
        {
          translateX: translateX1 + translateX2,
        },
      ],
    };
  });

  return (
    <Animated.View style={style}>
      <Container flex width={width} middle>
        <Container style={styles.cursor} />
      </Container>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  cursor: {
    top: 30,
    width: CURSOR_WIDTH,
    height: 5,
    backgroundColor: 'white',
  },
});

export { Cursor };
