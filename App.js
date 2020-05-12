/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TextInput
} from 'react-native';


const App = () => {
  return (
    <View>
        <View style = { 
          {
            width: 80,
            height: 80,
            backgroundColor: '#48dbfb'
          }
        }
        />     
        <Text> Alfian </Text> 
        <Alfian />
        <Text> Danny </Text> 
        <Foto />
        <TextInput style = {
            {
              borderWidth: 1
            }
          }
        
        /> 
       <BoxGreen />
       <Hewan />
    </View>
  );
};

// penggunaan component biasa
const Alfian = () => {
  return <Text> S1 Sistem Informasi </Text>;
};

const Foto = () => {
  return ( 
    <Image source = {
      {
        uri: 'http://placeimg.com/100/100/arch'
      }
    }
    style = {
      {
        width: 100,
        height: 100
      }
    }
    />
  );
};


//penggunaan component react

class BoxGreen extends Component {
  render(){
    return <Text>Ini Component Dari Class</Text>
  }
}

class Hewan extends Component {
  render(){
    return (
      <View>
        <Image 
        source= {{uri:'http://placeimg.com/100/100/animals'}}
        style = {{width: 100, height: 100, borderRadius: 50}}
        />
        <Text style = {{fontSize : 24, color : 'blue'}} >ini foto hewan</Text>
      </View>
    );
  }
}


export default App;
