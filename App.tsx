import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import Input from './src/Input';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <View style={{alignItems: 'center'}}>
        <Input />
      </View>
    </SafeAreaView>
  );
};

export default App;
