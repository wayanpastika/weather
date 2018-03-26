import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
const windIcon = require('./img/wind.png');
const tempIcon = require('./img/temp.png');
const mainIcon = require('./img/main.png');
const seaIcon = require('./img/sea.png');


export default class BelajarLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    kota: '',
    forecast: {
        main: '-',
        description: '-',
        temp: 0,
        sunrise: 0,
        sunset: 0,
        pressure: 0,
        humidity: 0,
        sea_level: 0,
        grnd_level: 0,
        speed: 0,
      }
  };
}
getWeather= () => {
  let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + this.state.kota + '&appid=58da9bfc6af4de163c35f71bf0757880&units=metric';
  fetch(url)
  .then((response) => response.json())
  .then((responseJson) => {
    console.log(responseJson);
    this.setState({
      forecast: {
        main: responseJson.weather[0].main,
        description: responseJson.weather[0].description,
        temp: responseJson.main.temp,
        sunrise: responseJson.sys.sunrise,
        sunset: responseJson.sys.sunset,
        pressure: responseJson.main.pressure,
        humidity: responseJson.main.humidity,
        sea_level: responseJson.main.sea_level,
        grnd_level: responseJson.main.grnd_level,
        speed: responseJson.wind.speed
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
              onChangeText={(kota) => this.setState({ kota })}
            />
            <Button
              onPress={() => this.getWeather()}
              title="Cari"
              color="black"
              accessibilityLabel="Klik untuk melihat cuaca"
            />
          </View>
          <View style={styles.Box2b}>
            <Text style={styles.Texthead2}></Text>
          </View>

        </View>
        <View style={styles.Box3}>
          <View style={styles.Box3a}>
            <View style={styles.Box3b}>
              <View style={styles.iconContainer}>
                <Image source={tempIcon} style={styles.icon} />
              </View>
              <View style={styles.Box3d}>
                <Text style={styles.Texthead4}>Temp : {this.state.forecast.temp}</Text>
              </View>
            </View>
            <View style={styles.Box3b}>
            <View style={styles.iconContainer}>
              <Image source={windIcon} style={styles.icon} />
            </View>
              <View style={styles.Box3d}>
                <Text style={styles.Texthead4}>Wind Speed : {this.state.forecast.speed}</Text>
              </View>
            </View>
          </View>
          <View style={styles.Box3a}>
            <View style={styles.Box3b}>
            <View style={styles.iconContainer}>
              <Image source={mainIcon} style={styles.icon} />
            </View>
              <View style={styles.Box3d}>
                <Text style={styles.Texthead4}>Main : {this.state.forecast.main}</Text>
              </View>
            </View>
            <View style={styles.Box3b}>
              <View style={styles.iconContainer}>
                <Image source={tempIcon} style={styles.icon} />
              </View>
              <View style={styles.Box3d}>
                <Text style={styles.Texthead4}>Manin Desc : {this.state.forecast.description}</Text>
              </View>
            </View>
          </View>
          <View style={styles.Box3a}>
            <View style={styles.Box3b}>
            <View style={styles.iconContainer}>
              <Image source={mainIcon} style={styles.icon} />
            </View>
              <View style={styles.Box3d}>
                <Text style={styles.Texthead4}>Surise : {this.state.forecast.sunrise}</Text>
              </View>
            </View>
            <View style={styles.Box3b}>
              <View style={styles.iconContainer}>
                <Image source={mainIcon} style={styles.icon} />
              </View>
              <View style={styles.Box3d}>
                <Text style={styles.Texthead4}>Sunset : {this.state.forecast.sunset}</Text>
              </View>
            </View>
          </View>
          <View style={styles.Box3a}>
            <View style={styles.Box3b}>
              <View style={styles.iconContainer}>
                <Image source={tempIcon} style={styles.icon} />
              </View>
              <View style={styles.Box3d}>
                <Text style={styles.Texthead4}>Presure : {this.state.forecast.pressure}</Text>
              </View>
            </View>
            <View style={styles.Box3b}>
              <View style={styles.iconContainer}>
                <Image source={tempIcon} style={styles.icon} />
              </View>
              <View style={styles.Box3d}>
                <Text style={styles.Texthead4}>Humadity : {this.state.forecast.humidity}</Text>
              </View>
            </View>
          </View>
          <View style={styles.Box3a}>
            <View style={styles.Box3b}>
            <View style={styles.iconContainer}>
              <Image source={seaIcon} style={styles.icon} />
            </View>
              <View style={styles.Box3d}>
                <Text style={styles.Texthead4}>Sea Level : {this.state.forecast.sea_level}</Text>
              </View>
            </View>
            <View style={styles.Box3b}>
              <View style={styles.iconContainer}>
                <Image source={tempIcon} style={styles.icon} />
              </View>
              <View style={styles.Box3d}>
                <Text style={styles.Texthead4}>Ground Level : {this.state.forecast.grnd_level}</Text>
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
    justifyContent: 'space-around',
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
  },
  Texthead4: {
    fontSize: 15,
    textAlign: 'left',
    color: '#000000'
  },
  iconContainer: {
    alignItems: 'center',
    backgroundColor: '#feb401',
    borderColor: '#feaf12',
    borderWidth: 1,
    justifyContent: 'center',
    height: 77,
    width: 70,
  },
  icon: {
    tintColor: '#fff',
    height: 40,
    width: 40,
  }
});
