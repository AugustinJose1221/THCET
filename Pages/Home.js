import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
    textContainer:{
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    },
    container: {
      flex: 1,
      justifyContent: "center",
      paddingHorizontal: 10,
      alignItems: "center",
      flexDirection: 'row',
      margin: 20
    },
    button: {
      borderWidth: 1,
      backgroundColor: "#DDDDDD",
      padding: 20,
      alignItems: "center",
      margin: 20
    },
    text: {
      padding: 1,
      justifyContent: "center"
   }
});

const Home = () => {
   const goToSignUp = () => {
      Actions.SignUp()
   }
   const goToLogin = () => {
      Actions.Login()
   }
   return (
     <View style={styles.textContainer}>
     <Text> Welcome  to  THCET</Text>
     <View style={styles.container}>
      <TouchableOpacity style = {styles.button} onPress = {goToSignUp}>
         <Text style = {styles.text}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity style = {styles.button} onPress = {goToLogin}>
         <Text style = {styles.text}>Login</Text>
      </TouchableOpacity>
      </View>
      </View>
   )
}
export default Home
