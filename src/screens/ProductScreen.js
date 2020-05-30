import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { connect } from 'react-redux';
import Screen from './Screen';
import Button from '../components/Button';
import { addProductToCart } from '../actions/cartActions';
import { removeProduct } from '../actions/productActions';

const ProductScreen = ({ route, navigation, addProductToCart, userInfo, removeProduct }) => {
  const { product } = route.params;
  /* check if the product was added by current logged in user. If yes, add to cart button will not be displayed */
  const isUserProduct = product && userInfo ? product.userID === userInfo._id : false;

  return (
    <Screen navigation={navigation}>
      <View style={styles.container}>
        <View style={styles.productWrapper}>
          {product && (
            <>
              <Image style={styles.image} source={{ uri: product.image }} />
              <View style={styles.contentView}>
                <Text style={styles.largeContentText}>{product.name}</Text>
                <Text style={styles.priceContentText}>{product.price} $</Text>
                <Text style={styles.smallContentText}>{product.category}</Text>
              </View>
              {isUserProduct ? (
                <Button
                  text={'Remove product'}
                  // onPress={() => removeProduct(userInfo.token, product._id, navigation)}
                />
              ) : (
                <Button text={'Add to cart'} onPress={() => addProductToCart(product)} />
              )}
            </>
          )}
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

const mapStateToProps = ({ cartReducer: { cart }, authenticationReducer: { userInfo } }) => {
  return { cart, userInfo };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addProductToCart: (product) => dispatch(addProductToCart(product)),
    removeProduct: (token, productID, navigation) =>
      dispatch(removeProduct(token, productID, navigation))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductScreen);
