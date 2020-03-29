import React from 'react';
import { Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function GoToButton({ label, screen }) {
  const navigation = useNavigation();

  return (
    <Button
      title={label}
      onPress={() => navigation.navigate('App', { screen })}
    />
  );
}
export default () => {
  return <ScrollView>
    <Text>LOGIN PAGE</Text>
    <GoToButton label={'Login'} screenName={'Home'}/>
  </ScrollView>;
};
