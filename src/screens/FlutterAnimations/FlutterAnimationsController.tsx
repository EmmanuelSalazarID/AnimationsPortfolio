import React from 'react';
import { SafeArea } from 'components';
import FlutterAnimationsScreen from './FlutterAnimationsScreen';

const FlutterAnimationsController: React.FC = () => (
  <SafeArea topSafeArea={false} bottomSafeArea={false}>
    <FlutterAnimationsScreen />
  </SafeArea>
);

export default FlutterAnimationsController;
