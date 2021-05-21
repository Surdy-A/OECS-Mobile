import React, { useEffect, useState } from "react";
import { Icon } from "native-base";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  ScrollView,
} from "react-native";

export default function NewsDetail({ route, navigation }) {
  const [dataLoading, finishLoading] = useState(true);
  const [allPostData, setAllPostData] = useState([]);
  const { id } = route.params;
  const selectedPost = allPostData.find((item) => item.id === id);

  useEffect(() => {
    fetch("http://slearn.pythonanywhere.com/api/v1/news_endpoint/")
      .then((response) => response.json())
      .then((json) => setAllPostData(json))
      .catch((error) => console.error(error))
      .finally(() => finishLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Icon type="FontAwesome" name="long-arrow-left" />
      </TouchableOpacity>
      {dataLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <ScrollView>
          <Text style={styles.title}>{selectedPost.title}</Text>
          <Image
            style={styles.storyimage}
            source={{ uri: selectedPost.image }}
          />
          <Text style={styles.content}>{selectedPost.news}</Text>
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
  },
  button: {
    padding: 20,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  buttontext: {
    fontFamily: "OpenSans",
    fontWeight: "bold",
  },
  storyimage: {
    height: 300,
    width: "100%",
  },
  title: {
    fontFamily: "OpenSans",
    fontWeight: "bold",
    fontSize: 20,
    padding: 5,
    textAlign: "left",
    lineHeight: 30,
  },
  blurb: {
    fontFamily: "OpenSans",
    fontSize: 14,
    padding: 20,
    fontStyle: "italic",
    textAlign: "justify",
  },
  content: {
    display: "flex",
    fontFamily: "OpenSans",
    fontSize: 16,
    paddingTop: 30,
    paddingBottom: 100,
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: "justify",
    lineHeight: 35,
  },
});
