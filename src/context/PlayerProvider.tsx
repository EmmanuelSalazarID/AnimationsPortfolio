import * as React from 'react';
import { View, StyleSheet, useWindowDimensions } from 'react-native';
import Animated, {
  interpolate, useAnimatedStyle, useSharedValue, withTiming,
} from 'react-native-reanimated';
import { VideoModal } from 'components/organisms/VideoModal';
import { Video } from 'utils/videos';
import PlayerContext from './PlayerContext';

type PlayerProviderProps = {
  children: React.ReactNode,
};

const PlayerProvider: React.FC<PlayerProviderProps> = ({ children }) => {
  const animation = useSharedValue(0);
  const { height } = useWindowDimensions();

  const [video, setVideo] = React.useState<Video | null>(null);

  const toggleVideo = React.useCallback(() => {
    animation.value = withTiming(1, { duration: 300 });
  }, [animation]);

  React.useEffect(() => {
    if (video) toggleVideo();
    else animation.value = 0;
  }, [animation, toggleVideo, video]);

  const value = React.useMemo(() => ({ video, setVideo }), [video]);

  const style = useAnimatedStyle(() => ({
    transform: [{ translateY: interpolate(animation.value, [0, 1], [height, 0]) }],
  }));

  return (
    <PlayerContext.Provider value={value}>
      <View style={{ flex: 1 }}>
        <View style={StyleSheet.absoluteFill}>
          {children}
        </View>
        <Animated.View style={style}>
          {
            video && <VideoModal {...{ video }} />
          }
        </Animated.View>
      </View>
    </PlayerContext.Provider>
  );
};

export default PlayerProvider;
