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

// import React from 'react';
// import {SafeAreaProvider} from 'react-native-safe-area-context';
// import Navigation from './src/navigation/Navigation';
// import {NavigationContainer} from '@react-navigation/native';

// const App = () => {
//   return (
//     <SafeAreaProvider>
//       <NavigationContainer>
//         <Navigation />
//       </NavigationContainer>
//     </SafeAreaProvider>
//   );
// };

// export default App;

// import React, {useState} from 'react';
// import {
//   View,
//   TouchableOpacity,
//   Text,
//   Modal,
//   StyleSheet,
//   Image,
// } from 'react-native';

// const App = () => {
//   const [isModalVisible, setIsModalVisible] = useState(false);

//   const toggleModal = () => {
//     setIsModalVisible(!isModalVisible);
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity onPress={toggleModal}>
//         <Image source={require('./assets/options.png')} />
//       </TouchableOpacity>

//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={isModalVisible}
//         onRequestClose={() => {
//           setIsModalVisible(!isModalVisible);
//         }}>
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <TouchableOpacity onPress={toggleModal}>
//               <Text>Close</Text>
//             </TouchableOpacity>
//             <Text>Option 1</Text>
//             <Text>Option 2</Text>
//             <Text>Option 3</Text>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0,0,0,0.5)',
//   },
//   modalContent: {
//     backgroundColor: 'white',
//     padding: 20,
//     borderRadius: 10,
//   },
// });

// export default App;

// import {View, Text, StyleSheet, Alert} from 'react-native';
// import React from 'react';
// import {
//   Menu,
//   MenuOption,
//   MenuOptions,
//   MenuProvider,
//   MenuTrigger,
// } from 'react-native-popup-menu';

// const App = () => {
//   return (
//     <MenuProvider>
//       <Menu>
//         <MenuTrigger text="Options" />
//         <MenuOptions>
//           <MenuOption
//             onSelect={() => Alert.alert('You clicked option 1')}
//             text="Option 1"></MenuOption>
//           <MenuOption>
//             <Text>Option 2</Text>
//           </MenuOption>
//         </MenuOptions>
//         <MenuOption disabled={true} text="Option 3"></MenuOption>
//       </Menu>
//     </MenuProvider>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     left: '90%',
//     top: 10,
//   },
// });

// export default App;
// import React, {useState} from 'react';
// import {Image, TouchableOpacity, View} from 'react-native';
// import {Menu, Divider, Provider, Button} from 'react-native-paper';

// const OptionsMenu: React.FC = () => {
//   const [visible, setVisible] = useState(false);

//   const openMenu = () => setVisible(true);
//   const closeMenu = () => setVisible(false);

//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Provider>
//         <Menu
//           visible={visible}
//           onDismiss={closeMenu}
//           anchor={
//             <TouchableOpacity onPress={openMenu}>
//               <Image
//                 source={require('./assets/options.png')}
//                 style={{width: 100, height: 100}}
//               />
//             </TouchableOpacity>
//           }>
//           <Menu.Item onPress={() => {}} title="Option 1" />
//           <Menu.Item onPress={() => {}} title="Option 2" />
//           <Divider />
//           <Menu.Item onPress={() => {}} title="Option 3" />
//         </Menu>
//       </Provider>
//     </View>
//   );
// };

// export default OptionsMenu;
// import React, {useState} from 'react';
// import {Image, TouchableOpacity, View} from 'react-native';
// import {Menu, Divider, Provider} from 'react-native-paper';

// const OptionsMenu: React.FC = () => {
//   const [visible, setVisible] = useState(false);

//   const openMenu = () => setVisible(true);
//   const closeMenu = () => setVisible(false);

//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Provider>
//         <Menu
//           visible={visible}
//           onDismiss={closeMenu}
//           anchor={
//             <TouchableOpacity onPress={openMenu}>
//               <Image
//                 source={require('./assets/options.png')}
//                 style={{width: 100, height: 100, left: 130}}
//               />
//             </TouchableOpacity>
//           }>
//           <Menu.Item onPress={() => {}} title="Option 1" />
//           <Menu.Item onPress={() => {}} title="Option 2" />
//           <Divider />
//           <Menu.Item onPress={() => {}} title="Option 3" />
//         </Menu>
//       </Provider>
//     </View>
//   );
// };

