import React from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native'
import AddNewPost from '../components/newPost/AddNewPost'

const NewPostScreen = ({navigation}) => {
    return (
      <SafeAreaView style={styles.root}>
          <AddNewPost  navigation={navigation}/>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    root: {
      paddingTop: Platform.OS === "android" ? 25 : 0,
      backgroundColor: "black",
      flex:1,
    },
  });

export default NewPostScreen
