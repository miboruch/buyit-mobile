import React, { useEffect } from 'react';
import { View, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import Screen from './Screen';
import Button from '../components/Button';
import Product from '../components/Product';
import { fetchAllProducts } from '../actions/productActions';

const ProductsScreen = ({ navigation, getAllProducts, isLoading, products, isLoggedIn }) => {
  useEffect(() => {
    getAllProducts('all', 1);
  }, []);

  return (
    <Screen navigation={navigation} theme={'dark'}>
      {isLoading ? (
        <View style={styles.indicatorWrapper}>
          <ActivityIndicator size={'large'} color={'#ccc'} />
        </View>
      ) : (
        <View style={styles.container}>
          <View style={styles.buttonContainer}>
            {isLoggedIn && (
              <Button text={'Add new product'} onPress={() => navigation.navigate('AddProduct')} />
            )}
          </View>
          <ScrollView style={styles.scrollView}>
            {products.map((product) => (
              <Product
                onPress={() => navigation.navigate('Product', { product })}
                key={product._id}
                image={product.image}
                price={product.price}
                category={product.category}
                name={product.name}
                reserved={product.reserved}
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
  indicatorWrapper: {
    flex: 1,
    justifyContent: 'center'
  },
  buttonContainer: {
    alignSelf: 'flex-end',
    padding: 10
  },
  scrollView: {
    width: '100%',
    flex: 6
  },
  loadingText: {
    color: '#f3f3f3',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const mapStateToProps = ({
  authenticationReducer: { isLoggedIn },
  productReducer: { isLoading, products }
}) => {
  return { isLoading, products, isLoggedIn };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllProducts: (category, page) => dispatch(fetchAllProducts(category, page))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsScreen);
