import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, TextInput, StyleSheet } from 'react-native';

const Input = ({ labelText, onChangeText, onBlur, value, isSecure, isEmail, editable }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, editable ? styles.enabledText : styles.disabledText]}>
        {labelText}
      </Text>
      <TextInput
        style={[styles.textInput, editable ? styles.enabledInput : styles.disabledInput]}
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value}
        secureTextEntry={isSecure}
        keyboardType={isEmail ? 'email-address' : 'default'}
        autoCapitalize={'none'}
        editable={editable}
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
    letterSpacing: 1,
    marginBottom: 5
  },
  enabledText: {
    color: '#3d3d3d'
  },
  disabledText: {
    color: '#ccc'
  },
  textInput: {
    fontSize: 14,
    fontFamily: 'Futura',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 1,
    width: '100%',
    height: 40,
    letterSpacing: 1
  },
  enabledInput: {
    color: '#2d2d2d',
    borderColor: '#6e6e6e'
  },
  disabledInput: {
    color: '#ccc',
    borderColor: '#ccc'
  }
});

Input.propTypes = {
  labelText: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  value: PropTypes.any,
  isSecure: PropTypes.bool,
  isEmail: PropTypes.bool,
  editable: PropTypes.bool
};

Input.defaultProps = {
  isSecure: false,
  isEmail: false,
  editable: true
};

export default Input;
