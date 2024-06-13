import React, { useState } from 'react';
import {
  Animated, Image, ImageResizeMode, ImageSourcePropType, ImageStyle, RegisteredStyle, StyleSheet, View, ViewStyle,
} from 'react-native';
import { Container } from './Container';

interface Props {
  width?: ImageStyle['width'];
  height?: ImageStyle['height'];
  borderRadius?: ImageStyle['borderRadius'];
  source: ImageSourcePropType;
  resizeMode?: ImageResizeMode;
  style?: ViewStyle | RegisteredStyle<StyleSheet.AbsoluteFillStyle> | ViewStyle[];
  fadeIn?: boolean;
}

const FadeInImage: React.FC<Props> = ({
  source,
  width,
  height,
  borderRadius,
  resizeMode,
  style,
  fadeIn = true,
}: Props) => {
  const [opacity] = useState<Animated.Value>(new Animated.Value(0));

  const onLoad = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={[{ width, height, borderRadius }, style, { overflow: 'hidden' }]}>
      <Container>
        {fadeIn ? (
          <Animated.Image
            onLoadEnd={onLoad}
            source={source}
            style={{
              width: '100%', height: '100%', borderRadius, opacity,
            }}
            resizeMode={resizeMode}
          />
        ) : (
          <Image
            source={source}
            style={{
              width: '100%', height: '100%', borderRadius,
            }}
            resizeMode={resizeMode}
          />
        )}
      </Container>
    </View>
  );
};

export { FadeInImage };
