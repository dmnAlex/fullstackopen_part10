import React, { useEffect, useState } from 'react';
import Constants from 'expo-constants';
import Subheading from '../utils/Subheading';
import { View, StyleSheet, ScrollView, Pressable } from 'react-native';
import theme from '../../theme';
import { Link, useHistory } from 'react-router-native';
import { useApolloClient, useQuery } from '@apollo/client';
import { USER_INFO } from '../../graphql/queries';
import useAuthStorage from '../../hooks/useAuthStorage';

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
        <View>
          <Link to='/'>
            <Subheading style={styles.text}>Repositories</Subheading>
          </Link>
        </View>
        {isAuthorized
          ? (
            <View style={styles.subcontainer}>
              <Link to='/review'>
                <Subheading style={styles.text}>Create a review</Subheading>
              </Link>
              <Pressable onPress={signOut}>
                <Subheading style={styles.text}>Sign Out</Subheading>
              </Pressable>
            </View>
          )
          : (
            <View>
              <Link to='/sign'>
                <Subheading style={styles.text}>Sign In</Subheading>
              </Link>
            </View>
          )}
      </ScrollView>
    </View>
  );
};

export default AppBarTab;