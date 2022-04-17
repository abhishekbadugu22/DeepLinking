import React from 'react';

import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
import Notifications from './src/screens/Notifications';
import Settings from './src/screens/Settings';
import linking from './src/deppLinkConfig';

const RootStack = createStackNavigator();

function App() {
  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading.....</Text>}>
      <RootStack.Navigator>
        <RootStack.Screen name={'Home'} component={Home} />
        <RootStack.Screen name={'Profile'} component={Profile} />
        <RootStack.Screen name={'Notifications'} component={Notifications} />
        <RootStack.Screen name={'Settings'} component={Settings} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
