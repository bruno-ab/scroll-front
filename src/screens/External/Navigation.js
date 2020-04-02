import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from 'screens/External/Login';
import Signup from 'screens/External/Signup';


const Stack = createStackNavigator();


const External = (props) => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      headerMode={'none'}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};

export default External;
