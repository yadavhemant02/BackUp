import { useIsFocused } from '@react-navigation/native';
import React, { Component, useEffect, useState } from 'react'
import { Button, FlatList, Text, View, StyleSheet } from 'react-native'
import { useSelector, useDispatch } from "react-redux";
import { storeNote } from '../redux/action';
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useFocusEffect } from '@react-navigation/native';

const BudgetListScreen = ({ navigation }) => {

    const HookData = useSelector((state: any) => state)
    const [flatList, setFlatList] = useState([]);
    //setFlatList(HookData);
    //console.log(flatList);
    const isfocused = useIsFocused();


    const dispatch = useDispatch();

    // useFocusEffect(
    //    React.useCallback(() => {
    //        stroreData()
    //   }, [])
    // )


    useEffect(() => {

        stroreData();
        //console.log(HookData)
        //console.warn(HookData)
    }, [isfocused]);

    const stroreData = async () => {
        const res = await AsyncStorage.getItem("notedata")
        let newdata = JSON.parse(res);
        if (newdata != null) {
            //dispatch(storeNote(newdata));
        }
        // console.warn(newdata);
    }

    console.log(HookData)

    return (
        <View>
            <Text>

            </Text>

            <FlatList
                data={HookData.reducer}

                renderItem={({ item }) =>
                    <View>
                        <View style={styles.box}>
                            <Text style={{ fontSize: 30, color: 'black' }}>{item.name}</Text>
                            <View style={{ flexDirection: 'row', paddingHorizontal: 10 }}>

                                <Text style={{ fontSize: 18 }}>Actual Amount</Text>
                                <Text style={{ fontSize: 18, left: 25, color: 'black' }}>{item.actualamount}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', paddingHorizontal: 10 }}>
                                <Text style={{ fontSize: 18 }}>Planned Amount</Text>
                                <Text style={{ fontSize: 18, left: 10, color: 'black' }}>{item.plannedamount}</Text>
                            </View>
                        </View>

                    </View>
                }
            />


        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        elevation: 5,
        marginVertical: 10,
        marginHorizontal: 10,
        backgroundColor: 'pink',
        paddingVertical: 8,
        paddingHorizontal: 10,

        borderRadius: 10

    },
})

export default BudgetListScreen
