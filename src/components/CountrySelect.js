import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {countries} from 'countries-list';
import {StyleSheet, Text, View, ActionSheetIOS} from 'react-native';
import Button from './Button';

const CountrySelect = ({setFieldValue, defaultCountry}) => {
    const [selectedCountry, setSelectedCountry] = useState(defaultCountry ? defaultCountry : 'Andorra');
    const countriesArray = Object.values(countries).map((item) => item.name);

    useEffect(() => {
        setFieldValue('country', selectedCountry);
    }, [selectedCountry]);

    const onPress = () =>
        ActionSheetIOS.showActionSheetWithOptions(
            {
                options: countriesArray
            },
            (buttonIndex) => setSelectedCountry(countriesArray[buttonIndex])
        );
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Country: {selectedCountry}</Text>
            <Button onPress={onPress} text='Select country' isButtonDark={true}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '90%',
        marginBottom: 20
    },
    text: {
        fontSize: 13,
        fontFamily: 'Futura',
        color: '#3d3d3d',
        letterSpacing: 1,
        marginBottom: 5
    },
    picker: {
        height: 40
    }
});

CountrySelect.propTypes = {
    setFieldValue: PropTypes.func.isRequired,
    defaultCountry: PropTypes.string
};

export default CountrySelect;
