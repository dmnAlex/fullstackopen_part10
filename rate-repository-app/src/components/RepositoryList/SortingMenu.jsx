import React from 'react';
import { Picker } from '@react-native-picker/picker';

const SortingMenu = ({ sorting, setSorting }) => {
  return (
    <Picker
      prompt='Select an item...'
      selectedValue={sorting}
      onValueChange={(itemValue) =>
        setSorting(itemValue)
      }>
      <Picker.Item label='Latest repositories' value='date_desc' />
      <Picker.Item label='Highest rated repositories' value='rating_desc' />
      <Picker.Item label='Lowest rated repositories' value='rating_asc' />
    </Picker>
  );
};

export default SortingMenu;