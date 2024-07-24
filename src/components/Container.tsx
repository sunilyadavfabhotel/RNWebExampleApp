// create a ract native component container

import React from 'react';
import {View} from 'react-native';

const Container = ({children}: {children: any}) => {
  return (
    <View className="border-2 border-orange-100 rounded-md m-2 px-2 py-1">
      {children}
    </View>
  );
};

export {Container};
