import React, { Component, useState } from 'react'
import { Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useDispatch } from "react-redux";
import { addBudget } from '../redux/action';



const BudgetScreen = ({ navigation }) => {

    //const [name, setName] = useState('');
    const [actualamount, setActualamount] = useState('');
    const [plannedamount, setPlannedamount] = useState('');

    const dispatch = useDispatch();

    //const postdata = (name, actualAmount, plannedamount) => {
    //  setName(name),
    //    setActualamount(actualAmount),
    //  setPlannedamount(plannedamount)
    //}

    const [postdata, setPostdata] = useState({
        name: '',
        actualamount: '',
        plannedamount: ''

    })

    const handleNameChange = (text) => {
        setPostdata({ ...postdata, name: text });
    };
    const handlePlannedChange = (text) => {
        setPostdata({ ...postdata, plannedamount: text });
    };
    const handleActualChange = (text) => {
        setPostdata({ ...postdata, actualamount: text });
    };


    const submit = () => {

        dispatch(addBudget(postdata))

        console.warn(postdata.name)
        console.log(postdata);
        navigation.navigate('BudgetListingScreen')

    }


    return (
        <View>
            <ScrollView>
                <View style={styles.box}>
                    <TouchableOpacity style={{ padding: 5, borderWidth: 1, borderRadius: 20, backgroundColor: 'black', left: 190 }} onPress={() => navigation.navigate('BudgetListingScreen')}>
                        <Text style={{ fontSize: 20, color: 'white' }}>Go to Budget List</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{ fontSize: 20, margin: 15, color: 'black', borderWidth: .5, borderRadius: 10, paddingHorizontal: 20, alignSelf: 'center', paddingVertical: 5 }}>Budget Entry</Text>

                <View style={[styles.mainContainer, { height: 400 }]}>
                    <Text style={styles.lables}>Name</Text>
                    <TextInput style={styles.input}

                        value={postdata.name}
                        onChangeText={handleNameChange}
                    />

                    <Text style={styles.lables}>Planned Amount</Text>
                    <TextInput style={styles.input}
                        value={postdata.plannedamount}
                        onChangeText={handlePlannedChange}
                    />

                    <Text style={styles.lables}>Actual Amount</Text>
                    <TextInput style={styles.input}

                        value={postdata.actualamount}
                        onChangeText={handleActualChange}
                    />

                    <View style={styles.Buttonn} >
                        <TouchableOpacity style={{ padding: 5, borderWidth: 1, borderRadius: 10, backgroundColor: 'black' }} onPress={() => submit()}>
                            <Text style={{ fontSize: 20, color: 'white', alignSelf: 'center' }}>save</Text>
                        </TouchableOpacity>


                    </View>
                </View>
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({

    mainContainer: {
        height: '100%',
        paddingHorizontal: 10,
        paddingTop: 20,
        color: '#fff',
        borderWidth: .5,
        marginHorizontal: 5,
        borderRadius: 10
    },

    lables: {
        fontSize: 20,
        color: '#7d7d7d',
        marginBottom: 5,
        marginTop: 10,
        lineHeight: 25,
        fontFamily: 'regular',
        left: 7
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
    box: {

        marginVertical: 20,
        marginHorizontal: 10,

        paddingVertical: 8,
        flexDirection: 'row',
        borderWidth: .4,
        borderRadius: 20

    },
})

export default BudgetScreen
