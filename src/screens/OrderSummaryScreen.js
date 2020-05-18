import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import Screen from './Screen';
import iphone from '../assets/images/iphone11.jpg';
import Input from '../components/Input';
import ProductSummary from '../components/ProductSummary';

const OrderSummaryScreen = ({ route, navigation }) => {
  return (
    <Screen navigation={navigation} theme={'light'}>
      <View style={styles.container}>
        <View style={styles.contentWrapper}>
          <Text style={styles.heading}>Order Summary</Text>
          <View style={styles.topView}>
            <ProductSummary image={iphone} price={1992} name={'Iphone 11'} />
          </View>
          <View style={styles.summary}>
            <Text style={styles.summaryText}>Products: 1</Text>
            <Text style={styles.summaryText}>Total: 1992$</Text>
          </View>
          <View style={styles.bottomView}>
            <Text style={styles.largeContentText}>Shipping address</Text>
            {/*<Input labelText={'email'}></Input>*/}
            {/*<Input labelText={'name'}></Input>*/}
            {/*<Input labelText={'last name'}></Input>*/}
            {/*<Input labelText={'address'}></Input>*/}
            {/*<Input labelText={'city'}></Input>*/}
          </View>
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  contentWrapper: {
    width: '90%',
    alignItems: 'center',
  },
  heading: {
    color: '#2d2d2d',
    fontFamily: 'Futura',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
    marginLeft: 20
  },
  summary: {
    width: '100%',
    marginTop: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: 'flex-end'
  },
  summaryText: {
    fontFamily: 'Futura',
    letterSpacing: 1,
    fontSize: 13,
    color: '#2d2d2d'
  },
  largeContentText: {
    color: '#000',
    fontFamily: 'Futura',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
    paddingLeft: 15
  },
  button: {
    paddingLeft: 15,
    paddingTop: 15
  },
  image: {
    width: 90,
    height: 90
  },
  topView: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  middleView: {
    paddingTop: 20,
    paddingRight: 20,
    alignItems: 'flex-end'
  },
  bottomView: {
    paddingTop: 20,
    alignItems: 'center'
  }
});

export default OrderSummaryScreen;
