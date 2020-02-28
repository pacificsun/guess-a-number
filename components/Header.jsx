import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Color from '../constants/color';
const Header = props => {
  return (
    <View style={style.header}>
      <Text style={style.headerTitle}>{props.title}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: Color.primary,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerTitle: {
    color: 'black',
    fontSize: 18
  }
});

export default Header;
