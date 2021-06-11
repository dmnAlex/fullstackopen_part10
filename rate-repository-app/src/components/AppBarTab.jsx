import React from 'react';
import Constants from 'expo-constants';
import Subheading from './Subheading';
import { View, StyleSheet, Pressable } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.textPrimary,
    padding: 5
  },
  text: {
    color: 'white',
  },
});

const AppBarTab = () => {
  return (
    <Pressable>
      <View style={styles.container}>
        <Subheading style={styles.text}>Repositories</Subheading>
      </View>
    </Pressable>
  );
};

export default AppBarTab;