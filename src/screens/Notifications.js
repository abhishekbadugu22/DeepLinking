import React from 'react';

import {Button, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';

function Notifications() {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 20, marginBottom: 20}}>Notifications Screen</Text>
      <Button
        title={'Go to Settings'}
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
}

export default Notifications;
