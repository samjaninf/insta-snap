import React, { Component, PropTypes } from 'react';
import {  StyleSheet, Text, View, Image, TouchableHighlight, TextInput, Button } from 'react-native';
import FormButton from './../FormButton';
import LoadingIndicator from './../../components/LoadingIndicator';

export default class LoginScene extends Component {

  static propTypes = {
    loginUser:PropTypes.func.isRequired,
    onForgotPasswordRoutePress:PropTypes.func.isRequired,
    onRegisterRoutePress:PropTypes.func.isRequired,
    login:PropTypes.object.isRequired,
    onChange:PropTypes.func.isRequired,
    credentials:PropTypes.object.isRequired
  };

  render() {

    const { email, password, onFieldChange, loginUser, handleRegisterRoute, handleForgotPasswordRoute } = this.props;

    return (
      <View style={styles.container}>

        <Text style={styles.title}>Log in</Text>

        <Text style={styles.label}>EMAIL</Text>
        <TextInput
          style={[styles.textInput]}
          onChangeText={(value) => onFieldChange('email',value)}
          value={email}
          maxLength={40}
          placeholderTextColor="gray"
        />
        <View style={styles.separator}/>

        <Text style={styles.label}>PASSWORD</Text>
        <TextInput
          style={[styles.textInput]}
          onChangeText={(value) => onFieldChange('password',value)}
          value={password}
          maxLength={40}
          placeholderTextColor="gray"
          secureTextEntry={true}
        />
        <View style={styles.separator}/>

        <TouchableHighlight onPress={()=>handleForgotPasswordRoute()} style={[styles.textCenter]}
                            underlayColor='transparent' >
          <Text style={[styles.link,styles.textUnderline]}>Forgot your password ?</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={()=>loginUser()} title="Login" style={[styles.button,{marginTop:50}]} underlayColor='transparent' >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={()=>handleRegisterRoute()} underlayColor='transparent'
                            style={[styles.center,{marginTop:30}]}
        >
          <Text style={[styles.link,styles.textCenter]}>
            Don't have an account? Register
          </Text>
        </TouchableHighlight>

      </View>

    )
  }

}

var styles = StyleSheet.create({

  container:{
    flex:1,
    margin:40,
    marginTop:100
  },
  label: {
    fontSize: 13,
    color: '#CCCCCC',
    marginTop:10,
    marginBottom:5
  },
  textCenter: {
    alignSelf: 'center'
  },
  mTop20: {
    marginTop: 20
  },
  textInput:{
    height: 25,
    borderRightColor:'transparent',
    borderTopColor:'transparent',
    borderBottomColor: '#CCCCCC',
    borderBottomWidth:1,
    fontSize:14,
  },
  title:{
    fontSize:20,
    fontWeight:'700',
    textAlign:'center',
    marginBottom:20
  },
  separator:{
    height:1,
    backgroundColor:'#CCCCCC',
  },
  link :{
    marginTop:20,
    color:'#1B82F9',
    fontSize:14
  },
  button : {
    backgroundColor:'#98599D',
    borderRadius:30,
    padding:10,
    height:40,
    marginTop:20,
    width:200,
    alignSelf:'center'
  },
  buttonText:{
    color:'white',
    textAlign:'center',
    fontSize:17,
    fontWeight:'700',
  }
});

