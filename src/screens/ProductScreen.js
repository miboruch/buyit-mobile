import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Screen from './Screen';
import Button from '../components/Button';
import SmallButton from '../components/SmallButton';


const iphone = require('../assets/images/iphone11.jpg');

const ProductScreen = ({ navigation }) => {
  const category = navigation.getParam('category');
  return (
    <Screen navigation={navigation} theme={'dark'}>
      <Text style={styles.maintitle}>buyIT</Text>
      <View style={styles.smallButtons}>
        <SmallButton style={styles.smallButtons}/>
        <SmallButton style={styles.smallButtons}/>
        <SmallButton style={styles.smallButtons}/>
      </View>
      <View style={styles.button}>
        <Button style={styles.button} text={"Input"}/>
        <Button style={styles.button} text={"Add new product"}/>
      </View>
      <View style={styles.container}>

        <Text style={styles.title}>Shop/all</Text>
        <Image style={styles.image} source={iphone} />
        <Text style={styles.text}>iPhone 11 and 11 pro</Text>
        <Text style={styles.text}>Category: {category}</Text>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 6,
  },
  text: {
    color: '#c0c5ce',
    fontFamily: 'Futura',
    alignSelf: 'flex-start',
    marginLeft: 5,
    fontSize: 20
  },
  image: {
    width:'100%',
    height:'40%',
  },
  button: {
    flex:2,
    alignSelf:'flex-end',
    padding: 10,
  },
  maintitle: {
    color: '#868990',
    fontFamily: 'Futura',
    alignSelf: 'center',
    marginLeft: 5,
    fontSize: 30
  },
  title: {
    color: '#868990',
    fontFamily: 'Futura',
    alignSelf: 'flex-start',
    marginLeft: 5,
    fontSize: 30
  },
  smallButtons: {
    paddingTop: 10,
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }

});

export default ProductScreen;
