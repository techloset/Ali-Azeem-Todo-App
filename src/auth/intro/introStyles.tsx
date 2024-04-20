import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

const introStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    marginHorizontal: 15,
  },
  logo: {
    marginTop: '22%',
  },
  image: {
    marginTop: '29%',
  },
  text1: {
    marginTop: '45%',
    color: Colors.black,
    fontWeight: 'bold',
    fontSize: 25,
  },
  text2: {
    color: Colors.black,
    fontSize: 14,
  },
  button1: {
    marginTop: '5.3%',
  },
  button2Container: {
    marginTop: '2.65%',
    borderWidth: 1,
    borderColor: Colors.Green,
    width: '100%',
    height: '6%',
    borderRadius: 5,
  },
  button2: {
    textAlign: 'center',
    fontSize: 20,
    color: Colors.Green,
    fontWeight: 'bold',
    margin: '1.7%',
  },
});

export default introStyles;
