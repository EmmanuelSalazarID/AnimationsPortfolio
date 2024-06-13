import React, { ForwardedRef, ReactNode, forwardRef } from 'react';
import { ColorValue, ViewStyle } from 'react-native';
import Theme from 'theme';
import { Container } from './Container';
import { Touchable } from './Touchable';

interface Props {
  children: ReactNode;
  flex?: boolean | number;
  center?: boolean;
  disabled?: boolean;
  borderRadius?: ViewStyle['borderRadius'];
  padding?: ViewStyle['padding'];
  marginVertical?: ViewStyle['marginVertical'];
  marginHorizontal?: ViewStyle['marginHorizontal'];
  marginTop?: ViewStyle['marginTop'];
  marginBottom?: ViewStyle['marginBottom'];
  marginLeft?: ViewStyle['marginLeft'];
  marginRight?: ViewStyle['marginRight'];
  backgroundColor?: ColorValue;
  disabledEffect?: boolean;
  onPress?: () => void;
}

const Card = forwardRef(({
  children,
  flex,
  center,
  disabled,
  marginVertical,
  marginHorizontal,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  borderRadius = 4,
  padding = 14,
  backgroundColor = Theme.Colors.White,
  disabledEffect = true,
  onPress,
}: Props, ref: ForwardedRef<any>) => (
  <Container
    ref={ref}
    center={center}
    style={[{
      borderRadius: borderRadius || 10,
      overflow: 'hidden',
      padding,
      backgroundColor,
      marginVertical,
      marginHorizontal,
      marginTop,
      marginBottom,
      marginLeft,
      marginRight,
    }]}
  >
    {onPress ? (
      <Touchable
        flex={flex}
        disabled={!onPress || disabled}
        effectEnable={!disabledEffect}
        onPress={onPress || (() => {})}
      >
        {children}
      </Touchable>
    ) : children}
  </Container>
));

export { Card };
