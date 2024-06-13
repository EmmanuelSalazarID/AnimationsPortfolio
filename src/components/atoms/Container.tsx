import React, { ForwardedRef, forwardRef, ReactNode } from 'react';
import {
  View, StyleSheet, ViewStyle, StyleProp, KeyboardAvoidingView, Platform, ViewProps,
} from 'react-native';

type SpaceTypes = 'around' | 'between' | 'evenly';

export interface ContainerProps {
  row?: boolean;
  flex?: boolean | number;
  center?: boolean;
  crossCenter?: boolean;
  middle?: boolean;
  space?: SpaceTypes;
  width?: ViewStyle['width'];
  height?: ViewStyle['height'];
  circle?: boolean;
  backgroundColor?: ViewStyle['backgroundColor'];
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
  useKeyboard?: boolean;
  alignment?: 'start' | 'end';
  crossAlignment?: 'start' | 'end';
  keyboardVerticalOffset?: number;
  onLayout?: ViewProps['onLayout'];
  pointerEvents?: ViewProps['pointerEvents'];
}

const Container = forwardRef(({
  row,
  flex,
  center,
  crossCenter,
  alignment,
  crossAlignment,
  middle,
  space,
  width,
  height,
  circle,
  backgroundColor,
  style,
  useKeyboard,
  keyboardVerticalOffset = 50,
  children,
  onLayout,
  pointerEvents,
}: ContainerProps, ref: ForwardedRef<any>) => {
  const {
    blockStyle, rowStyle, centerStyle, middleStyle, crossCenterStyle,
  } = styles;

  let justifyContentSpace: ViewStyle['justifyContent'];

  if (space) {
    switch (space) {
      case 'around':
        justifyContentSpace = 'space-around';
        break;
      case 'between':
        justifyContentSpace = 'space-between';
        break;
      default:
        justifyContentSpace = 'space-evenly';
        break;
    }
  }

  const styleBlock: ViewStyle[] = [
    blockStyle,
    row ? rowStyle : {},
    flex ? { flex: flex === true ? 1 : flex } : {},
    alignment ? { justifyContent: `flex-${alignment}` } : {},
    crossAlignment ? { alignItems: `flex-${crossAlignment}` } : {},
    center ? centerStyle : {},
    crossCenter ? crossCenterStyle : {},
    middle ? middleStyle : {},
    space ? { justifyContent: justifyContentSpace } : {},
    width ? { width } : {},
    height ? { height } : {},
    circle
      ? {
        borderRadius:
          typeof width === 'number' && typeof height === 'number'
            ? (width + height)
            : 1000,
        overflow: 'hidden',
      }
      : {},
    backgroundColor ? { backgroundColor } : {},
  ];

  if (useKeyboard && Platform.OS === 'ios') {
    return (
      <KeyboardAvoidingView
        ref={ref}
        style={[styleBlock, style]}
        collapsable={false}
        behavior="padding"
        keyboardVerticalOffset={keyboardVerticalOffset}
      >
        {children}
      </KeyboardAvoidingView>
    );
  }

  return (
    <View ref={ref} style={[styleBlock, style]} collapsable={false} onLayout={onLayout} pointerEvents={pointerEvents}>
      {children}
    </View>
  );
});

const styles = StyleSheet.create({
  blockStyle: {
    flexDirection: 'column',
  },
  rowStyle: {
    flexDirection: 'row',
  },
  centerStyle: {
    alignItems: 'center',
  },
  middleStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  crossCenterStyle: {
    justifyContent: 'center',
  },
});

export { Container };
