import React from 'react';
import { Container, Sections } from 'components';
import { sections } from 'utils/sections';

const FlutterAnimationsScreen: React.FC = () => (
  <Container flex>
    <Sections sections={sections} />
  </Container>
);

export default FlutterAnimationsScreen;
