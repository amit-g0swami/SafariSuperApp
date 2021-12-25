import React from "react";
import { StyleSheet } from "react-native";
import { View, Text, Image } from "react-native";
import { firebase, db } from "../../firebase";

const DashboardUserinfo = () => {
  return (
    <View style={{ marginBottom: 30 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          margin: 5,
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={{
              uri: "https://img.icons8.com/ios/100/ffffff/change-user-male.png",
            }}
            style={styles.story}
          />
            <Username />
        </View>
      </View>
    </View>
  );
};

const Username = () => (
  <View>
    <Text style={{ color: "white", fontWeight: "700" , fontSize:20 }}>{firebase.auth().currentUser.email}</Text>
  </View>
);

const styles = StyleSheet.create({
  story: {
    width: 65,
    height: 65,
    borderRadius: 50,
    marginLeft: 6,
    marginRight: 20,
    margin: 10,
  },
});

export default DashboardUserinfo;
