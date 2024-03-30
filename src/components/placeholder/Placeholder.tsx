import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';

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
    color: 'black',
  },
  Placeholder: {
    borderWidth: 1,
    borderColor: '#D2D2D2',
    borderRadius: 5,
    color: 'black',
    marginTop: 5,
    padding: 5,
    paddingLeft: 15,
  },
});

export default Placeholder;
