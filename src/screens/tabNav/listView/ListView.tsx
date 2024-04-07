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
} from 'react-native';
import {Image} from 'react-native-animatable';
import Styles from './Styles';
import {useNavigation} from '@react-navigation/native';

import {useSelector, useDispatch} from 'react-redux';
import {fetchDataFromFirestore} from '../../../redux/slice/firestoreSlice';

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
          <View style={Styles.Img}>
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
                    <View
                      style={[
                        styles.tags,
                        item.tag === 'Urgent'
                          ? styles.urgentTag
                          : styles.normalTag,
                      ]}>
                      <Text style={styles.tagText}>{item.tag}</Text>
                    </View>
                  </View>
                  <View>
                    <Image source={require('../../../../assets/options.png')} />
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

const styles = StyleSheet.create({
  dataContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  urgentTag: {
    backgroundColor: 'lightgreen',
  },
  normalTag: {
    backgroundColor: 'lightblue',
  },
  title: {
    fontWeight: '700',
    fontSize: 30,
    color: 'black',
  },
  note: {
    fontSize: 15,
    color: 'black',
  },
  tags: {
    marginTop: 8,
    width: 49,
    height: 20,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    borderWidth: 1,
    borderRadius: 5,
    textAlign: 'center',
  },
  tagText: {
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
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
