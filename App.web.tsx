import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Home, Details} from './src/screens';
import {Text, View} from 'react-native';

const Stack = createStackNavigator();

const WebSideMenu = ({children}: {children: React.ReactNode}) => {
  const navigation = useNavigation();
  return (
    <View className="flex-row">
      <View className="w-40">
        <Text
          className="text-blue-500 text-2xl"
          onPress={() => navigation.navigate('Home' as never)}>
          Home
        </Text>
        <Text
          className="text-blue-500 text-2xl"
          onPress={() => navigation.navigate('Details' as never)}>
          Go to Details
        </Text>
      </View>
      <View className="flex-1 border-2 p-4 bg-slate-300 h-screen">
        {children}
      </View>
    </View>
  );
};

// Separate components for Home and Details with WebSideMenu wrapper
const HomeScreen = () => (
  <WebSideMenu>
    <Home />
  </WebSideMenu>
);

const DetailsScreen = () => (
  <WebSideMenu>
    <Details />
  </WebSideMenu>
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
