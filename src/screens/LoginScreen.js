import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import Screen from './Screen';
import Input from '../components/Input';
import Button from '../components/Button';
import { LoginSchema } from '../utils/schemaValidation';
import { userLogin } from '../actions/authenticationActions';

const LoginScreen = ({ navigation, userLogin, loginError }) => {
  return (
    <Screen navigation={navigation} theme={'light'}>
      <View style={styles.screenContainer}>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={({ email, password }, { resetForm }) => {
            userLogin(email, password, navigation);
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
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                  <Text style={styles.registerText}>or register</Text>
                </TouchableOpacity>
                {loginError && <Text style={styles.errorText}>Email or password is incorrect</Text>}
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
  },
  errorText: {
    color: 'tomato',
    fontSize: 14,
    fontFamily: 'Futura',
    letterSpacing: 1,
    marginTop: 15
  }
});

const mapStateToProps = ({ authenticationReducer: { loginError } }) => {
  return { loginError };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: (email, password, navigation) => dispatch(userLogin(email, password, navigation))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
