import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});


const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { data } = useRepositories();

  const repositoryNodes = data
    ? data.repositories.edges.map(edge => edge.node)
    : [];


  const renderItem = ({ item }) => (
    <RepositoryItem
      fullName={item.fullName}
      description={item.description}
      language={item.language}
      forksCount={item.forksCount}
      stargazersCount={item.stargazersCount}
      reviewCount={item.reviewCount}
      ratingAverage={item.ratingAverage}
      ownerAvatarUrl={item.ownerAvatarUrl}
    />
  );

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

export default RepositoryList;