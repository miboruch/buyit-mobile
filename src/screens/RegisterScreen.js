import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import Screen from './Screen';
import Input from '../components/Input';
import Button from '../components/Button';
import { registerInputArray } from '../utils/contentArrays';
import CountrySelect from '../components/CountrySelect';
import { RegisterSchema } from '../utils/schemaValidation';
import { userRegister } from '../actions/authenticationActions';

const RegisterScreen = ({ navigation, userRegister }) => {
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
          onSubmit={(
            { email, password, name, lastName, address, city, country },
            { resetForm }
          ) => {
            userRegister(email, password, name, lastName, address, city, country, navigation);
            resetForm();
          }}
          validationSchema={RegisterSchema}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, setFieldValue }) => {
            const registerInputData = registerInputArray(values, errors);
            return (
              <View style={styles.container}>
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
                  <TouchableOpacity onPress={() => navigation.navigate('Login')}>
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
    alignItems: 'center'
  },
  container: {
    width: '90%',
    flex: 1,
    marginTop: 20,
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
    top: 0
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

const mapDispatchToProps = (dispatch) => {
  return {
    userRegister: (email, password, name, lastName, city, address, country, navigation) =>
      dispatch(userRegister(email, password, name, lastName, city, address, country, navigation))
  };
};

export default connect(null, mapDispatchToProps)(RegisterScreen);
