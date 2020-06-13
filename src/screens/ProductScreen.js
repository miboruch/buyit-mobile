import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, AsyncStorage, Alert } from 'react-native';
import { connect } from 'react-redux';
import Screen from './Screen';
import Button from '../components/Button';
import { addProductToCart } from '../actions/cartActions';
import { removeProduct } from '../actions/productActions';

const ProductScreen = ({ route, navigation, addProductToCart, userInfo, cart, removeProduct, token }) => {
  const [isAlreadyInCart, setIsInCart] = useState(false);
  const { product } = route.params;

  /* check if the product was added by current logged in user. If yes, add to cart button will not be displayed */
  const isUserProduct = product && userInfo ? product.userID === userInfo._id : false;

  const getAsyncStorageData = async () => {
    return JSON.parse(await AsyncStorage.getItem('cart'));
  };

  useEffect(() => {
    (async () => {
      setIsInCart(
        cart !== []
          ? cart.filter((item) => item._id === product._id)
          : await getAsyncStorageData().filter((item) => item._id === product._id)
      );
    })();
  }, [cart]);

  const deleteAlert = () =>
    Alert.alert(
      'Remove product',
      `Do you really want to delete ${product.name}?`,
      [
        {
          text: 'Yes',
          onPress: () => removeProduct(token, product._id, navigation)
        },
        {
          text: 'Cancel',
          style: 'cancel'
        }
      ],
      {
        cancelable: true
      }
    );

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
                <Button text={'Remove product'} onPress={deleteAlert} />
              ) : (
                <View>
                  {isAlreadyInCart.length !== 0 ? (
                    <Text style={styles.text}>You already have this product in cart</Text>
                  ) : (
                    <Button text={'Add to cart'} onPress={() => addProductToCart(product)} />
                  )}
                </View>
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
  },
  userProduct: {
    display: 'none'
  },
  text: {
    fontSize: 14,
    fontFamily: 'Futura',
    textAlign: 'center',
    color: '#fff'
  }
});

const mapStateToProps = ({ cartReducer: { cart }, authenticationReducer: { userInfo, token } }) => {
  return { cart, userInfo, token };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addProductToCart: (product) => dispatch(addProductToCart(product)),
    removeProduct: (token, productID, navigation) =>
      dispatch(removeProduct(token, productID, navigation))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductScreen);
