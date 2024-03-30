import {useState} from 'react';
import {Alert} from 'react-native';
import {firebase} from '@react-native-firebase/auth';

const UseForgetPassword = ({navigation}: any) => {
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
        Alert.alert(
          'Password reset email sent successfully! Re-enter your password',
        );
      })
      .catch(error => {
        console.log('Error', error.message);
        console.log('Error sending password reset email');
        Alert.alert('Error sending password reset email');
      });
  };
  return {
    email,
    setEmail,
    handleResetPassword,
  };
};

export default UseForgetPassword;
