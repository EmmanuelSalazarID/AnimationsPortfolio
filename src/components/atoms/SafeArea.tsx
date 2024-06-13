import React, { ReactNode } from 'react';
import {
  View, SafeAreaView, StatusBar, StyleSheet, ViewStyle, StatusBarStyle, Animated,
} from 'react-native';
import Theme from 'theme';

export type BarStyle = 'light' | 'dark';

interface Props {
  topSafeArea?: boolean;
  bottomSafeArea?: boolean;
  safeBGColor?: ViewStyle['backgroundColor'];
  bottomBGColor?: ViewStyle['backgroundColor'];
  topBGColor?: ViewStyle['backgroundColor'];
  children: ReactNode;
  barStyle?: BarStyle;
  backgroundColor?: ViewStyle['backgroundColor'];
  statusBarColor?: ViewStyle['backgroundColor'];
  hiddenStatusBar?: boolean;
}

const SafeArea: React.FC<Props> = ({
  topSafeArea = true,
  bottomSafeArea = true,
  safeBGColor,
  children,
  barStyle,
  backgroundColor,
  bottomBGColor,
  topBGColor,
  statusBarColor,
  hiddenStatusBar,
}: Props) => {
  const renderChildren = () => (
    <Animated.View style={[styles.childrenContainerStyle,
      { backgroundColor: backgroundColor || Theme.Colors.White }]}
    >
      {children}

    </Animated.View>
  );

  const renderStatusBar = () => {
    let barStyleValue: StatusBarStyle = 'default';

    switch (barStyle) {
      case 'light':
        barStyleValue = 'light-content';
        break;
      case 'dark':
        barStyleValue = 'dark-content';
        break;
      default:
        barStyleValue = 'dark-content';
        break;
    }

    return (
      <StatusBar
        translucent={!topSafeArea}
        backgroundColor={!topSafeArea
          ? statusBarColor || 'transparent'
          : topBGColor || safeBGColor || Theme.Colors.White}
        barStyle={barStyleValue}
        hidden={hiddenStatusBar}
      />
    );
  };

  const renderComponent = () => (
    <View style={styles.flexStyle}>
      {renderStatusBar()}
      {renderChildren()}
    </View>
  );

  const renderContainer = () => (
    <View style={styles.flexStyle}>
      {topSafeArea && (
        <SafeAreaView style={{
          backgroundColor: topBGColor
          || safeBGColor
          || Theme.Colors.White,
        }}
        />
      )}
      {renderComponent()}
      {bottomSafeArea && (
        <SafeAreaView style={{
          backgroundColor: bottomBGColor
          || safeBGColor
          || Theme.Colors.White,
        }}
        />
      )}
    </View>
  );

  return <View style={styles.flexStyle}>{renderContainer()}</View>;
};

const styles = StyleSheet.create({
  flexStyle: {
    flex: 1,
  },
  childrenContainerStyle: {
    flex: 1,
  },
});

export { SafeArea };
