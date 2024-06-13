import React from 'react';
import { ScrollView } from 'react-native';
import { VideoThumbnail } from 'components/molecules';
import { videos } from 'utils';

const VideoHome: React.FC = () => (
  <ScrollView>
    {
          videos.map((video) => (
            <VideoThumbnail key={video.id} {...{ video }} />
          ))
        }
  </ScrollView>
);

export { VideoHome };
