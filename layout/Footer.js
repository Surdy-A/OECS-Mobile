import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import * as RootNavigation from './RootNavigation';




import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
export default function BottomFooter() {

    return (
    

        
        
        <Footer style={styles.no}>
          <FooterTab style={styles.no}>
            <Button vertical onPress={() => RootNavigation.navigate('News')}>
              <Icon name="apps" />
              <Text>News</Text>
            </Button>
            <Button vertical onPress={() => RootNavigation.navigate('Shows')}>
              <Icon name="camera" />
              <Text>Shows</Text>
            </Button>
            <Button vertical active onPress={() => RootNavigation.navigate('Radio')}>
              <Icon active name="navigate" />
              <Text>Radio</Text>
            </Button>
            <Button vertical onPress={() => RootNavigation.navigate('About')}>
              <Icon name="person" />
              <Text>Contact</Text>
            </Button>
            
          </FooterTab>
        </Footer>
    
    );
  }




// export default function Footer() {
//     return (
//         <View style={styles.footer}>

//             <TouchableOpacity
//                 style={styles.button}
//                 onPress={() => RootNavigation.navigate('News')}
//             >
//                 <Text>News</Text>
//             </TouchableOpacity>

//             <TouchableOpacity
//                 style={styles.button}
//                 onPress={() => RootNavigation.navigate('About')}
//             >
//                 <Text>About</Text>
//             </TouchableOpacity>

//             <TouchableOpacity
//                 style={styles.button}
//                 onPress={() => RootNavigation.navigate('Radio', {
//                     model: 'Footer',
//                     modelnumber: 'NoMessage'
//                 })
//                 }
//             >
//                 <Text>Radio</Text>
//             </TouchableOpacity>

//             <TouchableOpacity
//                 style={styles.button}
//                 onPress={() => RootNavigation.navigate('Shows')}
//             >
//                 <Text>Shows</Text>
//             </TouchableOpacity>

//             <TouchableOpacity
//                 style={styles.button}
//                 onPress={() => RootNavigation.navigate('Payment')}
//             >
//                 <Text>Payment</Text>
//             </TouchableOpacity>


//         </View>
//     );
// };

const styles = StyleSheet.create({
    footer: {
        flex: .1,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        backgroundColor: "#1e90ff"
    },
    button: {
        backgroundColor: "white",
        textAlign: 'center',
        lineHeight: 75,
        fontSize: 30,
        padding: 10,
        marginLeft: 5,
        borderWidth: 2,
        borderStyle: "dashed",
        borderColor: "darkslategray",
        borderRadius: 5
    },
    no: {
        padding: 0,
        margin: 0
    }
});