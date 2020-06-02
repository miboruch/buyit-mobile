import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, text, isButtonDark, disabled }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[styles.container, isButtonDark ? styles.darkContainer : styles.lightContainer, disabled ? styles.disabled : null]}
    >
      <Text style={[styles.text, isButtonDark ? styles.darkThemeText : styles.lightThemeText]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 230,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    marginBottom: 10
  },
  lightContainer: {
    borderColor: '#fff'
  },
  darkContainer: {
    borderColor: '#2d2d2d'
  },
  text: {
    fontFamily: 'Futura',
    letterSpacing: 1,
    fontWeight: '500'
  },
  lightThemeText: {
    color: '#f1f1f1'
  },
  darkThemeText: {
    color: '#2d2d2d'
  },
  disabled: {
    opacity: 0.5
  }
});

Button.propTypes = {
  onPress: PropTypes.func,
  text: PropTypes.string.isRequired,
  isButtonDark: PropTypes.bool,
  disabled: PropTypes.bool
};

Button.defaultProps = {
  isButtonDark: false,
  disabled: false
};

export default Button;
