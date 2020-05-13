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
  TextInput,
  StyleSheet
} from 'react-native';
import ROG from './img/produk1.png'

const SampleBaru = () => {
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
    <Text style={styles.text}> Alfian </Text>  
    <Alfian />
    <Text style={styles.text}> Danny </Text>  
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
}

const App = () => {
  return (
     <View>
      {/* <SampleBaru />
      <StylingBaru /> */}
      <ECom />
      <ECom />
      <ECom />
     </View>

  ); 
};

const ECom = () => {
  return (
    <View 
    style = {{
      padding: 15, 
      backgroundColor : '#F2F2F2',
      width : 212,
      borderRadius : 8,
      margin : 20,
      }}>
      <Image 
        source = {ROG}
        style = {{
          width : 188,
          height : 107,
          borderRadius : 8,
        }}
        />
      <Text style ={{fontSize : 14, fontWeight : 'bold', marginTop : 16}}>
        ROG Terbaru 2030
      </Text>
      <Text style ={{fontSize : 12, fontWeight : 'bold',color : '#F2994A', marginTop : 12}}>
        Rp. Cari Sendiri Di Google
      </Text>
      <Text style ={{fontSize : 12, fontWeight : '300', marginTop : 12}}>
        Bukan Di Indonesia
      </Text>
    </View>
  );
}

// penggunaan component biasa
const Alfian = () => {
  return <Text style={styles.text}> S1 Sistem Informasi </Text>;
};

const StylingBaru = () => {
  return (
    <View>
      <Text style={styles.text}>Styling Component</Text>
      <View 
        style = {{
          width : 100,
          height : 100,
          backgroundColor : '#0abde3',
          borderWidth : 2,
          borderColor : '#6f27cd',
          marginTop : 20,
          marginLeft : 20,
        }}
      />
    </View>
  );
}
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
    return <Text style={styles.text}>Ini Component Dari Class</Text>
  }
}

class Hewan extends Component {
  render(){
    return (
      <View>
        <Image 
        source= {{uri:'http://placeimg.com/100/100/animals'}}
        style = {{width: 100, height: 100,marginLeft : 20, borderRadius: 50}}
        />
        <Text style = {{fontSize : 24, color : 'blue'}} >ini foto hewan</Text>
      </View>
    );
  }
}

//styling basic
const styles = StyleSheet.create ({
  text : {
    fontSize : 18,
    fontWeight : 'bold',
    color : '#10ac84',
    marginLeft : 20,
    marginTop : 40,
  }
});

export default App;
