import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import { colors } from '../styles/theme';

const Screen = ({ navigation, children, theme = 'dark' }) => {
  return (
    <View
      style={[styles.container, theme === 'dark' ? styles.darkBackground : styles.lightBackground]}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <TouchableOpacity
          style={styles.absoluteView}
          onPress={() => navigation.navigate('HomeScreen')}
        >
          <Text style={styles.mainTitle}>buyIT</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ alignItems: 'flex-start', margin: 16, width: 130, height: 30 }}
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
    flex: 1,
    position: 'relative'
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
  },
  absoluteView: {
    position: 'absolute',
    height: 135,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  mainTitle: {
    color: '#868990',
    fontFamily: 'Futura',
    fontSize: 28
  }
});

Screen.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.oneOf(['light', 'dark'])
}

export default Screen;
