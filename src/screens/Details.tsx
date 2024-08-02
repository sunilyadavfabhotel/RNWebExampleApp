import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Pressable} from 'react-native';

const Details = () => {
  const navigate = useNavigation();
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-lg mb-4">Details Screen</Text>
      <Pressable
        className={`
          rounded-md p-3
          ios:bg-blue-200
          android:bg-blue-900 ripple
          web:bg-blue-500 hover:bg-violet-600`}
        onPress={() => navigate.goBack()}>
        <Text className="text-white text-lg">Go Back</Text>
      </Pressable>
    </View>
  );
};

export {Details};
