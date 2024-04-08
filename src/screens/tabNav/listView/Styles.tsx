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
  logo: {
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
  dataContainer: {
    flex: 1,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'lightblue',
    marginTop: 5,
    borderRadius: 5,
    marginBottom: 5,
    shadowColor: 'red',
    shadowOffset: {width: 10, height: 12},
    shadowRadius: 1,
  },
  title: {
    fontWeight: '700',
    fontSize: 30,
    color: 'black',
  },
  note: {
    fontSize: 15,
    color: 'black',
  },
  tags: {
    marginTop: 8,
    width: 49,
    height: 20,
    fontSize: 25,
    // fontWeight: 'bold',
    // color: 'red',
    borderWidth: 1,
    borderRadius: 5,
    textAlign: 'center',
    backgroundColor: '#427DFE',
  },
  tagText: {
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
  },
  optionContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  options: {
    width: 20,
    height: 30,
    left: 20,
  },
});

export default Styles;
