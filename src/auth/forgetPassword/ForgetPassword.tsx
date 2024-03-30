import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import CustomBackButtonHeading from '../../components/customBackButtonHeading/CustomBackButtonHeading';
import Placeholder from '../../components/placeholder/Placeholder';
import ClickButton from '../../components/clickButton/ClickButton';
import {firebase} from '@react-native-firebase/auth';

const ForgetPassword = ({navigation}: any) => {
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.trim())) {
      Alert.alert('Invalid email address');
      return;
    }

    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        Alert.alert('Password reset email sent successfully!');
      })
      .catch(error => {
        console.log('Error', error.message); // Log the error message
        console.log('Error sending password reset email'); // Additional console.log
        Alert.alert('Error sending password reset email');
      });
  };

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.container}>
        <View>
          <CustomBackButtonHeading
            title="Forget Password"
            titleStyle={styles.titleStyle}
          />
          <Text style={styles.heading}>Welcome Back.</Text>
          <Text style={styles.message}>
            It's nice to see you again, let's recover your Password.
          </Text>
        </View>
        <View>
          <Placeholder
            title="Email Address"
            placeholder="yourname@email.com"
            onChangeText={(text: React.SetStateAction<string>) =>
              setEmail(text)
            }
            value={email}
          />
        </View>

        <View style={styles.bottom}>
          {/* <ClickButton
            text="Enter"
            onPress={() => {
              handleResetPassword;
              navigation.navigate('Home'); // Navigate to 'Home' screen
            }}
          /> */}
          <ClickButton
            text="Enter"
            onPress={() => {
              handleResetPassword(); // Corrected to call the function
              navigation.navigate('Login'); // Navigate to 'Home' screen
            }}
          />
        </View>
      </View>
    </ScrollView>
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
    left: 20,
  },
  heading: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
  },
  message: {
    color: 'gray',
    fontWeight: '500',
    marginBottom: 30,
  },
  bottom: {
    marginTop: 450,
  },
});

export default ForgetPassword;
