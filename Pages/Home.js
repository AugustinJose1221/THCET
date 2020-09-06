import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { NativeModules } from 'react-native'
import DeviceInfo  from 'react-native-device-info';
import { getUniqueId} from 'react-native-device-info';

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
  /*
   goToSignUp = () => {
      Actions.SignUp()
   }
   */
   const deviceCheck = () => {
     const id = DeviceInfo.getUniqueId()
     fetch('http://192.168.43.168:8001', {
         method: 'POST',
         headers: {
           Accept: 'application/json',
           'Content-Type': 'application/json',
         },
         body: JSON.stringify({
           query: "Auth",
           deviceId: id,
         }),
       }).then((response) => response.json())
         .then((responseJson) => {
        //(responseJson)
        if (responseJson.a=="True") {
          //goToSignUp();
          console.log("SignUp")
          Actions.Chat()
        }
        else {
          Actions.Login()
        }
         //alert(responseJson.a);
         console.log(responseJson)
     })
     .catch((error) => {
       console.error(error);
     });
   }

/*
   goToLogin = () => {
      Actions.Login()
   }
   */
   return (
     <View style={styles.textContainer}>
     <View style={styles.container}>
      <TouchableOpacity style = {styles.button} onPress = {deviceCheck}>
         <Text style = {styles.text}>Explore</Text>
      </TouchableOpacity>
      </View>
      </View>
   )
}
export default Home
