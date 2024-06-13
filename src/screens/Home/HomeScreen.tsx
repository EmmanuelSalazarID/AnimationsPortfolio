import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types';
import { AppStackParams } from 'utils';
import { ButtonField, Container } from 'components';

const HomeScreen: React.FC = () => {
  const { navigate } = useNavigation<NativeStackNavigationProp<AppStackParams>>();

  return (
    <Container flex>
      <ButtonField label="Youtube Transition" onPress={() => navigate('YoutubeTransition')} />
      <ButtonField label="Flutter Animations" onPress={() => navigate('FlutterAnimations')} />
    </Container>
  );
};

export default HomeScreen;
