import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Text } from 'components';
import Ionicon from 'react-native-vector-icons/Ionicons';

interface Props {
  name: string;
  label: string;
}

const Icon: React.FC<Props> = ({ name, label }) => (
  <Container style={styles.container}>
    <Ionicon style={styles.icon} name={name} />
    <Text text={label} textAlign="center" textColor="gray" marginTop={8} />
  </Container>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  icon: {
    fontSize: 24,
    color: 'gray',
  },
});

export { Icon };
