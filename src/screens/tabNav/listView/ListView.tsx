// import {View, Text, TextInput, FlatList, TouchableOpacity} from 'react-native';
// import React, {useEffect} from 'react';
// import {Image} from 'react-native-animatable';
// import Styles from './Styles';
// import {useNavigation} from '@react-navigation/native';

// import {useSelector, useDispatch} from 'react-redux';
// import {fetchDataFromFirestore} from '../../../redux/slice/firestoreSlice';

// const ListView = () => {
//   const navigation = useNavigation();

//   const handleNavigateToAddTask = () => {
//     navigation.navigate('AddTask');
//   };

//   const dispatch = useDispatch();
//   const {data, loading, error} = useSelector(state => state.firestore);

//   useEffect(() => {
//     dispatch(fetchDataFromFirestore());
//   }, [dispatch]);

//   if (loading) {
//     return (
//       <View>
//         <Text>Loading...</Text>
//       </View>
//     );
//   }

//   if (error) {
//     return (
//       <View>
//         <Text>Error: {error.message}</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={Styles.screen}>
//       <View style={Styles.container}>
//         <View style={Styles.Img}>
//           <Image source={require('../../../../assets/screenLogo.png')} />
//         </View>
//         <View style={Styles.searchBar}>
//           <TextInput placeholder="Search task here..." style={Styles.search} />
//           <Image
//             source={require('../../../../assets/search.png')}
//             style={Styles.searchIcon}
//           />
//         </View>
//         {/* Center Image Handler */}
//         <View style={Styles.center}>
//           <TouchableOpacity onPress={handleNavigateToAddTask}>
//             <Image source={require('../../../../assets/EmptyState.png')} />
//           </TouchableOpacity>
//           <Text style={Styles.centerTextHead}>No Task</Text>
//           <Text style={Styles.centerTextBody}>
//             Looks like you don't have a task,
//           </Text>
//           <Text style={Styles.centerTextBody}>please add task</Text>
//         </View>
//         {/* Data from Firestore */}
//         <View>
//           <FlatList
//             data={data}
//             keyExtractor={item => item.id}
//             renderItem={({item}) => (
//               <View>
//                 <Text>Title: {item.title}</Text>
//                 <Text>Note: {item.note}</Text>
//                 <Text>Tags: {item.tags.join(', ')}</Text>
//               </View>
//             )}
//           />
//         </View>
//       </View>
//     </View>
//   );
// };

// export default ListView;
//
//
//
//
//
// import {View, Text, TextInput, FlatList, TouchableOpacity} from 'react-native';
// import React, {useEffect} from 'react';
// import {Image} from 'react-native-animatable';
// import Styles from './Styles';
// import {useNavigation} from '@react-navigation/native';

// import {useSelector, useDispatch} from 'react-redux';
// import {fetchDataFromFirestore} from '../../../redux/slice/firestoreSlice';

// const ListView = () => {
//   const navigation = useNavigation();

//   const handleNavigateToAddTask = () => {
//     navigation.navigate('AddTask');
//   };

//   const dispatch = useDispatch();
//   const {data, loading, error} = useSelector(state => state.firestore);

//   useEffect(() => {
//     dispatch(fetchDataFromFirestore());
//   }, [dispatch]);

//   if (loading) {
//     return (
//       <View>
//         <Text>Loading...</Text>
//       </View>
//     );
//   }

//   if (error) {
//     return (
//       <View>
//         <Text>Error: {error.message}</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={Styles.screen}>
//       <View style={Styles.container}>
//         <View style={Styles.Img}>
//           <Image source={require('../../../../assets/screenLogo.png')} />
//         </View>
//         <View style={Styles.searchBar}>
//           <TextInput placeholder="Search task here..." style={Styles.search} />
//           <Image
//             source={require('../../../../assets/search.png')}
//             style={Styles.searchIcon}
//           />
//         </View>
//         {data.length === 0 ? (
//           <View style={Styles.center}>
//             <TouchableOpacity onPress={handleNavigateToAddTask}>
//               <Image source={require('../../../../assets/EmptyState.png')} />
//             </TouchableOpacity>
//             <Text style={Styles.centerTextHead}>No Task</Text>
//             <Text style={Styles.centerTextBody}>
//               Looks like you don't have a task,
//             </Text>
//             <Text style={Styles.centerTextBody}>please add task</Text>
//           </View>
//         ) : (
//           <FlatList
//             data={data}
//             keyExtractor={item => item.id}
//             renderItem={({item}) => (
//               <View>
//                 <Text>Title: {item.title}</Text>
//                 <Text>Note: {item.note}</Text>
//                 <Text>Tags: {item.tags.join(', ')}</Text>
//               </View>
//             )}
//           />
//         )}
//       </View>
//     </View>
//   );
// };

