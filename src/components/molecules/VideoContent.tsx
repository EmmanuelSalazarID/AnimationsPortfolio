import { Container, Icon, Text } from 'components/atoms';
import React from 'react';
import { Image, ScrollView, StyleSheet } from 'react-native';
import { Video, videos } from 'utils';

interface Props {
  video: Video,
}

const VideoContent: React.FC<Props> = ({ video }) => (
  <ScrollView>
    <Container style={styles.content}>
      <Text text={video.title} fontSize={16} marginBottom={8} />
      <Text text={`${video.views} Containers`} textColor="gray" marginBottom={16} />
      <Container style={styles.icons}>
        <Icon name="thumbs-up" label="10" />
        <Icon name="thumbs-down" label="0" />
        <Icon name="share" label="Share" />
        <Icon name="arrow-down-circle" label="Download" />
        <Icon name="list" label="Save" />
      </Container>
    </Container>
    <Container style={styles.upNext}>
      <Text text="Up next" fontWeight="bold" textColor="gray" />
      {
            videos.map((v) => (
              <Container key={v.id} style={styles.thumbnail}>
                <Image source={v.thumbnail} style={styles.thumbnailImage} />
                <Container style={styles.thumbnailContent}>
                  <Text text={v.title} fontSize={16} numberOfLines={2} />
                  <Text text={v.username} textColor="gray" />
                </Container>
              </Container>
            ))
          }
    </Container>
  </ScrollView>
);

const styles = StyleSheet.create({
  content: {
    padding: 16,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  upNext: {
    borderTopWidth: 1,
    borderColor: 'lightgray',
    paddingTop: 8,
    padding: 16,
  },
  thumbnail: {
    flexDirection: 'row',
    marginTop: 16,
  },
  thumbnailImage: {
    height: 100,
    width: 100,
  },
  thumbnailContent: {
    paddingTop: 8,
    paddingLeft: 8,
    paddingBottom: 8,
    flex: 1,
    flexWrap: 'wrap',
  },
});

export { VideoContent };
