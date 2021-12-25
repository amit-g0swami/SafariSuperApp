import React from "react";
import { StyleSheet } from "react-native";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import HeaderTabs from "../components/UberEats/HeaderTabs";
import SearchBar from "../components/UberEats/SearchBar";
import Categories from "../components/UberEats/Categories";
import RestaurantItems from "../components/UberEats/RestaurantItems";

const UberEatsScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={safestyle.droidSafeArea}>
      <View style={{ backgroundColor: "black", padding: 15 }}>
        <HeaderTabs navigation={navigation} />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems />
      </ScrollView>
    </SafeAreaView>
  );
};

const safestyle = StyleSheet.create({
  droidSafeArea: {
    paddingTop: Platform.OS === "android" ? 25 : 0,
    backgroundColor: "black",
    flex: 1,
  },
});

export default UberEatsScreen;
