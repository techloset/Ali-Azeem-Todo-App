import React from 'react';
import {View, StyleSheet} from 'react-native';
import TabNavigation from '../../navigation/TabNavigation';

const Home = () => {
  return (
    <View style={styles.container}>
      <TabNavigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
