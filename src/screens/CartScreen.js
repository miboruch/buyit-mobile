import React from 'react';
import { StyleSheet, View, Text } from "react-native";
import Screen from './Screen'
import ProductSummary from '../components/ProductSummary'
import iphone from "../assets/images/iphone11.jpg";
import Button from '../components/Button'


const CartScreen = ({ route, navigation }) => {
    return (
        <Screen navigation={navigation} theme={'light'}>
            <View style={styles.container}>
                <View style={styles.productSummaryWrapper}>
                    <ProductSummary image={iphone} price={1992} name={'Iphone 11'} />
                    <Text style={styles.smallContentText}>Product wille be removed from your cart at 19:02</Text>
                    <View style={styles.buttonWrapper}>
                        <Button isButtonDark={true} text={'Remove product'}/>
                    </View>
                </View>

            </View>
        </Screen>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center'
    },
    productSummaryWrapper:{
        borderTopWidth: 1,
        borderColor: 'grey',
        flex: 1,
        justifyContent: 'flex-start',
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
        alignItems: 'center'
    }
});

export default CartScreen;
