import React, {useState} from 'react';
import {Alert} from 'react-native';
import firestore from '@react-native-firebase/firestore';

const useAddTask = ({navigation}: any) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [note, setNote] = useState('');
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const data = [
    {label: ' Urgent', value: 'Urgent'},
    {label: ' Normal', value: 'Normal'},
  ];

  const getLeftIconColor = () => {
    if (value === 'Urgent') {
      return '#BA1735';
    } else if (value === 'Normal') {
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
          tags: value,
          datetime: selectedDate + ' ' + selectedTime,
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
      setSelectedDate('');
      setSelectedTime('');
    }
  };

  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [isDateTimePickerVisible, setDateTimePickerVisibility] =
    useState(false);

  const showDateTimePicker = () => {
    setDateTimePickerVisibility(true);
  };

  const hideDateTimePicker = () => {
    setDateTimePickerVisibility(false);
  };

  const handleDateTimeConfirm = date => {
    const options = {month: 'short', day: '2-digit', year: 'numeric'};
    const formattedDate = new Date(date).toLocaleDateString('en-US', options);
    const optionsTime = {hour: 'numeric', minute: '2-digit', hour12: true};
    const formattedTime = new Date(date).toLocaleTimeString(
      'en-US',
      optionsTime,
    );
    setSelectedDate(formattedDate);
    setSelectedTime(formattedTime);
    hideDateTimePicker();
  };

  return {
    handleSubmit,
    handleDateTimeConfirm,
    showDateTimePicker,
    getLeftIconColor,
    isFocus,
    setIsFocus,
    value,
    setValue,
    loading,
    setLoading,
    note,
    setNote,
    data,
    selectedDate,
    isDateTimePickerVisible,
    setDateTimePickerVisibility,
    hideDateTimePicker,
    selectedTime,
    setSelectedTime,
    taskTitle,
    setTaskTitle,
  };
};

export default useAddTask;
