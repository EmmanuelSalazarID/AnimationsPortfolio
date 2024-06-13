import React from 'react';
import { Platform, StyleSheet, useWindowDimensions } from 'react-native';
import Animated, {
  Extrapolation, SharedValue, interpolate, useAnimatedStyle,
} from 'react-native-reanimated';
import { MEDIUM_HEADER_HEIGHT, PADDING, Section } from 'utils';

interface Props {
  section: Section;
  index: number;
  x: SharedValue<number>;
  y: SharedValue<number>;
}

const Label: React.FC<Props> = ({
  section, index, x, y,
}) => {
  const { width, height } = useWindowDimensions();

  const charWidth = Platform.OS === 'ios' ? 21 : 19;

  const opacityStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      x.value,
      [width * (index - 1), width * index, width * (index + 1)],
      [0.5, 1, 0.5],
      Extrapolation.CLAMP,
    ),
  }));

  const labelWidth = useAnimatedStyle(() => ({
    width: interpolate(
      y.value,
      [0, height - MEDIUM_HEADER_HEIGHT],
      [section.title.length * charWidth, width],
      Extrapolation.CLAMP,
    ),
    color: 'white',
    textAlign: 'center',
    fontSize: 32,
  }));

  return (
    <Animated.View style={[styles.labelContainer, opacityStyle]}>
      <Animated.Text style={labelWidth}>{section.title.toUpperCase()}</Animated.Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  labelContainer: {
    ...StyleSheet.absoluteFillObject,
    padding: PADDING,
    justifyContent: 'center',
  },
});

export { Label };
