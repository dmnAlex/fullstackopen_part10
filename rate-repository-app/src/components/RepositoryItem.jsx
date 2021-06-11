import React from 'react';
import { View, StyleSheet } from 'react-native';
import RepositoryInfo from './RepositoryInfo';
import RepositoryStats from './RepositoryStats';

const styles = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: 'white'
  },
});

const RepositoryItem = ({
  ownerAvatarUrl,
  fullName,
  description,
  language,
  stargazersCount,
  forksCount,
  reviewCount,
  ratingAverage,
  style,
  ...props
}) => {
  const containerStyle = [
    styles.container,
    style,
  ];
  console.log(ownerAvatarUrl);
  return (
    <View style={containerStyle} {...props}>
      <RepositoryInfo data={{ ownerAvatarUrl, fullName, description, language }} />
      <RepositoryStats data={{ stargazersCount, forksCount, reviewCount, ratingAverage }} />
    </View>
  );
};

export default RepositoryItem;