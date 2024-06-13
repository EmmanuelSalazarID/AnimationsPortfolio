import React from 'react';
import { StyleSheet } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { Container, Text, Touchable } from 'components/atoms';

interface Props {
  label: string;
  onPress: () => void;
}

const ButtonField: React.FC<Props> = ({ label, onPress }) => (
  <Touchable onPress={onPress}>
    <Container row center space="between" style={styles.container}>
      <Text text={label} fontSize={16} fontWeight="500" />
      <Ionicon name="chevron-forward" size={25} />
    </Container>
  </Touchable>
);

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
  },
});

export { ButtonField };
