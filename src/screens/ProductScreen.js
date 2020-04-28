import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Screen from './Screen';

const ProductScreen = ({ navigation }) => {
  const category = navigation.getParam('category');
  return (
    <Screen navigation={navigation}>
      <View style={styles.container}>
        <Text style={styles.text}>Hello from Product Screen</Text>
        <Text style={styles.text}>Category: {category}</Text>
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

export default ProductScreen;
