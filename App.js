import React from 'react';
import { StyleSheet, View } from 'react-native';
//import Volumebalok from './src/coba/VolumeBalok';
//import Header from './src/cuaca/Header';
//import PrakiraanCuaca from './src/cuaca/PrakiraanCuaca';
import BelajarLayout from './src/coba/BelajarLayout';
export default class App extends React.Component {

  render() {
    return (
      <View style={styles.ContainerMain}>
      <BelajarLayout />

    
      </View>
    );
  }
}
const styles = StyleSheet.create({
  ContainerMain: {
    flex: 1
  }
});
