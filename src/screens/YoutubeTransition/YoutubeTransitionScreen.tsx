import React from 'react';
import { Container, VideoHome } from 'components';
import { PlayerProvider } from 'context';

const YoutubeTransitionScreen: React.FC = () => (
  <Container flex>
    <PlayerProvider>
      <VideoHome />
    </PlayerProvider>
  </Container>
);

export default YoutubeTransitionScreen;
