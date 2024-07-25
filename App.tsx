import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Container, ListComponent} from './src/components';
import {Text} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />

      {/* Text component */}
      <Container>
        <Text className="text-24 text-red-300">
          React Native Web App Example
        </Text>
      </Container>

      {/* List */}
      <Container>
        <ListComponent />
      </Container>
    </SafeAreaView>
  );
};

export default App;
