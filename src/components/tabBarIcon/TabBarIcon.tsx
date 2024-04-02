import {StyleSheet, Image, Text, View} from 'react-native';
import React from 'react';

const TabBarIcon = ({focused, source, lable}: any) => (
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
    top: 10,
  },
  icon: {
    width: 35,
    height: 35,
  },
});

export default TabBarIcon;
