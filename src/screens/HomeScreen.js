import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Screen from './Screen';

const HomeScreen = ({ navigation }) => {
  console.log(navigation);
  return (
    <Screen navigation={navigation}>
      <View style={styles.container}>
        <Text style={styles.text}>Hello from Home Screen</Text>
        <Button title={'Go to products'} onPress={() => navigation.navigate('ProductScreen', {
          category: 'electronics'
        })}>
          Go to products
        </Button>
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
