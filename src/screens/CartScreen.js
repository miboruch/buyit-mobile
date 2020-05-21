import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import Screen from './Screen';
import ProductSummary from '../components/ProductSummary';
import Button from '../components/Button';
import { removeProductFromCart } from '../actions/cartActions';

const CartScreen = ({ navigation, cart, totalPrice, removeProduct }) => {
  return (
    <Screen navigation={navigation} theme={'light'}>
      <ScrollView style={styles.container}>
        {cart.length !== 0 ? (
          <>
            {cart.map((product) => (
              <View style={styles.productsWrapper} key={product._id}>
                <View style={styles.singleProductWrapper}>
                  <ProductSummary image={product.image} price={product.price} name={product.name} />
                  <Text style={styles.smallContentText}>
                    Product will be removed from your cart at{' '}
                    {new Date(product.expire).toLocaleTimeString()}
                  </Text>
                  <Button
                    isButtonDark={true}
                    text={'Remove product'}
                    onPress={() => removeProduct(product)}
                  />
                </View>
              </View>
            ))}
          </>
        ) : (
          <View style={styles.emptyWrapper}>
            <Text style={styles.priceContentText}>Your cart is empty</Text>
          </View>
        )}
        {cart.length !== 0 && (
          <View style={styles.summaryWrapper}>
            <Text style={styles.priceContentText}>Total price: {totalPrice} $</Text>
            <Button
              isButtonDark={true}
              text={'Checkout'}
              onPress={() => navigation.navigate('OrderSummary')}
            />
          </View>
        )}
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
  },
  emptyWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.8
  }
});

const mapStateToProps = ({ cartReducer: { cart, totalPrice } }) => {
  return { cart, totalPrice };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeProduct: (product) => dispatch(removeProductFromCart(product))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);
