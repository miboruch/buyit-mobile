import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { connect } from 'react-redux';
import Screen from './Screen';
import Button from '../components/Button';
import { addProductToCart } from '../actions/cartActions';

const ProductScreen = ({ route, navigation, addProduct }) => {
  const { product } = route.params;
  console.log(product);

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
          <Button text={'Add to cart'} onPress={() => addProduct(product)} />
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

const mapStateToProps = ({ cartReducer: { cart } }) => {
  return { cart };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addProduct: (product) => dispatch(addProductToCart(product))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductScreen);
