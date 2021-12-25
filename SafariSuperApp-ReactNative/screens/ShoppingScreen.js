import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ShoppingHome from '../components/shopping/ShoppingHome'

const ShoppingScreen = () => {
    return (
        <View style={styles.root}>
            <ShoppingHome />
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

export default ShoppingScreen
