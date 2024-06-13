import React, { ReactNode, useCallback, useRef } from 'react';
import {
  ColorValue,
  Platform, Pressable, TouchableOpacity, View, ViewStyle,
} from 'react-native';
import Theme from 'theme';

export interface TouchableProps {
  children?: ReactNode;
  onPress: () => void;
  onPressIn?: () => void;
  onPressOut?: () => void;
  onLongPress?: () => void;
  disabled?: boolean;
  marginVertical?: ViewStyle['marginVertical'];
  marginHorizontal?: ViewStyle['marginHorizontal'];
  marginLeft?: ViewStyle['marginLeft'];
  marginRight?: ViewStyle['marginRight'];
  marginTop?: ViewStyle['marginTop'];
  marginBottom?: ViewStyle['marginBottom'];
  rounded?: boolean;
  flex?: boolean | number;
  effectEnable?: boolean;
  opacityEffect?: boolean;
  androidRippleColor?: ColorValue;
  hitSlop?: number;
}

const Touchable: React.FC<TouchableProps> = ({
  children,
  onPress,
  onPressIn,
  onPressOut,
  onLongPress,
  disabled,
  rounded,
  marginBottom,
  flex,
  marginTop,
  marginRight,
  marginLeft,
  marginHorizontal,
  marginVertical,
  effectEnable = true,
  opacityEffect,
  androidRippleColor = Theme.Colors.Black,
  hitSlop,
}: TouchableProps) => {
  const longPressActivated = useRef<boolean>(false);

  const handlePress = useCallback(() => {
    if (onLongPress && longPressActivated.current) {
      longPressActivated.current = false;
      return;
    }

    onPress();
  }, [onLongPress, onPress]);

  const handleLongPress = useCallback(() => {
    if (onLongPress) {
      longPressActivated.current = true;
      onLongPress();
    }
  }, [onLongPress]);

  return (
    Platform.OS === 'ios' || opacityEffect ? (
      <TouchableOpacity
        onPress={handlePress}
        disabled={disabled}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        onLongPress={handleLongPress}
        hitSlop={{
          bottom: hitSlop, left: hitSlop, right: hitSlop, top: hitSlop,
        }}
        activeOpacity={effectEnable ? 0.2 : 1}
        style={{
          flex: typeof flex === 'boolean' && flex ? 1 : flex || 0,
          marginVertical,
          marginHorizontal,
          marginLeft,
          marginRight,
          marginTop,
          marginBottom,
          zIndex: 2,
        }}
      >
        <View style={{ flex: typeof flex === 'boolean' && flex ? 1 : flex || 0 }}>
          {children}
        </View>
      </TouchableOpacity>
    ) : (
      <Pressable
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        onLongPress={onLongPress}
        disabled={disabled}
        hitSlop={hitSlop}
        android_ripple={effectEnable ? {
          borderless: rounded,
          color: androidRippleColor,
          foreground: true,
        } : null}
        style={{
          flex: typeof flex === 'boolean' && flex ? 1 : flex || 0,
          marginVertical,
          marginHorizontal,
          marginLeft,
          marginRight,
          marginTop,
          marginBottom,
          zIndex: 2,
        }}
      >
        <View
          style={{ backgroundColor: 'transparent', flex: typeof flex === 'boolean' && flex ? 1 : flex || 0 }}
        >
          {children}
        </View>
      </Pressable>
    )
  );
};

export { Touchable };
