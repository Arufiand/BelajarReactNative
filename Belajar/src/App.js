import React from 'react';
import {
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';
import ROG from '../img/produk1.png'

//penambahan halaman baru dan memanggil component 
import Styling, {
  Alfian, StylingBaru, SampleBaru, styles
} from './pages/Styling';
import Halamanlogin from './pages/Login';
import FlexBox from './pages/FlexBox';
import Position from './pages/Position';
import PropsDinamis from './pages/PropsDinamis';
import StateDinamis from './pages/StateDinamis';
import Komunikasi from './pages/Komunikasi';
import CustomHooks from './pages/CustomHooks';

const App = () => {
  return (
     <View>
       <ScrollView>
         
          <FlexBox />
          <Position />
          <Halamanlogin />
          {/* <PropsDinamis /> */}
          <CustomHooks />
          <FlexBox />
          {/* <SampleBaru />      */}
          {/* <Styling /> */}
          {/* <StateDinamis /> */}
          {/* <Komunikasi /> */}

      </ScrollView>
     </View>
  ); 
};

export default App;
