import React, { useEffect, useState } from 'react';
import Constants from 'expo-constants';
import Subheading from '../utils/Subheading';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import theme from '../../theme';
import { Link, useHistory } from 'react-router-native';
import { useApolloClient } from '@apollo/client';
import useAuthStorage from '../../hooks/useAuthStorage';
import useUser from '../../hooks/useUser';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.textPrimary,
    padding: 5,
  },
  subcontainer: {
    flexDirection: 'row',
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
  const { authorizedUser } = useUser();
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const history = useHistory();
  const [isAuthorized, setIsAuthorized] = useState(false);

  const signOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
    history.push('/');
  };

  useEffect(() => {
    setIsAuthorized(authorizedUser !== null);
  }, [authorizedUser]);

  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.scrollview}>
        <View>
          <Link to='/' component={TouchableOpacity}>
            <Subheading style={styles.text}>Repositories</Subheading>
          </Link>
        </View>
        {isAuthorized
          ? (
            <View style={styles.subcontainer}>
              <Link to='/review' component={TouchableOpacity}>
                <Subheading style={styles.text}>Create a review</Subheading>
              </Link>
              <Link to='/myreviews' component={TouchableOpacity}>
                <Subheading style={styles.text}>My reviews</Subheading>
              </Link>
              <TouchableOpacity onPress={signOut}>
                <Subheading style={styles.text}>Sign Out</Subheading>
              </TouchableOpacity>
            </View>
          )
          : (
            <View style={styles.subcontainer}>
              <Link to='/signin' component={TouchableOpacity}>
                <Subheading style={styles.text}>Sign In</Subheading>
              </Link>
              <Link to='/signup' component={TouchableOpacity}>
                <Subheading style={styles.text}>Sign Up</Subheading>
              </Link>
            </View>
          )}
      </ScrollView>
    </View>
  );
};

export default AppBarTab;