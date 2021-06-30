import React from 'react';
import { Pressable, View, StyleSheet } from 'react-native';
import FormikTextInput from '../utils/FormikTextInput';
import Subheading from '../utils/Subheading';
import theme from '../../theme';

const ReviewForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name='ownerName' placeholder='Repository owner name' />
      <FormikTextInput name='repositoryName' placeholder='Repository name' />
      <FormikTextInput name='reviewRating' placeholder='Rating between 0 and 100' />
      <FormikTextInput name='reviewText' placeholder='Review' multiline />
      <Pressable onPress={onSubmit}>
        <Subheading style={styles.button}>Create a review</Subheading>
      </Pressable>
    </View>
  );
};

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

export default ReviewForm;