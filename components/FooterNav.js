import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const FooterNav = () => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.navItem}>
        <Text style={styles.icon}>🏠</Text>
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Text style={styles.icon}>🔍</Text>
        <Text>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Text style={styles.icon}>📚</Text>
        <Text>Course</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Text style={styles.icon}>👤</Text>
        <Text>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FooterNav;

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    paddingVertical: 10,
  },
  navItem: {
    alignItems: 'center',
  },
  icon: {
    fontSize: 24,
  },
});
