import React from 'react';
import {View, StyleSheet} from 'react-native';
import Navigation from '../../navigation/Navigation';

const Home = () => {
  return (
    <View style={styles.container}>
      <Navigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
