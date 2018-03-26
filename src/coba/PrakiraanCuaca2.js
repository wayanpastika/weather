import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class BelajarLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    kota: ''
  };
}
getWeather= () => {
  let url='http://api.openweathermap.org/data/2.5/weather?q=' + this.state.kota + '&appid=58da9bfc6af4de163c35f71bf0757880&units=metric';
  fetch (url)
  . then ((response) => response.json())
  . then ((responseJson) => {
    console.log(responseJson);
    this.setState({
      forecast: {
        main: responseJson.weather[0].main,
        description: responseJson.weather[0].description,
        temp: responseJson.main.temp
        }
      });
    }
  );
}
  render() {
    return (
      <View style={styles.containerMain}>
        <View style={styles.Box1}>
          <Text style={styles.Texthead}>Prakiraan Cuaca</Text>
        </View>
        <View style={styles.Box2}>
          <View style={styles.Box2b}>
            <Text style={styles.Texthead2}>Masukan Nama Kota</Text>
          </View>
          <View style={styles.Box2a}>
            <TextInput
            onSubmitEditing={
              (event) => this.setState({ kota: event.nativeEvent.text })
            }
            />
            <Button
              onPress={()=>this.setState({
                kota : (this.state.kota)
              })}
              title="Lihat"
              accessibilityLabel="Klik untuk melihat"
              color='#ef5350'
            />
          </View>
          <View style={styles.Box2b}>
            <Text style={styles.Texthead2}></Text>
          </View>

        </View>
        <View style={styles.Box3}>
          <View style={styles.Box3a}>
            <View style={styles.Box3b}>
              <View style={styles.Box3c}>
                <Text style={styles.text}>icon</Text>
              </View>
              <View style={styles.Box3d}>
                <Text style={styles.text}>{this.state.kota}</Text>
              </View>
            </View>
            <View style={styles.Box3b}>
              <View style={styles.Box3c}>
                <Text style={styles.text}>icon</Text>
              </View>
              <View style={styles.Box3d}>
                <Text style={styles.text}>isi</Text>
              </View>
            </View>
          </View>
          <View style={styles.Box3a}>
            <View style={styles.Box3b}>
              <View style={styles.Box3c}>
                <Text style={styles.text}>icon</Text>
              </View>
              <View style={styles.Box3d}>
                <Text style={styles.text}>isi</Text>
              </View>
            </View>
            <View style={styles.Box3b}>
              <View style={styles.Box3c}>
                <Text style={styles.text}>icon</Text>
              </View>
              <View style={styles.Box3d}>
                <Text style={styles.text}>isi</Text>
              </View>
            </View>
          </View>
          <View style={styles.Box3a}>
            <View style={styles.Box3b}>
              <View style={styles.Box3c}>
                <Text style={styles.text}>icon</Text>
              </View>
              <View style={styles.Box3d}>
                <Text style={styles.text}>isi</Text>
              </View>
            </View>
            <View style={styles.Box3b}>
              <View style={styles.Box3c}>
                <Text style={styles.text}>icon</Text>
              </View>
              <View style={styles.Box3d}>
                <Text style={styles.text}>isi</Text>
              </View>
            </View>
          </View>
          <View style={styles.Box3a}>
            <View style={styles.Box3b}>
              <View style={styles.Box3c}>
                <Text style={styles.text}>icon</Text>
              </View>
              <View style={styles.Box3d}>
                <Text style={styles.text}>isi</Text>
              </View>
            </View>
            <View style={styles.Box3b}>
              <View style={styles.Box3c}>
                <Text style={styles.text}>icon</Text>
              </View>
              <View style={styles.Box3d}>
                <Text style={styles.text}>isi</Text>
              </View>
            </View>
          </View>
          <View style={styles.Box3a}>
            <View style={styles.Box3b}>
              <View style={styles.Box3c}>
                <Text style={styles.text}>icon</Text>
              </View>
              <View style={styles.Box3d}>
                <Text style={styles.text}>isi</Text>
              </View>
            </View>
            <View style={styles.Box3b}>
              <View style={styles.Box3c}>
                <Text style={styles.text}>icon</Text>
              </View>
              <View style={styles.Box3d}>
                <Text style={styles.text}>isi</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.Box4}>
          <Text style={styles.Texthead}>copyright @pastika2018</Text>
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
    flex: 3,
    backgroundColor: '#1E90FF',
    marginTop: 20,
    marginBottom: 20,
    marginRight: 20,
    marginLeft: 20,
  },
  Box2a: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    flexDirection: 'column',
    marginRight: 60,
    marginLeft: 60
  },
  Box2b: {
    flex: 1,
    backgroundColor: '#1E90FF',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  Box3: {
    flex: 8,
    backgroundColor: '#7FFFD4',
    marginTop: 20,
    marginBottom: 20,
    marginRight: 10,
    marginLeft: 10,
  },
  Box3a: {
    flex: 1,
    backgroundColor: '#7FFFD4',
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10
  },
  Box3b: {
    flex: 1,
    backgroundColor: 'green',
    flexDirection: 'row',
    marginRight: 10,
    marginLeft: 10,
  },
  Box3c: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  Box3d: {
    flex: 2,
    backgroundColor: '#1E90FF',
  },
  Box4: {
    flex: 1,
    backgroundColor: '#0000FF',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center'
  },
  Texthead: {
    fontSize: 23,
    color: 'white'
  },
  Texthead2: {
    fontSize: 20,
    textAlign: 'center',
    color: '#000000'
  },
  Texthead3: {
    fontSize: 20,
    textAlign: 'left',
    color: '#000000'
  }
});
