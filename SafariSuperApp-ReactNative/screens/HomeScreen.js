import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { SafeAreaView, StyleSheet } from "react-native";
import Header from "../components/Home/Header";
import Post from "../components/Home/Post";
import Stories from "../components/Home/Stories";
import BottomTabs, { bottomTabIcons } from "../components/Home/BottomTabs";
import { db } from "../firebase";

const HomeScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collectionGroup("posts")
    .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map(post => ({ id: post.id, ...post.data() }))
        );
      });
  }, []);

  return (
    <SafeAreaView style={styles.root}>
      <Header navigation={navigation} />
      <Stories />
      <ScrollView>
        {posts.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </ScrollView>
      <BottomTabs icons={bottomTabIcons} navigation={navigation}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingTop: Platform.OS === "android" ? 25 : 0,
    backgroundColor: "black",
    flex: 1,
  },
});

export default HomeScreen;
