import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const useLogin = ({navigation}: any) => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '39661618913-aqrpsfrru0qkq4sr72ejcukpracb0gvv.apps.googleusercontent.com',
    });
  }, []);

  const handleLogIn = () => {
    if (!email || !password) {
      Alert.alert('Please enter your email and password');
      return;
    }
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        if (userCredential?.user?.email) {
          navigation.navigate('Home');
        }
      })
      .catch(error => {
        if (error.code === 'auth/user-not-found') {
          Alert.alert('No user found with that email address');
        } else if (error.code === 'auth/wrong-password') {
          Alert.alert('Invalid password');
        } else if (error.code === 'auth/invalid-email') {
          Alert.alert('Invalid email address');
        } else {
          Alert.alert('Error', error.message || 'Invalid data');
        }
      });
  };

  const GoogleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });
      await GoogleSignin.signOut();

      const {idToken, user} = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      await auth().signInWithCredential(googleCredential);

      const userData = {
        email: user.email,
        name: user.familyName,
      };

      await firestore().collection('users').doc(user.id).set(userData);

      navigation.navigate('Home', {userEmail: user.email});

      return user;
    } catch (error) {
      console.error('Google Sign-In Error:', error);
      Alert.alert('Google Sign-In Error' || 'An unknown error occurred');
      throw error;
    }
  };

  return {
    email,
    setEmail,
    setPassword,
    handleLogIn,
    password,
    GoogleSignIn,
  };
};

export default useLogin;
