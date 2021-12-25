import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const InfoScreen = ({navigation}) => {
    return (
        <View style={styles.root}>
            <Text style={{color:'white', fontSize:20}}>Hii guys , This is me "Amit Kumar" developer of this apk , I developed it just for my MINOR project submission ... I hope you liked it's UI and other functionalities {"\n"} {"\n"}Dare to be the best you can...🚀🚀🚀 {"\n"}{"\n"}
            Have a good day guys... </Text>
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

export default InfoScreen
