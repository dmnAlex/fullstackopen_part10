import React from 'react';
import { Searchbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const FilterBar = ({ query, setQuery }) => {
  const handleChange = (input) => setQuery(input);

  return (
    <Searchbar
      placeholder='Search repository'
      value={query}
      onChangeText={handleChange}
      style={styles.searchbar}
    />
  );
};

const styles = StyleSheet.create({
  searchbar: {
    margin: 10,
  },
});

export default FilterBar;