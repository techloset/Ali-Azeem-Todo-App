import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors';

const Placeholder = ({title, placeholder, value, onChangeText}: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        style={styles.Placeholder}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 10,
  },
  title: {
    color: Colors.black,
  },
  Placeholder: {
    borderWidth: 1,
    borderColor: Colors.lightgray,
    borderRadius: 5,
    color: Colors.black,
    marginTop: 5,
    padding: 5,
    paddingLeft: 15,
  },
});

export default Placeholder;
