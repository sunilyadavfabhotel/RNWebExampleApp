// create a react native container component

import React from 'react';
import {View} from 'react-native';

const Container = ({children}: {children: React.ReactNode}) => {
  return <View className="mx-2 my-2 p-2 border-2 rounded-xl">{children}</View>;
};

export {Container};
