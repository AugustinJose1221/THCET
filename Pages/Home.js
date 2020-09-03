import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
    textContainer:{
      flex: 1,
    },
    container: {
      flex: 1,
      justifyContent: "center",
      paddingHorizontal: 10
    },
    button: {
      borderWidth: 1,
      backgroundColor: "#DDDDDD",
      padding: 20,
      alignItems: "center",
      margin: 2
    },
    text: {
      padding: 1,
      justifyContent: "center",
      alignItems: "center"
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
     <View style={styles.container}>
      <TouchableOpacity style = {styles.button} onPress = {goToLogin}>
         <Text style = {styles.text}>Explore</Text>
      </TouchableOpacity>
      </View>
      </View>
   )
}
export default Home
