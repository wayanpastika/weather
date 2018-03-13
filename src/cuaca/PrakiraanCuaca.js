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
    </View>
  );
}
}
