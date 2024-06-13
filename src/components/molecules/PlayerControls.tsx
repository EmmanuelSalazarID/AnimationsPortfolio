import React from 'react';
import {
  Dimensions, StyleSheet, TouchableWithoutFeedback, View,
} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { Container, Text } from 'components';
import { PlayerContext } from 'context';

const { width } = Dimensions.get('window');
export const PLACEHOLDER_WIDTH = width / 3;

interface Props {
  title: string,
  onPress: () => void,
}

const PlayerControls: React.FC<Props> = ({ title, onPress }) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={styles.container}>
      <Container style={styles.placeholder} />
      <Container style={styles.title}>
        <Container middle flex>
          <Text text={title} numberOfLines={3} />
        </Container>
      </Container>
      <Ionicon style={styles.icon} name="play" />
      <PlayerContext.Consumer>
        {
          ({ setVideo }) => (
            <TouchableWithoutFeedback onPress={() => setVideo(null)}>
              <Ionicon style={styles.icon} name="close" />
            </TouchableWithoutFeedback>
          )
        }

      </PlayerContext.Consumer>
    </View>
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    flexWrap: 'wrap',
    paddingLeft: 8,
  },
  placeholder: {
    width: PLACEHOLDER_WIDTH,
  },
  icon: {
    fontSize: 24,
    color: 'gray',
    padding: 8,
  },
});

export { PlayerControls };
