import React, { Component } from 'react';
import { Image } from 'react-native';
import imageA from '../assets/ondoeki2.jpeg';
import imageB from '../assets/ondoeki.png';
import {Content, Card, CardItem, Text, Button, Body
} from 'native-base';
import { StyleSheet } from 'react-native';

const blockA = `
This Application is to promote the Culture and Heritage of Ondo City in Nigeria
to Enjoy the Memories, Fun, Dialect, Events, Broadcast and Chat of Ondo City in Nigeria.
     
---Ultra HD
     We provide you with high degree of image, sound and screen.
     
---Film
     Interesting Show about Ondo and Ekiti at your door step. Enjoy!
     
---Notifications
     Get notified of all updates about Ondo and Ekiti Chat Show on this web application.
     `;

const blockB = `
How it works?
         
---Create an account
    There is no issue about getting anything that promote the culture and heritage of Ondo City in Nigeria.
     
---Choose your Plan
    We have very affordable price for you to enjoy the videos on this platform. No harm to your wallet!
     
---Enjoy MovieGo
    There is no issue about getting anything that promote the culture and heritage of Ondo City in Nigeria.
    `;

export default function About({ navigation }) {
    return (
        <Content style={styles.noPadding}>
            <Card >
                <CardItem>
                    <Body>
                        <Image source={imageA} style={{ height: 300, width: 300, flex: 1 }} />
                        <Text>
                            {blockA}
                        </Text>
                    </Body>
                </CardItem>
            </Card>

            {/* The Second About us info */}
            <Card style={{ flex: 0 }}>
                <CardItem>
                    <Body>
                        <Image source={imageB} style={{ height: 300, width: 400, flex: 1 }} />
                        <Text>
                            {blockB}
                        </Text>

                    </Body>
                </CardItem>
            </Card>
            <Button rounded block onPress={() => { navigation.navigate('ContactForm2') }} >
                <Text>Contact OECS</Text>
            </Button>
            <Text></Text>
            <Text></Text>
            <Button rounded block onPress={() => { navigation.navigate('ContactForm') }}>
                <Text>Contact OECS Developers</Text>
            </Button>
            <Text></Text>
            <Text></Text>
        </Content>

    );
}

const styles = StyleSheet.create({
    noPadding: {
        flex: 1,

    }
});




