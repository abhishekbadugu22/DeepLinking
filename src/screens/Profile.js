import React from 'react';

import {Button, Text, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/core';

function Profile() {
  const navigation = useNavigation();
  const route = useRoute();
  const {id} = route.params;
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {id ? (
        <Text style={{fontSize: 20, marginBottom: 20}}>user_id : {id}</Text>
      ) : null}
      <Text style={{fontSize: 20, marginBottom: 20}}>Profile Screen</Text>
      <Button
        title={'Go to Notifications'}
        onPress={() => navigation.navigate('Notifications')}
      />
    </View>
  );
}

export default Profile;
