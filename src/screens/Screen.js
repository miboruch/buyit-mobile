import React from 'react';
import { SafeAreaView, TouchableOpacity, StyleSheet, View, Text } from 'react-native';

const Screen = ({ navigation, children }) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <TouchableOpacity
          style={{ alignItems: 'flex-start', margin: 16 }}
          onPress={navigation.openDrawer}
        >
          <Text>something</Text>
        </TouchableOpacity>
        {children}
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    color: '#2d2d2d',
    fontSize: 20,
    fontFamily: 'Futura'
  },
  box: {
    width: 20,
    height: 20,
    backgroundColor: 'red'
  }
});

export default Screen;
