import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import FormikTextInput from '../utils/FormikTextInput';
import Subheading from '../utils/Subheading';
import theme from '../../theme';

const SignUpForm = ({ onSubmit }) => {

  return (
    <View style={styles.container}>
      <FormikTextInput name='username' placeholder='Username' />
      <FormikTextInput name='password' placeholder='Password' secureTextEntry />
      <FormikTextInput name='confirmation' placeholder='Password confirmation' secureTextEntry />
      <TouchableOpacity onPress={onSubmit} testID='submitButton'>
        <Subheading style={styles.button}>Sign up</Subheading>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpForm;

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