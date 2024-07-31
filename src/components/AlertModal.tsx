import React, {useState} from 'react';
import {View, Text, Modal, Pressable} from 'react-native';

const AlertModal = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  return (
    <View className="flex-1 justify-center items-center">
      <Pressable className="bg-blue-500 p-3 rounded-md" onPress={showModal}>
        <Text className="text-white text-lg">Show Alert</Text>
      </Pressable>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={hideModal}>
        <View className="flex-1 justify-center items-center bg-black bg-opacity-50">
          <View className="bg-white p-5 rounded-md w-3/4">
            <Text className="text-lg mb-4">This is an alert message!</Text>
            <Pressable
              className="bg-red-500 p-3 rounded-md"
              onPress={hideModal}>
              <Text className="text-white text-lg text-center">Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export {AlertModal};
