import React from 'react';
import PropTypes from 'prop-types';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Product = ({ image, category, name, price, onPress, reserved }) => {
  return (
    <>
      {reserved && (
        <View style={styles.reserved}>
          <Text style={styles.reservedText}>Reserved</Text>
        </View>
      )}
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <View style={styles.productWrapper}>
          <Image style={styles.image} source={{ uri: image }} />
          <View style={styles.contentView}>
            <Text style={styles.largeContentText}>{name}</Text>
            <Text style={styles.priceContentText}>{price} $</Text>
            <Text style={styles.smallContentText}>{category}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 400,
    alignItems: 'center',
    marginBottom: 50
  },
  reserved: {
    width: '100%',
    height: 400,
    backgroundColor: '#000',
    opacity: 0.5,
    zIndex: 10,
    position: 'absolute',
    top: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  reservedText: {
    color: '#f5f5f5',
    fontSize: 25,
    fontFamily: 'Futura',
    letterSpacing: 2,
    textTransform: 'uppercase',
    opacity: 1
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
  productPrice: {
    fontSize: 12
  },
  textSpan: {
    color: '#c0c5ce',
    fontFamily: 'Futura',
    fontSize: 12
  },
  image: {
    width: '100%',
    height: '80%'
  },
  title: {
    color: '#868990',
    fontFamily: 'Futura',
    alignSelf: 'flex-start',
    marginLeft: 5,
    fontSize: 30
  }
});

Product.propTypes = {
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  reserved: PropTypes.bool.isRequired
};

export default Product;
