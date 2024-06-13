import React from 'react';
import { SafeArea } from 'components';
import YoutubeTransitionScreen from './YoutubeTransitionScreen';

const YoutubeTransitionController: React.FC = () => (
  <SafeArea bottomSafeArea={false}>
    <YoutubeTransitionScreen />
  </SafeArea>
);

export default YoutubeTransitionController;
