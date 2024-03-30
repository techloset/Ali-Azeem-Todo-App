import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import {Image} from 'react-native-animatable';

const ListView = ({navigation}: any) => {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.Img}>
          <Image source={require('../../../../assets/screenLogo.png')} />
          <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
            <Image
              source={require('../../../../assets/settings.png')}
              style={styles.settings}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.searchBar}>
          <TextInput placeholder="Search task here..." style={styles.search} />
          <Image
            source={require('../../../../assets/search.png')}
            style={styles.searchIcon}
          />
        </View>
        <View style={styles.center}>
          <TouchableOpacity onPress={() => navigation.navigate('AddNewTask')}>
            <Image source={require('../../../../assets/EmptyState.png')} />
          </TouchableOpacity>
          <Text style={styles.centerTextHead}>No Task</Text>
          <Text style={styles.centerTextBody}>
            Looks like you don't have a task
          </Text>
          <Text style={styles.centerTextBody}>please add task</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  settings: {
    marginLeft: 325,
    bottom: 23,
    height: 25,
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
    fontWeight: 'bold',
    fontSize: 18,
  },
  centerTextBody: {
    fontWeight: '500',
  },
});

export default ListView;
