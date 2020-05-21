import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import { colors } from '../styles/theme';
import SmallButton from '../components/SmallButton';

const Screen = ({ navigation, children, theme = 'dark' }) => {
  return (
    <View
      style={[styles.container, theme === 'dark' ? styles.darkBackground : styles.lightBackground]}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <TouchableOpacity style={styles.absoluteView} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.mainTitle}>buyIT</Text>
        </TouchableOpacity>
        <View style={styles.leftButton}>
          <SmallButton isButtonDark={theme !== 'dark'} />
        </View>
        <View style={styles.rightButtons}>
          <SmallButton isButtonDark={theme !== 'dark'} />
          <SmallButton isButtonDark={theme !== 'dark'} />
        </View>
        <View style={styles.childrenWrapper} />
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
  absoluteView: {
    position: 'absolute',
    height: 60,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1
  },
  mainTitle: {
    color: '#868990',
    fontFamily: 'Futura',
    fontSize: 28,
    position: 'absolute',
    top: 10,
    left: '50%',
    transform: [{ translateX: -35 }],
    zIndex: 5
  },
  leftButton: {
    position: 'absolute',
    left: 10,
    top: 5,
    zIndex: 2
  },
  rightButtons: {
    flexDirection: 'row',
    position: 'absolute',
    right: 10,
    top: 5,
    zIndex: 2
  },
  childrenWrapper: {
    marginBottom: 60
  }
});

Screen.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.oneOf(['light', 'dark'])
};

export default Screen;
