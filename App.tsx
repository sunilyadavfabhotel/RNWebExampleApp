import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';

import {Home} from './src/screens';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView className="z-1">
        <StatusBar barStyle="dark-content" />
        <Home />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
