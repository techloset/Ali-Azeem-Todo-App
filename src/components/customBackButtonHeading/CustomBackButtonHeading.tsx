import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const CustomBackButtonHeading = ({title, titleStyle}: any) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.arrow}>{'\u2190'}</Text>
      </TouchableOpacity>
      <Text style={[styles.heading, titleStyle]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 20,
    right: 7,
  },
  arrow: {
    fontSize: 50,
    bottom: 17,
  },
  heading: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default CustomBackButtonHeading;
