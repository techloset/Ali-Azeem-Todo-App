import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {Image} from 'react-native-animatable';
import Styles from './Styles';
import {useNavigation} from '@react-navigation/native';
import {TodoSelector} from '../../../redux/slices/TodoSlice';
import {useAppSelector} from '../../../redux/hooks/Hooks';

const ListView = () => {
  const navigation = useNavigation();

  const handleNavigateToAddTask = () => {
    navigation.navigate('AddTask');
  };
  const todoList = useAppSelector(TodoSelector);

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
        {/* <View style={Styles.center}>
          <TouchableOpacity onPress={handleNavigateToAddTask}>
            <Image source={require('../../../../assets/EmptyState.png')} />
          </TouchableOpacity>
          <Text style={Styles.centerTextHead}>No Task</Text>
          <Text style={Styles.centerTextBody}>
            Looks like you don't have a task,
          </Text>
          <Text style={Styles.centerTextBody}>please add task</Text>
        </View> */}
        <FlatList
          data={todoList}
          renderItem={({item}) => {
            return (
              <View
                style={[
                  styles.todoTasks,
                  // {
                  //   backgroundColor:
                  //     item.tags === 'Urgent'
                  //       ? 'green'
                  //       : item.tags === 'Normal'
                  //       ? '#427DFE'
                  //       : '#FFFFFF',
                  // },
                ]}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.calender}>{item.calender}</Text>
                <Text style={styles.note}>{item.note}</Text>
                <Text style={styles.tags}>{item.tags}</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  holder: {
    borderWidth: 1,
    marginVertical: 10,
    marginHorizontal: 10,
    padding: 10,
  },
  urgentTag: {
    backgroundColor: 'lightgreen',
  },
  normalTag: {
    backgroundColor: 'lightgreen',
  },
  button: {
    marginVertical: 10,
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: 'yellow',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  todoTasks: {
    // marginLeft: 16,
    marginTop: 13,
    width: '100%',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
  },
  title: {
    fontWeight: '700',
    fontSize: 30,
    color: 'black',
  },
  calender: {
    fontSize: 15,
    color: 'lightgray',
  },
  note: {
    fontSize: 15,
    color: 'black',
  },
  tags: {
    marginTop: 8,
    width: 70,
    height: 30,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    borderWidth: 1,
    borderRadius: 10,
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
  },
  tagOption: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  selectedTagOption: {
    backgroundColor: 'gray',
  },
  tagText: {
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
  },
  placeholderText: {
    fontSize: 16,
    color: 'gray',
  },
  error: {
    color: 'red',
    marginHorizontal: 20,
  },
});

export default ListView;
