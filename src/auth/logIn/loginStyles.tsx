import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

const loginStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  container: {
    marginHorizontal: 15,
  },
  titleStyle: {
    left: 100,
  },
  heading: {
    color: Colors.black,
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
    color: Colors.black,
  },
  forgetText: {
    color: Colors.black,
    fontSize: 15,
  },
  bottomContainerLink: {
    color: Colors.Green,
    marginLeft: 5,
    fontSize: 15,
  },
  googleAuth: {
    alignItems: 'center',
    marginTop: '10%',
  },
  or: {
    alignItems: 'center',
    width: 330,
  },
  googleIcon: {
    marginTop: '5%',
    width: 70,
    height: 70,
    borderWidth: 1,
    borderColor: Colors.lightgray,
    borderRadius: 40,
  },
  bottom: {
    marginTop: '57%',
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
