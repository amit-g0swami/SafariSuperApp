import React from "react";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import FormikPostUploader from "./FormikPostUploader";

const AddNewPost = ({navigation}) => {
  return (
      <View style={styles.container}>
        <Header navigation={navigation}/> 
        <FormikPostUploader navigation={navigation} />  
      </View>
  )
};

const Header = ({navigation}) => (
    <View style={styles.headerContainer}>
    <TouchableOpacity onPress={()=> navigation.goBack()}>
      <Image
        source={{
          uri: "https://img.icons8.com/ios-filled/50/ffffff/back.png",
        }}
        style={{ width: 30, height: 30 }}
      />
      </TouchableOpacity>
      <Text style={styles.headerText}>New Post</Text>
      <Text></Text>
      <Text></Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText:{
      color:'#fff',
      fontWeight:'700',
      fontSize:20,
      marginLeft:27.5,
  },
})

export default AddNewPost;
