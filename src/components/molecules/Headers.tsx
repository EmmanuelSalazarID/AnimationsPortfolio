import React from 'react';
import { useWindowDimensions } from 'react-native';
import { Container } from 'components/atoms';
import { MEDIUM_HEADER_HEIGHT, SMALL_HEADER_HEIGHT, Section } from 'utils';
import Animated, {
  Extrapolation, SharedValue, interpolate, useAnimatedStyle,
} from 'react-native-reanimated';
import { Header } from './Header';
import { Label } from './Label';
import { Cursor } from './Cursor';

interface Props {
  sections: Section[];
  x: SharedValue<number>;
  y: SharedValue<number>;
}

const backgroundColor = '#343761';

const Headers: React.FC<Props> = ({ sections, x, y }) => {
  const { width, height } = useWindowDimensions();

  const FULL_HEADER_HEIGHT = height / sections.length;

  return (
    <Container style={{ height, width: sections.length * width, backgroundColor }}>
      {
        sections.map((section, key) => (
          <AnimatedHeader
            key={key}
            section={section}
            index={key}
            fullHeaderHeight={FULL_HEADER_HEIGHT}
            x={x}
            y={y}
          />
        ))
      }
      {
        sections.map((section, key) => (
          <AnimatedHeader
            key={key}
            section={section}
            index={key}
            fullHeaderHeight={FULL_HEADER_HEIGHT}
            x={x}
            y={y}
            label
          />
        ))
      }
      {
        sections.map((_, key) => (
          <Cursor
            key={key}
            index={key}
            x={x}
            y={y}
            fullHeaderHeight={FULL_HEADER_HEIGHT}
          />
        ))
      }
    </Container>
  );
};

interface AnimatedHeaderProps {
  section: Section;
  index: number;
  fullHeaderHeight: number;
  x: SharedValue<number>;
  y: SharedValue<number>;
  label?: boolean;
}

const AnimatedHeader: React.FC<AnimatedHeaderProps> = ({
  section,
  index,
  fullHeaderHeight,
  x,
  y,
  label,
}) => {
  const { width, height } = useWindowDimensions();

  const headerStyle = useAnimatedStyle(() => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width,
    height: interpolate(
      y.value,
      [0, height - MEDIUM_HEADER_HEIGHT, height - SMALL_HEADER_HEIGHT],
      [fullHeaderHeight, MEDIUM_HEADER_HEIGHT, SMALL_HEADER_HEIGHT],
    ),
    transform: [
      {
        translateY: interpolate(
          y.value,
          [0, height - MEDIUM_HEADER_HEIGHT],
          [fullHeaderHeight * index, 0],
          Extrapolation.CLAMP,
        ),
      },
      {
        translateX: interpolate(
          y.value,
          [0, height - MEDIUM_HEADER_HEIGHT],
          [x.value, index * width],
          Extrapolation.CLAMP,
        ) + (-x.value),
      },
    ],
  }));

  return (
    <Animated.View
      style={headerStyle}
    >
      {label ? <Label section={section} index={index} x={x} y={y} /> : <Header section={section} />}
    </Animated.View>
  );
};

export { Headers };
