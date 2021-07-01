import React from 'react';
import RepositoryItem from '../RepositoryItem';
import { FlatList, View, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import SortingMenu from './SortingMenu';
import FilterBar from './FilterBar';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export class RepositoryListContainer extends React.Component {
  renderHeader = () => {
    const {
      sorting,
      setSorting,
      query,
      setQuery,
    } = this.props;

    return (
      <View>
        <FilterBar
          query={query}
          setQuery={setQuery}
        />
        <SortingMenu
          sorting={sorting}
          setSorting={setSorting}
        />
      </View>
    );
  };

  render() {
    const { repositories, onEndReach } = this.props;
    
    if (!repositories) {
      return null;
    }

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
        ListHeaderComponent={this.renderHeader}
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        onEndReached={onEndReach}
        onEndReachedThreshold={0.5}
      />
    );
  }
}

export default RepositoryListContainer;