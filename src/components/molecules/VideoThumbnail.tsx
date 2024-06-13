import React from 'react';
import {
  Image, StyleSheet, TouchableWithoutFeedback, View,
} from 'react-native';
import { PlayerContext } from 'context';
import { Container, Text } from 'components/atoms';
import { Video } from 'utils';
import { formatDistanceToNow } from 'date-fns';

interface Props {
  video: Video;
}

const VideoThumbnail: React.FC<Props> = ({ video }) => (
  <PlayerContext.Consumer>
    {
      ({ setVideo }) => (
        <TouchableWithoutFeedback onPress={() => setVideo(video)}>
          <View>
            <Image source={video.thumbnail} style={styles.thumbnail} />
            <Container style={styles.description}>
              <Image source={video.avatar} style={styles.avatar} />
              <Container>
                <Text text={video.title} fontSize={16} />
                <Text
                  text={`${video.username} • ${video.views} Containers • ${formatDistanceToNow(
                    video.published,
                    { addSuffix: true },
                  )}`}
                  textColor="gray"
                />
              </Container>
            </Container>
          </View>
        </TouchableWithoutFeedback>
      )
    }
  </PlayerContext.Consumer>
);

const styles = StyleSheet.create({
  thumbnail: {
    width: '100%',
    height: 200,
  },
  description: {
    flexDirection: 'row',
    margin: 16,
    marginBottom: 32,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 16,
  },
});

export { VideoThumbnail };
