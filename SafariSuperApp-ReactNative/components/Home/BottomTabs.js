import React, { useState } from "react";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { View, Text } from "react-native";
import { Divider } from "react-native-elements";
import { StyleSheet } from "react-native";

export const bottomTabIcons = [
  {
    name: "Home",
    active: "https://img.icons8.com/ios/50/ffffff/home.png",
    inactive: "https://img.icons8.com/ios-filled/50/ffffff/home.png",
  },
];

const BottomTabs = ({ icons,navigation }) => {
  const [activeTab, setActiveTab] = useState("Home");

  const Icon = ({ icon }) => (
    <TouchableOpacity
      onPress={() => {
        setActiveTab(icon.name);
      }}
    >
      <Image
        source={{ uri: activeTab === icon.name ? icon.inactive : icon.active }}
        style={[
          styles.icon,
          icon.name === "Profile" ? styles.profilePic() : null,
          activeTab === "Profile" && icon.name === activeTab
            ? styles.profilePic(activeTab)
            : null,
        ]}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.wrapper}>
      <Divider width={1} orientation="vertical" />
      <View style={styles.container}>
        {icons.map((icon, index) => (
          <Icon key={index} icon={icon} />
        ))}
        <TouchableOpacity onPress={() => navigation.push("MusicScreen")}>
          <Image
            source={{
              uri: "https://img.icons8.com/ios/50/ffffff/sound-cloud-.png",
            }}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push("ReelsScreen")}>
          <Image
            source={{
              uri: "https://img.icons8.com/ios/50/ffffff/instagram-reel.png",
            }}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push("ShoppingScreen")}>
          <Image
            source={{
              uri: "https://img.icons8.com/ios/50/ffffff/shop.png",
            }}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push("DashBoardScreen")}>
          <Image
            source={{
              uri: "https://img.icons8.com/ios/50/ffffff/user-male-circle.png",
            }}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    zIndex: 999,
    backgroundColor: "#000",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 50,
    paddingTop: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  profilePic: (activeTab = "") => ({
    borderRadius: 50,
    borderColor: "#fff",
    borderWidth: activeTab === "Profile" ? 2 : 0,
  }),
});

export default BottomTabs;
