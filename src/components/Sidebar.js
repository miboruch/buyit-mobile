import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { DrawerNavigatorItems } from 'react-navigation-drawer';

const Sidebar = (props) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <DrawerNavigatorItems
          {...props}
          activeBackgroundColor={'#1d1d1d'}
          labelStyle={styles.navigatorItem}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100
  },
  navigatorItem: {
    fontFamily: 'Futura',
    letterSpacing: 1,
    color: '#f1f1f1'
  }
});

export default Sidebar;
