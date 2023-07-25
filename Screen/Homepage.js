import React from 'react';
import { View, Text, StyleSheet, Image, FlatList,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize
} from "react-native-responsive-dimensions";


// Sample data for contacts
const contacts = [
  {
    id: '1',
    name: 'John Doe',
    image: require('./assets/john.jpeg'),
    chat: 'Hey, how are you?',
    time: '10:30 AM'
  },
  {
    id: '2',
    name: 'Jane Smith',
    image: require('./assets/jane.jpg'),
    chat: 'What are you up to?',
    time: '6:15 PM'
  },
  {
    id: '3',
    name: 'Merry',
    image: require('./assets/Merry.jpeg'),
    chat: 'Hows your family members?',
    time: '3:15 AM'
  },
  {
    id: '4',
    name: 'Peter',
    image: require('./assets/peter.jpeg'),
    chat: 'Are you happy with your life?',
    time: '7:37 PM'
  },
  {
    id: '5',
    name: 'James Bond',
    image: require('./assets/James.jpeg'),
    chat: ' I am good too',
    time: '1:45 AM'
  },
  {
    id: '6',
    name: 'Ariyansh',
    image: require('./assets/Ayansh.jpeg'),
    chat: 'I am getting tried',
    time: '2:48 PM'
  },
  {
    id: '7',
    name: 'Vishalikha',
    image: require('./assets/Vishikha.jpeg'),
    chat: 'Life is quite boring',
    time: '8:39 AM'
  },
  // Add more contacts here
];

