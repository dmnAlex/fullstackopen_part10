import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
import { Route, Switch, Redirect } from 'react-router-native';
import SignIn from './SignIn';
import theme from '../theme';
import RepositoryView from './RepositoryView';
import Review from './Review';

const Main = () => (
  <View style={styles.container}>
    <AppBar />
    <Switch>
      <Route path='/repository/:id'>
        <RepositoryView />
      </Route>
      <Route path='/sign' exact>
        <SignIn />
      </Route>
      <Route path='/review'>
        <Review />
      </Route>
      <Route path='/' exact>
        <RepositoryList />
      </Route>
      <Redirect to='/' />
    </Switch>
  </View>
);

export default Main;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.mainBackground,
    flexGrow: 1,
    flexShrink: 1,
  },
});