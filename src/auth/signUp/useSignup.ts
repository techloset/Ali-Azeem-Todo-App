import {useState} from 'react';
import {Alert} from 'react-native';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const useSignup = ({navigation}: any) => {
  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');

  const createUserAndAddToFirestore = () => {
    if (!name || !email || !phone || !password || !isChecked) {
      Alert.alert('Please fill in all fields');
      return;
    }

    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        console.log('User account created & signed in!');
        const user = userCredential.user;

        firestore()
          .collection('users')
          .add({
            name: name,
            phone: phone,
            email: user.email,
            password: password,
          })
          .then(() => {
            console.log('User data added to Firestore successfully');
            Alert.alert('User signup successful');
            if (navigation) {
              navigation.navigate('Home');
            } else {
              console.error('Navigation prop is undefined');
            }
          })
          .catch(error => {
            console.error('Error adding user data to Firestore: ', error);
          });
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
          Alert.alert('That email address is already in use!');
        } else if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
      });
  };

  return {
    createUserAndAddToFirestore,
    setEmail,
    setPassword,
    setName,
    setPhone,
    email,
    name,
    password,
    phone,
    isChecked,
    setIsChecked,
  };
};

export default useSignup;
