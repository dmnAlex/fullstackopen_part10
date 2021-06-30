import React from 'react';
import useSignIn from '../../hooks/useSignIn';
import useSignUp from '../../hooks/useSignUp';
import SignUpContainer from './SignUpContainer';

const SignUp = () => {
  const [signUp] = useSignUp();
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;
    const user = { username, password };

    try {
      await signUp(user);
      await signIn(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SignUpContainer onSubmit={onSubmit} />
  );
};

export default SignUp;