// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   Alert,
//   ActivityIndicator,
//   StyleSheet,
// } from 'react-native';
// import firestore from '@react-native-firebase/firestore';
// import CustomBackButtonHeading from '../../../components/customBackButtonHeading/CustomBackButtonHeading';
// import ClickButton from '../../../components/clickButton/ClickButton';
// import Styles from './Styles';

// const AddTask = () => {
//   const [taskTitle, setTaskTitle] = useState('');
//   const [note, setNote] = useState('');
//   const [tags, setTags] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async () => {
//     setLoading(true);
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
//     } catch (error) {
//       console.error('Error adding task: ', error);
//       Alert.alert('Error adding task. Please try again.');
//     } finally {
//       setLoading(false);
//       setTaskTitle('');
//       setNote('');
//       setTags('');
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
//       {/* Show loader in the center of the screen */}
//       {loading && (
//         <View style={styles.loaderContainer}>
//           <ActivityIndicator size="large" color="#0000ff" />
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   loaderContainer: {
//     ...StyleSheet.absoluteFillObject,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.4)',
//   },
// });

// export default AddTask;
//

import {View, Text} from 'react-native';
import React from 'react';
import Todo from './Todo';

const AddTask = () => {
  return <Todo />;
};

export default AddTask;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// import {View, Text} from 'react-native';
// import React from 'react';
// import Todo from './Todo';
// import {Provider} from 'react-redux';
// import {store} from '../../../redux/store/Store';

// const AddTask = () => {
//   return <Todo />;
// };

// export default AddTask;

//
// import React, {useState} from 'react';
// import {View, Text, Modal, TextInput, TouchableOpacity} from 'react-native';
// import CustomBackButtonHeading from '../../../components/customBackButtonHeading/CustomBackButtonHeading';
// import Placeholder from '../../../components/placeholder/Placeholder';
// import {Calendar} from 'react-native-calendars';
// import ClickButton from '../../../components/clickButton/ClickButton';
// import Styles from './Styles';

// const AddTask = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [selectedDate, setSelectedDate] = useState('');

//   return (
//     <View style={Styles.screen}>
//       <View style={Styles.container}>
//         <CustomBackButtonHeading
//           title="Add New Task"
//           titleStyle={Styles.titleStyle}
//         />
// <Placeholder title="Task Title" placeholder="Input task title..." />
// <View style={Styles.placeHolder}>
//   <Text style={Styles.label}>Note</Text>
//   <TextInput
//     style={Styles.input}
//     placeholder="Input task notes..."
//     multiline
//   />
// </View>
//         <Placeholder title="Tags" placeholder="-Select tags-" />
//         <Text style={Styles.reminder}>Remind Me</Text>
// <TouchableOpacity
//   onPress={() => setShowModal(true)}
//   style={Styles.calendarBox}>
//   <Text style={Styles.calendarText}>Date & Time</Text>
//   <Text style={Styles.calendarDate}>{selectedDate}</Text>
// </TouchableOpacity>
//         <Modal visible={showModal} animationType="slide">
//           <Calendar
//             style={Styles.calendar}
//             onDayPress={day => {
//               setSelectedDate(day.dateString);
//               setShowModal(false);
//             }}
//           />
// <TouchableOpacity style={Styles.calendarButton}>
//   <ClickButton text="Set Date & Time" />
// </TouchableOpacity>
//         </Modal>
//         <View style={Styles.buttonContainer}>
//           <ClickButton text="Add new Task" />
//         </View>
//       </View>
//     </View>
//   );
// };

// export default AddTask;

// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   Modal,
//   TextInput,
//   TouchableOpacity,
//   Alert,
// } from 'react-native';
// import {Calendar} from 'react-native-calendars';
// import firestore from '@react-native-firebase/firestore'; // Import firestore from Firebase
// import CustomBackButtonHeading from '../../../components/customBackButtonHeading/CustomBackButtonHeading';
// import ClickButton from '../../../components/clickButton/ClickButton';
// import Styles from './Styles';

// const AddTask = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [selectedDate, setSelectedDate] = useState('');
//   const [taskTitle, setTaskTitle] = useState('');
//   const [note, setNote] = useState('');
//   const [tags, setTags] = useState('');

//   const handleSubmit = async () => {
//     try {
//       // Add the task data to Firestore
//       await firestore()
//         .collection('tasks')
//         .add({
//           title: taskTitle,
//           note: note,
//           tags: tags.split(',').map(tag => tag.trim()), // Split tags by comma and trim whitespace
//           reminder: selectedDate,
//           createdAt: firestore.FieldValue.serverTimestamp(), // Set creation timestamp
//         });

//       console.log('Task added successfully!');
//       Alert.alert('Task added successfully!');

//       // Clear input fields after submission
//       setTaskTitle('');
//       setNote('');
//       setTags('');
//       setSelectedDate('');
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
//           style={Styles.input}
//           value={taskTitle}
//           onChangeText={setTaskTitle}
//           placeholder="Enter task title..."
//         />
//         <Text style={Styles.label}>Note</Text>
//         <TextInput
//           style={[Styles.input, {height: 100}]}
//           value={note}
//           onChangeText={setNote}
//           placeholder="Enter task notes..."
//           multiline
//         />
//         <Text style={Styles.label}>Tags</Text>
//         <TextInput
//           style={Styles.input}
//           value={tags}
//           onChangeText={setTags}
//           placeholder="Enter tags separated by commas..."
//         />
//         <TouchableOpacity
//           onPress={() => setShowModal(true)}
//           style={Styles.calendarBox}>
//           <Text style={Styles.calendarText}>Set Reminder</Text>
//           <Text style={Styles.calendarDate}>
//             {selectedDate || 'Select Date'}
//           </Text>
//         </TouchableOpacity>
//         <Modal visible={showModal} animationType="slide">
//           <Calendar
//             style={Styles.calendar}
//             onDayPress={day => {
//               setSelectedDate(day.dateString);
//               setShowModal(false);
//             }}
//           />
//           <TouchableOpacity
//             style={Styles.calendarButton}
//             onPress={handleSubmit}>
//             <ClickButton text="Set Reminder" />
//           </TouchableOpacity>
//         </Modal>
//         <View style={Styles.buttonContainer}>
//           <ClickButton text="Add Task" onPress={handleSubmit} />
//         </View>
//       </View>
//     </View>
//   );
// };

// export default AddTask;

// import React, {Component} from 'react';
// import {StyleSheet, Text, View} from 'react-native';
// import CalendarPicker from 'react-native-calendar-picker';
// import {getMonth, getYear, isAfter, isBefore} from 'date-fns';

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedStartDate: null,
//     };
//     this.onDateChange = this.onDateChange.bind(this);
//   }

//   onDateChange(date) {
//     this.setState({
//       selectedStartDate: date,
//     });
//   }

//   render() {
//     const {selectedStartDate} = this.state;
//     const startDate = selectedStartDate ? selectedStartDate.toString() : '';
//     return (
//       <View style={styles.container}>
//         <CalendarPicker onDateChange={this.onDateChange} />

//         <View>
//           <Text>SELECTED DATE: {startDate}</Text>
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//     marginTop: 100,
//   },
// });

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// import React, {useState} from 'react';
// import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
// import firestore from '@react-native-firebase/firestore'; // Import firestore from Firebase
// import CustomBackButtonHeading from '../../../components/customBackButtonHeading/CustomBackButtonHeading';
// import ClickButton from '../../../components/clickButton/ClickButton';
// import Styles from './Styles';

// const AddTask = () => {
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

// export default AddTask;
