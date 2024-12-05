import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';

import {Home} from './src/screens';
import {Sidebar} from './src/components';

const App = () => {
  return (
    <SafeAreaView>
      <View className="flex-row">
        <Sidebar />
        <ScrollView className="z-1">
          <Home />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default App;
