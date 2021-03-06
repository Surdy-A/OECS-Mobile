import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  ScrollView,
} from "react-native";
import { Video } from "expo-av";
import { Icon } from "native-base";

export default function NewsDetail({ route, navigation }) {
  const [dataLoading, finishLoading] = useState(true);
  const [allPostData, setAllPostData] = useState([]);
  const [control, setControl] = useState(true);
  const { id } = route.params;
  const selectedPost = allPostData.find((item) => item.id === id);

  useEffect(() => {
    fetch("http://slearn.pythonanywhere.com/api/v1/shows_endpoint/")
      .then((response) => response.json())
      .then((json) => setAllPostData(json))
      .catch((error) => console.error(error))
      .finally(() => finishLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <Icon type="FontAwesome" name="long-arrow-left" />
        </TouchableOpacity>
        {dataLoading ? (
          <ActivityIndicator size="large" />
        ) : (
          <View>
            <Text style={styles.title}>{selectedPost.name}</Text>
            <Video
              useNativeControls={true}
              posterSource={{ uri: selectedPost.image }}
              source={{ uri: selectedPost.video }}
              rate={1.0}
              volume={1.0}
              isMuted={false}
              resizeMode={Video.RESIZE_MODE_CONTAIN}
              shouldPlay
              isLooping
              style={{ width: 300, height: 300 }}
            />

            <Text style={styles.content}>{selectedPost.description}</Text>
          </View>
        )}
      </ScrollView>
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
