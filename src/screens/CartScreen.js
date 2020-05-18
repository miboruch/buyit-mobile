import React from 'react';
import { StyleSheet, View } from "react-native";
import Screen from './Screen'


const CartScreen = ({ route, navigation }) => {
    return (
        <Screen navigation={navigation} theme={'light'}>
            <View style={styles.container}>

            </View>
        </Screen>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default CartScreen;
