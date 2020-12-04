import React, { useEffect, useState } from 'react';
import { useFonts } from 'expo-font';

import {
    StyleSheet, Text, View,
    ActivityIndicator, FlatList, Image, TouchableWithoutFeedback
} from 'react-native';

export default function Homepage({ navigation }) {

    let [fontsLoaded] = useFonts({
        'OpenSans': require('../assets/fonts/OpenSans-Regular.ttf'),
    });

    const [dataLoading, finishLoading] = useState(true);
    const [newsData, setData] = useState([]);

    useEffect(() => {
        fetch('https://www.ondoekichatshow.com/api/v1/news_endpoint/')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => finishLoading(false));
    }, []);

    const storyItem = ({ item }) => {
        return (
            <TouchableWithoutFeedback
                onPress={() =>
                    navigation.navigate('NewsDetail', { id: item.id })
                }
            >
                <View style={styles.listings} key={item.id}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Image
                        style={styles.thumbnail}
                        source={{ uri: item.image }}
                    />
                    <Text style={styles.news}>{(item.news).slice(0, 120)}</Text>
                    <Text style={styles.date}>{(item.created).split("T")[0]}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    };

    return (
        <View style={styles.container}>
            {dataLoading ? <ActivityIndicator size='large' /> : (
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
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: 20
    },
    thumbnail: {
        height: 100,
        width: '98%'
    },
    listings: {
        paddingTop: 15,
        paddingBottom: 25,
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },
    title: {
        paddingBottom: 10,
        fontFamily: 'OpenSans',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    news: {
        fontFamily: 'OpenSans',
        fontStyle: 'italic',
        textAlign: 'justify',
        lineHeight: 25,

    },
    date: {

        display: "flex",
        justifyContent: "flex-end",
        fontWeight: 'bold',
        textAlign: 'right',
        flexGrow: 0,
        marginTop: 8
    }
});
