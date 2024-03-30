import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Splash from '../screens/splash/Splash';
import Intro from '../auth/intro/Intro';
import Login from '../auth/logIn/LogIn';
import SignUp from '../auth/signUp/SignUp';
import Home from '../screens/home/Home';
import AddNewTask from '../screens/addNewTask/AddNewTask';
import Settings from '../auth/profile/settings/Settings';
import ListView from '../screens/tabNav/listView/ListView';
import AddTask from '../screens/tabNav/addTask/AddTask';
import CalenderView from '../screens/tabNav/calenderView/CalenderView';
import HomeIcon from 'react-native-vector-icons/Octicons';
import HomeCircleIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Edit from '../auth/profile/edit/Edit';
import ForgetPassword from '../auth/forgetPassword/ForgetPassword';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#7EBB4F',
        tabBarInactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="List View"
        component={ListView}
        options={{
          tabBarIcon: ({color, size}) => (
            <HomeIcon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Add Task"
        component={AddTask}
        options={{
          tabBarIcon: ({color}) => (
            <HomeCircleIcon
              name="home-circle-outline"
              size={35}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Calender View"
        component={CalenderView}
        options={{
          tabBarIcon: ({color, size}) => (
            <HomeIcon name="home" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Intro"
          component={Intro}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signup"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddNewTask"
          component={AddNewTask}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Edit"
          component={Edit}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ForgetPassword"
          component={ForgetPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Tab"
          component={TabNavigation}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
