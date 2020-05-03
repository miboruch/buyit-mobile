import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Screen from './Screen';
import Button from '../components/Button';
import SmallButton from '../components/SmallButton';
import { instruction } from '../utils/instruction';

const logo = require('../assets/images/main_logo.jpg');

const HomeScreen = ({ navigation }) => {
  return (
    <Screen navigation={navigation} theme='dark'>
      <View style={styles.container}>
        <View style={styles.smallButtonView}>
          <SmallButton />
          <SmallButton />
          <SmallButton />
        </View>
        <View style={styles.headingView}>
          <Text style={styles.title}>OUR PERSONAL {'\n'}SHOPPING EXPERIENCE</Text>
        </View>
        <Image style={styles.image} source={logo} />
        <View style={styles.contentView}>
          <Button
            text={'Go to products'}
            onPress={() =>
              navigation.navigate('ProductScreen', {
                category: 'electronics'
              })
            }
            isButtonDark={false}
          />
          <View style={styles.textView}>
            {instruction.map((item, index) => (
              <Text key={index} style={styles.text}>
                {item}
              </Text>
            ))}
          </View>
          <Button text={'Account'} />
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontFamily: 'Futura',
    fontSize: 21,
    color: '#868990',
    fontWeight: '500',
    letterSpacing: 2
  },
  text: {
    fontFamily: 'Futura',
    fontSize: 14,
    color: '#c0c5ce',
    margin: 12
  },
  image: {
    width: '100%',
    height: 300
  },
  headingView: {
    marginLeft: 10,
    marginBottom: 20
  },
  contentView: {
    marginTop: 40,
    flex: 3,
    alignItems: 'center'
  },
  textView: {
    marginTop: 10,
    marginBottom: 10,
    width: '90%',
    justifyContent: 'center'
  },
  smallButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    top: -50,
    right: 10
  }
});

export default HomeScreen;
