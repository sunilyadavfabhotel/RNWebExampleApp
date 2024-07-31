import React from 'react';
import {View, Text} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

const Sidebar = (props: any) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{padding: 20}}>
        <Text style={{fontSize: 24, fontWeight: 'bold'}}>Sidebar Menu</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export {Sidebar};
