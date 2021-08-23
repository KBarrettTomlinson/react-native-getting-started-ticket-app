import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/core';

const Menu = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.menu}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Tickets')}
        style={styles.button}>
        <Text style={styles.buttonText}>Events</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Contact')}
        style={styles.button}>
        <Text style={styles.buttonText}>Contact us</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('News')}
        style={styles.button}>
        <Text style={styles.buttonText}>News</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menu: {flexDirection: 'row'},
  button: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginRight: 5,
    marginLeft: 5,
  },
  buttonText: {fontFamily: 'Ubuntu-Regular'},
});

export default Menu;
