import React from 'react';
import { StyleSheet, View } from 'react-native';
//import Volumebalok from './src/coba/VolumeBalok';
import Header from './src/cuaca/Header';
import PrakiraanCuaca from './src/cuaca/PrakiraanCuaca';
export default class App extends React.Component {

  render() {
    return (
      <View style={styles.ContainerMain}>
        <Header headerText={'Ramalan Cuaca'} />
        <PrakiraanCuaca />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  ContainerMain: {
    flex: 1
  }
});
