import React from 'react';
import { Text, View, TextInput } from 'react-native';

export default class PrakiraanCuaca extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    kota: ''
  };
}

render() {
  return (
    <View>
      <Text>Masukan Nama Kota</Text>
      <TextInput
      onSubmitEditing={
        (event) => this.setState({ kota: event.nativeEvent.text })
      }
      />
      <Text>Kota : {this.state.kota}</Text>
      <Text>Cuaca : {this.state.weather}</Text>
    </View>
  );
}
getWeather= () => {
  let url='http://api.openweathermap.org/data/2.5/weather?q=' + this.state.kota + '&appid=58da9bfc6af4de163c35f71bf0757880&units=metric';
  fetch (url)
  .then ((response) => response.json())
  .then ((responseJson) => {
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
}
