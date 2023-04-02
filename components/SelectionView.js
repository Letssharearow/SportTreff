import {Button, FlatList, StyleSheet, Text, View} from "react-native";
import {apiEndpoint, SportModel} from "../utils/models";
import SportItem from "./SportItem";
import {useState} from "react";

function SelectionView() {

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

    const [selectedItems, setSelectedItems] = useState([]);
    let data = Object.values(SportModel).map((item, index) => ({item, index}));
    return <View style={styles.container}>
        <Text style={styles.text}>Wählen Sie Ihre Sportarten aus</Text>
        <View style={styles.listContainer}>
            <FlatList data={data}
                      renderItem={sportData => <SportItem
                          index={sportData.item.index}
                          setSelected={(index) => setSelectedItems((oldItem) => [...oldItem, index])}
                          selected={selectedItems.includes(sportData.item.index)}
                          text={sportData.item.item}/>}/>
        </View>

        <View>
            <Button onPress={submitUser} title={'weiter'}/>
        </View>
    </View>
}

export default SelectionView;

let styles = StyleSheet.create({
    text: {
        color: 'white',
    },
    listContainer: {
        height: '80%'
    },
    container: {
        justifyContent: 'space-between'
    }
});

