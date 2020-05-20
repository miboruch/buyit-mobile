import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import Screen from './Screen';
import Button from '../components/Button';
import SmallButton from '../components/SmallButton';
import logo from '../assets/images/main_logo.jpg';

import { instruction } from '../utils/instruction';
import { authenticationCheck, authLogout } from '../actions/authenticationActions';

const HomeScreen = ({ navigation, isLoggedIn, authenticationCheck, userLogout, isLoading }) => {
  useEffect(() => {
    !isLoggedIn && authenticationCheck();
  }, []);

  return (
    <Screen navigation={navigation} theme='dark'>
      {isLoading ? (
        <View style={styles.indicatorWrapper}>
          <ActivityIndicator size={'large'} color={'#ccc'} />
        </View>
      ) : (
        <View style={styles.container}>
          <View style={styles.buttonsContainer}>
            <View style={styles.leftButton}>
              <SmallButton />
            </View>
            <View style={styles.rightButtons}>
              <SmallButton />
              <SmallButton />
            </View>
          </View>
          <View style={styles.headingView}>
            <Text style={styles.title}>OUR PERSONAL {'\n'}SHOPPING EXPERIENCE</Text>
          </View>
          <Image style={styles.image} source={logo} />
          <View style={styles.contentView}>
            <Button
              text={'Go to products'}
              onPress={() =>
                navigation.navigate('Products', {
                  category: 'all'
                })
              }
              isButtonDark={false}
            />
            <View style={styles.textView}>
              {instruction.map((item, index) => (
                <Text key={index} style={styles.text}>
                  {item}
                </Text>
              ))}
            </View>
            {isLoggedIn ? (
              <Button text={'Logout'} onPress={() => userLogout()} />
            ) : (
              <Button text={'Log in'} onPress={() => navigation.navigate('Login')} />
            )}
          </View>
          {/*<Button text={'Test'} onPress={() => navigation.navigate('CartScreen')} />*/}
        </View>
      )}
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontFamily: 'Futura',
    fontSize: 21,
    color: '#868990',
    fontWeight: '500',
    letterSpacing: 2
  },
  indicatorWrapper: {
    flex: 1,
    justifyContent: 'center'
  },
  text: {
    fontFamily: 'Futura',
    fontSize: 14,
    color: '#c0c5ce',
    margin: 12
  },
  image: {
    width: '100%',
    height: 300
  },
  headingView: {
    marginLeft: 10,
    marginBottom: 20,
    marginTop: 20
  },
  contentView: {
    marginTop: 40,
    flex: 3,
    alignItems: 'center'
  },
  textView: {
    width: '90%',
    justifyContent: 'center',
    marginBottom: 10
  },
  buttonsContainer: {
    flexDirection: 'row',
    // top: -50,
    paddingLeft: 10,
    position: 'relative'
  },
  leftButton: {
    position: 'absolute',
    left: 10,
    top: -50
  },
  rightButtons: {
    flexDirection: 'row',
    position: 'absolute',
    right: 10,
    top: -50
  }
});

const mapStateToProps = ({ authenticationReducer: { isLoggedIn, isLoading } }) => {
  return { isLoggedIn, isLoading };
};

const mapDispatchToProps = (dispatch) => {
  return {
    authenticationCheck: () => dispatch(authenticationCheck()),
    userLogout: () => dispatch(authLogout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
