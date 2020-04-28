import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Screen from './Screen';

const HomeScreen = ({ navigation }) => {
  return (
    <Screen navigation={navigation} theme='dark'>
      <View style={styles.container}>
        <Text style={styles.text}>Hello from Home Screen</Text>
        <Button
          title={'Go to products'}
          onPress={() =>
            navigation.navigate('ProductScreen', {
              category: 'electronics'
            })
          }
        >
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
    fontFamily: 'Futura',
    color: '#f1f1f1'
  }
});

export default HomeScreen;