// export default ListView;
//
//
//
//
//
//
//
//
// import React, {useEffect} from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   FlatList,
//   TouchableOpacity,
//   ActivityIndicator,
//   StyleSheet,
//   ScrollView,
// } from 'react-native';
// import {Image} from 'react-native-animatable';
// import Styles from './Styles';
// import {useNavigation} from '@react-navigation/native';

// import {useSelector, useDispatch} from 'react-redux';
// import {fetchDataFromFirestore} from '../../../redux/slice/firestoreSlice';

// const ListView = () => {
//   const navigation = useNavigation();

//   const handleNavigateToAddTask = () => {
//     navigation.navigate('AddTask');
//   };

//   const dispatch = useDispatch();
//   const {data, loading, error} = useSelector(state => state.firestore);

//   useEffect(() => {
//     dispatch(fetchDataFromFirestore());
//   }, [dispatch]);

//   return (
//     <ScrollView style={{flex: 1}}>
//       <View style={Styles.screen}>
//         <View style={Styles.container}>
//           <View style={Styles.Img}>
//             <Image source={require('../../../../assets/screenLogo.png')} />
//           </View>
//           <View style={Styles.searchBar}>
//             <TextInput
//               placeholder="Search task here..."
//               style={Styles.search}
//             />
//             <Image
//               source={require('../../../../assets/search.png')}
//               style={Styles.searchIcon}
//             />
//           </View>
//           {loading && data.length === 0 && (
//             <View style={Styles.loaderContainer}>
//               <ActivityIndicator size="large" color="#0000ff" />
//             </View>
//           )}
//           {data.length === 0 && !loading && (
//             <View style={Styles.center}>
//               <TouchableOpacity onPress={handleNavigateToAddTask}>
//                 <Image source={require('../../../../assets/EmptyState.png')} />
//               </TouchableOpacity>
//               <Text style={Styles.centerTextHead}>No Task</Text>
//               <Text style={Styles.centerTextBody}>
//                 Looks like you don't have a task,
//               </Text>
//               <Text style={Styles.centerTextBody}>please add task</Text>
//             </View>
//           )}
//           {data.length > 0 && (
//             <FlatList
//               data={data}
//               keyExtractor={item => item.id}
//               renderItem={({item}) => (
//                 <View style={styles.dataContainer}>
//                   <Text style={styles.title}>{item.title}</Text>
//                   <Text style={styles.note}>{item.note}</Text>
//                   <View
//                     style={[
//                       styles.tags,
//                       item.tag === 'Urgent'
//                         ? styles.urgentTag
//                         : styles.normalTag,
//                     ]}>
//                     <Text style={styles.tagText}>{item.tag}</Text>
//                   </View>
//                 </View>
//               )}
//             />
//           )}
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   dataContainer: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//     padding: 16,
//   },
//   urgentTag: {
//     backgroundColor: 'lightgreen',
//   },
//   normalTag: {
//     backgroundColor: 'lightblue',
//   },
//   title: {
//     fontWeight: '700',
//     fontSize: 30,
//     color: 'black',
//   },
//   note: {
//     fontSize: 15,
//     color: 'black',
//   },
//   tags: {
//     marginTop: 8,
//     width: 70,
//     height: 30,
//     fontSize: 25,
//     fontWeight: 'bold',
//     color: 'red',
//     borderWidth: 1,
//     borderRadius: 10,
//     textAlign: 'center',
//   },
//   tagText: {
//     color: 'black',
//     fontSize: 18,
//     textAlign: 'center',
//   },
// });

// export default ListView;
//
//

// import {View, Text, FlatList} from 'react-native';
// import React, {useEffect} from 'react';
// import {useSelector, useDispatch} from 'react-redux';
// import {fetchDataFromFirestore} from '../../../redux/slice/firestoreSlice'; // Update this path

// const ListView = () => {
//   const dispatch = useDispatch();
//   const {data, loading, error} = useSelector(state => state.firestore);

