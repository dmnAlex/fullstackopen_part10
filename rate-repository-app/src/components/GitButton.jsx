import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Subheading from './Subheading';
import theme from '../theme';
import * as Linking from 'expo-linking';

const GitButton = ({ url }) => {
  const onPress = () => {
    Linking.openURL(url);
  };

  return (
    <Pressable onPress={onPress}>
      <Subheading style={styles.button}>Open in Github</Subheading>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    color: 'white',
    borderRadius: 4,
    backgroundColor: theme.colors.primary,
    margin: 10,
    paddingVertical: 10,
    alignSelf: 'stretch',
    textAlign: 'center',
  },
});

export default GitButton;

