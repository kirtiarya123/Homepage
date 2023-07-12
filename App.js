import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize
} from "react-native-responsive-dimensions";


const App = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const sendMessage = () => {
    if (message.trim() === '') return;

    const newMessage = {
      id: Math.random().toString(),
      content: message,
      sender: 'user',
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setMessage('');
  };

  const renderMessage = ({ item }) => (
    <View style={{ alignSelf: item.sender === 'user' ? 'flex-end' : 'flex-start', marginVertical: 5 }}>
      <View
        style={{
          backgroundColor: item.sender === 'user' ? '#DCF8C5' : '#E5E5EA',
          borderRadius: 10,
          padding: 10,
        }}
      >
        <Text>{item.content}</Text>
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <View style={{ backgroundColor: '#40E0D0', padding: responsiveScreenWidth(8), paddingHorizontal: responsiveScreenWidth(3), flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity style={{ marginRight: responsiveScreenWidth(2) }}>
          <AntDesign name="arrowleft" size={20} color="#000000" />
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1, marginRight: responsiveScreenWidth(2) }}>
          <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", borderColor: "#fff", flex: 4 }}>
            <Image
              source={require('./assets/tree-736885_1280.jpg')}
              style={{ height: responsiveScreenWidth(15), width: responsiveScreenWidth(15), borderRadius: responsiveScreenWidth(7.5) }}
            />
            <View style={{ flexDirection: 'column', justifyContent: 'center', paddingHorizontal: 10 }}>
              <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: responsiveScreenFontSize(2.5) }}>Contact Name</Text>
              <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: responsiveScreenFontSize(1.5), }}>Online</Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={{ marginRight: responsiveScreenWidth(3) }}>
          <AntDesign name="videocamera" size={20} color="#000000" />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginRight: responsiveScreenWidth(5) }}>
          <Icon name="phone" size={20} color="#000000" />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginRight: responsiveScreenWidth(5) }}>
          <Icon name="ellipsis-v" size={20} color="#000000" />
        </TouchableOpacity>
      </View>

      {/* Chat messages */}
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ flexGrow: 1, paddingHorizontal: responsiveScreenWidth(5) }}
        inverted
      />

      {/* Footer */}
      <View style={{ backgroundColor: 'white', paddingHorizontal: responsiveScreenWidth(2), paddingVertical: responsiveScreenWidth(1), marginRight: responsiveScreenWidth(7), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <View style={{ backgroundColor: '#C0C0C0', borderRadius: responsiveScreenWidth(5), height: responsiveScreenHeight(5), width: responsiveScreenWidth(82), paddingHorizontal: responsiveScreenWidth(3), marginRight: responsiveScreenWidth(4), flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity style={{ marginRight: responsiveScreenWidth(5) }}>
            <Icon name="smile-o" size={24} color="#075E54" />
          </TouchableOpacity>

          <TextInput
            style={{ flex: 3, paddingHorizontal: responsiveScreenWidth(0), borderRadius: responsiveScreenWidth(10) }}
            placeholder="Type a message"
            value={message}
            onChangeText={setMessage}
          />
          <TouchableOpacity style={{ marginRight: responsiveScreenWidth(3) }}>
            <Ionicons name="attach" size={24} color="#075E54" />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginRight: responsiveScreenWidth(3) }}>
            <Feather name="camera" size={24} color="#075E54" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={{ marginRight: responsiveScreenWidth(3), borderRadius: responsiveScreenWidth(5), backgroundColor: '#40E0D0', height: responsiveScreenWidth(10), width: responsiveScreenWidth(10), alignItems: 'center', justifyContent: 'center' }}>
          <MaterialIcons name="keyboard-voice" size={24} color="#075E54" />
        </TouchableOpacity>


        {/* <TouchableOpacity onPress={sendMessage}>
          <Icon name="send" size={24} color="#075E54" />
        </TouchableOpacity> */}

      </View>
    </View>
  );
};

export default App;
