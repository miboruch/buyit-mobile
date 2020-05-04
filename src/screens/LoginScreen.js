import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import Screen from './Screen';
import Input from '../components/Input';
import Button from '../components/Button';
import { LoginSchema } from '../utils/schemaValidation';

const LoginScreen = ({ navigation }) => {
  return (
    <Screen navigation={navigation} theme={'light'}>
      <View style={styles.screenContainer}>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
            resetForm();
          }}
          validationSchema={LoginSchema}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View style={styles.container}>
              <Text style={styles.headerText}>Log in</Text>
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
              <View style={styles.buttonWrapper}>
                <Button
                  style={{ width: '100%' }}
                  text={'Submit'}
                  onPress={handleSubmit}
                  isButtonDark={true}
                />
                <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
                  <Text style={styles.registerText}>or register</Text>
                </TouchableOpacity>
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
    top: 170
  },
  registerText: {
    fontFamily: 'Futura',
    fontSize: 13,
    color: '#2d2d2d',
    letterSpacing: 1
  }
});

export default LoginScreen;
