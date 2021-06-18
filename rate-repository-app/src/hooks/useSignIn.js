import { useApolloClient, useMutation } from '@apollo/client';
import { useHistory } from 'react-router';
import useAuthStorage from '../hooks/useAuthStorage';
import { AUTHORIZE_USER } from '../graphql/mutations';

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHORIZE_USER);
  const history = useHistory();
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const signIn = async ({ username, password }) => {
    const { data } = await mutate({ variables: { username, password } });

    await authStorage.setAccessToken(data.authorize.accessToken);
    apolloClient.resetStore();
    history.push('/');
  };

  return [signIn, result];
};

export default useSignIn;