import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, text, isButtonDark }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, isButtonDark ? styles.darkContainer : styles.lightContainer]}
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
  }
});

Button.propTypes = {
  onPress: PropTypes.func,
  text: PropTypes.string.isRequired,
  isButtonDark: PropTypes.bool
};

Button.defaultProps = {
  isButtonDark: false
};

export default Button;
