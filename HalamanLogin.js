import React from 'react';
import {
    Text,
    View,
    TextInput,
    StyleSheet
} from 'react-native';

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

const VarLogin = StyleSheet.create({
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    }

});
export default Halamanlogin;