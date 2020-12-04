import React, { useEffect, useState } from 'react';
import { useFonts } from 'expo-font';

import {
    StyleSheet, View,
    ActivityIndicator, FlatList, TouchableWithoutFeedback, Button
} from 'react-native';
import { Text } from 'native-base';

export default function Shows({ navigation }) {
    const [paid, setPaid] = useState(false);

    let [fontsLoaded] = useFonts({
        'OpenSans': require('../assets/fonts/OpenSans-Regular.ttf'),
    });

    const [dataLoading, finishLoading] = useState(true);
    const [newsData, setData] = useState([]);

    useEffect(() => {
        fetch('https://www.ondoekichatshow.com/api/v1/plan_endpoint/')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => finishLoading(false));
    }, []);

    const storyItem = ({ item }) => {
        return (
            <TouchableWithoutFeedback


            >
                <View style={styles.listings} key={item.id}>
                    <Text ></Text>
                    <Text ></Text>
                    <Text ></Text>
                    <Text >Hello</Text>
                    <Text>You are about to access OndoEki Chat Show Videos,
                            note that only a paid user will have access to these videos.</Text>
                    <Text >Thanks.</Text>

                    <Text >
                        <Button title='Watch or Pay' onPress={() => {
                            switch ((item.paid)) {
                                case true:
                                    navigation.navigate('ShowsPage');
                                    break;
                                case false:
                                    navigation.navigate('Payment');
                                    break;
                            }
                        }}></Button>
                    </Text>

                </View>
            </TouchableWithoutFeedback>
        );
    };

    return (
        <View style={styles.container}>
            {dataLoading ? <ActivityIndicator size="large" /> : (
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

    listings: {
        paddingTop: 15,
        paddingBottom: 25,
        borderBottomColor: 'black',
        borderBottomWidth: 1

    },


});
