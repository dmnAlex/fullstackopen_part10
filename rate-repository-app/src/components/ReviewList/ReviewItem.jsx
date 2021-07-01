import React from 'react';
import { View, StyleSheet } from 'react-native';
import Subheading from '../utils/Subheading';
import Text from '../utils/Text';
import theme from '../../theme';
import { format } from 'date-fns';

const ReviewItem = ({ review }) => {
  return (
    <View style={styles.container}>
      <View style={styles.ratingContainer}>
        <View style={styles.rating}>
          <Subheading style={styles.ratingText}>{review.rating}</Subheading>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Subheading>{review.repository.fullName}</Subheading>
        <Text style={styles.date}>
          {format(new Date(review.createdAt), 'dd.MM.yyyy')}
        </Text>
        <Text style={styles.text}>{review.text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  infoContainer: {
    padding: 5,
    flexGrow: 1,
    flexShrink: 1,
  },
  rating: {
    borderWidth: 2,
    borderRadius: 25,
    borderColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    margin: 10,
  },
  ratingText: {
    color: theme.colors.primary,
  },
  imgContainer: {
    padding: 20,
  },
  date: {
    color: theme.colors.textSecondary,
    paddingTop: 0,
  },
  text: {
  },
});

export default ReviewItem;