import {StyleSheet, Image, Text, View} from 'react-native';
import React from 'react';

const TabBarAddIcon = ({focused, source, lable}: any) => (
  <View style={styles.component}>
    <Image
      source={source}
      style={[styles.icon, {tintColor: focused ? '#7EBB4F' : 'gray'}]}
    />
    <Text style={{color: focused ? '#7EBB4F' : 'gray'}}>{lable}</Text>
  </View>
);

const styles = StyleSheet.create({
  component: {
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 5,
  },
  icon: {
    width: 50,
    height: 50,
  },
});

export default TabBarAddIcon;
