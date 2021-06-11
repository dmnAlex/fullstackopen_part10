import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import Subheading from './Subheading';
import Text from './Text';
import theme from '../theme';

const RepositoryInfo = ({ data }) => {
  const { ownerAvatarUrl, fullName, description, language } = data;

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image style={styles.image} source={{ uri: ownerAvatarUrl }} />
      </View>
      <View style={styles.infoTab}>
        <Subheading>{fullName}</Subheading>
        <Text>{description}</Text>
        <Text style={styles.languageTab}>{language}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  languageTab: {
    color: 'white',
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: theme.colors.primary,
    padding: 5,
    alignSelf: 'flex-start',
  },
  infoTab: {
    padding: 5,
  },
  image: {
    borderRadius: 4,
    width: 50,
    height: 50,
  },
  imgContainer: {
    padding: 20
  }
});

export default RepositoryInfo;