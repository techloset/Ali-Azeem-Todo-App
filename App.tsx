// import {View, Text} from 'react-native';
// import React, {useEffect} from 'react';
// import firestore from '@react-native-firebase/firestore';
// import {
//   GestureHandlerRootView,
//   TouchableOpacity,
// } from 'react-native-gesture-handler';

// const App = () => {
//   const addDummyData = async () => {
//     try {
//       await firestore().collection('users').add({
//         name: 'Ali',
//         age: 18,
//         email: 'mailto:john@example.com',
//       });
//       console.log('Dummy data added successfully');
//     } catch (error) {
//       console.error('Error adding dummy data: ', error);
//     }
//   };

//   return (
//     <GestureHandlerRootView style={{flex: 1}}>
//       <Text>Writing data to Firestore...</Text>
//       <TouchableOpacity onPress={addDummyData}>
//         <Text style={{backgroundColor: 'red', fontSize: 50}}>Send Data</Text>
//       </TouchableOpacity>
//     </GestureHandlerRootView>
//   );
// };

// export default App;

// import React, {useState} from 'react';
// import {View, Text, TextInput, Button} from 'react-native';
// import firestore from '@react-native-firebase/firestore';

// const App = () => {
//   const [name, setName] = useState('');
//   const [age, setAge] = useState('');
//   const [email, setEmail] = useState('');

//   const addUserData = async () => {
//     try {
//       await firestore()
//         .collection('users')
//         .add({
//           name,
//           age: parseInt(age), // convert age to integer
//           email,
//         });
//       console.log('User data added successfully');
//     } catch (error) {
//       console.error('Error adding user data: ', error);
//     }
//   };

//   return (
//     <View style={{flex: 1, padding: 20}}>
//       <Text
//         style={{
//           fontSize: 50,
//           textAlign: 'center',
//         }}>
//         CLI wireless(Ckeck)
//       </Text>
//       <Text>Name:</Text>
//       <TextInput
//         style={{
//           height: 40,
//           borderColor: 'gray',
//           borderWidth: 1,
//           marginBottom: 10,
//         }}
//         onChangeText={text => setName(text)}
//         value={name}
//       />
//       <Text>Age:</Text>
//       <TextInput
//         style={{
//           height: 40,
//           borderColor: 'gray',
//           borderWidth: 1,
//           marginBottom: 10,
//         }}
//         onChangeText={text => setAge(text)}
//         value={age}
//         keyboardType="numeric"
//       />
//       <Text>Email:</Text>
//       <TextInput
//         style={{
//           height: 40,
//           borderColor: 'gray',
//           borderWidth: 1,
//           marginBottom: 10,
//         }}
//         onChangeText={text => setEmail(text)}
//         value={email}
//         keyboardType="email-address"
//       />
//       <Button title="Add User" onPress={addUserData} />
//     </View>
//   );
// };

// export default App;

import React from 'react';
import AppNavigation from './src/navigation/AppNavigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <AppNavigation />
    </SafeAreaProvider>
  );
};

export default App;
