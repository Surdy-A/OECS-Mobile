import React, { useState, useEffect } from 'react';
import {
    StyleSheet, View, TextInput,
    ScrollView, TouchableOpacity, Linking, TouchableWithoutFeedback
} from 'react-native';
import { Container, Header, Content, Button, Icon, Text } from 'native-base';
export default function RadioPage({ route }) {



    return (
        
          <View style={styles.container}>
        <Text >Information Leads to Transformation.</Text>
            <Text>Be informed. Listen to our Radio.</Text>
          <Button full iconLeft blue onPress={() => Linking.openURL('http://usa19.fastcast4u.com:2590/stream')}>
            <Icon name='play' />
            <Text>Radio</Text>
          </Button>
          </View>
      
        
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center'
       

    },
    text: {
      flex:1,
      alignItems: 'center',
      justifyContent: 'center'
    }


});