import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Image } from "react-native";

export default function HeaderTabs({ navigation }) {
  const [activeTab, setActiveTab] = useState("Delivery");

  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={{
              uri: "https://img.icons8.com/ios/50/ffffff/back--v1.png",
            }}
            style={{ width: 30, height: 30 }}
          />
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", alignSelf: "center" }}>
        <HeaderButton
          text="Delivery"
          btnColor="white"
          textColor="black"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <HeaderButton
          text="Pickup"
          btnColor="black"
          textColor="white"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </View>
    </View>
  );
}

const HeaderButton = (props) => (
  <TouchableOpacity
    style={{
      backgroundColor: props.activeTab === props.text ? "white" : "black",
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 30,
    }}
    onPress={() => props.setActiveTab(props.text)}
  >
    <Text
      style={{
        color: props.activeTab === props.text ? "black" : "white",
        fontSize: 15,
        fontWeight: "900",
      }}
    >
      {props.text}
    </Text>
  </TouchableOpacity>
);
