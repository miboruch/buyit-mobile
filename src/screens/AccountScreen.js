import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import Screen from './Screen';
import Button from "../components/Button";

const AccountScreen = ({ route, navigation }) => {
    return (
        <Screen navigation={navigation} theme={"light"}>
            <View style={styles.container}>
                <Text style={styles.largeContentText}>Your account:</Text>
                <Text style={styles.smallContentText}>login: michalboruch</Text>
                <Text style={styles.smallContentText}>email: miboruch@gmail.com</Text>
                <Text style={styles.smallContentText}>created date: 18.12.2019, 12:28</Text>
                <Text style={styles.smallContentText}>Your projects in database: 1</Text>
                <Text style={styles.smallContentText}>Orders: 0</Text>
                <View style={styles.button}>
                    <Button isButtonDark={'false'} text={'Logout'}/>
                </View>
            </View>
            <View style={styles.container}>
                <Text style={styles.largeContentText}>Personal data:</Text>
                <Text style={styles.smallContentText}>name: Michał</Text>
                <Text style={styles.smallContentText}>last name: Boruch</Text>
                <Text style={styles.smallContentText}>address: Pawia 29/3</Text>
                <Text style={styles.smallContentText}>City: Kraków</Text>
                <Text style={styles.smallContentText}>Country: Poland</Text>
                <View style={styles.button}>
                    <Button isButtonDark={'false'} text={'Edit Data'}/>
                </View>
            </View>
        </Screen>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    smallContentText: {
        color: '#000',
        fontFamily: 'Futura',
        fontSize: 17,
        paddingLeft: 15,
        padding: 5
    },
    largeContentText: {
        color: '#000',
        fontFamily: 'Futura',
        fontSize: 30,
        fontWeight: "bold",
        letterSpacing: 1,
        paddingLeft: 15,
    },
    button: {
        paddingLeft: 15,
        paddingTop: 15
    }
});

export default AccountScreen;
