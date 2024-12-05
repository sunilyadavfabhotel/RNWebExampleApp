import React from 'react';
import {Text, View} from 'react-native';
import {
  AlertModal,
  AutoSuggestComponent,
  Calendar,
  Container,
  DropdownComponent,
  InputComponent,
  ListComponent,
  ModalComponent,
  TableView,
} from '../components';

const Home = () => {
  return (
    <View>
      {/* Calender Components */}
      <Container title="Calender">
        <Calendar />
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
    </View>
  );
};

export {Home};
