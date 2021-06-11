import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';

const toPrescision = (number) => number >= 1000 ? (number / 1000).toFixed(1) + 'k' : number;

const RepositoryStats = ({ data }) => {
  const { stargazersCount, forksCount, reviewCount, ratingAverage } = data;

  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text fontWeight='bold'>{toPrescision(stargazersCount)}</Text>
        <Text>Stars</Text>
      </View>
      <View style={styles.info}>
        <Text fontWeight='bold'>{toPrescision(forksCount)}</Text>
        <Text>Forks</Text>
      </View>
      <View style={styles.info}>
        <Text fontWeight='bold'>{toPrescision(reviewCount)}</Text>
        <Text>Reviews</Text>
      </View>
      <View style={styles.info}>
        <Text fontWeight='bold'>{toPrescision(ratingAverage)}</Text>
        <Text>Rating</Text>
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
});

export default RepositoryStats;