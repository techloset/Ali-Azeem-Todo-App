// import {View, Text} from 'react-native';
// import React from 'react';
// import DropdownComponent from './dropDown';

// const AddTask = () => {
//   return <DropdownComponent />;
// };

// export default AddTask;
//
//
//
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  StyleSheet,
  Image,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import CustomBackButtonHeading from '../../../components/customBackButtonHeading/CustomBackButtonHeading';
import ClickButton from '../../../components/clickButton/ClickButton';
import Styles from './Styles';
import {Dropdown} from 'react-native-element-dropdown';

const AddTask = ({navigation}: any) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [note, setNote] = useState('');
  const [tags, setTags] = useState('');
  const [loading, setLoading] = useState(false);

  const data = [
    {label: ' Urgent', value: '1'},
    {label: ' Normal', value: '2'},
  ];
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  // const renderLabel = () => {
  //   if (value || isFocus) {
  //     return (
  //       <Text style={[styles.label, isFocus && {color: 'blue'}]}>Tag</Text>
  //     );
  //   }
  //   return null;
  // };

  const getLeftIconColor = () => {
    if (value === '1') {
      return '#BA1735';
    } else if (value === '2') {
      return '#427DFE';
    } else {
      return '#7EBB4F';
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await firestore()
        .collection('tasks')
        .add({
          title: taskTitle,
          note: note,
          tags: tags.split(',').map(tag => tag.trim()),
          createdAt: firestore.FieldValue.serverTimestamp(),
        });

      navigation.navigate('ListView');
      console.log('Task added successfully!');
      Alert.alert('Task added successfully!');
    } catch (error) {
      console.error('Error adding task: ', error);
      Alert.alert('Error adding task. Please try again.');
    } finally {
      setLoading(false);
      setTaskTitle('');
      setNote('');
      setTags('');
    }
  };

  return (
    <View style={Styles.screen}>
      <View style={Styles.container}>
        <CustomBackButtonHeading
          title="Add New Task"
          titleStyle={Styles.titleStyle}
        />
        <Text style={Styles.label}>Task Title</Text>
        <TextInput
          style={Styles.inputSimple}
          value={taskTitle}
          onChangeText={setTaskTitle}
          placeholder="Input task title..."
        />
        <Text style={Styles.label}>Note</Text>
        <TextInput
          style={Styles.input}
          value={note}
          onChangeText={setNote}
          placeholder="Enter task notes..."
          multiline
        />
        <Text style={Styles.label}>Tags</Text>
        {/* <TextInput
          style={Styles.inputSimple}
          value={tags}
          onChangeText={setTags}
          placeholder="-Select tags-"
        /> */}
        <View style={styles.container}>
          {/* {renderLabel()} */}
          <Dropdown
            style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? ' Select tag' : '...'}
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setValue(item.value);
              setIsFocus(false);
            }}
            renderLeftIcon={() => (
              <Image
                source={require('../../../../assets/hash.png')}
                style={[
                  {width: 10, height: 10},
                  value && {tintColor: getLeftIconColor()},
                ]}
              />
            )}
          />
        </View>
        <Text style={Styles.label}>Add Date & Time</Text>
        <TouchableOpacity
          // onPress={() => setShowModal(true)}
          style={Styles.calendarBox}>
          <Text style={Styles.calendarText}>Date & Time</Text>
          {/* <Text style={Styles.calendarDate}>{selectedDate}</Text> */}
        </TouchableOpacity>
        <View style={Styles.buttonContainer}>
          <ClickButton text="Add Task" onPress={handleSubmit} />
        </View>
      </View>
      {loading && (
        <View style={Styles.loaderContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: 10,
    // padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

export default AddTask;
//
//
//
//
//
//
// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   Alert,
//   ActivityIndicator,
// } from 'react-native';
// import firestore from '@react-native-firebase/firestore';
// import CustomBackButtonHeading from '../../../components/customBackButtonHeading/CustomBackButtonHeading';
// import ClickButton from '../../../components/clickButton/ClickButton';
// import Styles from './Styles';

// const AddTask = ({navigation}: any) => {
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

//       navigation.navigate('ListView');
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
//       {loading && (
//         <View style={Styles.loaderContainer}>
//           <ActivityIndicator size="large" color="#0000ff" />
//         </View>
//       )}
//     </View>
//   );
// };

// export default AddTask;
//
//
//
// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   Alert,
//   ActivityIndicator,
// } from 'react-native';
// import firestore from '@react-native-firebase/firestore';
// import CustomBackButtonHeading from '../../../components/customBackButtonHeading/CustomBackButtonHeading';
// import ClickButton from '../../../components/clickButton/ClickButton';
// import Styles from './Styles';

// const AddTask = ({navigation}: any) => {
//   const [taskTitle, setTaskTitle] = useState('');
//   const [note, setNote] = useState('');
//   const [selectedTag, setSelectedTag] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async () => {
//     setLoading(true);
//     try {
//       await firestore().collection('tasks').add({
//         title: taskTitle,
//         note: note,
//         tag: selectedTag, // Storing only the selected tag instead of splitting
//         createdAt: firestore.FieldValue.serverTimestamp(),
//       });

//       navigation.navigate('ListView');
//       console.log('Task added successfully!');
//       Alert.alert('Task added successfully!');
//     } catch (error) {
//       console.error('Error adding task: ', error);
//       Alert.alert('Error adding task. Please try again.');
//     } finally {
//       setLoading(false);
//       setTaskTitle('');
//       setNote('');
//       setSelectedTag('');
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
//         <TouchableOpacity
//           onPress={() => setSelectedTag('Urgent')} // Set selectedTag to 'Urgent'
//           style={[
//             Styles.tagOption,
//             selectedTag === 'Urgent' && Styles.selectedTagOptionUrgent,
//           ]}>
//           <Text style={Styles.tagText}>Urgent</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           onPress={() => setSelectedTag('Normal')} // Set selectedTag to 'Normal'
//           style={[
//             Styles.tagOption,
//             selectedTag === 'Normal' && Styles.selectedTagOptionNormal,
//           ]}>
//           <Text style={Styles.tagText}>Normal</Text>
//         </TouchableOpacity>
//         <View style={Styles.buttonContainer}>
//           <ClickButton text="Add Task" onPress={handleSubmit} />
//         </View>
//       </View>
//       {loading && (
//         <View style={Styles.loaderContainer}>
//           <ActivityIndicator size="large" color="#0000ff" />
//         </View>
//       )}
//     </View>
//   );
// };

// export default AddTask;
