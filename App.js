import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button, Image, FlatList, StatusBar} from 'react-native';
import SelectionView from "./components/SelectionView";
import {apiEndpoint} from "./utils/models";
import FirstTimeView from "./components/FirstTimeView";

export default function UserProfile() {

    const [users, setUsers] = useState([]);

    // useEffect(() => {
    //     fetch(apiEndpoint, {
    //         method: 'GET',
    //         headers: {
    //             Accept: '*/*',
    //         },
    //     }).then(r => r.json()).then(p => setUsers(p)).catch(e => console.error('error', e));
    // })

    const [viewIndex, setViewIndex] = useState(0);


    function onPressContinue() {
        switch (viewIndex) {
            case 0:
                setViewIndex(1);
                break;
            case 1:
                submitUser();
                break;
        }
    }

    function submitUser() {
        fetch(apiEndpoint, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "name": "juli",
                "sports": selectedItems
            }),
        }).then(r => console.log('hi', r.toString()));
    }

    function getView() {
        switch (viewIndex) {
            case 0:
                return <FirstTimeView/>;
            case 1:
                return <SelectionView/>;
        }
    }

    return (
        <View style={styles.appContainer}>
            <StatusBar barStyle={'light-content'}/>
            {getView()}
            <Button onPress={onPressContinue} title={'weiter'}/>
        </View>
    );

}

const styles = StyleSheet.create({
    appContainer: {
        backgroundColor: '#00044d',
        flex: 1,
        padding: 16,
        justifyContent: 'space-between',
    }
})
