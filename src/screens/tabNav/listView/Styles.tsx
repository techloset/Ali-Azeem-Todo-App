import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    marginHorizontal: 15,
    marginTop: 20,
  },
  Img: {
    alignItems: 'center',
    flexDirection: 'column',
  },
  searchBar: {
    marginTop: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 16,
    borderWidth: 1,
    borderColor: '#D2D2D2',
    borderRadius: 4,
  },
  search: {
    color: 'black',
  },
  searchIcon: {
    width: 16,
    height: 16,
    right: 16,
  },
  center: {
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 200,
  },
  centerTextHead: {
    color: 'black',
    fontWeight: '700',
    fontSize: 18,
  },
  centerTextBody: {
    fontWeight: '400',
    fontSize: 14,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '70%',
  },
});

export default Styles;
