import {StyleSheet} from 'react-native';
import Colors from '../../../constants/Colors';

const ProfileTabStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.white,
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
    marginLeft: '-15%',
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.white,
  },
  email: {
    fontSize: 14,
    color: Colors.gray,
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
    color: Colors.lightgray,
    marginVertical: 8,
  },
  changePassword: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 12,
    paddingBottom: 12,
    borderBottomColor: Colors.lightgray,
    borderBottomWidth: 1,
  },
  changePasswordText: {
    fontSize: 12,
    fontWeight: '400',
    color: Colors.white,
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
    color: Colors.lightgray,
    fontSize: 12,
    fontWeight: '400',
  },
});

export default ProfileTabStyles;
