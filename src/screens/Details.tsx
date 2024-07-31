import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Pressable} from 'react-native';

const Details = () => {
  const navigate = useNavigation();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Details Screen</Text>
      <Pressable title="Go Back" onPress={() => navigate.goBack()} />
    </View>
  );
};

export {Details};
