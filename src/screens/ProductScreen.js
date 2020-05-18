import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import Screen from './Screen';
import Button from '../components/Button';

const ProductScreen = ({ route, navigation }) => {
  const { product } = route.params;

  return (
    <Screen navigation={navigation}>
      <View style={styles.container}>
        <View style={styles.productWrapper}>
          <Image style={styles.image} source={{ uri: product.image }} />
          <View style={styles.contentView}>
            <Text style={styles.largeContentText}>{product.name}</Text>
            <Text style={styles.priceContentText}>{product.price} $</Text>
            <Text style={styles.smallContentText}>{product.category}</Text>
          </View>
          <Button text={'Add to cart'} onPress={() => navigation.navigate('OrderSummary')} />
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 50
  },
  productWrapper: {
    width: '90%',
    alignItems: 'center'
  },
  contentView: {
    marginTop: 10,
    alignItems: 'center',
    marginBottom: 10
  },
  smallContentText: {
    color: '#c0c5ce',
    fontFamily: 'Futura',
    fontSize: 14
  },
  largeContentText: {
    color: '#c0c5ce',
    fontFamily: 'Futura',
    fontSize: 18,
    letterSpacing: 1
  },
  priceContentText: {
    color: '#c0c5ce',
    fontFamily: 'Futura',
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 2
  },
  image: {
    width: '100%',
    height: '80%'
  }
});

export default ProductScreen;
