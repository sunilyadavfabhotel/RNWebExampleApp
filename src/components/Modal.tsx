import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  Pressable,
  TouchableWithoutFeedback,
} from 'react-native';

const ModalComponent = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View className="flex-1 items-center justify-center">
      <Pressable className="p-4 bg-blue-500 rounded-md" onPress={toggleModal}>
        <Text className="text-white">Show Modal</Text>
      </Pressable>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}>
        <TouchableWithoutFeedback onPress={closeModal}>
          <View className="flex-1 justify-center items-center bg-black bg-opacity-50">
            <TouchableWithoutFeedback onPress={() => {}}>
              <View className="bg-white p-5 rounded-md w-3/4">
                <Text className="text-lg mb-4">This is a modal!</Text>
                <Pressable
                  className="p-4 bg-red-500 rounded-md"
                  onPress={closeModal}>
                  <Text className="text-white text-lg text-center">
                    Close Modal
                  </Text>
                </Pressable>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

export {ModalComponent};
