import React from 'react';
import { StyleSheet, View, Text } from "react-native";
import Screen from './Screen'
import ProductSummary from '../components/ProductSummary'
import iphone from "../assets/images/iphone11.jpg";
import Button from '../components/Button'


const CartScreen = ({ route, navigation }) => {
    return (
        <Screen navigation={navigation} theme={'light'}>
            <View style={styles.productSummaryWrapper}>
                <ProductSummary image={iphone} price={1992} name={'Iphone 11'} />
            </View>
            <View style={styles.container}>
                <Text style={styles.smallContentText}>Product will be removed from your cart at 19:02</Text>
                <View style={styles.buttonWrapper}>
                    <Button isButtonDark={true} text={'Remove product'}/>
                </View>
            </View>
            <View style={styles.bottomPage}>
                <View style={styles.buttonWrapper}>
                    <View style={styles.textWrapper}>
                        <Text style={styles.priceContentText}> Total price: 1922 $</Text>
                    </View>
                    <Button isButtonDark={true} text={'Checkout'}/>
                </View>
            </View>
        </Screen>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:5,
    },
    productSummaryWrapper:{
        flex:1,
        borderTopWidth:1,
        borderColor: 'grey',
        paddingTop:20,
        paddingBottom: 20
    },
    smallContentText: {
        color: '#2d2d2d',
        fontFamily: 'Futura',
        fontSize: 15,
        marginTop: 5,
        textAlign: 'center'
    },
    textWrapper: {
        alignItems: 'flex-end'
    },
    priceContentText: {
        color: '#2d2d2d',
        fontFamily: 'Futura',
        fontSize: 15,
        marginTop: 5,
        paddingBottom: 20
    },
    largeContentText: {
        color: '#2d2d2d',
        fontFamily: 'Futura',
        fontSize: 30,
        fontWeight: 'bold',
        letterSpacing: 1
    },
    buttonWrapper: {
        alignItems: 'center'
    },
    bottomPage:{
        borderTopWidth:1,
        justifyContent: 'flex-end'
    }
});

export default CartScreen;
