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
  StyleSheet,
  ScrollView
} from 'react-native';
import ROG from './img/produk1.png'

//penambahan halaman baru dan memanggil component 
import index, {
  Alfian, StylingBaru, SampleBaru, styles
} from './StylingBaru';


const App = () => {
  return (
     <View>
       <ScrollView>
        <Halamanlogin / >
        {/* <SampleBaru />
        <StylingBaru />
        <ECom text1="ASUS 2020" text2="Rp2000000" text3="Dijual di ID" lebar = {250} />
        <ECom text1 = "ASUS 2020" text2 = "Rp2000000" text3 = "Dijual di ID" lebar = {280}/ >
        <ECom text1 = "ASUS 2020" text2 = "Rp2000000" text3 = "Dijual di ID" lebar = {320}/ > */}
      </ScrollView>
     </View>
  ); 
};

{/* props ini digunakan untuk mengganti variabel */}
const ECom = props => {
  return (
    <View 
    style = {{
      padding: 15, 
      backgroundColor : '#F2F2F2',
      width : props.lebar,
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
        {props.text1}
      </Text>
      <Text style ={{fontSize : 12, fontWeight : 'bold',color : '#F2994A', marginTop : 12}}>
        {props.text2}
      </Text>
      <Text style ={{fontSize : 12, fontWeight : '300', marginTop : 12}}>
        {props.text3}
      </Text>
    </View>
  );
}

const Halamanlogin = () => {
  return (
    <View 
    style = {{
      padding: 15, 
      backgroundColor : '#F2F2F2',
      width : 350,
      borderRadius : 8,
      margin : 20,
      }}>
    <Text 
    style = {{
      fontSize : 24,
      fontWeight : 'bold',
      color : 'black',
      paddingBottom : 12
    }}>Login</Text>
    <Text 
    style = {VarLogin.text}> Username</Text>
    <TextInput style ={{paddingVertical : 6}}/>
    <Text 
      style = {VarLogin.text}> password</Text>
    <TextInput secureTextEntry={true} style ={{paddingVertical : 6}}/>
    <View 
        style = {{
            backgroundColor: '#6FCF97', paddingVertical : 6, borderRadius : 25, marginTop : 25
        }}>
          <Text 
          style = 
            {{
                fontSize : 18, 
                fontWeight : '300', 
                color : 'white', 
                textAlign : 'center'
            }}>
                Login Mbut
          </Text>
      </View>
    </View>
  );
}

const VarLogin = StyleSheet.create ({
          text :{
            fontSize: 16,
            fontWeight: 'bold',
            color: 'black'
          }

});
export default App;
