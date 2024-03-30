import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import CustomBackButtonHeading from '../../components/customBackButtonHeading/CustomBackButtonHeading';
import Placeholder from '../../components/placeholder/Placeholder';
import {Calendar} from 'react-native-calendars';
import ClickButton from '../../components/clickButton/ClickButton';

const AddNewTask = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <CustomBackButtonHeading
          title="Add New Task"
          titleStyle={styles.titleStyle}
        />
        <Placeholder title="Task Title" placeholder="Input task title..." />
        <View style={styles.placeHolder}>
          <Text style={styles.label}>Note</Text>
          <TextInput
            style={styles.input}
            placeholder="Input task notes..."
            multiline
          />
        </View>
        <Placeholder title="Tags" placeholder="-Select tags-" />
        <Text style={styles.reminder}>Remind Me</Text>
        <TouchableOpacity
          onPress={() => setShowModal(true)}
          style={styles.calendarBox}>
          <Text style={styles.calendarText}>Date & Time</Text>
          <Text style={styles.calendarDate}>{selectedDate}</Text>
        </TouchableOpacity>
        <Modal visible={showModal} animationType="slide">
          <Calendar
            style={styles.calendar}
            onDayPress={day => {
              setSelectedDate(day.dateString);
              setShowModal(false);
            }}
          />
          <TouchableOpacity style={styles.calendarButton}>
            <ClickButton text="Set Date & Time" />
          </TouchableOpacity>
        </Modal>
        <View style={styles.buttonContainer}>
          {/* <ClickButton text="Save Task" /> */}
          <ClickButton text="Add new Task" />
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
  },
  titleStyle: {
    fontSize: 18,
    marginTop: 15,
    marginLeft: 95,
  },
  placeHolder: {
    marginTop: 10,
    marginBottom: 10,
  },
  label: {
    color: 'black',
  },
  input: {
    borderWidth: 1,
    borderColor: '#D2D2D2',
    borderRadius: 5,
    color: 'black',
    marginTop: 5,
    padding: 10,
    minHeight: 90,
  },
  reminder: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
  },
  calendar: {
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    elevation: 4,
  },
  calendarBox: {
    borderWidth: 1,
    borderColor: '#D2D2D2',
    height: 75,
    borderRadius: 5,
    justifyContent: 'center',
    marginTop: 10,
  },
  calendarText: {
    color: '#0B0A1166',
    fontSize: 12,
    fontWeight: '400',
    height: 16,
    marginLeft: 16,
    marginTop: 16,
  },
  calendarDate: {
    fontSize: 16,
    color: '#0B0A11',
    fontWeight: '700',
    marginLeft: 16,
    marginBottom: 16,
  },
  calendarButton: {
    marginLeft: 15,
    marginRight: 15,
  },
  buttonContainer: {
    marginTop: 180,
    marginRight: 15,
  },
});

export default AddNewTask;
