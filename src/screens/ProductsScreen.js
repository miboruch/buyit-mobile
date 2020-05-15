import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import {connect} from 'react-redux';
import Screen from './Screen';
import Button from '../components/Button';
import Product from '../components/Product';

const ProductsScreen = ({ navigation }) => {
  const category = navigation.getParam('category');
  console.log('hello');
  return (
    <Screen navigation={navigation} theme={'dark'}>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button style={styles.topButton} text={'Input'} />
          <Button text={'Add new product'} />
        </View>
        <Text>Shop/{category}</Text>
        <ScrollView style={styles.scrollView}>
          <Product
            image={
              'https://f00.esfr.pl/foto/6/50065553073/efb45eb2a8f177e6409676e32e1ce251/apple-iphone-pro-11-64gb-zielony,50065553073_7.jpg'
            }
            price={1999}
            category={'electronics'}
            name={'Iphone 11 pro'}
          />
          <Product
            image={
              'https://f00.esfr.pl/foto/6/50065553073/efb45eb2a8f177e6409676e32e1ce251/apple-iphone-pro-11-64gb-zielony,50065553073_7.jpg'
            }
            price={1999}
            category={'electronics'}
            name={'Iphone 11 pro'}
          />
        </ScrollView>
      </View>
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

export default ProductsScreen;
