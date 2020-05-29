import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import Screen from './Screen';
import Button from '../components/Button';
import { fetchUserOrders } from '../actions/orderActions';
import { getUserInfo } from '../actions/authenticationActions';

const AccountScreen = ({
  route,
  navigation,
  token,
  fetchOrders,
  fetchUserInfo,
  isLoading,
  areOrdersLoading,
  userInfo,
  userOrders
}) => {
  useEffect(() => {
    fetchOrders(token);
    fetchUserInfo(token);
  }, []);
  return (
    <Screen navigation={navigation} theme={'light'}>
      {isLoading || areOrdersLoading ? (
        <View style={styles.indicatorWrapper}>
          <ActivityIndicator size={'large'} color={'#ccc'} />
        </View>
      ) : (
        <View style={styles.container}>
          <View style={styles.boxContainer}>
            <Text style={styles.largeContentText}>Your account:</Text>
            <Text style={styles.smallContentText}>login: michalboruch</Text>
            <Text style={styles.smallContentText}>email: miboruch@gmail.com</Text>
            <Text style={styles.smallContentText}>created date: 18.12.2019, 12:28</Text>
            <Text style={styles.smallContentText}>Your products in database: 1</Text>
            <Text style={styles.smallContentText}>Orders: {userOrders.length}</Text>
            <View style={styles.buttonWrapper}>
              <Button isButtonDark={true} text={'Your orders'} />
              <Button isButtonDark={true} text={'Your products'} />
            </View>
          </View>
          <View style={styles.boxContainer}>
            <Text style={styles.largeContentText}>Personal data:</Text>
            <Text style={styles.smallContentText}>name: Michał</Text>
            <Text style={styles.smallContentText}>last name: Boruch</Text>
            <Text style={styles.smallContentText}>address: Pawia 29/3</Text>
            <Text style={styles.smallContentText}>City: Kraków</Text>
            <Text style={styles.smallContentText}>Country: Poland</Text>
          </View>
          <Button isButtonDark={true} text={'Logout'} />
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
  orderReducer
}) => {
  return {
    token,
    isLoading,
    userInfo,
    areOrdersLoading: orderReducer.isLoading,
    userOrders: orderReducer.allUserOrders
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchOrders: (token) => dispatch(fetchUserOrders(token)),
    fetchUserInfo: (token) => dispatch(getUserInfo(token))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountScreen);
