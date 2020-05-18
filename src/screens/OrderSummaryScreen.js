import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Formik } from 'formik';
import Screen from './Screen';
import iphone from '../assets/images/iphone11.jpg';
import Input from '../components/Input';
import ProductSummary from '../components/ProductSummary';
import { OrderSummarySchema } from '../utils/schemaValidation';
import { orderSummaryArray, orderSummaryInitialValues } from '../utils/contentArrays';
import Button from '../components/Button';
import CountrySelect from '../components/CountrySelect';

const OrderSummaryScreen = ({ route, navigation }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isEditable, setEditable] = useState(false);
  const orderSummaryValues = orderSummaryInitialValues(isLoggedIn, 'test');

  const toggleEdit = () => {
    setEditable(!isEditable);
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
              initialValues={orderSummaryValues}
              onSubmit={(values, { resetForm }) => {
                console.log(values);
                resetForm();
              }}
              validationSchema={OrderSummarySchema}
            >
              {({ handleChange, handleBlur, handleSubmit, values, errors, setFieldValue }) => {
                const summaryArray = orderSummaryArray(values, errors, isLoggedIn, isEditable);
                return (
                  <>
                    {summaryArray.map((item) => (
                      <Input
                        labelText={item.labelText}
                        onChangeText={handleChange(item.name)}
                        onBlur={handleBlur(item.name)}
                        value={item.value}
                        editable={item.isEditable}
                        key={item.name}
                        isEmail={item.isEmail}
                      />
                    ))}
                    <CountrySelect
                      handleChange={handleChange}
                      setFieldValue={setFieldValue}
                      labelText={'Country'}
                      formFieldName={'country'}
                    />
                    <Button text={'Edit'} isButtonDark={true} onPress={() => toggleEdit()} />
                    <Button text={'Submit'} isButtonDark={true} onPress={handleSubmit} />
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
  bottomView: {
    width: '100%',
    paddingTop: 20,
    alignItems: 'center'
  }
});

export default OrderSummaryScreen;
