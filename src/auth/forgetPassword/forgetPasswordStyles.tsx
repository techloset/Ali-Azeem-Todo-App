import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

const ForgetPasswordStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  container: {
    marginHorizontal: 15,
  },
  titleStyle: {
    left: 20,
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
    marginTop: '132.5%',
  },
});

export default ForgetPasswordStyles;
