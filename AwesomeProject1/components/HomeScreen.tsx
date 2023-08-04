import { useState, useEffect, useReducer } from 'react'
import { Image, View, Text, Button, TouchableHighlight, SectionList, FlatList, ScrollView, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import Entypo from 'react-native-vector-icons/AntDesign';
import AntDesign from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Home from './ContactAdd';
import SQLite from 'react-native-sqlite-storage';
import Profile from './Profile';
import { useIsFocused } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { SwipeListView } from 'react-native-swipe-list-view';
import { loadConfig } from 'metro-config';


const db = SQLite.openDatabase("userDatabase.db");
const Tab = createBottomTabNavigator();

function HomeSc(props) {

    const { navigation } = props;
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
    const clickk = () => {
        console.log("lll")
        forceUpdate();
        // navigation.navigate('HomeScreen');
    }



    let [flatListItems, setFlatListItems] = useState([]);
    let [newlist, setNewlist] = useState([]);

    const isfocused = useIsFocused();
    const [war, setWar] = useState(true);
    // const navigation = useNavigation();
    const bb = 0
    useEffect(() => {

        db.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM table_user',
                [],
                (tx, results) => {
                    var temp = [];
                    for (let i = 0; i < results.rows.length; ++i)
                        temp.push(results.rows.item(i));
                    setFlatListItems(temp);
                }
            );
        });
        if (isfocused) {
            this.bb += 1
            console.log("reload screen", bb)
        }

    }, [isfocused]);

    console.log(flatListItems);

    const warchange = () => {
        setWar(!war);
    }

    const rightswip = () => {
        return (
            <View>
                <Text>delete</Text>
            </View>
        )
    }

    const leftswip = () => {
        return (
            <View>
                <Text> left</Text>
            </View>
        )
    }



    const closeRow = (rowMap, rowKey) => {
        console.log(rowKey)
        if (rowMap[rowKey]) {
            rowMap[rowKey].closeRow();
        }
    };


    const deleteUser = (id, key) => {
        console.log(id)
        db.transaction((tx) => {
            tx.executeSql(
                'DELETE FROM  table_user where user_id=?',
                [id],
                (tx, results) => {
                    console.log('Results', results.rowsAffected);
                    if (results.rowsAffected > 0) {
                        //navigation.navigate('HomeScreen')
                        db.transaction((tx) => {
                            tx.executeSql(
                                'SELECT * FROM table_user',
                                [],
                                (tx, results) => {
                                    var temp = [];
                                    for (let i = 0; i < results.rows.length; ++i)
                                        temp.push(results.rows.item(i));
                                    setFlatListItems(temp);
                                }
                            );
                        });
                        forceUpdate();
                        Alert.alert(
                            'Success',
                            'You are Deleted Successfully',
                            [
                                {
                                    text: 'Ok',



                                },
                            ],
                            { cancelable: false }
                        );
                        // const newdata = [...flatListItems];
                        //const pre = flatListItems.findIndex(item => item.key == key);
                        //newdata.splice(pre, 1);
                        // setFlatListItems(newdata);
                        // const newData = flatListItems.filter(item => item.id !== item.user_id);
                        //this.setState({ data: newData });
                    } else Alert.alert('deletion Failed');
                }
            );
        });
    }

    const ssd = () => {
        console.log("kkkkk")
        navigation.navigate('HomeScreen');
        forceUpdate()
    }

    const onsearch = (text) => {

        setSearch(text);
        if (text == '') {
            db.transaction((tx) => {
                tx.executeSql(
                    'SELECT * FROM table_user',
                    [],
                    (tx, results) => {
                        var temp = [];
                        for (let i = 0; i < results.rows.length; ++i)
                            temp.push(results.rows.item(i));
                        setFlatListItems(temp);
                    }
                );
            });
        }
        else {
            let temp = flatListItems.filter(item => {
                return item.name.toLowerCase().indexOf(text.toLowerCase()) > -1;
            });
            setFlatListItems(temp);
        }
    }

    const [search, setSearch] = useState('');

    return (

        <View style={{ backgroundColor: 'white', height: '100%' }}>
            <View style={styles.box}>
                <Entypo name='search1' size={25} style={{ left: 20, top: 10, color: 'black' }} />
                <TextInput placeholder='Search Contact' style={{ left: 30 }}
                    value={search}
                    onChangeText={(text) => onsearch(text)}
                />


            </View>



            <View style={{ flex: 1, margin: 20 }}>
                <Text>Contact
                </Text>

                <SwipeListView data={flatListItems}
                    keyExtractor={(id) => { return id.user_id }}
                    renderItem={({ item }) =>

                        <TouchableOpacity onPress={() => navigation.navigate('Profile', {
                            data: {
                                id: item.user_id
                            },
                        })} style={{ borderRadius: 8, backgroundColor: 'white', marginVertical: 3, elevation: 3, position: 'relative' }}>
                            <View style={{ flex: 1, flexDirection: 'row', }}>
                                <View style={{ margin: 8 }}>
                                    <View style={styles.profileImgContainer} >
                                        <Image source={{ uri: item.image }} style={styles.profileImg} />
                                    </View>
                                </View>
                                <View>
                                    <ScrollView horizontal={true} >
                                        <Text style={[styles.name, { fontSize: 22, margin: 10, width: 290 }]}>
                                            {item.name}
                                        </Text>
                                    </ScrollView>

                                </View>

                            </View>
                        </TouchableOpacity>

                    }
                    renderHiddenItem={({ item }, rowMap) => (
                        <View style={{
                            marginVertical: 10, flexDirection: 'row', justifyContent: 'space-between', width: '100%',
                        }}>
                            <View>
                                <Text></Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 1, margin: 2 }}>
                                <TouchableOpacity style={{ padding: 5 }} onPress={() => deleteUser(item.user_id, item.key)}>
                                    <Entypo name='delete' size={27} />
                                </TouchableOpacity>

                                <TouchableOpacity style={{ padding: 5 }}
                                    onPress={() => navigation.navigate('Show', {
                                        data: {
                                            id: item.user_id,
                                            name: item.name,
                                            number: item.mobile_number,
                                            image: item.image,
                                            landline: item.landline,
                                            favorite: item.favorite,
                                        },
                                    })}
                                >
                                    <Entypo name='edit' size={27} />
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => closeRow(rowMap, item.user_id)}>
                                    <AntDesign name='cross' size={33} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                    leftOpenValue={0}
                    rightOpenValue={-120}
                />





            </View>




            <View style={{ position: 'absolute', top: 600, left: 300 }}>
                <TouchableOpacity onPress={() => navigation.navigate(Home)}>
                    <Entypo name='pluscircleo' size={50} color="black" />
                </TouchableOpacity>
            </View>

        </View>


    );
}

