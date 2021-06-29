import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 10,
    marginBottom: 0,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
  },
  errorBorderColor: {
    borderColor: theme.colors.error,
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [
    styles.input,
    error && styles.errorBorderColor,
    style,
  ];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;