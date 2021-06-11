import React from 'react';
import Constants from 'expo-constants';
import Subheading from './Subheading';
import { View, StyleSheet, ScrollView } from 'react-native';
import theme from '../theme';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.textPrimary,
    padding: 5,
  },
  text: {
    color: 'white',
    padding: 5,
  },
  scrollview: {
    flexDirection: 'row',
  },
});

const AppBarTab = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.scrollview}>
        <Link to='/'>
          <Subheading style={styles.text}>Repositories</Subheading>
        </Link>
        <Link to='/sign'>
          <Subheading style={styles.text}>Sign In</Subheading>
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBarTab;