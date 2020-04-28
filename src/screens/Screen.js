import React from 'react';
import { SafeAreaView, TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import { colors } from '../styles/theme';

const Screen = ({ navigation, children, theme = 'dark' }) => {
  return (
    <View
      style={[styles.container, theme === 'dark' ? styles.darkBackground : styles.lightBackground]}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <TouchableOpacity
          style={{ alignItems: 'flex-start', margin: 16 }}
          onPress={navigation.openDrawer}
        >
          <Text>something</Text>
        </TouchableOpacity>
        {children}
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  darkBackground: {
    backgroundColor: colors.backgroundDark,
    color: '#f1f1f1'
  },
  lightBackground: {
    backgroundColor: colors.backgroundLight,
    color: '#2d2d2d'
  },
  text: {
    fontSize: 20,
    fontFamily: 'Futura'
  },
  box: {
    width: 20,
    height: 20,
    backgroundColor: 'red'
  }
});

export default Screen;
