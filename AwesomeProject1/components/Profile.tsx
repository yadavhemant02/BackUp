import React, { Component, useState, useEffect } from 'react'
import {
    Text,
    View,
    ImageBackground,
    Alert,
    Image,
    TouchableOpacity,
    StatusBar,
    StyleSheet,
    Linking,
    Button,
    ScrollView
} from 'react-native'
import Show from './ContactUpdate';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Awesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import SQLite from 'react-native-sqlite-storage';
import HomeScreen from './HomeScreen';
//import { useRoute } from '@react-navigation/native';


const db = SQLite.openDatabase("userDatabase.db");

const Profile = (props) => {

    const { navigation } = props;
    const clickk = () => {
        navigation.navigate('HomeScreen');
    }
    //console.warn(1233333333333333);
    const [nam, setNam] = useState();
    //console.warn(props.route.params.data.id)

    let [name, setName] = useState('');
    let [mobile_number, setMobile_number] = useState('');
    let [landline, setLandline] = useState('');
    let [favorite, setFavorite] = useState('');
    let [image, setImage] = useState('');

    let updateAllStates = (name, contact, address, favorite, image) => {
        setName(name);
        setMobile_number(contact);
        setLandline(address);
        setFavorite(favorite);
        setImage(image);
    };

    const called = (phonenumber: any) => {
        Linking.openURL('tel:${phonenumber}')
    }

    useEffect(() => {
        console.log(props.route.params.data.id);
        db.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM table_user where user_id = ?',
                [props.route.params.data.id],
                (tx, results) => {
                    var len = results.rows.length;
                    //console.warn(results);
                    if (len > 0) {
                        let res = results.rows.item(0);
                        // console.log(res);
                        updateAllStates(
                            res.name,
                            res.mobile_number,
                            res.landline,
                            res.favorite,
                            res.image
                        );
                    } else {
                        Alert.alert('No user found');
                        updateAllStates('', '', '', '', '');
                    }
                }
            );
        });
    }, []);

    //console.warn(name);
    console.log(updateAllStates)

    const deleteUser = () => {
        db.transaction((tx) => {
            tx.executeSql(
                'DELETE FROM  table_user where user_id=?',
                [props.route.params.data.id],
                (tx, results) => {
                    console.log('Results', results.rowsAffected);
                    if (results.rowsAffected > 0) {
                        Alert.alert(
                            'Success',
                            'You are Deleted Successfully',
                            [
                                {
                                    text: 'Ok',
                                    onPress: () => navigation.navigate('HomeScreen'),
                                },
                            ],
                            { cancelable: false }
                        );
                    } else Alert.alert('Deletion Failed');
                }
            );
        });
    }

    const fav = () => {
        console.log(favorite);
        if (favorite == '0') {
            db.transaction((tx) => {
                tx.executeSql(
                    'UPDATE table_user SET favorite=?  WHERE user_id=?',
                    ['1', props.route.params.data.id],
                    (tx, results) => {
                        console.log('Results', results.rowsAffected);
                        if (results.rowsAffected > 0) {
                            Alert.alert(
                                'Success',
                                name + ' are Added Successfully in favorite List',
                                [
                                    {
                                        text: 'Ok'

                                    },
                                ],
                                { cancelable: false }
                            );
                        } else Alert.alert('Registration Failed');
                    },
                    (txObj, error) => {
                        // Error callback
                        console.log('Update error:', error);
                    }

                )
            })
        }
        else {
            db.transaction((tx) => {
                tx.executeSql(
                    'UPDATE table_user SET favorite=?  WHERE user_id=?',
                    ['0', props.route.params.data.id],
                    (tx, results) => {
                        console.log('Results', results.rowsAffected);
                        if (results.rowsAffected > 0) {
                            Alert.alert(
                                'Success',
                                name + ' are remove Successfully from favorite List',
                                [
                                    {
                                        text: 'Ok'

                                    },
                                ],
                                { cancelable: false }
                            );
                        } else Alert.alert('Registration Failed');
                    },
                    (txObj, error) => {
                        // Error callback
                        console.log('Update error:', error);
                    }

                )
            })

        }
        db.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM table_user where user_id = ?',
                [props.route.params.data.id],
                (tx, results) => {
                    var len = results.rows.length;
                    //console.warn(results);
                    if (len > 0) {
                        let res = results.rows.item(0);
                        // console.log(res);
                        updateAllStates(
                            res.name,
                            res.mobile_number,
                            res.landline,
                            res.favorite,
                            res.image
                        );
                    } else {
                        Alert.alert('No user found');
                        updateAllStates('', '', '', '', '');
                    }
                }
            );
        });
    }

    return (
        <View>


            {image ? <Image source={{ uri: image }} style={{ width: '100%', height: 400, opacity: .8 }} /> : null}


            <View style={{ position: 'relative', width: '80%', height: 50, bottom: 80, left: 38, flexDirection: 'column', }}>
                <ScrollView horizontal={true}>
                    <Text style={{ fontSize: 40, color: 'black', }}>{name}</Text>
                </ScrollView>
            </View>

            <TouchableOpacity onPress={deleteUser} style={{ position: 'absolute' }}>
                <AntDesign name='delete' style={{ fontSize: 40, left: 320, top: StatusBar.currentHeight, color: 'black' }} />
            </TouchableOpacity>


            <View style={styles.box}>
                <Text style={{ color: 'black', fontSize: 20, marginLeft: 10 }}>  {mobile_number}</Text>
                <Entypo name='phone' size={28} style={{ right: 20, color: 'black' }}
                    onPress={() => called(mobile_number)}
                />
            </View>

            <View style={[styles.boxx, { top: 124 }]}>
                <TouchableOpacity onPress={deleteUser}>

                    <AntDesign name="delete" size={25} style={{ left: 15, padding: 2, color: 'black' }}>delete</AntDesign>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Show', {
                    data: {
                        id: props.route.params.data.id,
                        name: name,
                        number: mobile_number,
                        image: image,
                        landline: landline,
                        favorite: favorite,
                    },
                })}>
                    <Awesome name="edit" size={25} style={{ left: 10, padding: 2, color: 'black', marginBottom: 2 }}>edit</Awesome>
                </TouchableOpacity>
                <TouchableOpacity onPress={fav}>
                    {favorite == '0' ? <MaterialIcons name='favorite-border' size={35} style={{ color: 'black' }} /> : <MaterialIcons name='favorite' size={35} style={{ color: 'black' }} />}

                </TouchableOpacity>
            </View>




        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        elevation: 5,

        marginHorizontal: 10,
        backgroundColor: 'white',
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 10
    },
    boxx: {
        marginRight: 20,
        elevation: 10,
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingVertical: 15,
        justifyContent: 'space-around',
        borderBottomRightRadius: 25,
        borderTopRightRadius: 25


    },


})

export default Profile
