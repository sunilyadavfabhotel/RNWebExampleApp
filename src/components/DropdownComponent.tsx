import React, {useState} from 'react';
import {View, Text, FlatList, Pressable} from 'react-native';

const DropdownComponent = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const items = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleItemPress = (item: string) => {
    setSelectedItem(item);
    setIsDropdownOpen(false);
  };

  return (
    <View className="p-4 w-full">
      <Pressable
        className="border border-gray-300 p-2 rounded-md bg-white"
        onPress={toggleDropdown}>
        <Text className="text-lg">
          {selectedItem ? selectedItem : 'Select an option'}
        </Text>
      </Pressable>
      {isDropdownOpen && (
        <View className="border border-gray-300 mt-2 rounded-md bg-white">
          <FlatList
            data={items}
            keyExtractor={item => item}
            renderItem={({item}) => (
              <Pressable className="p-2" onPress={() => handleItemPress(item)}>
                <Text className="text-lg">{item}</Text>
              </Pressable>
            )}
          />
        </View>
      )}
    </View>
  );
};

export {DropdownComponent};
