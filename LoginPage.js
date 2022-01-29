
import { StyleSheet, Text, View, Button, Dimensions, Image, TextInput, TouchableHighlight, naviga } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native'


export default function LoginPage() {
    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const navigation = useNavigation();
    function checkEmailValidations() {
        if (!email.trim() == "" && !password.trim() == "" && name.trim() != "") {
            navigation.navigate('homePage', {
                name: email,
            })
        } else {
            alert('failed to login');
        }

    }

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column', flex: 1, alignContent: 'stretch' }}>
            <Image style={{ position: 'absolute', width: Dimensions.get('window').width, height: Dimensions.get('window').height - 20 }} source={{ uri: 'https://ca-times.brightspotcdn.com/dims4/default/6f6797c/2147483647/strip/true/crop/500x333+0+5/resize/840x560!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F80%2Fcd%2F7484832a49a4bb119e4f8475cebf%2Fla-fo-101-restaurants.gif' }} />
            <View style={{ alignContent: 'center', justifyContent: 'space-between', padding: 10 }}>

                <View style={{ alignItems: 'center', margin: 30, width: Dimensions.get('window').width - 30, height: 40, borderColor: 'red', borderRadius: 10, backgroundColor: 'white', color: 'purple' }}>
                    <TextInput style={{ width: Dimensions.get('window').width - 60, height: 40, borderColor: 'red', borderRadius: 10, color: 'purple' }} placeholder={'Enter your name'} secureTextEntry={false} placeholderTextColor="purple" onChangeText={(text) => setName(text)} value={name} />
                </View>
                <View style={{ alignItems: 'center', margin: 30, width: Dimensions.get('window').width - 30, height: 40, borderColor: 'red', borderRadius: 10, backgroundColor: 'white', color: 'purple' }}>
                    <TextInput style={{ width: Dimensions.get('window').width - 60, height: 40, borderColor: 'red', borderRadius: 10, color: 'purple' }} placeholder={'Enter Email id'} secureTextEntry={false} placeholderTextColor="purple" onChangeText={(text) => setemail(text)} value={email} />
                </View>
                <View style={{ alignItems: 'center', margin: 30, width: Dimensions.get('window').width - 30, height: 40, borderColor: 'red', borderRadius: 10, backgroundColor: 'white', color: 'purple' }}>
                    <TextInput style={{ width: Dimensions.get('window').width - 60, height: 40, borderColor: 'red', borderRadius: 10, color: 'purple' }} placeholder={'Enter password'} secureTextEntry={true} placeholderTextColor="purple" onChangeText={(text) => setPassword(text)} value={password} />
                </View>
            </View>

            <View>
                <TouchableHighlight style={{ alignItems: 'center', justifyContent: 'center', margin: 30, width: Dimensions.get('window').width / 2, height: 40, borderColor: 'red', borderRadius: 10, backgroundColor: 'white', color: 'purple' }} onPress={() => checkEmailValidations()}>



                    <Text style={{ color: 'purple' }}> Login here</Text>

                </TouchableHighlight>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    video: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});
