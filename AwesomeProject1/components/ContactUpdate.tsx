import { useState } from "react";
import {
    Text, View, Button, Image, TouchableHighlight,
    StyleSheet,
    ScrollView,
    TextInput,
    Alert
} from 'react-native';
import SQLite from 'react-native-sqlite-storage';
import ImagePicker from 'react-native-image-picker';
import { launchImageLibrary } from 'react-native-image-picker';


const db = SQLite.openDatabase("userDatabase.db");


const Show = (props) => {


    const { navigation } = props;
    console.log(props.route.params.data.number)

    const [favroite, setFavroite] = useState(props.route.params.data.favorite);
    const [name, setName] = useState(props.route.params.data.name);
    const [mobile_number, setMobile_number] = useState(props.route.params.data.number);
    const [landline, setLandline] = useState(props.route.params.data.landline);


    const [imageSource, setImageSource] = useState(props.route.params.data.image);

    console.log(name)
    const selectImage = () => {
        launchImageLibrary({ mediaType: 'photo' }, response => {
            if (!response.didCancel && !response.errorCode) {
                console.log(response.assets[0].uri);
                setImageSource(response.assets[0].uri);
            }
        });
    };

    const submit = () => {
        db.transaction((tx) => {
            tx.executeSql(
                'UPDATE table_user SET name=?, mobile_number=?,landline=?,image=?,favorite=?  WHERE user_id=?',
                [name, mobile_number, landline, imageSource, favroite, props.route.params.data.id],
                (tx, results) => {
                    console.log('Results', results.rowsAffected);
                    if (results.rowsAffected > 0) {
                        Alert.alert(
                            'Success',
                            'You are Update Successfully',
                            [
                                {
                                    text: 'Ok',
                                    onPress: () => navigation.navigate('HomeScreen'),
                                },
                            ],
                            { cancelable: false }
                        );
                    } else Alert.alert('Update Failed');
                },
                (txObj, error) => {
                    // Error callback
                    console.log('Update error:', error);
                }

            )
        })
    }

    const mm = mobile_number.toString();
    return (
        <View  >
            <ScrollView>


                <TouchableHighlight
                    onPress={selectImage}
                    style={[styles.profileImgContainer, { borderColor: 'green', borderWidth: 1, marginTop: 20, marginLeft: 135 }]}
                >
                    <Image source={{ uri: imageSource }} style={styles.profileImg} />
                </TouchableHighlight>

                <Text style={{ alignSelf: 'center', marginBottom: 20, marginTop: 5, fontSize: 20 }}>Photo</Text>


                <View style={styles.mainContainer}>
                    <Text style={styles.lables}>Name</Text>
                    <TextInput style={styles.input}

                        value={name}
                        onChangeText={(text) => setName(text)}
                    />

                    <Text style={styles.lables}>Mobile Number</Text>
                    <TextInput style={styles.input}
                        value={mm}
                        keyboardType="numeric"
                        onChangeText={(text) => setMobile_number(text)}
                    />

                    <Text style={styles.lables}>LandLine</Text>
                    <TextInput style={styles.input}

                        value={landline}
                        onChangeText={(text) => setLandline(text)}
                    />

                    <View style={styles.Buttonn} >

                        <Button title="Save" onPress={() => submit()}></Button>
                    </View>
                </View>




            </ScrollView>
            <View style={[styles.Buttonn, { borderRadius: 100 }]} >

                <Button title="save" onPress={() => submit()} ></Button>
            </View>
        </View>
    );


}


const styles = StyleSheet.create({

    mainContainer: {
        height: '100%',
        paddingHorizontal: 30,
        paddingTop: 20,
        color: '#fff'
    },

    lables: {
        fontSize: 20,
        color: '#7d7d7d',
        marginBottom: 5,
        marginTop: 10,
        lineHeight: 25,
        fontFamily: 'regular'
    },
    input: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,.3)',
        paddingHorizontal: 15,
        paddingVertical: 7,
        borderRadius: 2,
        fontFamily: 'regular',
        fontSize: 18,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10
    },
    Buttonn: {
        top: 80,
        paddingHorizontal: 90

    },
    image: {
        width: 100,
        height: 100,
        borderWidth: 2,
        marginTop: 20,
        alignSelf: 'center'


    },
    profileImgContainer: {
        marginLeft: 8,
        height: 120,
        width: 120,
        borderRadius: 60,
    },
    profileImg: {
        height: 120,
        width: 120,
        borderRadius: 60,
    },
})

export default Show;