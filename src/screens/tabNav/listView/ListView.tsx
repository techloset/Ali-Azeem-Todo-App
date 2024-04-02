import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';
import {Image} from 'react-native-animatable';
import Styles from './Styles';
import {useNavigation} from '@react-navigation/native';

const ListView = () => {
  const navigation = useNavigation();

  const handleNavigateToAddTask = () => {
    navigation.navigate('AddTask');
  };

  return (
    <View style={Styles.screen}>
      <View style={Styles.container}>
        <View style={Styles.Img}>
          <Image source={require('../../../../assets/screenLogo.png')} />
        </View>
        <View style={Styles.searchBar}>
          <TextInput placeholder="Search task here..." style={Styles.search} />
          <Image
            source={require('../../../../assets/search.png')}
            style={Styles.searchIcon}
          />
        </View>
        <View style={Styles.center}>
          <TouchableOpacity onPress={handleNavigateToAddTask}>
            <Image source={require('../../../../assets/EmptyState.png')} />
          </TouchableOpacity>
          <Text style={Styles.centerTextHead}>No Task</Text>
          <Text style={Styles.centerTextBody}>
            Looks like you don't have a task
          </Text>
          <Text style={Styles.centerTextBody}>please add task</Text>
        </View>
      </View>
    </View>
  );
};

export default ListView;
