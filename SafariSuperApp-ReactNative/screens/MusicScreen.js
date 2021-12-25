import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MusicHomePage from '../components/musicscreen/MusicHomePage';

const MusicScreen = () => {
    return (
        <View  style={styles.root}>
           <MusicHomePage />
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
      paddingTop: Platform.OS === "android" ? 25 : 0,
      backgroundColor: "black",
      flex: 1,
    },
  });

export default MusicScreen
