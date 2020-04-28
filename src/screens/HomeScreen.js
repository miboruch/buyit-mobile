import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Screen from './Screen';

const HomeScreen = ({ navigation }) => {
  return (
    <Screen navigation={navigation}>
      <View style={styles.container}>
        <Text style={styles.text}>Hello from Home Screen</Text>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#2d2d2d',
    fontFamily: 'Futura'
  }
});

export default HomeScreen;
