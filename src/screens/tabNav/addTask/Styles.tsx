import React from 'react';
import {StyleSheet} from 'react-native';

const AddTaskStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    marginHorizontal: 15,
  },
  titleStyle: {
    fontSize: 18,
    marginTop: 15,
    marginLeft: 95,
  },
  placeHolder: {
    marginTop: 10,
    marginBottom: 10,
  },
  label: {
    color: 'black',
    marginTop: 10,
  },
  inputSimple: {
    borderWidth: 1,
    borderColor: '#D2D2D2',
    borderRadius: 5,
    color: 'black',
    marginTop: 5,
    padding: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#D2D2D2',
    borderRadius: 5,
    color: 'black',
    marginTop: 5,
    padding: 10,
    paddingBottom: 50,
    minHeight: 90,
  },
  reminder: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
  },
  calendar: {
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    elevation: 4,
  },
  calendarBox: {
    borderWidth: 1,
    borderColor: '#D2D2D2',
    height: 75,
    borderRadius: 5,
    justifyContent: 'center',
    marginTop: 10,
  },
  calendarText: {
    color: '#0B0A1166',
    fontSize: 12,
    fontWeight: '400',
    height: 16,
    marginLeft: 16,
    marginTop: 16,
  },
  calendarDate: {
    fontSize: 16,
    color: '#0B0A11',
    fontWeight: '700',
    marginLeft: 16,
    marginBottom: 16,
  },
  calendarButton: {
    marginLeft: 15,
    marginRight: 15,
  },
  buttonContainer: {
    marginTop: '50%',
  },
});

export default AddTaskStyles;
