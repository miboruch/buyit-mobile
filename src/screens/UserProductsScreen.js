import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Screen from './Screen';
import ProductSummary from '../components/ProductSummary';

const UserProductsScreen = ({ navigation, userProducts }) => {
  return (
    <Screen navigation={navigation} theme={'light'}>
      <ScrollView style={styles.container}>
        {userProducts.length !== 0 ? (
          <>
            {userProducts.map((product) => (
              <View style={styles.productsWrapper} key={product._id}>
                <TouchableOpacity
                  style={styles.singleProductWrapper}
                  onPress={() => navigation.navigate('Product', { product })}
                >
                  <ProductSummary image={product.image} price={product.price} name={product.name} />
                </TouchableOpacity>
              </View>
            ))}
          </>
        ) : (
          <View style={styles.emptyWrapper}>
            <Text style={styles.priceContentText}>You have no products</Text>
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

const mapStateToProps = ({ productReducer: { userProducts } }) => {
  return { userProducts };
};

export default connect(mapStateToProps)(UserProductsScreen);
