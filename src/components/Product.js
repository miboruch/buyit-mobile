import React from 'react';
import PropTypes from 'prop-types';
import { Image, StyleSheet, Text, View } from 'react-native';

const Product = ({ image, category, name, price }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.contentView}>
        <Text style={styles.largeContentText}>
          <Text style={styles.textSpan}>name: </Text>
          {name}{' '}
        </Text>
        <Text style={styles.largeContentText}>
          <Text style={styles.textSpan}>price: </Text>
          {price} USD
        </Text>
        <Text style={styles.smallContentText}>
          <Text style={styles.textSpan}>category: </Text>
          {category}{' '}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 400,
    marginBottom: 70
  },
  contentView: {
    marginLeft: 20,
    marginTop: 10
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
  price: PropTypes.number.isRequired
};

export default Product;
