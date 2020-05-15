import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Screen from './Screen';

const ProductScreen = ({ route, navigation }) => {
  const { id } = route.params;

  return (
    <Screen>
      <Text>Hello</Text>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonContainer: {
    alignSelf: 'flex-end',
    padding: 10
  },
  scrollView: {
    width: '100%',
    flex: 6
  }
});

export default ProductScreen;
