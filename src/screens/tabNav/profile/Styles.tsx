import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    marginHorizontal: 15,
  },
  profile: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleStyle: {
    marginLeft: 73,
  },
  dp: {
    width: 64,
    height: 64,
    borderRadius: 100,
  },
  userInfo: {
    marginLeft: -40,
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0B0A11',
  },
  email: {
    fontSize: 14,
    color: 'gray',
  },
  edit: {
    width: 16,
    height: 16,
  },
  about: {
    marginTop: 40,
    alignItems: 'center',
    color: '#F0F0F0',
    backgroundColor: '#F0F0F0',
    marginHorizontal: -15,
  },
  aboutText: {
    fontSize: 12,
    fontWeight: '400',
    color: 'lightgray',
    marginVertical: 8,
  },
  changePassword: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 12,
    paddingBottom: 12,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
  },
  changePasswordText: {
    fontSize: 12,
    fontWeight: '400',
    color: 'black',
  },
  signOut: {
    fontSize: 12,
    fontWeight: '400',
    color: '#BA1735',
  },
  end: {
    top: 490 - 33,
    alignItems: 'center',
  },
  endText: {
    color: 'lightgray',
    fontSize: 12,
    fontWeight: '400',
  },
});

export default Styles;
