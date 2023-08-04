import { useState, useEffect } from "react";
import { Alert, Image, Text, View, Button, TextInput, StyleSheet, TouchableHighlight, ScrollView } from "react-native";
import { launchImageLibrary } from 'react-native-image-picker';
import Show from "./ContactUpdate";
import HomeScreen from "./HomeScreen";
import SQLite from 'react-native-sqlite-storage';

//var db = openDatabase({ name: 'UserDatabase.db' });
const db = SQLite.openDatabase("userDatabase.db");



function Home({ navigation }) {

    const [imageSource, setImageSource] = useState("file:///data/user/0/com.awesomeproject1/cache/rn_image_picker_lib_temp_e1141e69-491f-4c44-809f-ddbbc985bcf3.png");
    const [favroite, setFavroite] = useState(0);
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [landline, setLandline] = useState('');

    const submit = () => {
        if (name == '' || mobile == '' || landline == '') {
            Alert.alert(
                'Failed',
                'Please insert all field',
                [
                    {
                        text: 'Ok',
                    },
                ],
                { cancelable: false }
            );
        }
        else {
            db.transaction((txn) => {
                txn.executeSql(
                    'INSERT INTO table_user (image, name,landline, mobile_number, favorite) VALUES (?,?,?,?,?)',
                    [imageSource, name, landline, mobile, favroite],
                    (tx, results) => {
                        console.log('Results', results.rowsAffected);
                        if (results.rowsAffected > 0) {
                            Alert.alert(
                                'Success',
                                'You are Registered Successfully',
                                [
                                    {
                                        text: 'Ok',
                                        onPress: () => navigation.navigate('HomeScreen'),
                                    },
                                ],
                                { cancelable: false }
                            );
                        } else Alert.alert('Registration Failed');
                    }
                );
            })
            console.log(name, mobile, landline, imageSource, favroite)
            //navigation.navigate(HomeScreen);
        }
    }

    const selectImage = () => {
        launchImageLibrary({ mediaType: 'photo' }, response => {
            if (!response.didCancel && !response.errorCode) {
                console.log(response.assets[0].uri);
                setImageSource(response.assets[0].uri);
            }
        });
    };


    const tableName = 'your_table_name';
    const query = `PRAGMA table_info(${tableName})`;


    useEffect(() => {
        db.transaction(function (txn) {
            txn.executeSql(
                "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
                [],
                function (tx, res) {
                    console.log('item:', res.rows.length);
                    if (res.rows.length == 0) {
                        txn.executeSql('DROP TABLE IF EXISTS table_user', []);
                        txn.executeSql(
                            'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, image VARCHAR(500), name VARCHAR(20), mobile_number INT(10), landline VARCHAR(255),favorite INT(1))',
                            []
                        );
                    }
                }
            );
        });

    }, []);


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
                        value={mobile}
                        onChangeText={(text) => setMobile(text)}
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
export default Home;