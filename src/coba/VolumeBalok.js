import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Button,
  Text, TextInput,
  View
} from 'react-native';

export default class VolumeBalok extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      panjang:0,
      lebar:0,
      tinggi:0,
      volume:0,
      luas:0
    };
  }

  render() {
    return (
      <View style = {{flex:1,backgroundColor:'#ffcdd2'}}>

        <View style={{backgroundColor:'#f44336'}}>
           <Text style = {{padding: 10, fontSize: 20, color: 'white', textAlign:'center'}} >
            Menghitung Volume Balok
          </Text>
         </View>

        <View style={{margin:20,padding: 10, backgroundColor:'#ef5350'}}>
            <TextInput style = {{height: 40}}
              placeholder="Masukkan Panjang"
              onChangeText={(panjang)=>this.setState({panjang})}
              keyboardType = 'numeric'
            />
            <TextInput style = {{height: 40}}
              placeholder="Masukkan Lebar"
              onChangeText={(lebar)=>this.setState({lebar})}
              keyboardType = 'numeric'
            />
            <TextInput style = {{height: 40}}
              placeholder="Masukkan  Tinggi"
              onChangeText={(tinggi)=>this.setState({tinggi})}
              keyboardType = 'numeric'
            />

            <Button
              onPress={()=>this.setState({
                volume: (this.state.panjang*this.state.lebar*this.state.tinggi),
                luas: (2*((this.state.panjang*this.state.lebar)+(this.state.panjang*this.state.tinggi)+(this.state.lebar*this.state.tinggi)))
              })}
              title="Hitung"
              accessibilityLabel="Klik untuk menghitung"
              color='#ef5350'
            />
       </View>

        <Text style = {{padding: 10, fontSize: 20}}>Volume Balok</Text>
        <View style={{margin:20, backgroundColor:'#e57373'}}>
          <Text style = {{padding: 10, fontSize: 20}} >
              Volume Balok
              Panjang =  {this.state.panjang} {"\n"}
              Lebar =  {this.state.lebar} {"\n"}
              Tinggi =  {this.state.tinggi} {"\n"}
              Volume = {this.state.volume}
          </Text>
         </View>
         <Text style = {{padding: 10, fontSize: 20}} >Luas Permukaan Balok</Text>
         <View style={{margin:20, backgroundColor:'#e57373'}}>
          <Text style = {{padding: 10, fontSize: 20}} >
              Panjang ={this.state.panjang} {"\n"}
              Lebar = {this.state.lebar} {"\n"}
              Tinggi = {this.state.tinggi} {"\n"}
              Luas = {this.state.luas}
          </Text>
         </View>
   </View>
    );
  }
}
