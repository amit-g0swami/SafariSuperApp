import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import DashboardHeader from "../components/dashBoard/DashboardHeader"
import DashboardUserinfo from '../components/dashBoard/DashboardUserinfo'
import { Divider } from "react-native-elements";
import DashboardPostinfo from '../components/dashBoard/DashboardPostinfo';
import DashboardPostuploaded from '../components/dashBoard/DashboardPostuploaded';

const DashBoardScreen = ({navigation}) => {
    return (
        <View style={styles.root}>
        <View style={{ marginBottom: 20 }}><DashboardHeader navigation={navigation}/></View>
        <Divider width={1} orientation="vertical" />
        <DashboardUserinfo />
        <DashboardPostinfo />
        <DashboardPostuploaded />
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

export default DashBoardScreen
