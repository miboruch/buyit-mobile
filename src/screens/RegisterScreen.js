import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { Formik } from 'formik';
import Screen from './Screen';
import Input from '../components/Input';
import Button from '../components/Button';
import { registerInputArray } from '../utils/contentArrays';
import CountrySelect from '../components/CountrySelect';

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
          onSubmit={(values, { resetForm }) => {
            console.log(values);
            resetForm();
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, setFieldValue }) => {
            const registerInputData = registerInputArray(values, errors);
            return (
              <View style={styles.container}>
                <Text style={styles.headerText}>Register</Text>
                {registerInputData.map((item) => (
                  <Input
                    key={item.name}
                    onChangeText={handleChange(item.name)}
                    onBlur={handleBlur(item.name)}
                    labelText={item.labelText}
                    value={item.value}
                    isEmail={item.isEmail}
                    isSecure={item.isSecure}
                  />
                ))}
                <CountrySelect
                  handleChange={handleChange}
                  setFieldValue={setFieldValue}
                  labelText={'Country'}
                  formFieldName={'country'}
                />
                <View style={styles.buttonWrapper}>
                  <Button
                    style={{ width: '100%' }}
                    text={'Submit'}
                    onPress={handleSubmit}
                    isButtonDark={true}
                  />
                  <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                    <Text style={styles.loginText}>or log in</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
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
    top: 10
  },
  loginText: {
    fontFamily: 'Futura',
    fontSize: 13,
    color: '#2d2d2d',
    letterSpacing: 1
  },
  picker: {
    width: 200,
    height: 40,
    alignItems: 'center'
  }
});

export default RegisterScreen;
