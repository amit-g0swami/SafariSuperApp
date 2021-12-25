import React from 'react'
import { View, Text, StyleSheet , TouchableOpacity ,Image } from 'react-native'

const ReelsScreen = () => {
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
              uri: "https://img.icons8.com/external-becris-lineal-becris/64/ffffff/external-fishing-hobbies-becris-lineal-becris.png",
            }}
            style={styles.icon}
          />
        </TouchableOpacity>
        <Text style={{color:'white',marginTop:20,fontSize:15}}>Data not available</Text>
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

export default ReelsScreen
