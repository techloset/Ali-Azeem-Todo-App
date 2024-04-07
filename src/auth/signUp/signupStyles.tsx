import {StyleSheet} from 'react-native';

const signUpStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    marginHorizontal: 15,
  },
  titleStyle: {
    // left: 90,
    left: '135%',
  },
  heading: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
  },
  message: {
    color: 'gray',
    fontWeight: '500',
    marginBottom: 30,
  },
  bottom: {
    // marginTop: 150,
    marginTop: '47%',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  bottomContainerText: {
    color: 'black',
    fontSize: 15,
  },
  bottomContainerLink: {
    color: '#7EBB4F',
    marginLeft: 5,
    fontSize: 15,
  },
  error: {
    color: 'red',
  },
});

export default signUpStyles;
