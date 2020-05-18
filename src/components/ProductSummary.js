import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet, Image } from 'react-native';

const ProductSummary = ({ image, name, price }) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>{price} USD</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  name: {
    fontFamily: 'Futura',
    fontWeight: '700'
  },
  price: {
    fontFamily: 'Futura'
  }
});

ProductSummary.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
};

export default ProductSummary;
