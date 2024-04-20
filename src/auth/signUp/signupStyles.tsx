import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

const signUpStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    marginHorizontal: 15,
  },
  titleStyle: {
    left: '135%',
  },
  heading: {
    color: Colors.black,
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
  },
  message: {
    color: Colors.gray,
    fontWeight: '500',
    marginBottom: 30,
  },
  bottom: {
    marginTop: '47%',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  bottomContainerText: {
    color: Colors.black,
    fontSize: 15,
  },
  bottomContainerLink: {
    color: Colors.Green,
    marginLeft: 5,
    fontSize: 15,
  },
  error: {
    color: 'red',
  },
});

export default signUpStyles;
