import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Formik } from 'formik';
import { connect } from 'react-redux';

import Screen from './Screen';
import Button from '../components/Button';
import Input from '../components/Input';
import { addProduct } from '../utils/contentArrays';

const AddProductScreen = ({ navigation }) => {
  return (
    <Screen navigation={navigation} theme={'light'}>
      <ScrollView style={styles.container} contentContainerStyle={{ alignItems: 'center' }}>
        <View style={styles.bottomView}>
          <Text style={styles.heading}>Add product</Text>
          <Formik
            initialValues={{ image: null, name: '', description: '', price: null, category: 'all' }}
            onSubmit={(values, { resetForm }) => {
              console.log(values);
              resetForm();
            }}
            // validationSchema={OrderSummarySchema}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors, setFieldValue }) => {
              return (
                <>
                  {addProduct.map((item) => (
                    <Input
                      labelText={item.labelText}
                      onChangeText={handleChange(item.name)}
                      onBlur={handleBlur(item.name)}
                      value={item.value}
                      key={item.name}
                    />
                  ))}
                  <Button text={'Submit'} isButtonDark={true} onPress={handleSubmit} />
                </>
              );
            }}
          </Formik>
        </View>
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  heading: {
    color: '#2d2d2d',
    fontFamily: 'Futura',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20
  },
  bottomView: {
    width: '100%',
    paddingTop: 20,
    alignItems: 'center'
  }
});

const mapStateToProps = ({
  authenticationReducer: { isLoggedIn, userInfo },
  cartReducer: { cart, totalPrice }
}) => {
  return { isLoggedIn, userInfo, cart, totalPrice };
};

export default connect(mapStateToProps)(AddProductScreen);
