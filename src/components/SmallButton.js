import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const SmallButton = ({ onPress, text, isButtonDark = false }) => {
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
    width: 40,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 1
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

export default SmallButton;
