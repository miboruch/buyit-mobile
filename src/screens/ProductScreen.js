import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import Screen from './Screen';

const ProductScreen = ({ route, navigation }) => {
  const { product } = route.params;

  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.productWrapper}>
          <Image style={styles.image} source={{ uri: product.image }} />
          <View style={styles.contentView}>
            <Text style={styles.largeContentText}>{product.name}</Text>
            <Text style={styles.priceContentText}>{product.price} $</Text>
            <Text style={styles.smallContentText}>{product.category}</Text>
          </View>
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 50
  },
  productWrapper: {
    width: '90%',
    alignItems: 'center'
  },
  contentView: {
    marginTop: 10,
    alignItems: 'center'
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
