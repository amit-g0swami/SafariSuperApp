import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, } from 'react-native'
import CustomButton from '../components/loginScreen/CustomButton';

const ChatScreen = ({navigation}) => {
    return (
        <View style={styles.root}>
        <View style={{    
    position: 'absolute', 
    top: 0, left: 0, 
    right: 0, bottom: 0, 
    justifyContent: 'center', 
    alignItems: 'center'}}>
        <TouchableOpacity>
          <Image
            source={{
              uri: "https://img.icons8.com/dotty/80/ffffff/nothing-found.png",
            }}
            style={styles.icon}
          />
        </TouchableOpacity>
       
        <CustomButton
          text="Your chats will shown here 🚀🚀"
          type="TERTIARY"
          bgColor="black"
          fgColor="white"
          style={{fontSize:50}}
        />
        </View>
        </View>
    )
}


const styles = StyleSheet.create({
    root: {
      paddingTop: Platform.OS === "android" ? 25 : 0,
      backgroundColor: "black",
      flex: 1,
    },
    icon: {
        width: 83,
        height: 83,
        marginLeft: 10,
        resizeMode: "contain",
      },
  });

export default ChatScreen
