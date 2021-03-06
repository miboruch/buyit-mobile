import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import Screen from './Screen';
import Button from '../components/Button';
import { fetchUserOrders } from '../actions/orderActions';
import { authLogout, getUserInfo } from '../actions/authenticationActions';
import { fetchAllUserProducts } from '../actions/productActions';

const AccountScreen = ({
  navigation,
  token,
  fetchOrders,
  fetchUserInfo,
  isLoading,
  areOrdersLoading,
  userInfo,
  userOrders,
  userProducts,
  fetchAllUserProducts,
  userLogout
}) => {
  useEffect(() => {
    !userInfo && fetchUserInfo(token);
    fetchOrders(token);
    fetchAllUserProducts(token);
  }, []);
  return (
    <Screen navigation={navigation} theme={'light'}>
      {isLoading || areOrdersLoading ? (
        <View style={styles.indicatorWrapper}>
          <ActivityIndicator size={'large'} color={'#ccc'} />
        </View>
      ) : (
        <View style={styles.container}>
          {userInfo && userOrders && userProducts ? (
            <>
              <View style={styles.boxContainer}>
                <Text style={styles.largeContentText}>Your account:</Text>
                <Text style={styles.smallContentText}>email: {userInfo.email}</Text>
                <Text style={styles.smallContentText}>
                  created date: {new Date(userInfo.createdDate).toLocaleString()}
                </Text>
                <Text style={styles.smallContentText}>
                  Your products in database: {userProducts.length}
                </Text>
                <Text style={styles.smallContentText}>Orders: {userOrders.length}</Text>
                <View style={styles.buttonWrapper}>
                  <Button
                    isButtonDark={true}
                    text={'Your products'}
                    onPress={() => navigation.navigate('UserProducts')}
                  />
                </View>
              </View>
              <View style={styles.boxContainer}>
                <Text style={styles.largeContentText}>Personal data:</Text>
                <Text style={styles.smallContentText}>name: {userInfo.name}</Text>
                <Text style={styles.smallContentText}>last name: {userInfo.lastName}</Text>
                <Text style={styles.smallContentText}>address: {userInfo.address}</Text>
                <Text style={styles.smallContentText}>City: {userInfo.city}</Text>
                <Text style={styles.smallContentText}>Country: {userInfo.country}</Text>
              </View>
            </>
          ) : null}
          <Button isButtonDark={true} text={'Logout'} onPress={() => userLogout(navigation)} />
        </View>
      )}
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  boxContainer: {
    flex: 2,
    alignItems: 'center',
    marginTop: 20
  },
  indicatorWrapper: {
    flex: 1,
    justifyContent: 'center'
  },
  smallContentText: {
    color: '#2d2d2d',
    fontFamily: 'Futura',
    fontSize: 15,
    marginTop: 5
  },
  largeContentText: {
    color: '#2d2d2d',
    fontFamily: 'Futura',
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: 1
  },
  buttonWrapper: {
    marginTop: 30
  }
});

const mapStateToProps = ({
  authenticationReducer: { token, isLoading, userInfo },
  orderReducer,
  productReducer: { userProducts }
}) => {
  return {
    token,
    isLoading,
    userInfo,
    areOrdersLoading: orderReducer.isLoading,
    userOrders: orderReducer.allUserOrders,
    userProducts
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchOrders: (token) => dispatch(fetchUserOrders(token)),
    fetchUserInfo: (token) => dispatch(getUserInfo(token)),
    fetchAllUserProducts: (token) => dispatch(fetchAllUserProducts(token)),
    userLogout: (navigation) => dispatch(authLogout(navigation))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountScreen);
