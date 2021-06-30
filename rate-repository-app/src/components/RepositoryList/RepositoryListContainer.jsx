import React from 'react';
import RepositoryItem from '../RepositoryItem';
import { FlatList, View, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import SortingMenu from './SortingMenu';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryListContainer = ({ repositories, sorting, setSorting }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  const renderItem = ({ item }) => (
    <Link to={`/repository/${item.id}`}>
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
    </Link>
  );

  return (
    <FlatList
      ListHeaderComponent={() => <SortingMenu
        sorting={sorting}
        setSorting={setSorting}
      />}
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

export default RepositoryListContainer;