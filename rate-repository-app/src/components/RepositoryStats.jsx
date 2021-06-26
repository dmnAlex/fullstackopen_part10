import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../theme';

const toPrescision = (number) => number >= 1000 ? (number / 1000).toFixed(1) + 'k' : number;

const RepositoryStats = ({ data }) => {
  const { stargazersCount, forksCount, reviewCount, ratingAverage } = data;

  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text fontWeight='bold' testID='stargazersCount'>{toPrescision(stargazersCount)}</Text>
        <Text style={styles.secondaryText}>Stars</Text>
      </View>
      <View style={styles.info}>
        <Text fontWeight='bold' testID='forksCount'>{toPrescision(forksCount)}</Text>
        <Text style={styles.secondaryText}>Forks</Text>
      </View>
      <View style={styles.info}>
        <Text fontWeight='bold' testID='reviewCount'>{toPrescision(reviewCount)}</Text>
        <Text style={styles.secondaryText}>Reviews</Text>
      </View>
      <View style={styles.info} testID='ratingAverage'>
        <Text fontWeight='bold'>{toPrescision(ratingAverage)}</Text>
        <Text style={styles.secondaryText}>Rating</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  info: {
    alignItems: 'center',
  },
  secondaryText: {
    paddingTop: 0,
    color: theme.colors.textSecondary,
  },
});

export default RepositoryStats;