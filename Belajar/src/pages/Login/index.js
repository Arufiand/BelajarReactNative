import React from 'react';
import {
    Text,
    View,
    TextInput,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { styles } from '../Styling';



const Login = () => {
  const [User, setUser] = React.useState('');
  const [Pass, setPass] = React.useState('');
  return (
    <View style ={VarLogin.wrapper}>
    <Text style = {VarLogin.Header}>Login</Text>
    <Text style = {VarLogin.text}> Username</Text>
    <TextInput 
      style ={{paddingVertical : 6}} 
      placeholder = "isikan Username" 
      placeholderTextColor = "black"
      // onSubmitEditing= {()=>this.password.focus()}
      onChangeText={text => {
        setUser(text);
        console.log(`isi user ${text}`);      
      }}
      value = {User}
    />
    <Text 
      style = {VarLogin.text}> password</Text>
    <TextInput secureTextEntry={true} 
    style ={{paddingVertical : 6}} 
    placeholder ="isikan Password" 
    placeholderTextColor = "black" 
    onChangeText={text => {
      setPass(text);
      console.log(`isi user ${text}`);      
    }}
    value= {Pass}
    
    />
    <TouchableOpacity 
        style = {VarLogin.Opacity}>
          <Text 
          style = 
            {VarLogin.buttonStyle}>
                Login Mbut
          </Text>
      </TouchableOpacity>
    </View>
  );
}

const VarLogin = StyleSheet.create({
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black'
    },
  wrapper: {
    padding: 15,
    backgroundColor: '#F2F2F2',
    width: 350,
    borderRadius: 8,
    margin: 20,
  },
  Header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    paddingBottom: 12
  },
  buttonStyle: {
    fontSize: 18,
    fontWeight: '300',
    color: 'white',
    textAlign: 'center'
  },
  Opacity : {
    backgroundColor: '#6FCF97', paddingVertical: 6, borderRadius: 25, marginTop: 25
  }
});
export default Login;