const Homepage = ({ navigation}) => {
  const handlePersonClick = (personId, personName) => {
    navigation.navigate('Chatapp', { personId, personName });
  }
  // Render each contact item
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.contactItem}>
      <Image source={item.image} style={styles.contactImage} />
      <View style={styles.contactDetails}>
        <Text style={styles.contactName}>{item.name}</Text>
        <Text style={styles.contactChat}>{item.chat}</Text>
      </View>
      <Text style={styles.contactTime}>{item.time}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
    {people.map((person) => (
      <TouchableOpacity key={person.id} onPress={() => handlePersonClick(person.id, person.name)}>
        <Text>{person.name}</Text>
      </TouchableOpacity>
    ))}
 
    <View style={styles.container}>
   
     
      {/* Header */}
      <View style={{ backgroundColor: '#40E0D0', padding: responsiveScreenWidth(8), paddingHorizontal: responsiveScreenWidth(3), flexDirection: 'row', alignItems: 'center' }}>
      
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1, marginRight: responsiveScreenWidth(2) }}>
          <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", borderColor: "#fff", flex: 4 }}>
          <TouchableOpacity style={{ alignItems: "center", paddingVertical: responsiveScreenWidth(1.5),height: responsiveScreenWidth(13), width: responsiveScreenWidth(13), borderRadius: responsiveScreenWidth(6.5), backgroundColor: "#fff"}}>
          <Ionicons name="person-outline" size={30} color="#000000" />
        </TouchableOpacity>
            {/* <Image
              source={require('./assets/tree-736885_1280.jpg')}
              style={{ height: responsiveScreenWidth(15), width: responsiveScreenWidth(15), borderRadius: responsiveScreenWidth(7.5) }}
            /> */}
            <View style={{ flexDirection: 'column', justifyContent: 'center', paddingHorizontal: 10 }}>
              <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: responsiveScreenFontSize(2.5) }}>Contact Name</Text>
              <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: responsiveScreenFontSize(1.5) }}>Online</Text>
            
              <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: responsiveScreenFontSize(1.5), }}>(32 Chat)</Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={{ marginRight: responsiveScreenWidth(10) }}>
          <AntDesign name="search1" size={20} color="#000000" />
        </TouchableOpacity>
       
        <TouchableOpacity style={{ marginRight: responsiveScreenWidth(5) }}>
          <Icon name="ellipsis-v" size={20} color="#000000" />
        </TouchableOpacity>
      </View>
      <View style={{ backgroundColor: '#fff', padding: responsiveScreenWidth(7), marginLeft: responsiveScreenWidth(-2), paddingVertical: responsiveScreenWidth(5), flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1,
    borderBottomColor: '#ccc', }}>
      <View style={{ flexDirection: 'column', justifyContent: 'center'  }}>
      <TouchableOpacity style={{ alignItems: "center", paddingVertical: responsiveScreenWidth(1),height: responsiveScreenWidth(13), width: responsiveScreenWidth(13), borderRadius: responsiveScreenWidth(6.5),  borderWidth: 1,
    borderColor: '#808080', borderStyle: 'dashed', paddingVertical: responsiveScreenWidth(3.5),marginRight: responsiveScreenWidth(6)}}>
         <Feather name="plus" size={20} color="#000000" />
        
        </TouchableOpacity>
       <Text style={{  color: '#000000', fontWeight: 'bold', fontSize: responsiveScreenFontSize(1.5) }}>Add Status</Text>
    </View>
    <View style={{ flexDirection: 'column', justifyContent: 'center',  alignItems: "center"  }}>
        <TouchableOpacity style={{  paddingVertical: responsiveScreenWidth(1.5),height: responsiveScreenWidth(13), width: responsiveScreenWidth(13), borderRadius: responsiveScreenWidth(6.5),  borderWidth: 1,
    borderColor: '#32CD32',marginRight: responsiveScreenWidth(6)}}>
       <Image
              source={require('./assets/sandeep.jpeg')}
              style={{ marginTop:responsiveScreenWidth(-2),height: responsiveScreenWidth(13), width: responsiveScreenWidth(13),  borderRadius: responsiveScreenWidth(6.5)}}
            />
        
        </TouchableOpacity>
        <Text style={{  color: '#000000', fontWeight: 'bold', fontSize: responsiveScreenFontSize(1.5) }}>Sandeep</Text>
        </View><View style={{ flexDirection: 'column', justifyContent: 'center'  }}>
        <TouchableOpacity style={{ alignItems: "center", paddingVertical: responsiveScreenWidth(1.5),height: responsiveScreenWidth(13), width: responsiveScreenWidth(13), borderRadius: responsiveScreenWidth(6.5),  borderWidth: 1,
    borderColor: '#808080',marginRight: responsiveScreenWidth(6)}}>
        <Image
              source={require('./assets/priyanka.jpeg')}
              style={{ marginTop:responsiveScreenWidth(-2),height: responsiveScreenWidth(13), width: responsiveScreenWidth(13),  borderRadius: responsiveScreenWidth(6.5)}}
            />
        
        </TouchableOpacity>
        <Text style={{  color: '#000000', fontWeight: 'bold', fontSize: responsiveScreenFontSize(1.5) }}>Priyanka</Text>
        </View>
        <View style={{ flexDirection: 'column', justifyContent: 'center'  }}>
        <TouchableOpacity style={{ alignItems: "center", paddingVertical: responsiveScreenWidth(1.5),height: responsiveScreenWidth(13), width: responsiveScreenWidth(13), borderRadius: responsiveScreenWidth(6.5),  borderWidth: 1,
    borderColor: '#32CD32',marginRight: responsiveScreenWidth(6)}}>
       <Image
              source={require('./assets/Riyansh.jpeg')}
              style={{ marginTop:responsiveScreenWidth(-2),height: responsiveScreenWidth(13), width: responsiveScreenWidth(13),  borderRadius: responsiveScreenWidth(6.5)}}
            />
        
        </TouchableOpacity>
      
        <Text style={{  color: '#000000', fontWeight: 'bold', fontSize: responsiveScreenFontSize(1.5) }}>Riyansh</Text>
        </View>
        <View style={{ flexDirection: 'column', justifyContent: 'center'  }}>
        <TouchableOpacity style={{ alignItems: "center", paddingVertical: responsiveScreenWidth(1.5),height: responsiveScreenWidth(13), width: responsiveScreenWidth(13), borderRadius: responsiveScreenWidth(6.5),  borderWidth: 1,
    borderColor: '#32CD32'}}>
       <Image
              source={require('./assets/jitender.jpeg')}
              style={{ marginTop:responsiveScreenWidth(-2),height: responsiveScreenWidth(13), width: responsiveScreenWidth(13),  borderRadius: responsiveScreenWidth(6.5)}}
            />
        
        </TouchableOpacity>
        <Text style={{  color: '#000000', fontWeight: 'bold', fontSize: responsiveScreenFontSize(1.5) }}>Jitender</Text>
        </View>
      </View>


      {/* Contact List */}
      <FlatList
        data={contacts}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      

      {/* Footer */}
      <View style={{ backgroundColor: '#fff',  padding: responsiveScreenWidth(5), flexDirection: 'row', alignItems: 'center', 
  }}>
      <TouchableOpacity style={{ marginRight: responsiveScreenWidth(15),paddingHorizontal: responsiveScreenWidth(10) }}>
          <Ionicons name="people-outline" size={20} color="#000000" />
        </TouchableOpacity>
        <TouchableOpacity style={{  marginRight: responsiveScreenWidth(3),  alignItems: 'center', justifyContent: 'center', borderRadius: responsiveScreenWidth(6), backgroundColor: '#40E0D0', height: responsiveScreenWidth(12), width: responsiveScreenWidth(12)}}>
          <MaterialCommunityIcons name="message-reply-text-outline" size={20} color="#000000" />
        </TouchableOpacity>
      
      <TouchableOpacity style={{ marginRight: responsiveScreenWidth(15),paddingHorizontal: responsiveScreenWidth(25)}}>
          <Icon name="phone" size={20} color="#000000" />
        </TouchableOpacity>
        

      </View>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 60,
    backgroundColor: '#075e54',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  contactImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  contactDetails: {
    flex: 1,
    marginLeft: 10,
  },
  contactName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  contactChat: {
    fontSize: 16,
    color: '#888',
  },
  contactTime: {
    fontSize: 14,
    color: '#888',
  },
  // footer: {
  //   flex: 1,
  //   height: 10,
  //   backgroundColor: '#fff',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },

});

export default Homepage;
