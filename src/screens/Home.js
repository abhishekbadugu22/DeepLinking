import {useNavigation} from '@react-navigation/core';
import React, {useEffect} from 'react';
import {Button, Text, View, Linking} from 'react-native';

function Home() {
  const navigation = useNavigation();

  // useEffect(() => {
  //     Linking.openURL('demo://app/profile/9811')
  // },[])

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 20, marginBottom: 20}}>Home Screen</Text>
      <Button
        title={'Go to Profile'}
        onPress={() => navigation.navigate('Profile', {id: 123})}
      />
    </View>
  );
}

export default Home;
