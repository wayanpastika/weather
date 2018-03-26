import React from 'react';
import { StyleSheet, View } from 'react-native';
//import Volumebalok from './src/coba/VolumeBalok';
//import Header from './src/cuaca/Header';
import PrakiraanCuaca2 from './src/coba/PrakiraanCuaca2';
export default class App extends React.Component {

  render() {
    return (
      <View style={styles.ContainerMain}>
      <PrakiraanCuaca2 />


      </View>
    );
  }
}
const styles = StyleSheet.create({
  ContainerMain: {
    flex: 1
  }
});
