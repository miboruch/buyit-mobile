import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Formik } from 'formik';
import Screen from './Screen';
import Input from '../components/Input';
import Button from '../components/Button';

const RegisterScreen = ({ navigation }) => {
  return (
    <Screen navigation={navigation} theme={'light'}>
      <View style={styles.screenContainer}>
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
          onSubmit={(values) => console.log(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View style={styles.container}>
              <Text style={styles.headerText}>Register</Text>
              <Input
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                labelText={'Email'}
                value={values.email}
                isEmail={true}
              />
              <Input
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                labelText={'Password'}
                value={values.password}
                isSecure={true}
              />
              <Input
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                labelText={'First name'}
                value={values.name}
              />
              <Input
                onChangeText={handleChange('lastName')}
                onBlur={handleBlur('lastName')}
                labelText={'Last name'}
                value={values.lastName}
              />
              <Input
                onChangeText={handleChange('address')}
                onBlur={handleBlur('address')}
                labelText={'Address'}
                value={values.address}
              />
              <Input
                onChangeText={handleChange('city')}
                onBlur={handleBlur('city')}
                labelText={'City'}
                value={values.city}
              />

              <View style={styles.buttonWrapper}>
                <Button
                  style={{ width: '100%' }}
                  text={'Submit'}
                  onPress={handleSubmit}
                  isButtonDark={true}
                />
              </View>
            </View>
          )}
        </Formik>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    width: '90%',
    borderWidth: 1,
    borderTopWidth: 0,
    borderColor: '#ccc',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },
  buttonWrapper: {
    width: '90%',
    alignItems: 'flex-start',
    justifyContent: 'flex-end'
  },
  headerText: {
    fontSize: 42,
    letterSpacing: 3,
    fontFamily: 'Futura',
    color: '#2d2d2d',
    position: 'absolute',
    top: 50
  }
});

export default RegisterScreen;
