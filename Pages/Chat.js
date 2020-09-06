import React, { useState } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import DeviceInfo  from 'react-native-device-info';
import { getUniqueId } from 'react-native-device-info';

export default function Chat() {
  const [messages, setMessages] = useState([
    /**
     * Mock message data
     */
    // example of system message

    // example of chat message



  ]);

  // helper method that is sends a message
  function handleSend(newMessage = []) {
    setMessages(GiftedChat.append(messages, newMessage));
    //console.log(newMessage[0]._id)

    const id = DeviceInfo.getUniqueId()
    fetch('http://192.168.43.168:8001', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: 'Chat',
          deviceId: id,
          id: newMessage[0]._id,
          createdAt: newMessage[0].createdAt,
          text: newMessage[0].text,
          threadId: "None",
        }),
      }).then((response) => response.json())
        .then((responseJson) => {
          console.log("TEST");
          /*
          if (responseJson.a == "True") {
            console.log("User added")
            Actions.SignUp()
          }
          else {
            console.log("User already exists")
            Actions.Home()
          }
        alert(responseJson.a);
        console.log(responseJson)
        */
    })
    .catch((error) => {
      console.error(error);
    });

  }


  return (
    <GiftedChat
      messages={messages}
      onSend={newMessage => handleSend(newMessage)}
      user={{ _id: 1 }}
    />
  );
}
