import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Formik } from 'formik';
import Screen from './Screen';
import Input from '../components/Input';
import Button from '../components/Button';

const LoginScreen = ({ navigation }) => {
  return (
    <Screen navigation={navigation} theme={'light'}>
      <View style={styles.screenContainer}>
        <Formik
          initialValues={{ login: '', password: '' }}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View style={styles.container}>
              <Text style={styles.headerText}>Log in</Text>
              <Input
                onChangeText={handleChange('login')}
                onBlur={handleBlur('login')}
                labelText={'Login'}
                value={values.login}
              />
              <Input
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                labelText={'Password'}
                value={values.password}
                secure={true}
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
    backgroundColor: '#ccc',
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
    color: '#f5f5f5',
    position: 'absolute',
    top: 170
  }
});

export default LoginScreen;
