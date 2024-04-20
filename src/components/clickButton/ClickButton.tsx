import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors';

const ClickButton = ({text, onPress}: any) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.button}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderWidth: 1,
    borderColor: Colors.Green,
    backgroundColor: Colors.Green,
    width: '100%',
    borderRadius: 5,
  },
  button: {
    textAlign: 'center',
    fontSize: 20,
    color: Colors.white,
    fontWeight: 'bold',
    margin: '2%',
  },
});

export default ClickButton;
