import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux'


class SignUp extends Component {
   state = {
      username: '',
      email: '',
      password: '',
      confirmpassword: ''
   }
   handleUsername = (text) => {
     this.setState({ username: text})
   }
   handleEmail = (text) => {
      this.setState({ email: text })
   }
   handlePassword = (text) => {
      this.setState({ password: text })
   }
   handleConfirmPassword = (text) => {
     this.setState({ confirmpassword: text})
   }
   login = (email, pass) => {
      alert('email: ' + email + ' password: ' + pass)
   }
   passwordNotMatched = (Password, confirmPassword) => {
     if (Password != confirmPassword)
     {
       alert("Password Mismatch")
     }
     else {
        this.login(this.state.email, this.state.password)
     }
   }
   render() {
      return (
         <View style = {styles.container}>
           <TextInput style = {styles.input}
              underlineColorAndroid = "transparent"
              placeholder = "SignUp Page"
              placeholderTextColor = "#9a73ef"
              autoCapitalize = "none"
              onChangeText = {this.handleUsername}/>

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>

             <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Confirm Password"
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
                onChangeText = {this.handleConfirmPassword}/>

            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.passwordNotMatched(this.state.password, this.state.confirmpassword)//login(this.state.email, this.state.password)
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
         </View>
      )
   }
}
export default SignUp

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
