import React from 'react';
import { View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Subheading from '../utils/Subheading';
import Text from '../utils/Text';
import theme from '../../theme';
import { format } from 'date-fns';
import { Link } from 'react-router-native';
import { useMutation } from '@apollo/client';
import { DELETE_REVIEW } from '../../graphql/mutations';

const ReviewItem = ({ review, refetch }) => {
  const [mutate] = useMutation(DELETE_REVIEW);

  const handleDelete = () => {
    const deleteReview = async () => {
      try {
        await mutate({ variables: { id: review.id } });
        refetch();
      } catch (error) {
        console.log(error);
      }
    };

    Alert.alert(
      'Delete review',
      'Are you sure you want to delete this review?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: deleteReview,
          style: 'destructive',
        },
      ]
    );
  };

  return (
    <View>
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
      <View style={styles.container}>
        <Link
          to={`/repository/${review.repository.id}`}
          component={TouchableOpacity}
          style={styles.buttonContainer}
        >
          <Subheading style={[styles.button, styles.viewButton]}>
            View repository
          </Subheading>
        </Link>
        <TouchableOpacity onPress={handleDelete} style={styles.buttonContainer}>
          <Subheading style={[styles.button, styles.deleteButton]}>
            Delete review
          </Subheading>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  buttonContainer: {
    flex: 1,
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
  button: {
    color: 'white',
    borderRadius: 4,
    paddingVertical: 10,
    margin: 16,
    textAlign: 'center',
    flexGrow: 1,
  },
  viewButton: {
    backgroundColor: theme.colors.primary,
    marginRight: 8,
  },
  deleteButton: {
    backgroundColor: theme.colors.error,
    marginLeft: 8,
  },
});

export default ReviewItem;