const Favorite = ({ navigation }) => {
    const isfocused = useIsFocused();
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

    const closeRow = (rowMap, rowKey) => {
        console.log(rowKey)
        if (rowMap[rowKey]) {
            rowMap[rowKey].closeRow();
        }
    };


    useEffect(() => {
        console.log("jjjjj")
        db.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM table_user where favorite = ?',
                ['1'],
                (tx, results) => {
                    var len = results.rows.length;
                    //console.warn(results);
                    if (len > 0) {
                        var temp = [];
                        for (let i = 0; i < results.rows.length; ++i)
                            temp.push(results.rows.item(i));
                        setFlatListItems(temp);
                    } else {

                        //Alert.alert('No user found');
                        setFlatListItems([]),
                            updateAllStates('', '', '', '', '');
                    }
                }
            );
        });
        console.log(updateAllStates.name)
    }, [isfocused]);



    console.log(updateAllStates);


    const [flatListItems, setFlatListItems] = useState([]);


    const onsearch = (text) => {

        setSearch(text);
        if (text == '') {
            db.transaction((tx) => {
                tx.executeSql(
                    'SELECT * FROM table_user',
                    [],
                    (tx, results) => {
                        var temp = [];
                        for (let i = 0; i < results.rows.length; ++i)
                            temp.push(results.rows.item(i));
                        setFlatListItems(temp);
                    }
                );
            });
        }
        else {
            let temp = flatListItems.filter(item => {
                return item.name.toLowerCase().indexOf(text.toLowerCase()) > -1;
            });
            setFlatListItems(temp);
        }
    }

    const [search, setSearch] = useState('');

    const deleteUser = (id, key) => {
        console.log(id)
        db.transaction((tx) => {
            tx.executeSql(
                'DELETE FROM  table_user where user_id=?',
                [id],
                (tx, results) => {
                    console.log('Results', results.rowsAffected);
                    if (results.rowsAffected > 0) {
                        //navigation.navigate('HomeScreen')
                        db.transaction((tx) => {
                            tx.executeSql(
                                'SELECT * FROM table_user',
                                [],
                                (tx, results) => {
                                    var temp = [];
                                    for (let i = 0; i < results.rows.length; ++i)
                                        temp.push(results.rows.item(i));
                                    setFlatListItems(temp);
                                }
                            );
                        });

                        Alert.alert(
                            'Success',
                            'You are Deleted Successfully',
                            [
                                {
                                    text: 'Ok',



                                },
                            ],
                            { cancelable: false }
                        );
                        // const newdata = [...flatListItems];
                        //const pre = flatListItems.findIndex(item => item.key == key);
                        //newdata.splice(pre, 1);
                        // setFlatListItems(newdata);
                        // const newData = flatListItems.filter(item => item.id !== item.user_id);
                        //this.setState({ data: newData });
                    } else Alert.alert('Deletion Failed');
                }
            );
        });
    }

    return (
        <View style={{ backgroundColor: 'white', height: '100%' }}>
            <View style={styles.box}>
                <Entypo name='search1' size={25} style={{ left: 20, top: 10, color: 'black' }} />
                <TextInput placeholder='Search Contact' style={{ left: 30 }}
                    value={search}
                    onChangeText={(text) => onsearch(text)}
                />


            </View>



            <View style={{ flex: 1, margin: 20 }}>
                <Text>Contact
                </Text>

                <SwipeListView data={flatListItems}
                    keyExtractor={(id) => { return id.user_id }}
                    renderItem={({ item }) =>

                        <TouchableOpacity onPress={() => navigation.navigate('Profile', {
                            data: {
                                id: item.user_id
                            },
                        })} style={{ borderRadius: 8, backgroundColor: 'white', marginVertical: 3, elevation: 3, position: 'relative' }}>
                            <View style={{ flex: 1, flexDirection: 'row', }}>
                                <View style={{ margin: 8 }}>
                                    <View style={styles.profileImgContainer} >
                                        <Image source={{ uri: item.image }} style={styles.profileImg} />
                                    </View>
                                </View>
                                <View>
                                    <ScrollView horizontal={true} >
                                        <Text style={[styles.name, { fontSize: 22, margin: 10, width: 290 }]}>
                                            {item.name}
                                        </Text>
                                    </ScrollView>

                                </View>

                            </View>
                        </TouchableOpacity>

                    }
                    renderHiddenItem={({ item }, rowMap) => (
                        <View style={{
                            marginVertical: 10, flexDirection: 'row', justifyContent: 'space-between', width: '100%',
                        }}>
                            <View>
                                <Text></Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 1, margin: 2 }}>
                                <TouchableOpacity style={{ padding: 5 }} onPress={() => deleteUser(item.user_id, item.key)}>
                                    <Entypo name='delete' size={27} />
                                </TouchableOpacity>

                                <TouchableOpacity style={{ padding: 5 }}
                                    onPress={() => navigation.navigate('Show', {
                                        data: {
                                            id: item.user_id,
                                            name: item.name,
                                            number: item.mobile_number,
                                            image: item.image,
                                            landline: item.landline,
                                            favorite: item.favorite,
                                        },
                                    })}
                                >
                                    <Entypo name='edit' size={27} />
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => closeRow(rowMap, item.user_id)}>
                                    <AntDesign name='cross' size={33} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                    leftOpenValue={0}
                    rightOpenValue={-120}
                />





            </View>




        </View>
    )
}
//import { createStackNavigator } from '@react-navigation/native-stack';
//const Stack = createStackNavigator();
const HomeScreen = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: {
                backgroundColor: 'pink',

            }
        }}>
            <Tab.Screen name="All Contact" component={HomeSc}
                options={{

                    headerTitleStyle: {
                        fontSize: 60
                    },
                    tabBarIcon: () => {
                        return (
                            <Entypo name='contacts' size={35} />
                        )
                    }

                }}
            />
            <Tab.Screen name="Favorite" component={Favorite}
                options={{
                    tabBarIcon: () => {
                        return (
                            <MaterialIcons name='favorite' size={35} />
                        )
                    }
                }}
            />
        </Tab.Navigator>
    )

}





const styles = StyleSheet.create({

    swipe: {
        padding: 10,
        backgroundColor: 'white',
        marginVertical: 5,

        borderRadius: 10

    },

    name: {
        color: 'black',
        fontSize: 25,

    },
    profileImg: {
        height: 40,
        width: 40,
        borderRadius: 20,
    },
    profileImgContainer: {
        height: 40,
        width: 40,
        borderRadius: 20,
    },
    box: {
        elevation: 5,
        marginVertical: 20,
        marginHorizontal: 10,
        backgroundColor: 'pink',
        paddingVertical: 8,
        flexDirection: 'row',

        borderRadius: 10

    },
})



export default HomeScreen
