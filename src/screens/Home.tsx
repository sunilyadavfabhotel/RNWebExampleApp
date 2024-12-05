import React from 'react';
import {ScrollView, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
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
  const navigate = useNavigation();
  return (
    <ScrollView>
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
      <Container title="Details">
        <Text
          style={{color: 'blue', fontSize: 20}}
          onPress={() => navigate.navigate('Details')}>
          Go to Details
        </Text>
      </Container>
    </ScrollView>
  );
};

export {Home};
