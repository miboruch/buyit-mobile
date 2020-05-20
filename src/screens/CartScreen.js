import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import Screen from './Screen';
import ProductSummary from '../components/ProductSummary';
import iphone from '../assets/images/iphone11.jpg';
import Button from '../components/Button';

const CartScreen = ({ navigation }) => {
  return (
    <Screen navigation={navigation} theme={'light'}>
      <ScrollView style={styles.container}>
        <View style={styles.productsWrapper}>
          <View style={styles.singleProductWrapper}>
            <ProductSummary image={iphone} price={1992} name={'Iphone 11'} />
            <Text style={styles.smallContentText}>
              Product will be removed from your cart at 19:02
            </Text>
            <Button isButtonDark={true} text={'Remove product'} />
          </View>
        </View>
        <View style={styles.summaryWrapper}>
          <Text style={styles.priceContentText}> Total price: 1922 $</Text>
          <Button isButtonDark={true} text={'Checkout'} />
        </View>
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#ccc'
  },
  productsWrapper: {
    width: '100%',
    paddingTop: 10,
    paddingBottom: 10
  },
  singleProductWrapper: {
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center'
  },
  smallContentText: {
    color: '#2d2d2d',
    fontFamily: 'Futura',
    fontSize: 12,
    marginTop: 5,
    marginBottom: 10
  },
  priceContentText: {
    color: '#2d2d2d',
    fontFamily: 'Futura',
    fontSize: 14,
    marginTop: 5,
    paddingBottom: 5
  },
  summaryWrapper: {
    paddingTop: 20,
    borderTopWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CartScreen;
