import React from 'react';
import { View } from 'react-native';
import AppBar from './AppBar';
import RepositoryList from './RepositoryList';

const Main = () => (
  <View >
    <AppBar />
    <RepositoryList />
  </View>
);

export default Main;