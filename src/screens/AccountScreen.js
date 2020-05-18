import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Screen from './Screen';
import Button from '../components/Button';

const AccountScreen = ({ route, navigation }) => {
  return (
    <Screen navigation={navigation} theme={'light'}>
      <View style={styles.container}>
        <View style={styles.boxContainer}>
          <Text style={styles.largeContentText}>Your account:</Text>
          <Text style={styles.smallContentText}>login: michalboruch</Text>
          <Text style={styles.smallContentText}>email: miboruch@gmail.com</Text>
          <Text style={styles.smallContentText}>created date: 18.12.2019, 12:28</Text>
          <Text style={styles.smallContentText}>Your products in database: 1</Text>
          <Text style={styles.smallContentText}>Orders: 0</Text>
          <View style={styles.buttonWrapper}>
            <Button isButtonDark={true} text={'Your orders'} />
            <Button isButtonDark={true} text={'Your products'} />
          </View>
        </View>
        <View style={styles.boxContainer}>
          <Text style={styles.largeContentText}>Personal data:</Text>
          <Text style={styles.smallContentText}>name: Michał</Text>
          <Text style={styles.smallContentText}>last name: Boruch</Text>
          <Text style={styles.smallContentText}>address: Pawia 29/3</Text>
          <Text style={styles.smallContentText}>City: Kraków</Text>
          <Text style={styles.smallContentText}>Country: Poland</Text>
          <View style={styles.buttonWrapper}>
            <Button isButtonDark={true} text={'Edit Data'} />
          </View>
        </View>
        <Button isButtonDark={true} text={'Logout'} />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  boxContainer: {
    flex: 2,
    alignItems: 'center',
    marginTop: 20
  },
  smallContentText: {
    color: '#2d2d2d',
    fontFamily: 'Futura',
    fontSize: 15,
    marginTop: 5
  },
  largeContentText: {
    color: '#2d2d2d',
    fontFamily: 'Futura',
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: 1
  },
  buttonWrapper: {
    marginTop: 30
  }
});

export default AccountScreen;
