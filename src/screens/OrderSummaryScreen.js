import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import Screen from './Screen';
import iphone from '../assets/images/iphone11.jpg';
import Input from "../components/Input";

const OrderSummaryScreen = ({ route, navigation }) => {
    return (
        <Screen navigation={navigation} theme={"light"}>
            <View style={styles.container}>
                <Text style={styles.smallContentText}>Order Summary</Text>
                <View style={styles.topView}>
                    <Image source={iphone} style={styles.image}/>
                    <Text style={styles.smallContentText}>Iphone 11</Text>
                    <Text style={styles.smallContentText}>1992$</Text>
                </View>
                <View style={styles.middleView}>
                    <Text style={styles.smallContentText}>Products: 1</Text>
                    <Text style={styles.smallContentText}>Total: 1992$</Text>
                </View>
                <View style={styles.bottomView}>
                    <Text style={styles.largeContentText}>Shipping address</Text>
                    <Input labelText={'email'}></Input>
                    <Input labelText={'name'}></Input>
                    <Input labelText={'last name'}></Input>
                    <Input labelText={'address'}></Input>
                    <Input labelText={'city'}></Input>
                </View>
            </View>
        </Screen>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1
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
        fontSize: 20,
        fontWeight: "bold",
        letterSpacing: 1,
        paddingLeft: 15,
    },
    button: {
        paddingLeft: 15,
        paddingTop: 15
    },
    image: {
        width: 90,
        height: 90
    },
    topView: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    middleView: {
        paddingTop: 20,
        paddingRight: 20,
        alignItems: 'flex-end'
    },
    bottomView: {
        paddingTop: 20,
        alignItems: 'center'
    }
});

export default OrderSummaryScreen;
