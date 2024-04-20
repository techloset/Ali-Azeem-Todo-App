import {StyleSheet} from 'react-native';
import Colors from '../../../constants/Colors';

const AddTaskStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  container: {
    marginHorizontal: 15,
  },
  titleStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  placeHolder: {
    marginTop: 10,
    marginBottom: 10,
  },
  title: {
    color: Colors.lightgray,
    marginTop: 10,
  },
  inputSimple: {
    height: 40,
    borderWidth: 1,
    borderColor: Colors.lightgray,
    borderRadius: 5,
    color: 'black',
    marginTop: 5,
    padding: 10,
  },
  input: {
    height: 80,
    borderWidth: 1,
    borderColor: Colors.lightgray,
    borderRadius: 5,
    color: Colors.black,
    marginTop: 5,
    padding: 10,
    paddingBottom: 50,
    minHeight: 90,
  },
  buttonContainer: {
    marginTop: '55%',
  },
  loaderContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  tags: {
    marginTop: 10,
  },
  dropdown: {
    height: 50,
    borderColor: Colors.gray,
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  label: {
    position: 'absolute',
    backgroundColor: Colors.white,
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

export default AddTaskStyles;