// export default OptionsMenu;
//
//
//
//
// import React, {useState} from 'react';
// import {Image, TouchableOpacity, View, StyleSheet} from 'react-native';
// import {Menu, Divider, Provider} from 'react-native-paper';

// const OptionsMenu: React.FC = () => {
//   const [visible, setVisible] = useState(false);

//   const openMenu = () => setVisible(true);
//   const closeMenu = () => setVisible(false);

//   return (
//     // <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//     <View>
//       <Provider>
//         <TouchableOpacity onPress={openMenu}>
//           <Image
//             source={require('./assets/options.png')}
//             style={styles.image}
//           />
//         </TouchableOpacity>
//         <Menu
//           visible={visible}
//           onDismiss={closeMenu}
//           anchor={
//             <Image
//               source={require('./assets/options.png')}
//               style={styles.image}
//             />
//           }
//           contentStyle={styles.menu}>
//           <Menu.Item onPress={() => {}} title="Option 1" />
//           <Menu.Item onPress={() => {}} title="Option 2" />
//           <Divider />
//           <Menu.Item onPress={() => {}} title="Option 3" />
//         </Menu>
//       </Provider>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   image: {
//     width: 100,
//     height: 100,
//     position: 'relative',
//   },
//   menu: {
//     marginTop: -80,
//     marginLeft: -80,
//   },
// });

// export default OptionsMenu;
//
//
//
// Google Authentication
// import React from 'react';
// import Google from './src/auth/logIn/Google';

// const App = () => {
//   return <Google />;
// };

// export default App;
//
//
//
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigation from './src/navigation/Navigation';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
//
//
//
//
// import React from 'react';
// import {Alert, StyleSheet, Text, View} from 'react-native';
// import {
//   Menu,
//   MenuOptions,
//   MenuOption,
//   MenuTrigger,
//   MenuProvider,
// } from 'react-native-popup-menu';

// const App = () => {
//   return (
//     <MenuProvider style={styles.container}>
//       <Menu>
//         <MenuTrigger style={styles.button} text="Open Menu" />
//         <MenuOptions>
//           <MenuOption
//             onSelect={() => Alert.alert('You clicked on 1st option')}
//             text="Option 1"
//           />
//           <MenuOption onSelect={() => Alert.alert('You clicked on 2nd Option')}>
//             <Text style={{color: 'red'}}>Option 2</Text>
//           </MenuOption>
//           <MenuOption disabled={true} text="Option 3" />
//         </MenuOptions>
//       </Menu>
//     </MenuProvider>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'flex-end',
//   },
//   button: {
//     backgroundColor: 'lightblue',
//     padding: 15,
//     borderRadius: 5,
//     textAlign: 'center',
//     fontSize: 16,
//     margin: 4,
//   },
// });

// export default App;
// import React from 'react';
// import {Alert, Image, StyleSheet, Text, View} from 'react-native';
// import {
//   Menu,
//   MenuOptions,
//   MenuOption,
//   MenuTrigger,
//   MenuProvider,
// } from 'react-native-popup-menu';

// const App = () => {
//   return (
//     <MenuProvider style={styles.container}>
//       <Menu>
//         <MenuTrigger customStyles={triggerStyles}>
//           <Image
//             source={require('./assets/options.png')}
//             style={styles.image}
//           />
//         </MenuTrigger>
//         <MenuOptions>
//           <MenuOption
//             onSelect={() => Alert.alert('You clicked on 1st option')}
//             text="Option 1"
//           />
//           <MenuOption onSelect={() => Alert.alert('You clicked on 2nd Option')}>
//             <Text style={{color: 'red'}}>Option 2</Text>
//           </MenuOption>
//           <MenuOption disabled={true} text="Option 3" />
//         </MenuOptions>
//       </Menu>
//     </MenuProvider>
//   );
// };

// const triggerStyles = {
//   triggerTouchable: {underlayColor: 'transparent'},
//   triggerWrapper: {padding: 10},
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'flex-end',
//   },
//   image: {
//     width: 40,
//     height: 40,
//   },
// });

// export default App;
