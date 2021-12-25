import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'

const handleSignout = async () => {
    try {
      await firebase.auth().signOut()
      console.log('signed out')
    } catch (error) {
      console.log(error);
    }
  };

const DashboardHeader = ({navigation}) => {
    return (
        <View style={styles.container}>
         <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source ={{ uri: "https://img.icons8.com/ios-filled/50/ffffff/back.png",}}
            style={styles.icon}
          />
        </TouchableOpacity>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={handleSignout}>
            <Image
              source={{
                uri: "https://img.icons8.com/ios-filled/50/ffffff/logout-rounded.png",
              }}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
    )
}


const styles = StyleSheet.create({
    container: {
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "row",
      marginHorizontal: 20,
    },
    logo: {
      width: 45,
      height: 60,
      resizeMode: "contain",
    },
    iconContainer: {
      flexDirection: "row",
    },
    icon: {
      width: 33,
      height: 33,
      marginLeft: 10,
      resizeMode: "contain",
    },
    unreadBadge: {
      backgroundColor: "#ff3250",
      position: "absolute",
      left: 20,
      bottom: 18,
      width: 25,
      height: 18,
      borderRadius: 25,
      alignItems: "center",
      justifyContent: "center",
      zIndex: 100,
    },
    unreadBadgeText: {
      color: "white",
      fontWeight: "600",
    },
  });

  
export default DashboardHeader
