import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ListView from '../screens/tabNav/listView/ListView';
import AddTask from '../screens/tabNav/addTask/AddTask';
import HomeIcon from 'react-native-vector-icons/Octicons';
import HomeCircleIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const TabNavigation = () => {
  const Tab = createBottomTabNavigator();
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
    </Tab.Navigator>
  );
};

export default TabNavigation;
