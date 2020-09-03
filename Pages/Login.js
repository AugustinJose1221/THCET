import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { NativeModules } from 'react-native'
import DeviceInfo  from 'react-native-device-info';
import { getUniqueId} from 'react-native-device-info';

class Login extends Component {
   state = {
      username: '',
   }
   handleUsername = (text) => {
      this.setState({ username: text })
   }
   login = (username) => {
     const id = DeviceInfo.getUniqueId()
       alert('Username: ' + username + 'id:' + id)

   }
   render() {
      return (
         <View style = {styles.container}>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Username"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleUsername}/>

            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.username)
               }>
               <Text style = {styles.submitButtonText}> ENTER </Text>
            </TouchableOpacity>
         </View>
      )
   }
}
export default Login

const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
   }
})
/*
const About = () => {
   const goToHome = () => {
      Actions.home()
   }
   return (
      <TouchableOpacity style = {{ margin: 128 }} onPress = {goToHome}>
         <Text>This is ABOUT</Text>
      </TouchableOpacity>
   )
}
export default About
*/
