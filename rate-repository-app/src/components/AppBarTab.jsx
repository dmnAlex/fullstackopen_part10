import React, { useEffect, useState } from 'react';
import Constants from 'expo-constants';
import Subheading from './Subheading';
import { View, StyleSheet, ScrollView, Pressable } from 'react-native';
import theme from '../theme';
import { Link, useHistory } from 'react-router-native';
import { useApolloClient, useQuery } from '@apollo/client';
import { USER_INFO } from '../graphql/queries';
import useAuthStorage from '../hooks/useAuthStorage';

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
  const { data } = useQuery(USER_INFO);
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
    setIsAuthorized(data && data.authorizedUser !== null);
  }, [data]);

  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.scrollview}>
        <Link to='/'>
          <Subheading style={styles.text}>Repositories</Subheading>
        </Link>
        {isAuthorized
          ? (
            <Pressable onPress={signOut}>
              <Subheading style={styles.text}>Sign Out</Subheading>
            </Pressable>
          )
          : (
            <Link to='/sign'>
              <Subheading style={styles.text}>Sign In</Subheading>
            </Link>
          )}
      </ScrollView>
    </View>
  );
};

export default AppBarTab;