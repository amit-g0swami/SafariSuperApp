import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

const Notification = ({navigation}) => {
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
              uri: "https://img.icons8.com/external-vitaliy-gorbachev-lineal-vitaly-gorbachev/60/ffffff/external-chat-social-media-vitaliy-gorbachev-lineal-vitaly-gorbachev-1.png",
            }}
            style={styles.icon}
          />
        </TouchableOpacity>
        <Text style={{color:'white',marginTop:20,fontSize:20}}>Nothing to see here ...</Text>
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

export default Notification
