import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../screens/splash/Splash';
import Intro from '../auth/intro/Intro';
import Login from '../auth/logIn/LogIn';
import SignUp from '../auth/signUp/SignUp';
import Home from '../screens/home/Home';
import Edit from '../auth/profile/edit/Edit';
import ForgetPassword from '../auth/forgetPassword/ForgetPassword';
import ListView from '../screens/tabNav/listView/ListView';
import AddTask from '../screens/tabNav/addTask/AddTask';
import Profile from '../screens/tabNav/profile/ProfileTab';
import TabBarIcon from '../components/tabBarIcon/TabBarIcon';
import TabBarAddIcon from '../components/tabBarIcon/TabBarAddIcon';
import auth from '@react-native-firebase/auth';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {useNavigation} from '@react-navigation/native';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 87,
        },
      }}>
      <Tab.Screen
        name="ListView"
        component={ListView}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarIcon
              focused={focused}
              source={require('../../assets/listView.png')}
              lable={'List View'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="AddTask"
        component={AddTask}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarAddIcon
              focused={focused}
              source={require('../../assets/add.png')}
              lable={'Add Task'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarIcon
              focused={focused}
              source={require('../../assets/user.png')}
              lable={'Profile'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Navigation = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user: any) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{headerShown: false}}>
      {!user ? (
        <Stack.Group>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Intro" component={Intro} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={SignUp} />
          <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        </Stack.Group>
      ) : (
        <Stack.Group>
          <Stack.Screen name="Tab" component={TabNavigation} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Edit" component={Edit} />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
};

export default Navigation;
