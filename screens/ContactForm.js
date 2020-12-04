import React from 'react';
import { StyleSheet, } from 'react-native';
import { Content, Button, Text, View, H3 } from 'native-base';
import Communications from 'react-native-communications';

// ContactForm is the contact form for OndoEki Chat Show Software Developer.

export default function ContactForm() {
    return (
        <Content >
            <View style={styles.container} >
                <H3>Contact OECS Board</H3>
                <Button block onPress={
                    () => Communications.phonecall('+2348039749738', true)
                }><Text> Call</Text></Button>
                <Text></Text>
                <Button block onPress={
                    () => Communications.text('+2348039749738', true)
                }><Text> Message</Text></Button>
                <Text></Text>

                <Button block onPress={
                    () => Communications.email(
                        [
                            'bitstech01@gmail.com'
                        ],
                        null,
                        null,
                        'Subject',
                        'Content for the mail',
                    )
                }><Text>Email</Text></Button>
            </View>
        </Content>
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


