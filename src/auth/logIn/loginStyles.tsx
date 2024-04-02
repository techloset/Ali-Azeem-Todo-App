import {StyleSheet} from 'react-native';

const loginStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    marginHorizontal: 15,
  },
  titleStyle: {
    left: 100,
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
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    color: 'black',
  },
  forgetText: {
    color: 'black',
    fontSize: 15,
  },
  bottomContainerLink: {
    color: '#7EBB4F',
    marginLeft: 5,
    fontSize: 15,
  },
  googleAuth: {
    alignItems: 'center',
    marginTop: '4%',
  },
  or: {
    alignItems: 'center',
    width: 330,
  },
  googleIcon: {
    marginTop: '5%',
  },
  bottom: {
    marginTop: '15%',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  loader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default loginStyles;
