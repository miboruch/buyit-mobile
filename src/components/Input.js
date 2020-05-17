import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, TextInput, StyleSheet } from 'react-native';

const Input = ({ labelText, onChangeText, onBlur, value, isSecure, isEmail }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{labelText}</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value}
        secureTextEntry={isSecure}
        keyboardType={isEmail ? 'email-address' : 'default'}
        autoCapitalize={'none'}
      />
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
  textInput: {
    fontSize: 14,
    fontFamily: 'Futura',
    color: '#2d2d2d',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 1,
    borderColor: '#6e6e6e',
    width: '100%',
    height: 40,
    letterSpacing: 1
  }
});

Input.propTypes = {
  labelText: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  value: PropTypes.any,
  isSecure: PropTypes.bool,
  isEmail: PropTypes.bool
};

Input.defaultProps = {
  isSecure: false,
  isEmail: false
};

export default Input;
