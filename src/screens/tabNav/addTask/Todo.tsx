// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   TouchableOpacity,
//   FlatList,
// } from 'react-native';
// import React, {useState} from 'react';
// import {useAppDispatch, useAppSelector} from '../../../redux/hooks/Hooks';
// import {TodoSelector, addTodo} from '../../../redux/slices/TodoSlice';

// const Todo = () => {
//   const [title, setTitle] = useState('');
//   const [note, setNote] = useState('');
//   const [tags, setTags] = useState('');
//   const dispatch = useAppDispatch();
//   const Todo = useAppSelector(TodoSelector);
//   console.log(Todo);

//   return (
//     <View style={styles.container}>
//       <TextInput
//         placeholder="Title"
//         style={styles.holder}
//         value={title}
//         onChangeText={txt => setTitle(txt)}
//       />
//       <TextInput
//         placeholder="Note"
//         style={styles.holder}
//         value={note}
//         onChangeText={txt => setNote(txt)}
//       />
//       <TextInput
//         placeholder="Tags"
//         style={styles.holder}
//         value={tags}
//         onChangeText={txt => setTags(txt)}
//       />
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => {
//           dispatch(addTodo({title, note, tags}));
//         }}>
//         <Text>Submit</Text>
//       </TouchableOpacity>
//       <FlatList
//         data={Todo}
//         renderItem={({}) => {
//           return (
//             <View>
//               <Text>Title: {title}</Text>
//               <Text>Note:{note}</Text>
//               <Text>Tags: {tags}</Text>
//             </View>
//           );
//         }}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//   },
//   holder: {
//     borderWidth: 1,
//     marginVertical: 10,
//     marginHorizontal: 10,
//     padding: 10,
//   },
//   button: {
//     marginVertical: 10,
//     marginHorizontal: 10,
//     padding: 10,
//     backgroundColor: '#000000',
//     borderRadius: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default Todo;

// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   TouchableOpacity,
//   FlatList,
// } from 'react-native';
// import {useAppDispatch, useAppSelector} from '../../../redux/hooks/Hooks';
// import {
//   TodoSelector,
//   addTodo,
//   clearTodo,
// } from '../../../redux/slices/TodoSlice';

// const Todo = () => {
//   const [title, setTitle] = useState('');
//   const [note, setNote] = useState('');
//   const [tags, setTags] = useState('');
//   const [calender, setCalender] = useState('');
//   const dispatch = useAppDispatch();
//   const todoList = useAppSelector(TodoSelector);
//   console.log(todoList);

//   const handleClear = () => {
//     setTitle('');
//     setNote('');
//     setTags('');
//     dispatch(clearTodo());
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         placeholder="Title"
//         style={styles.holder}
//         value={title}
//         onChangeText={txt => setTitle(txt)}
//       />
//       <TextInput
//         placeholder="Note"
//         style={styles.holder}
//         value={note}
//         onChangeText={txt => setNote(txt)}
//       />
//       <TextInput
//         placeholder="Tags"
//         style={styles.holder}
//         value={tags}
//         onChangeText={txt => setTags(txt)}
//       />
//       <TextInput
//         placeholder="Calender"
//         style={styles.holder}
//         value={calender}
//         onChangeText={any => setCalender(any)}
//       />
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => {
//           dispatch(addTodo({title, note, tags, calender}));
//         }}>
//         <Text>Submit</Text>
//       </TouchableOpacity>
//       <FlatList
//         data={todoList}
//         renderItem={({item}) => {
//           return (
//             <View style={styles.todoTasks}>
//               <Text style={styles.title}>{item.title}</Text>
//               <Text style={styles.calender}>{item.calender}</Text>
//               <Text style={styles.note}>{item.note}</Text>
//               <Text style={styles.tags}>{item.tags}</Text>
//             </View>
//           );
//         }}
//       />
//       <TouchableOpacity
//         style={[styles.button, {backgroundColor: 'red'}]}
//         onPress={handleClear}>
//         <Text>Clear Output</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//   },
//   holder: {
//     borderWidth: 1,
//     marginVertical: 10,
//     marginHorizontal: 10,
//     padding: 10,
//   },
//   button: {
//     marginVertical: 10,
//     marginHorizontal: 10,
//     padding: 10,
//     backgroundColor: '#000000',
//     borderRadius: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   todoTasks: {
//     marginLeft: 16,
//     marginTop: 13,
//     width: '92%',
//   },
//   title: {
//     fontWeight: '700',
//     fontSize: 30,
//     color: 'black',
//   },
//   calender: {
//     fontSize: 15,
//     color: 'lightgray',
//   },
//   note: {
//     fontSize: 15,
//     color: 'black',
//   },
//   tags: {
//     marginTop: 8,
//   },
// });

// export default Todo;

// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   TouchableOpacity,
//   FlatList,
//   Modal,
// } from 'react-native';
// import {useAppDispatch, useAppSelector} from '../../../redux/hooks/Hooks';
// import {
//   TodoSelector,
//   addTodo,
//   clearTodo,
// } from '../../../redux/slices/TodoSlice';

// const Todo = () => {
//   const [title, setTitle] = useState('');
//   const [note, setNote] = useState('');
//   const [selectedTag, setSelectedTag] = useState('');
//   const [calender, setCalender] = useState('');
//   const [modalVisible, setModalVisible] = useState(false);

//   const dispatch = useAppDispatch();
//   const todoList = useAppSelector(TodoSelector);

//   const handleClear = () => {
//     setTitle('');
//     setNote('');
//     setSelectedTag('');
//     setCalender('');
//     dispatch(clearTodo());
//   };

//   const handleTagSelect = tag => {
//     setSelectedTag(tag);
//     setModalVisible(false);
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         placeholder="Title"
//         style={styles.holder}
//         value={title}
//         onChangeText={txt => setTitle(txt)}
//       />
//       <TextInput
//         placeholder="Note"
//         style={styles.holder}
//         value={note}
//         onChangeText={txt => setNote(txt)}
//       />
//       <TouchableOpacity
//         style={[
//           styles.holder,
//           selectedTag === 'Urgent' ? styles.urgentTag : styles.normalTag,
//         ]}
//         onPress={() => setModalVisible(true)}>
//         <Text style={styles.placeholderText}>
//           {selectedTag ? selectedTag : 'Tags'}
//         </Text>
//       </TouchableOpacity>
//       <TextInput
//         placeholder="Calender"
//         style={styles.holder}
//         value={calender}
//         onChangeText={any => setCalender(any)}
//       />
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => {
//           dispatch(addTodo({title, note, tags: selectedTag, calender}));
//         }}>
//         <Text>Submit</Text>
//       </TouchableOpacity>
//       <FlatList
//         data={todoList}
//         renderItem={({item}) => {
//           return (
//             <View
//               style={[
//                 styles.todoTasks,
//                 {backgroundColor: item.tags === 'Urgent' ? 'green' : '#427DFE'},
//               ]}>
//               <Text style={styles.title}>{item.title}</Text>
//               <Text style={styles.calender}>{item.calender}</Text>
//               <Text style={styles.note}>{item.note}</Text>
//               <Text style={styles.tags}>{item.tags}</Text>
//             </View>
//           );
//         }}
//       />
//       <TouchableOpacity
//         style={[styles.button, {backgroundColor: 'red'}]}
//         onPress={handleClear}>
//         <Text>Clear Output</Text>
//       </TouchableOpacity>
//       {/* Modal for selecting tag */}
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => {
//           setModalVisible(false);
//         }}>
//         <View style={styles.modalContainer}>
//           <TouchableOpacity
//             onPress={() => handleTagSelect('Urgent')}
//             style={styles.tagOption}>
//             <Text style={styles.tagText}>Urgent</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             onPress={() => handleTagSelect('Normal')}
//             style={styles.tagOption}>
//             <Text style={styles.tagText}>Normal</Text>
//           </TouchableOpacity>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//   },
//   holder: {
//     borderWidth: 1,
//     marginVertical: 10,
//     marginHorizontal: 10,
//     padding: 10,
//   },
//   urgentTag: {
//     backgroundColor: 'green',
//   },
//   normalTag: {
//     backgroundColor: 'blue',
//   },
//   button: {
//     marginVertical: 10,
//     marginHorizontal: 10,
//     padding: 10,
//     backgroundColor: '#000000',
//     borderRadius: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   todoTasks: {
//     marginLeft: 16,
//     marginTop: 13,
//     width: '92%',
//     padding: 10,
//     borderWidth: 1,
//     borderRadius: 5,
//   },
//   title: {
//     fontWeight: '700',
//     fontSize: 30,
//     color: 'black',
//   },
//   calender: {
//     fontSize: 15,
//     color: 'lightgray',
//   },
//   note: {
//     fontSize: 15,
//     color: 'black',
//   },
//   tags: {
//     marginTop: 8,
//     borderWidth: 1,
//     borderRadius: 5,
//     width: 50,
//     height: 20,
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   tagOption: {
//     padding: 10,
//     marginVertical: 5,
//     borderRadius: 5,
//   },
//   tagText: {
//     color: 'white',
//     fontSize: 18,
//     textAlign: 'center',
//   },
//   placeholderText: {
//     fontSize: 16,
//     color: 'gray',
//   },
// });

// export default Todo;

import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../../redux/hooks/Hooks';
import {
  TodoSelector,
  addTodo,
  clearTodo,
} from '../../../redux/slices/TodoSlice';

const Todo = () => {
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [calender, setCalender] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [error, setError] = useState('');

  const dispatch = useAppDispatch();
  const todoList = useAppSelector(TodoSelector);

  const handleClear = () => {
    setTitle('');
    setNote('');
    setSelectedTag('');
    setCalender('');
    dispatch(clearTodo());
  };

  const handleTagSelect = tag => {
    setSelectedTag(tag);
    setModalVisible(false);
  };

  const handleSubmit = () => {
    if (!title || !note || !selectedTag || !calender) {
      setError('Please fill in all fields.');
      return;
    }

    setError('');
    dispatch(addTodo({title, note, tags: selectedTag, calender}));
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Title"
        style={styles.holder}
        value={title}
        onChangeText={txt => setTitle(txt)}
      />
      <TextInput
        placeholder="Note"
        style={styles.holder}
        value={note}
        onChangeText={txt => setNote(txt)}
      />
      <TouchableOpacity
        style={[
          styles.holder,
          selectedTag === 'Urgent' ? styles.urgentTag : styles.normalTag,
        ]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.placeholderText}>
          {selectedTag ? selectedTag : 'Tags'}
        </Text>
      </TouchableOpacity>
      <TextInput
        placeholder="Calender"
        style={styles.holder}
        value={calender}
        onChangeText={any => setCalender(any)}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text>Submit</Text>
      </TouchableOpacity>
      {/* <FlatList
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
      /> */}
      <TouchableOpacity
        style={[styles.button, {backgroundColor: 'red'}]}
        onPress={handleClear}>
        <Text>Clear Output</Text>
      </TouchableOpacity>
      {/* Modal for selecting tag */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              onPress={() => handleTagSelect('Urgent')}
              style={[
                styles.tagOption,
                selectedTag === 'Urgent' ? styles.selectedTagOption : null,
              ]}>
              <Text style={styles.tagText}>Urgent</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleTagSelect('Normal')}
              style={[
                styles.tagOption,
                selectedTag === 'Normal' ? styles.selectedTagOption : null,
              ]}>
              <Text style={styles.tagText}>Normal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
    marginLeft: 16,
    marginTop: 13,
    width: '92%',
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
    color: 'blue',
  },
  error: {
    color: 'red',
    marginHorizontal: 20,
  },
});

export default Todo;

// import React, {useState} from 'react';
// import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
// import firestore from '@react-native-firebase/firestore';
// import CustomBackButtonHeading from '../../../components/customBackButtonHeading/CustomBackButtonHeading';
// import ClickButton from '../../../components/clickButton/ClickButton';
// import Styles from './Styles';

// const Todo = () => {
//   const [taskTitle, setTaskTitle] = useState('');
//   const [note, setNote] = useState('');
//   const [tags, setTags] = useState('');

//   const handleSubmit = async () => {
//     try {
//       await firestore()
//         .collection('tasks')
//         .add({
//           title: taskTitle,
//           note: note,
//           tags: tags.split(',').map(tag => tag.trim()),
//           createdAt: firestore.FieldValue.serverTimestamp(),
//         });

//       console.log('Task added successfully!');
//       Alert.alert('Task added successfully!');

//       setTaskTitle('');
//       setNote('');
//       setTags('');
//     } catch (error) {
//       console.error('Error adding task: ', error);
//       Alert.alert('Error adding task. Please try again.');
//     }
//   };

//   return (
//     <View style={Styles.screen}>
//       <View style={Styles.container}>
//         <CustomBackButtonHeading
//           title="Add New Task"
//           titleStyle={Styles.titleStyle}
//         />
//         <Text style={Styles.label}>Task Title</Text>
//         <TextInput
//           style={Styles.inputSimple}
//           value={taskTitle}
//           onChangeText={setTaskTitle}
//           placeholder="Input task title..."
//         />
//         <Text style={Styles.label}>Note</Text>
//         <TextInput
//           style={Styles.input}
//           value={note}
//           onChangeText={setNote}
//           placeholder="Enter task notes..."
//           multiline
//         />
//         <Text style={Styles.label}>Tags</Text>
//         <TextInput
//           style={Styles.inputSimple}
//           value={tags}
//           onChangeText={setTags}
//           placeholder="-Select tags-"
//         />
//         <Text style={Styles.label}>Add Date & Time</Text>
//         <TouchableOpacity
//           // onPress={() => setShowModal(true)}
//           style={Styles.calendarBox}>
//           <Text style={Styles.calendarText}>Date & Time</Text>
//           {/* <Text style={Styles.calendarDate}>{selectedDate}</Text> */}
//         </TouchableOpacity>
//         <View style={Styles.buttonContainer}>
//           <ClickButton text="Add Task" onPress={handleSubmit} />
//         </View>
//       </View>
//     </View>
//   );
// };

// export default Todo;
