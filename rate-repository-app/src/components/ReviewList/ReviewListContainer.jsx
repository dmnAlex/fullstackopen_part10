import React from 'react';
import { FlatList } from 'react-native';
import ItemSeparator from '../utils/ItemSeparator';
import ReviewItem from './ReviewItem';

const ReviewListContainer = ({ reviews, onEndReach, refetch }) => {
  if (!reviews) {
    return null;
  }

  return (
    <FlatList
      data={reviews.edges.map(item => item.node)}
      renderItem={({ item }) => <ReviewItem review={item} refetch={refetch} />}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={ItemSeparator}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  );
};

export default ReviewListContainer;