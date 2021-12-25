import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const DashboardPostuploaded = () => {
    return (
        <View style={{    
            position: 'absolute', 
            top: 0, left: 0, 
            right: 0, bottom: 0, 
            justifyContent: 'center', 
            alignItems: 'center'}}>
              <Image
            source={{
              uri: "https://img.icons8.com/ios-filled/100/ffffff/internet.png",
            }}
            style={styles.icon}
          />
            <Text style={{fontWeight: "700" , fontSize:15 , color:"white"}}>Sorry data not available...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    icon: {
        width: 83,
        height: 83,
        marginLeft: 10,
        resizeMode: "contain",
      },
  });

export default DashboardPostuploaded
