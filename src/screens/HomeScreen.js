import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Screen from './Screen';
import Button from '../components/Button';

const HomeScreen = ({ navigation }) => {
  return (
    <Screen navigation={navigation} theme='dark'>
      <View style={styles.container}>
        <Text style={styles.text}>Hello from Home Screen</Text>
        <Button
          text={'Go to products'}
          onPress={() =>
            navigation.navigate('ProductScreen', {
              category: 'electronics'
            })
          }
          isButtonDark={false}
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
