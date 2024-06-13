import React, { useEffect } from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';
import Video, { ResizeMode } from 'react-native-video';
import { GestureDetector, Gesture, State } from 'react-native-gesture-handler';
import Animated, {
  Extrapolation,
  cancelAnimation, interpolate, useAnimatedStyle, useSharedValue, withSpring,
} from 'react-native-reanimated';
import { type Video as VideoModel } from 'utils';
import { PLACEHOLDER_WIDTH, PlayerControls, VideoContent } from 'components/molecules';

interface Props {
  video: VideoModel,
}

const VideoModal: React.FC<Props> = ({ video }) => {
  const { width, height } = useWindowDimensions();

  const translationY = useSharedValue(0);
  const velocityY = useSharedValue(0);
  const gestureState = useSharedValue<State>(State.UNDETERMINED);
  const offsetY = useSharedValue(0);

  const minHeight = 64;
  const midBound = height - 3 * 54;
  const upperBound = midBound + 54;

  const tap = Gesture.Tap().onEnd(() => {
    if (translationY.value > 0) {
      translationY.value = withSpring(0, {
        damping: 20,
        mass: 1,
        stiffness: 100,
        overshootClamping: false,
        restSpeedThreshold: 0.5,
      }, () => {
        offsetY.value = translationY.value;
      });
    }
  });

  const pan = Gesture.Pan()
    .onBegin(() => {
      cancelAnimation(translationY);
    })
    .onUpdate((event) => {
      translationY.value = offsetY.value + event.translationY;
      velocityY.value = event.velocityY;
      gestureState.value = event.state;
    })
    .onEnd(() => {
      const finalTranslateY = translationY.value + 0.2 * velocityY.value;
      const translationThreshold = height / 2;
      const snapPoint = finalTranslateY < translationThreshold ? 0 : upperBound;
      translationY.value = withSpring(snapPoint, {
        damping: 20,
        mass: 1,
        stiffness: 100,
        overshootClamping: false,
        restSpeedThreshold: 0.5,
      }, () => {
        offsetY.value = translationY.value;
      });
    });

  const composed = Gesture.Race(pan, tap);

  useEffect(() => {
    if (video) {
      translationY.value = withSpring(0, {
        damping: 20,
        mass: 1,
        stiffness: 100,
        overshootClamping: false,
        restSpeedThreshold: 0.5,
      }, () => {
        offsetY.value = translationY.value;
      });
    }
  }, [offsetY, translationY, video]);

  const body = useAnimatedStyle(() => ({
    alignItems: 'center',
    transform: [{ translateY: interpolate(translationY.value, [0, midBound], [0, midBound], Extrapolation.CLAMP) }],
  }));

  const videoInfoStyle = useAnimatedStyle(() => ({
    opacity: interpolate(translationY.value, [0, upperBound - 100], [1, 0], Extrapolation.CLAMP),
  }));

  const videoContentStyle = useAnimatedStyle(() => ({
    backgroundColor: 'white',
    width: interpolate(translationY.value, [0, midBound], [width, width - 16], Extrapolation.CLAMP),
    height: interpolate(translationY.value, [0, midBound], [height, 0], Extrapolation.CLAMP),
  }));

  const videoStyle = useAnimatedStyle(() => ({
    width: interpolate(
      translationY.value,
      [0, midBound, upperBound],
      [width, width - 16, PLACEHOLDER_WIDTH],
      Extrapolation.CLAMP,
    ),
    height: interpolate(translationY.value, [0, midBound], [width / 1.78, minHeight], Extrapolation.CLAMP),
  }));

  const videoContainerStyle = useAnimatedStyle(() => ({
    backgroundColor: 'white',
    elevation: interpolate(translationY.value, [0, midBound], [0, 1], Extrapolation.CLAMP),
    shadowRadius: interpolate(translationY.value, [0, midBound], [0, 2], Extrapolation.CLAMP),
    width: interpolate(translationY.value, [0, midBound], [width, width - 16], Extrapolation.CLAMP),
  }));

  const playerControlOpacity = useAnimatedStyle(() => ({
    opacity: interpolate(translationY.value, [midBound, upperBound], [0, 1], Extrapolation.CLAMP),
  }));

  return (
    <GestureDetector gesture={composed}>
      <Animated.View
        style={body}
      >
        <Animated.View style={[videoContainerStyle, styles.shadow]}>
          <Animated.View style={[playerControlOpacity, StyleSheet.absoluteFill]}>
            <PlayerControls title={video.title} onPress={() => true} />
          </Animated.View>
          <Animated.View style={videoStyle}>
            <Video
              source={video.video}
              style={{ width: '100%', height: '100%' }}
              resizeMode={ResizeMode.COVER}
              paused={false}
            />
          </Animated.View>
        </Animated.View>
        <Animated.View style={videoContentStyle}>
          <Animated.View style={videoInfoStyle}>
            <VideoContent {...{ video }} />
          </Animated.View>
        </Animated.View>
      </Animated.View>
    </GestureDetector>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.18,
    backgroundColor: 'white',
  },
});

export { VideoModal };
