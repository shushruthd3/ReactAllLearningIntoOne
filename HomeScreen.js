
import { StyleSheet, Text, View, Button, Dimensions, Image, ScrollView, Modal, TouchableHighlight } from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import React, { useState } from 'react';
import SearchBar from 'react-native-dynamic-search-bar';
import { UIManager } from 'react-native';




export default function HomeScreen({ route }) {
    const [showModal, setShowmodal] = useState(false);
    const [imageurl, setimageUrl] = useState('');
    const [spinner, setSpinner] = useState(false);
    var data = ["https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&w=1000&q=80",
        "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/4/x/d/p48242-15834856025e6212a23ea56.jpg?tr=tr:n-medium",
        "https://www.telegraph.co.uk/content/dam/Travel/Destinations/Middle%20East/Dubai/ruya-bar-and-lounge-dubai-top-xlarge.jpg",
        "https://media-exp1.licdn.com/dms/image/C561BAQGZqA8gJ2Edpg/company-background_10000/0/1614011974707?e=2159024400&v=beta&t=LMVAHLMDb9k1bPnUbhAfgDAbbwCagwvNnahVrvS7vkg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT70r6NMoEEv-JZ69D4roPCMo4_F9ckPapeoeRdK57ahrQGzco8uePNHU6vCZAji5NPkFk&usqp=CAU",
        "https://southindianfoods.in/images/south-indian-meal-with-banana-leaf.jpg",
        "https://icon2.cleanpng.com/20171221/wee/restaurant-chef-5a3b4ee056f0e1.3716127115138362563561.jpg",
        "https://media.istockphoto.com/photos/chinese-food-blank-background-picture-id545286388?k=20&m=545286388&s=612x612&w=0&h=1zAWEuV5W6SoYtErOkWasELFcAWMKgQEBUsNOoH5znc=",
        ""

    ]

    function setDataValue(data) {
        // alert(data);
        setimageUrl(data);
        setShowmodal(true);
    }


    return (



        <View style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height + 40 }}>

            <Modal style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'red' }}
                animationType={"slide"}
                transparent={false}
                visible={showModal}
                onRequestClose={() => {
                    Alert.alert('Modal has now been closed.');
                }}>
                <View style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height + 40, justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
                    <Image style={{ width: 300, height: 300 }}
                        source={{ uri: data[imageurl] }}
                    />
                    <Text style={{ color: '#483434', fontStyle: 'normal', fontSize: 17 }}> Visited as a guest in the Echo restaurant for lunch just today. We were entertaining friends from California, and enjoyed our ocean side table. We chose to stay indoors - to enjoy the air conditioning 😊. I just want to say that, in addition to a nice meal, we had a delightful waitress, Jackie. She had just the right balance of friendliness and efficiency. She recognized that we wanted time to visit and did not rush us. She and other staff members made certain that we had everything we needed. Kudos!
                    </Text>

                    <Button title="close details" onPress={() => setShowmodal(false)}> </Button>
                </View>
            </Modal>
            <SearchBar style={{ backgroundColor: 'white', borderColor: 'orange', marginTop: 80 }}
                placeholder="Search here"
                placeholderTextColor="purple"
                fontColor="green"
                iconColor="#c6c6c6"
                shadowColor="#282828"
                onChangeText={(text) => setSpinner(true)}
            />

            <Text style={{ paddingTop: 20, color: 'red', fontStyle: 'italic', fontSize: 15 }}> Browse by Top rated</Text>

            <View style={{ width: Dimensions.get('window').width, height: 170, }}>

                <ScrollView horizontal={true}>



                    <View style={{ backgroundColor: '#EDCDBB', margin: 10, width: 120, height: 120, borderRadius: 10, elevation: 8, shadowColor: 'grey', alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableHighlight onPress={() => setDataValue(0)}>
                            <Image style={{ width: 109, height: 109 }} source={{ uri: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&w=1000&q=80' }} />
                        </TouchableHighlight>
                    </View>
                    <View style={{ backgroundColor: '#EDCDBB', margin: 10, width: 120, height: 120, borderRadius: 10, elevation: 8, shadowColor: 'grey', alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableHighlight onPress={() => setDataValue(1)}>
                            <Image style={{ width: 109, height: 109 }} source={{ uri: 'https://im1.dineout.co.in/images/uploads/restaurant/sharpen/4/x/d/p48242-15834856025e6212a23ea56.jpg?tr=tr:n-medium' }} />
                        </TouchableHighlight>
                    </View>
                    <View style={{ backgroundColor: '#EDCDBB', margin: 10, width: 120, height: 120, borderRadius: 10, elevation: 8, shadowColor: 'grey', alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableHighlight onPress={() => setDataValue(2)}>
                            <Image style={{ width: 109, height: 109 }} source={{ uri: 'https://www.telegraph.co.uk/content/dam/Travel/Destinations/Middle%20East/Dubai/ruya-bar-and-lounge-dubai-top-xlarge.jpg' }} />
                        </TouchableHighlight>
                    </View>
                    <View style={{ backgroundColor: '#EDCDBB', margin: 10, width: 120, height: 120, borderRadius: 10, elevation: 8, shadowColor: 'grey', alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableHighlight onPress={() => setDataValue(3)}>
                            <Image style={{ width: 109, height: 109 }} source={{ uri: 'https://media-exp1.licdn.com/dms/image/C561BAQGZqA8gJ2Edpg/company-background_10000/0/1614011974707?e=2159024400&v=beta&t=LMVAHLMDb9k1bPnUbhAfgDAbbwCagwvNnahVrvS7vkg' }} />
                        </TouchableHighlight>
                    </View>
                    <View style={{ backgroundColor: '#EDCDBB', margin: 10, width: 120, height: 120, borderRadius: 10, elevation: 8, shadowColor: 'grey', alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableHighlight onPress={() => setDataValue(4)}>
                            <Image style={{ width: 109, height: 109 }} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT70r6NMoEEv-JZ69D4roPCMo4_F9ckPapeoeRdK57ahrQGzco8uePNHU6vCZAji5NPkFk&usqp=CAU' }} />
                        </TouchableHighlight>
                    </View>
                </ScrollView>
            </View>
            <Text style={{ color: 'red', fontStyle: 'italic', fontSize: 15 }}> Browse Near by : </Text>
            <View style={{ width: Dimensions.get('window').width, height: 200, flexDirection: 'row', }}>
                <ScrollView horizontal={true}>
                    <View style={{ backgroundColor: '#FFE6BC', margin: 10, width: 190, height: 150, borderRadius: 10, elevation: 8, shadowColor: 'grey', alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableHighlight onPress={() => setDataValue(5)}>
                            <Image style={{ width: 90, height: 90 }} source={{ uri: 'https://southindianfoods.in/images/south-indian-meal-with-banana-leaf.jpg' }} />
                        </TouchableHighlight>
                        <Text> udupi uphara </Text>
                    </View>
                    <View style={{ backgroundColor: '#FFE6BC', margin: 10, width: 190, height: 150, borderRadius: 10, elevation: 8, shadowColor: 'grey', alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableHighlight onPress={() => setDataValue(6)}>
                            <Image style={{ width: 90, height: 90 }} source={{ uri: 'https://icon2.cleanpng.com/20171221/wee/restaurant-chef-5a3b4ee056f0e1.3716127115138362563561.jpg' }} />
                        </TouchableHighlight>
                        <Text> Krishan upahara </Text>
                    </View>
                    <View style={{ backgroundColor: '#FFE6BC', margin: 10, width: 190, height: 150, borderRadius: 10, elevation: 8, shadowColor: 'grey', alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableHighlight onPress={() => setDataValue(7)}>
                            <Image style={{ width: 90, height: 90 }} source={{ uri: 'https://media.istockphoto.com/photos/chinese-food-blank-background-picture-id545286388?k=20&m=545286388&s=612x612&w=0&h=1zAWEuV5W6SoYtErOkWasELFcAWMKgQEBUsNOoH5znc=' }} />
                        </TouchableHighlight>
                        <Text> Kapoor's cafe</Text>
                    </View>
                    <View style={{ backgroundColor: '#FFE6BC', margin: 10, width: 190, height: 150, borderRadius: 10, elevation: 8, shadowColor: 'grey', alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableHighlight onPress={() => setDataValue(6)}>
                            <Image style={{ width: 90, height: 90 }} source={{ uri: 'data:image/jpeg;base64,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' }} />
                        </TouchableHighlight>
                        <Text> Adi chunges changa </Text>
                    </View>

                </ScrollView>
            </View>

        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    pagerView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {

        width: 260, height: 260,
        padding: 20,

    }
});
