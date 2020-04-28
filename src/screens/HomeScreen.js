import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Screen from './Screen';
import Button from '../components/Button';

const HomeScreen = ({ navigation }) => {
  return (
    <Screen navigation={navigation} theme='dark'>
      <View style={styles.container}>
        <Text style={styles.title}>OUR PERSONAL</Text>
        <Text style={styles.title}>SHOPPING EXPERIENCE</Text>
        <Image style={styles.image} source={require('../assets/images/main_logo.jpg')}></Image>
        <Text style={styles.text}>Hello from Home Screen</Text>
        <Button style = {styles.button}
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
        <Text style={styles.text}> Lorem ipsum dolor sit amet</Text>
        <Text style={styles.text}> Lorem ipsum dolor sit amet</Text>
        <Text style={styles.text}> Lorem ipsum dolor sit amet</Text>
        <Text style={styles.text}> Lorem ipsum dolor sit amet</Text>
        <Text style={styles.text}> Lorem ipsum dolor sit amet</Text>
        <Text style={styles.text}> Lorem ipsum dolor sit amet</Text>
        <Text style={styles.text}> Lorem ipsum dolor sit amet</Text>
        <Text style={styles.text}> Lorem ipsum dolor sit amet</Text>

        <Button
            text={'Account'}
        >
        </Button>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontFamily: 'Futura',
    fontSize: 20,
    color: '#f1f1f1'
  },
  text: {
    fontFamily: 'Futura',
    fontSize: 20,
    color: '#f1f1f1'
  },
  image: {
    width: '100%',
    height: '35%'
  },
  button: {
    justifyContent: 'center'
  }
});

export default HomeScreen;
