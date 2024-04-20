import {StyleSheet} from 'react-native';
import Colors from '../../../../constants/Colors';

const EditTabStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  container: {
    marginHorizontal: 15,
  },
  profile: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 17,
  },
  titleStyle: {
    marginLeft: 55,
  },
  dp: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  button: {
    marginTop: 339,
  },
});

export default EditTabStyles;
