import React from 'react';
import {Platform, SafeAreaView, ScrollView, StatusBar} from 'react-native';
import {
  AlertModal,
  AutoSuggestComponent,
  Calendar,
  CalendarWeb,
  Container,
  DropdownComponent,
  InputComponent,
  ListComponent,
  ModalComponent,
  Sidebar,
  TableView,
} from './src/components';
import {Text} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      {Platform.OS === 'web' && <Sidebar />}
      <ScrollView className="z-1">
        <StatusBar barStyle="dark-content" />

        {/* Calender Components */}
        <Container title="Calender">
          {Platform.OS === 'web' ? <CalendarWeb /> : <Calendar />}
        </Container>
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

        <Container title="Modal">
          <ModalComponent />
        </Container>

        <Container title="Table View">
          <TableView />
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
