import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';
import CustomBackButtonHeading from '../../../components/customBackButtonHeading/CustomBackButtonHeading';
import ClickButton from '../../../components/clickButton/ClickButton';
import Styles from './addTaskStyles';
import {Dropdown} from 'react-native-element-dropdown';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import useAddTask from './useAddTask';
import Colors from '../../../constants/Colors';
import Images from '../../../constants/Images';

const AddTask = ({navigation}: any) => {
  const {
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
  } = useAddTask({navigation});
  return (
    <View style={Styles.screen}>
      <View style={Styles.container}>
        <CustomBackButtonHeading
          title="Add New Task"
          titleStyle={Styles.titleStyle}
        />
        <Text style={Styles.title}>Task Title</Text>
        <TextInput
          style={Styles.inputSimple}
          value={taskTitle}
          onChangeText={setTaskTitle}
          placeholder="Input task title..."
        />
        <Text style={Styles.title}>Note</Text>
        <TextInput
          style={Styles.input}
          value={note}
          onChangeText={setNote}
          placeholder="Enter task notes..."
          multiline
        />
        <Text style={Styles.title}>Tags</Text>
        <View style={Styles.tags}>
          <Dropdown
            style={[Styles.dropdown, isFocus && {borderColor: 'blue'}]}
            placeholderStyle={Styles.placeholderStyle}
            selectedTextStyle={Styles.selectedTextStyle}
            inputSearchStyle={Styles.inputSearchStyle}
            iconStyle={Styles.iconStyle}
            data={data}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? ' -Select tag-' : '...'}
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setValue(item.value);
              setIsFocus(false);
            }}
            renderLeftIcon={() => (
              <Image
                source={Images.Hash}
                style={[
                  {width: 10, height: 10},
                  value && {tintColor: getLeftIconColor()},
                ]}
              />
            )}
          />
        </View>
        <View>
          <Text
            style={{
              fontWeight: '700',
              color: Colors.black,
              fontSize: 16,
              marginTop: 10,
            }}>
            Remind Me
          </Text>
          <TouchableOpacity
            onPress={showDateTimePicker}
            style={{
              borderWidth: 1,
              borderColor: Colors.lightgray,
              marginTop: 10,
              borderRadius: 5,
              padding: 16,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{}}>
              <TouchableOpacity>
                <Text style={{fontSize: 12}}>Date & Time</Text>
              </TouchableOpacity>
              <DateTimePickerModal
                isVisible={isDateTimePickerVisible}
                mode="datetime"
                onConfirm={handleDateTimeConfirm}
                onCancel={hideDateTimePicker}
              />
              <View style={{flexDirection: 'row', marginTop: 4}}>
                <Text
                  style={{
                    fontWeight: '700',
                    color: Colors.black,
                    fontSize: 16,
                  }}>
                  {selectedDate}
                </Text>
                <Text
                  style={{
                    fontWeight: '700',
                    color: Colors.black,
                    fontSize: 16,
                    paddingHorizontal: 5,
                  }}>
                  -
                </Text>
                <Text
                  style={{
                    fontWeight: '700',
                    color: Colors.black,
                    fontSize: 16,
                  }}>
                  {selectedTime}
                </Text>
              </View>
            </View>
            <View>
              <Image
                source={Images.Edit}
                style={{
                  marginTop: '50%',
                }}
              />
            </View>
          </TouchableOpacity>
        </View>
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

export default AddTask;
