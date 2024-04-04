import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';

import ListView from '../screens/tabNav/listView/ListView';
import AddTask from '../screens/tabNav/addTask/AddTask';
import Profile from '../screens/tabNav/profile/Profile';
import TabBarIcon from '../components/tabBarIcon/TabBarIcon';
import TabBarAddIcon from '../components/tabBarIcon/TabBarAddIcon';

const TabNavigation = () => {
  const Tab = createBottomTabNavigator();
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

export default TabNavigation;
