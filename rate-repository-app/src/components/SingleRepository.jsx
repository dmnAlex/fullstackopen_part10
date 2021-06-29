import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import ReviewItem from './ReviewItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const SingleRepository = ({ repository }) => {
  const { reviews, ...remainingData} = repository;

  return (
    <FlatList
      data={reviews.edges.map(item => item.node)}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryItem {...remainingData} />}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default SingleRepository;