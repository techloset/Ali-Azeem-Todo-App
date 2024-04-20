import {StyleSheet} from 'react-native';
import Colors from '../../../constants/Colors';

const ListViewStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.white,
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
    borderColor: Colors.lightgray,
    borderRadius: 4,
  },
  search: {
    color: Colors.black,
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
    color: Colors.black,
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
    backgroundColor: Colors.white,
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 5,
    shadowColor: 'red',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  note: {
    fontSize: 16,
    marginTop: 5,
  },
  tags: {
    marginTop: 8,
    borderRadius: 5,
    width: 60,
  },
  tagText: {
    fontSize: 14,
    padding: 4,
    textAlign: 'center',
    color: Colors.white,
  },
  dateTime: {
    marginTop: 5,
    fontSize: 14,
    color: Colors.gray,
  },
});

export default ListViewStyles;
