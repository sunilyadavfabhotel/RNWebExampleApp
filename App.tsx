import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import {
  AlertModal,
  AutoSuggestComponent,
  Container,
  DropdownComponent,
  InputComponent,
  ListComponent,
} from './src/components';
import {Text} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <StatusBar barStyle="dark-content" />

        {/* Text component */}
        <Container title="Text">
          <Text className="text-24 text-red-300">
            React Native Web App Example
          </Text>
        </Container>

        {/* List */}
        <Container title="List">
          <ListComponent />
        </Container>

        {/* Input field */}
        <Container title="Enter some text">
          <InputComponent />
        </Container>

        {/* Dropdown */}
        <Container title="Dropdown">
          <DropdownComponent />
        </Container>

        {/* Auto suggest */}
        <Container title="Auto Suggest">
          <AutoSuggestComponent />
        </Container>

        {/* Alert Modal */}
        <Container title="Alert Modal">
          <AlertModal />
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
