import React from 'react';
import {View, Text, Button} from 'react-native';

const Details = ({navigation}: {navigation: any}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Details Screen</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export {Details};
