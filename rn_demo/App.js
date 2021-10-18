import React, { useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, NativeModules } from 'react-native'
import { NetworkInfo } from 'react-native-network-info';
import publicIP from 'react-native-public-ip';
const App = () => {
    useEffect(() => {
        // const scriptURL = NativeModules.SourceCode.scriptURL
        // const address = scriptURL.split('://')[1].split('/')[0]
        // const hostname = address.split(':')[0]
        // const port = address.split(':')[1]
        // console.log(scriptURL, "===>>", address, "===>>", hostname, "===>>", port);
        // publicIP()
        //     .then(ip => {
        //         console.log(ip);
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     });
        callBackendAPI()
    }, [])

    const callBackendAPI = async () => {
        await fetch('http://192.168.28.111:6969/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ a: 1, b: 'Textual content' })
        })
            .then(response => response.text())
            .then(result => console.log(result));
    };
    return (
        <View style={styles.component}>
            <TouchableOpacity
                onPress={() => console.log("cc")}
                style={styles.btn}
            >
                <Text>
                    find server
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default App

const styles = StyleSheet.create({
    component: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn: {
        padding: 10,
        backgroundColor: '#ccc'
    }
})
