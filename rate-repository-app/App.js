import React from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
import Main from './src/components/Main';

const App = () => {
  return (
    <View style={styles.container}>
      <Main />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
  },
});