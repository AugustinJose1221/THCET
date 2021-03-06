import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from '../Pages/Home.js'
import SignUp from '../Pages/SignUp.js'
import Login from '../Pages/Login.js'
import Chat from '../Pages/Chat.js'

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "home" component = {Home} title = "Home" initial = {true} />
         <Scene key = "SignUp" component = {SignUp} title = "SignUp" />
         <Scene key = "Login" component = {Login} title = "Login" />
         <Scene key = "Chat" component = {Chat} title = "Chat" />
      </Scene>
   </Router>
)
export default Routes
