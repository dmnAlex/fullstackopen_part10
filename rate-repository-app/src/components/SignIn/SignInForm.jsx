import React from 'react';
import { Pressable, View, StyleSheet } from 'react-native';
import FormikTextInput from '../utils/FormikTextInput';
import Subheading from '../utils/Subheading';
import theme from '../../theme';

const SignInForm = ({ onSubmit }) => {

  return (
    <View style={styles.container}>
      <FormikTextInput name='username' placeholder='Username' testID='usernameField' />
      <FormikTextInput name='password' placeholder='Password' secureTextEntry testID='passwordField' />
      <Pressable onPress={onSubmit} testID='submitButton'>
        <Subheading style={styles.button}>Sign in</Subheading>
      </Pressable>
    </View>
  );
};

export default SignInForm;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  button: {
    height: 40,
    margin: 10,
    borderRadius: 4,
    backgroundColor: theme.colors.primary,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',
  },
});