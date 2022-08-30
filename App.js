import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ScreenC from './src/ScreenC';
import ScreenA from './src/ScreenA';
import ScreenB from './src/ScreenB';
// import {createStackNavigator} from '@react-navigation/stack';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#000',
          inactiveTintColor: '#555',
          activeBackgroundColor: '#fff',
          inactiveBackgroundColor: '#999',
          showLabel: true,
          labelStyle: {fontSize: 16},
          showIcon: true,
        }}
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{backgroundColor: '#694fad'}}>
        <Tab.Screen name="Main" component={ScreenA} />
        <Tab.Screen name="User" component={ScreenB} />
        <Tab.Screen name="Comments" component={ScreenC} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
