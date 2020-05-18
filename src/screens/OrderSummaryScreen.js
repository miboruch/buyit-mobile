import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { Formik } from 'formik';
import Screen from './Screen';
import iphone from '../assets/images/iphone11.jpg';
import Input from '../components/Input';
import ProductSummary from '../components/ProductSummary';
import { RegisterSchema } from '../utils/schemaValidation';

const OrderSummaryScreen = ({ route, navigation }) => {
  const [isEditOpen, setEditOpen] = useState(false);

  const toggleEdit = () => {
    setEditOpen(!isEditOpen);
  };
  return (
    <Screen navigation={navigation} theme={'light'}>
      <ScrollView style={styles.container} contentContainerStyle={{ alignItems: 'center' }}>
        <View style={styles.contentWrapper}>
          <Text style={styles.heading}>Order Summary</Text>
          <View style={styles.productWrapper}>
            <ProductSummary image={iphone} price={1992} name={'Iphone 11'} />
          </View>
          <View style={styles.summary}>
            <Text style={styles.summaryText}>Products: 1</Text>
            <Text style={styles.summaryText}>Total: 1992$</Text>
          </View>
          <View style={styles.bottomView}>
            <Text style={styles.heading}>Shipping address</Text>
            <Formik
              initialValues={{
                email: '',
                password: '',
                name: '',
                lastName: '',
                address: '',
                city: '',
                country: ''
              }}
              onSubmit={(values, { resetForm }) => {
                console.log(values);
                resetForm();
              }}
              validationSchema={RegisterSchema}
            >
              {({ handleChange, handleBlur, handleSubmit, values, errors, setFieldValue }) => {
                return (
                  <>
                    <Input
                      labelText={'Name'}
                      onChangeText={() => {}}
                      onBlur={() => {}}
                      value={'Michał'}
                      editable={true}
                    />
                    <Input
                      labelText={'Last name'}
                      onChangeText={() => {}}
                      onBlur={() => {}}
                      value={'Boruch'}
                      editable={true}
                    />
                    <Input
                      labelText={'Address'}
                      onChangeText={() => {}}
                      onBlur={() => {}}
                      value={'Pawia 29/3'}
                      editable={true}
                    />
                    <Input
                      labelText={'City'}
                      onChangeText={() => {}}
                      onBlur={() => {}}
                      value={'Kraków'}
                      editable={false}
                    />
                    <Input
                      labelText={'Country'}
                      onChangeText={() => {}}
                      onBlur={() => {}}
                      value={'Poland'}
                      editable={true}
                    />
                  </>
                );
              }}
            </Formik>
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  contentWrapper: {
    width: '90%',
    alignItems: 'center'
  },
  productWrapper: {
    width: '100%'
  },
  heading: {
    color: '#2d2d2d',
    fontFamily: 'Futura',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20
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
    color: '#2d2d2d',
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
  middleView: {
    paddingTop: 20,
    alignItems: 'flex-end'
  },
  bottomView: {
    width: '100%',
    paddingTop: 20,
    alignItems: 'center'
  }
});

export default OrderSummaryScreen;
