import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class BelajarLayout extends React.Component {
  render() {
    return (
      <View style={styles.containerMain}>
        <View style={styles.Box1}>
          <Text style={styles.Texthead}>Pendidikan Teknik Informatika</Text>
        </View>
        <View style={styles.Box2}>
          <Text style={styles.Texthead2}>Slider</Text>
        </View>
        <View style={styles.Box3}>
          <View style={styles.BoxBox}>
            <View style={styles.Box3a}>
              <Text style={styles.Texthead2}>1</Text>
            </View>
            <View style={styles.Box3a}>
              <Text style={styles.Texthead2}>2</Text>
            </View>
            <View style={styles.Box3a}>
              <Text style={styles.Texthead2}>3</Text>
            </View>
            <View style={styles.Box3a}>
              <Text style={styles.Texthead2}>4</Text>
            </View>
          </View>
          <View style={styles.BoxBox}>
            <View style={styles.Box3a}>
              <Text style={styles.Texthead2}>5</Text>
            </View>
            <View style={styles.Box3a}>
              <Text style={styles.Texthead2}>6</Text>
            </View>
            <View style={styles.Box3a}>
              <Text style={styles.Texthead2}>7</Text>
            </View>
            <View style={styles.Box3a}>
              <Text style={styles.Texthead2}>8</Text>
            </View>
          </View>

        </View>
        <View style={styles.Box4}>
          <Text style={styles.Texthead}>#JaenKuliahdiPTI</Text>
        </View>
      </View>

    );
  }
}
const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#7FFFD4',
    flex: 1,
    flexDirection: 'column'
  },
  Box1: {
    flex: 1,
    backgroundColor: '#0000FF',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center'
  },
  Box2: {
    flex: 4,
    backgroundColor: '#1E90FF',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center'
  },
  Box3: {
    flex: 4,
    backgroundColor: '#1E90FF',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    marginRight: 10,
    marginLeft: 10,
  },
  BoxBox: {
    flex: 1,
    backgroundColor: '#00CED1',
    flexDirection: 'row',
    alignItems: 'center',
  },
  Box3a: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
  },
  Box4: {
    flex: 1,
    backgroundColor: '#0000FF',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center'
  },
  Texthead: {
    fontSize: 25,
    color: 'white'
  },
  Texthead2: {
    fontSize: 35,
    color: '#000000',

  }
});
