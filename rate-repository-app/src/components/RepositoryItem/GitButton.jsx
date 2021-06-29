import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Subheading from '../utils/Subheading';
import theme from '../../theme';
import * as WebBrowser from 'expo-web-browser';

const GitButton = ({ url }) => {
  const handlePress = () => {
    WebBrowser.openBrowserAsync(url);
  };

  return (
    <Pressable onPress={handlePress}>
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

