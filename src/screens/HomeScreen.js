import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Screen from './Screen';
import Button from '../components/Button';
import SmallButton from "../components/SmallButton";

const HomeScreen = ({ navigation }) => {
  return (
    <Screen navigation={navigation} theme='dark'>
      <View style={styles.container}>
        <View style={styles.smallbutton}>
          <SmallButton />
          <SmallButton />
          <SmallButton />
        </View>
        <Text style={styles.title}>OUR PERSONAL</Text>
        <Text style={styles.title}>SHOPPING EXPERIENCE</Text>
        <Text style={styles.title}>EXPERIENCE</Text>
        <Image style={styles.image} source={require('../assets/images/main_logo.jpg')}/>
        <Button style = {styles.button}
          text={'Go to products'}
          onPress={() =>
            navigation.navigate('ProductScreen', {
              category: 'electronics'
            })
          }
          isButtonDark={false}/>
        <Text style={styles.text}> Look for products, you can order without an account</Text>
        <Text style={styles.text}> You must have an account to add product to store</Text>
        <Text style={styles.text}> If you click reserve product will be reserved for you for 15 minutes</Text>
        <Button
            style={styles.button}
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
    alignSelf: 'flex-start',
    fontFamily: 'Futura',
    padding:10,
    fontSize: 25,
    color: '#868990',
  },
  text: {
    fontFamily: 'Futura',
    fontSize: 18,
    color: '#c0c5ce',
    alignSelf: 'flex-start',
    padding: 10,
  },
  image: {
    width: '100%',
    height: '35%',
    padding:5
  },
  button: {
    flex:1,
    alignSelf: 'center',
    paddingTop: 10
  },
  smallbutton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent:'space-around'
  }
});

export default HomeScreen;
