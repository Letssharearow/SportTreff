import {Button, FlatList, StyleSheet, Text, View} from "react-native";
import {apiEndpoint, SportModel} from "../utils/models";
import SportItem from "./SportItem";
import {useState} from "react";
import MyText from "./common/MyText";

function FirstTimeView() {

    const welcomeText = "Wie funktioniert's? \nWähle deine Sportarten aus \nGebe deinen Namen an\nund finde andere Leute zum Sport machen";

    return <View style={styles.container}>
        <View>
            <View style={styles.text}>
                <MyText text={welcomeText}/>
            </View>
        </View>
    </View>
}

export default FirstTimeView;

let styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
});

