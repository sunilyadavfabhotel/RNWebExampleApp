import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Pressable} from 'react-native';

const Details = () => {
  const navigate = useNavigation();
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-lg mb-4">Details Screen</Text>
      <Pressable
        className="bg-blue-500 p-3 rounded-md"
        onPress={() => navigate.goBack()}>
        <Text className="text-white text-lg">Go Back</Text>
      </Pressable>
    </View>
  );
};

export {Details};
