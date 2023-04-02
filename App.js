import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button, Image} from 'react-native';
import SelectionView from "./components/SelectionView";
import {apiEndpoint} from "./utils/models";

export default function UserProfile() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(apiEndpoint, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        }).then(r => console.log('hi', r.toString()));
    })

    return (
        <View>
            <SelectionView></SelectionView>
        </View>
    );
}
