import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ScreenWrapper from './ScreenWrapper';

const HomeScreen = () => {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Text style={styles.text}>Hello</Text>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    color: '#000'
  }
});

export default HomeScreen;
