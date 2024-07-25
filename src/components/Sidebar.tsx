import React, {useState, useRef} from 'react';
import {View, Text, TouchableOpacity, Animated} from 'react-native';

const Sidebar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const sidebarWidth = useRef(new Animated.Value(0)).current;

  const toggleSidebar = () => {
    if (sidebarVisible) {
      Animated.timing(sidebarWidth, {
        toValue: 0,
        duration: 0,
        useNativeDriver: false,
      }).start(() => setSidebarVisible(false));
    } else {
      setSidebarVisible(true);
      Animated.timing(sidebarWidth, {
        toValue: 250,
        duration: 0,
        useNativeDriver: false,
      }).start();
    }
  };

  return (
    <View className="flex-1">
      <TouchableOpacity className="p-4 bg-blue-500" onPress={toggleSidebar}>
        <Text className="text-white">Toggle Sidebar</Text>
      </TouchableOpacity>
      {sidebarVisible && (
        <Animated.View
          style={{width: sidebarWidth}}
          className="absolute left-0 top-0 bottom-0 bg-white z-10 p-4">
          <TouchableOpacity
            className="p-4 bg-red-500 mb-4"
            onPress={toggleSidebar}>
            <Text className="text-white">Close Sidebar</Text>
          </TouchableOpacity>
          <View className="p-4">
            <Text className="text-lg mb-2">Sidebar Item 1</Text>
            <Text className="text-lg mb-2">Sidebar Item 2</Text>
            <Text className="text-lg">Sidebar Item 3</Text>
          </View>
        </Animated.View>
      )}
    </View>
  );
};

export {Sidebar};
