/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';
import ROG from '../img/produk1.png'

//penambahan halaman baru dan memanggil component 
import index, {
  Alfian, StylingBaru, SampleBaru, styles
} from './pages/Styling';
import Halamanlogin from './pages/Login';
 import FlexBox from './pages/FlexBox';
import Position from './pages/Position';

const App = () => {
  return (
     <View>
       <ScrollView>
         
          <FlexBox />
          <Position />
          <Halamanlogin />
          <FlexBox />
          {/* <SampleBaru /> */}     
          <Styling />
          <ECom text1="ASUS 2020" text2="Rp2000000" text3="Dijual di ID" lebar = {250} />
          <ECom text1 = "ASUS 2020" text2 = "Rp2000000" text3 = "Dijual di ID" lebar = {280}/ >
          <ECom text1 = "ASUS 2020" text2 = "Rp2000000" text3 = "Dijual di ID" lebar = {320}/ >
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

export default App;
