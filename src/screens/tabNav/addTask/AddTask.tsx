import React, {useState} from 'react';
import {View, Text, Modal, TextInput, TouchableOpacity} from 'react-native';
import CustomBackButtonHeading from '../../../components/customBackButtonHeading/CustomBackButtonHeading';
import Placeholder from '../../../components/placeholder/Placeholder';
import {Calendar} from 'react-native-calendars';
import ClickButton from '../../../components/clickButton/ClickButton';
import Styles from './Styles';

const AddTask = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');

  return (
    <View style={Styles.screen}>
      <View style={Styles.container}>
        <CustomBackButtonHeading
          title="Add New Task"
          titleStyle={Styles.titleStyle}
        />
        <Placeholder title="Task Title" placeholder="Input task title..." />
        <View style={Styles.placeHolder}>
          <Text style={Styles.label}>Note</Text>
          <TextInput
            style={Styles.input}
            placeholder="Input task notes..."
            multiline
          />
        </View>
        <Placeholder title="Tags" placeholder="-Select tags-" />
        <Text style={Styles.reminder}>Remind Me</Text>
        <TouchableOpacity
          onPress={() => setShowModal(true)}
          style={Styles.calendarBox}>
          <Text style={Styles.calendarText}>Date & Time</Text>
          <Text style={Styles.calendarDate}>{selectedDate}</Text>
        </TouchableOpacity>
        <Modal visible={showModal} animationType="slide">
          <Calendar
            style={Styles.calendar}
            onDayPress={day => {
              setSelectedDate(day.dateString);
              setShowModal(false);
            }}
          />
          <TouchableOpacity style={Styles.calendarButton}>
            <ClickButton text="Set Date & Time" />
          </TouchableOpacity>
        </Modal>
        <View style={Styles.buttonContainer}>
          <ClickButton text="Add new Task" />
        </View>
      </View>
    </View>
  );
};

export default AddTask;
