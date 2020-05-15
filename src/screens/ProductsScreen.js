import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import Screen from './Screen';
import Button from '../components/Button';
import Product from '../components/Product';
import { fetchAllProducts } from '../actions/productActions';

const ProductsScreen = ({ navigation, getAllProducts, loading, products }) => {
  const category = navigation.getParam('category');

  useEffect(() => {
    getAllProducts(category, 1);
  }, []);

  return (
    <Screen navigation={navigation} theme={'dark'}>
      {loading ? (
        <Text>Loading</Text>
      ) : (
        <View style={styles.container}>
          <View style={styles.buttonContainer}>
            <Button text={'Input'} />
            <Button text={'Add new product'} />
          </View>
          <Text>Shop/{category}</Text>
          <ScrollView style={styles.scrollView}>
            {products.map((product) => (
              <Product
                key={product._id}
                image={product.image}
                price={product.price}
                category={product.category}
                name={product.name}
              />
            ))}
          </ScrollView>
        </View>
      )}
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonContainer: {
    alignSelf: 'flex-end',
    padding: 10
  },
  scrollView: {
    width: '100%',
    flex: 6
  }
});

const mapStateToProps = ({ productReducer: { loading, products } }) => {
  return { loading, products };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllProducts: (category, page) => dispatch(fetchAllProducts(category, page))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsScreen);
