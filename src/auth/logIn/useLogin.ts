// import React, {useState} from 'react';
// import {Alert} from 'react-native';

// import auth from '@react-native-firebase/auth';
// const useLogin = ({navigation}: any) => {
//   const [password, setPassword] = useState('');
//   const [email, setEmail] = useState('');

//   const handleSignIn = () => {
//     if (!email || !password) {
//       Alert.alert('Please enter your email and password');
//       return;
//     }
//     auth()
//       .signInWithEmailAndPassword(email, password)
//       .then(userCredential => {
//         if (userCredential?.user?.email) {
//           Alert.alert('User login successfully');
//           navigation.navigate('Home');
//         }
//       })
//       .catch(error => {
//         if (error.code === 'auth/user-not-found') {
//           Alert.alert('No user found with that email address');
//         }
//         if (error.code === 'auth/wrong-password') {
//           Alert.alert('Invalid password');
//         }
//         if (error.code === 'auth/invalid-email') {
//           Alert.alert('Invalid email address');
//         }
//         Alert.alert('Invalid data');
//       });
//   };
//   return {
//     email,
//     setEmail,
//     setPassword,
//     handleSignIn,
//     password,
//   };
// };
// export default useLogin;

// import {useEffect, useState} from 'react';
// import {GoogleSignin} from '@react-native-google-signin/google-signin';
// import auth from '@react-native-firebase/auth';
// import firestore from '@react-native-firebase/firestore'; // Import Firestore

// const UseLogin = ({navigation}: any) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   useEffect(() => {
//     GoogleSignin.configure({
//       webClientId:
//         '39661618913-aqrpsfrru0qkq4sr72ejcukpracb0gvv.apps.googleusercontent.com',
//     });
//   }, []);

//   const GoogleSignIn = async () => {
//     try {
//       await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
//       await GoogleSignin.signOut();

//       const {idToken, user} = await GoogleSignin.signIn();
//       const googleCredential = auth.GoogleAuthProvider.credential(idToken);
//       await auth().signInWithCredential(googleCredential);

//       // Assuming you have user data to save to Firestore
//       const userData = {
//         email: user.email,
//         name: user.familyName,
//       };

//       // Save user data to Firestore
//       await firestore().collection('users').doc(user.id).set(userData);

//       navigation.navigate('Home', {userEmail: user.email});

//       return user;
//     } catch (error) {
//       console.error('Google Sign-In Error:', error);
//       throw error;
//     }
//   };

//   return {
//     email,
//     setEmail,
//     setPassword,
//     password,
//     GoogleSignIn,
//   };
// };

// export default UseLogin;
//
//
// import React, {useEffect, useState} from 'react';
// import {Alert} from 'react-native';
// import {GoogleSignin} from '@react-native-google-signin/google-signin';
// import firestore from '@react-native-firebase/firestore';

// import auth from '@react-native-firebase/auth';
// const useLogin = ({navigation}: any) => {
//   const [password, setPassword] = useState('');
//   const [email, setEmail] = useState('');

//   const handleSignIn = () => {
//     if (!email || !password) {
//       Alert.alert('Please enter your email and password');
//       return;
//     }
//     auth()
//       .signInWithEmailAndPassword(email, password)
//       .then(userCredential => {
//         if (userCredential?.user?.email) {
//           Alert.alert('User login successfully');
//           navigation.navigate('Home');
//         }
//       })
//       .catch(error => {
//         if (error.code === 'auth/user-not-found') {
//           Alert.alert('No user found with that email address');
//         }
//         if (error.code === 'auth/wrong-password') {
//           Alert.alert('Invalid password');
//         }
//         if (error.code === 'auth/invalid-email') {
//           Alert.alert('Invalid email address');
//         }
//         Alert.alert('Invalid data');
//       });
//     useEffect(() => {
//       GoogleSignin.configure({
//         webClientId:
//           '39661618913-aqrpsfrru0qkq4sr72ejcukpracb0gvv.apps.googleusercontent.com',
//       });
//     }, []);

//     const GoogleSignIn = async () => {
//       try {
//         await GoogleSignin.hasPlayServices({
//           showPlayServicesUpdateDialog: true,
//         });
//         await GoogleSignin.signOut();

//         const {idToken, user} = await GoogleSignin.signIn();
//         const googleCredential = auth.GoogleAuthProvider.credential(idToken);
//         await auth().signInWithCredential(googleCredential);

//         const userData = {
//           email: user.email,
//           name: user.familyName,
//         };

//         await firestore().collection('users').doc(user.id).set(userData);

//         navigation.navigate('Home', {userEmail: user.email});

//         return user;
//       } catch (error) {
//         console.error('Google Sign-In Error:', error);
//         throw error;
//       }
//     };
//   };
//   return {
//     email,
//     setEmail,
//     setPassword,
//     handleSignIn,
//     password,
//     GoogleSignIn,
//   };
// };
// export default useLogin;

//
import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const useLogin = ({navigation}: any) => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Configure Google Sign-In
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
          // Alert.alert('User logged in successfully');
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