//   useEffect(() => {
//     dispatch(fetchDataFromFirestore());
//   }, [dispatch]);

//   if (loading) {
//     return (
//       <View>
//         <Text>Loading...</Text>
//       </View>
//     );
//   }

//   if (error) {
//     return (
//       <View>
//         <Text>Error: {error.message}</Text>
//       </View>
//     );
//   }

//   return (
//     <View>
//       <FlatList
//         data={data}
//         keyExtractor={item => item.id}
//         renderItem={({item}) => (
//           <View>
//             <Text>Title: {item.title}</Text>
//             <Text>Note: {item.note}</Text>
//             <Text>Tags: {item.tags.join(', ')}</Text>
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// export default ListView;
//
//
//
import React, {useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  MenuProvider,
} from 'react-native-popup-menu';
import {Image} from 'react-native-animatable';
import Styles from './Styles';
import {useNavigation} from '@react-navigation/native';

import {useSelector, useDispatch} from 'react-redux';
import {fetchDataFromFirestore} from '../../../redux/slice/firestoreSlice';
import {Divider} from 'react-native-paper';

const ListView = () => {
  const navigation = useNavigation();

  const handleNavigateToAddTask = () => {
    navigation.navigate('AddTask');
  };

  const dispatch = useDispatch();
  const {data, loading, error} = useSelector(state => state.firestore);

  useEffect(() => {
    dispatch(fetchDataFromFirestore());
  }, [dispatch]);

  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={Styles.screen}>
        <View style={Styles.container}>
          <View style={Styles.logo}>
            <Image source={require('../../../../assets/screenLogo.png')} />
          </View>
          <View style={Styles.searchBar}>
            <TextInput
              placeholder="Search task here..."
              style={Styles.search}
            />
            <Image
              source={require('../../../../assets/search.png')}
              style={Styles.searchIcon}
            />
          </View>
          {loading && data.length === 0 && (
            <View style={Styles.loaderContainer}>
              <ActivityIndicator size="large" color="#0000ff" />
            </View>
          )}
          {data.length === 0 && !loading && (
            <View style={Styles.center}>
              <TouchableOpacity onPress={handleNavigateToAddTask}>
                <Image source={require('../../../../assets/EmptyState.png')} />
              </TouchableOpacity>
              <Text style={Styles.centerTextHead}>No Task</Text>
              <Text style={Styles.centerTextBody}>
                Looks like you don't have a task,
              </Text>
              <Text style={Styles.centerTextBody}>please add task</Text>
            </View>
          )}
          {data.length > 0 && (
            <FlatList
              data={data}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <View style={styles.dataContainer}>
                  <View>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.note}>{item.note}</Text>
                    <Text style={styles.tagText}>{item.tags}</Text>
                    <View style={styles.tags}></View>
                  </View>
                  <View>
                    <MenuProvider style={styles.optionContainer}>
                      <Menu>
                        <MenuTrigger customStyles={triggerStyles}>
                          <Image
                            source={require('../../../../assets/options.png')}
                            style={styles.options}
                          />
                        </MenuTrigger>
                        <MenuOptions>
                          <MenuOption
                            onSelect={() => Alert.alert('Todo was Deleted')}>
                            <Text style={{color: 'red'}}>Delete</Text>
                          </MenuOption>
                          <Divider />
                          <MenuOption
                            onSelect={() => Alert.alert('Todo was Edit')}>
                            <Text>Edit</Text>
                          </MenuOption>
                        </MenuOptions>
                      </Menu>
                    </MenuProvider>
                  </View>
                </View>
              )}
            />
          )}
        </View>
      </View>
    </ScrollView>
  );
};

const triggerStyles = {
  triggerTouchable: {underlayColor: 'transparent'},
  triggerWrapper: {padding: 10},
};

const styles = StyleSheet.create({
  dataContainer: {
    backgroundColor: 'white', // Assuming you want a white background
    borderRadius: 8, // Assuming you want rounded corners
    padding: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  note: {
    fontSize: 16,
    marginTop: 5,
  },
  tagText: {
    fontSize: 14,
    marginTop: 5,
  },
  tags: {
    // Add styles for tags view if needed
  },
  optionContainer: {
    // Add styles for option container view if needed
  },
  options: {
    width: 20,
    height: 20,
  },
});

export default ListView;

//
//
//
//
//
//
//
