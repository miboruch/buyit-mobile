import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';

const ScreenWrapper = ({ children, navigation }) => {
  return (
    <View>
      <SafeAreaView style={{ flex: 1 }}>
        <TouchableOpacity style={{ margin: 16 }}>
          <Text>Some</Text>
        </TouchableOpacity>
      </SafeAreaView>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({});

export default ScreenWrapper;
