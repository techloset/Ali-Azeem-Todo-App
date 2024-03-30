import {StyleSheet} from 'react-native';

const introStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
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
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25,
  },
  text2: {
    color: 'black',
    fontSize: 14,
  },
  button1: {
    marginTop: '5.3%',
  },
  button2Container: {
    marginTop: '2.65%',
    borderWidth: 1,
    borderColor: '#7EBB4F',
    width: '100%',
    height: '6%',
    borderRadius: 5,
  },
  button2: {
    textAlign: 'center',
    fontSize: 20,
    color: '#7EBB4F',
    fontWeight: 'bold',
    margin: '1.7%',
  },
});

export default introStyles;
