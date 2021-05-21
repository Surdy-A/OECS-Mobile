import React, { useEffect, useState } from "react";
import { useFonts } from "expo-font";

import {
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
  TouchableWithoutFeedback,
  Button,
} from "react-native";
import { Text, Card, CardItem, Icon, Right } from "native-base";

export default function Shows({ navigation }) {
  const [paid, setPaid] = useState(true);

  let [fontsLoaded] = useFonts({
    OpenSans: require("../assets/fonts/OpenSans-Regular.ttf"),
  });

  const [dataLoading, finishLoading] = useState(true);
  const [newsData, setData] = useState([]);

  useEffect(() => {
    fetch("https://slearn.pythonanywhere.com/api/v1/category_endpoint/")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => finishLoading(false));
  }, []);

  const storyItem = ({ item }) => {
    return (
      <TouchableWithoutFeedback>
        <View style={styles.listings} key={item.id}>
          <Card>
            <CardItem>
              <Button
                title={item.category}
                onPress={() => {
                  navigation.navigate("ShowsPage", {
                    vidCategory: item.category,
                  });
                }}
              ></Button>
              <Right></Right>
            </CardItem>
          </Card>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.category}>Select Category</Text>
      {dataLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={newsData}
          renderItem={storyItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: 5,
    paddingLeft: 0,
  },

  listings: {
    paddingTop: 15,
    paddingBottom: 25,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },

  category: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
