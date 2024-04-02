import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from '../screens/splash/Splash';
import Intro from '../auth/intro/Intro';
import Login from '../auth/logIn/LogIn';
import SignUp from '../auth/signUp/SignUp';
import Home from '../screens/home/Home';
import Edit from '../auth/profile/edit/Edit';
import ForgetPassword from '../auth/forgetPassword/ForgetPassword';
import Settings from '../screens/tabNav/profile/Profile';
import TabNavigation from './TabNavigation';

const Stack = createNativeStackNavigator();

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
