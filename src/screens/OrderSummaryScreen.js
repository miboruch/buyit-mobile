import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Formik} from 'formik';
import {connect} from 'react-redux';
import Screen from './Screen';
import Input from '../components/Input';
import ProductSummary from '../components/ProductSummary';
import {OrderSummarySchema} from '../utils/schemaValidation';
import {orderSummaryArray} from '../utils/contentArrays';
import Button from '../components/Button';
import CountrySelect from '../components/CountrySelect';
import {orderInitialValues} from '../utils/contentArrays';
import {createOrderWithAccount, createOrderWithoutAccount} from '../actions/orderActions';

const OrderSummaryScreen = ({
                                navigation,
                                isLoggedIn,
                                userInfo,
                                cart,
                                totalPrice,
                                createOrderWithAccount,
                                createOrderWithoutAccount
                            }) => {
    const [isEditable, setEditable] = useState(false);
    const orderSummaryValues = isLoggedIn
        ? {
            email: userInfo.email,
            name: userInfo.name,
            lastName: userInfo.lastName,
            address: userInfo.address,
            city: userInfo.city,
            country: userInfo.country
        }
        : orderInitialValues;

    const toggleEdit = () => {
        setEditable(!isEditable);
    };

    return (
        <Screen navigation={navigation} theme={'light'}>
            <ScrollView style={styles.container} contentContainerStyle={{alignItems: 'center'}}>
                <View style={styles.contentWrapper}>
                    <Text style={styles.heading}>Order Summary</Text>
                    <View style={styles.productWrapper}>
                        {cart.map((product) => (
                            <ProductSummary
                                image={product.image}
                                price={product.price}
                                name={product.name}
                                key={product._id}
                            />
                        ))}
                    </View>
                    <View style={styles.summary}>
                        <Text style={styles.summaryText}>Products: {cart.length}</Text>
                        <Text style={styles.summaryText}>Total: ${totalPrice}</Text>
                    </View>
                    <View style={styles.bottomView}>
                        <Text style={styles.heading}>Shipping address</Text>
                        <Formik
                            initialValues={orderSummaryValues}
                            onSubmit={(values, {resetForm}) => {
                                isLoggedIn && userInfo
                                    ? createOrderWithAccount(
                                    cart,
                                    totalPrice,
                                    userInfo._id,
                                    values.address,
                                    values.city,
                                    values.country
                                    )
                                    : createOrderWithoutAccount(
                                    cart,
                                    totalPrice,
                                    values.name,
                                    values.lastName,
                                    values.email,
                                    values.address,
                                    values.city,
                                    values.country
                                    );
                                resetForm();
                                navigation.navigate('Home');
                            }}
                            validationSchema={OrderSummarySchema}
                        >
                            {({handleChange, handleBlur, handleSubmit, values, errors, setFieldValue}) => {
                                const summaryArray = orderSummaryArray(values, errors, isLoggedIn, isEditable);
                                return (
                                    <>
                                        {summaryArray.map((item) => (
                                            <Input
                                                labelText={item.labelText}
                                                onChangeText={handleChange(item.name)}
                                                onBlur={handleBlur(item.name)}
                                                value={item.value}
                                                editable={item.isEditable}
                                                key={item.name}
                                                isEmail={item.isEmail}
                                            />
                                        ))}
                                        <CountrySelect
                                            handleChange={handleChange}
                                            setFieldValue={setFieldValue}
                                            defaultCountry={isLoggedIn && userInfo ? userInfo.country : null}
                                            labelText={'Country'}
                                            formFieldName={'country'}
                                        />
                                        <Button text={'Edit'} isButtonDark={true} onPress={() => toggleEdit()}/>
                                        <Button text={'Submit'} isButtonDark={true} onPress={handleSubmit}/>
                                    </>
                                );
                            }}
                        </Formik>
                    </View>
                </View>
            </ScrollView>
        </Screen>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    contentWrapper: {
        width: '100%',
        alignItems: 'center'
    },
    productWrapper: {
        width: '100%'
    },
    heading: {
        color: '#2d2d2d',
        fontFamily: 'Futura',
        fontSize: 24,
        fontWeight: '700',
        marginBottom: 20
    },
    summary: {
        width: '100%',
        marginTop: 20,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        paddingTop: 20,
        paddingBottom: 20,
        paddingRight: 30,
        alignItems: 'flex-end'
    },
    summaryText: {
        fontFamily: 'Futura',
        letterSpacing: 1,
        fontSize: 13,
        color: '#2d2d2d'
    },
    bottomView: {
        width: '100%',
        paddingTop: 20,
        alignItems: 'center'
    }
});

const mapStateToProps = ({
                             authenticationReducer: {isLoggedIn, userInfo},
                             cartReducer: {cart, totalPrice}
                         }) => {
    return {isLoggedIn, userInfo, cart, totalPrice};
};

const mapDispatchToProps = (dispatch) => {
    return {
        createOrderWithAccount: (cart, totalPrice, userID, address, city, country) =>
            dispatch(createOrderWithAccount(cart, totalPrice, userID, address, city, country)),
        createOrderWithoutAccount: (cart, totalPrice, name, lastName, email, address, city, country) =>
            dispatch(
                createOrderWithoutAccount(cart, totalPrice, name, lastName, email, address, city, country)
            )
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderSummaryScreen);
