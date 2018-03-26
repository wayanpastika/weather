import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) =>{
  return (
    <View style={styles.contHeader}>
      <Text style={styles.textHeader}>Prakiraan Cuaca{props.headerText}</Text>
    </View>
  );
};
const styles = {
  contHeader: {
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    height: 60,
    position: 'relative'
  },
  textHeader: {
    fontSize: 20,
    color: 'white'
  }
};


export default Header;
