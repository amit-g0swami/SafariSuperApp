import React from "react";
import { View, Text, } from "react-native";

const DashboardPostinfo = () => {

  return (
    <View style={{ justifyContent: "space-around", flexDirection: "row" }}>
      <View style={{}}>
        <Text style={{ color: "white", fontWeight: "700", fontSize: 20 }}>
          0
        </Text>
        <Text style={{ color: "white" }}>Posts</Text>
      </View>
      <View style={{}}>
        <Text style={{ color: "white", fontWeight: "700", fontSize: 20 }}>
          0
        </Text>
        <Text style={{ color: "white" }}>Followers</Text>
      </View>
      <View style={{}}>
        <Text style={{ color: "white", fontWeight: "700", fontSize: 20 }}>
          0
        </Text>
        <Text style={{ color: "white" }}>Following</Text>
      </View>
    </View>
  );
};

export default DashboardPostinfo;
