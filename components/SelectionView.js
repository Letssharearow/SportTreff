import {Button, FlatList, StyleSheet, Text, View} from "react-native";
import {apiEndpoint, SportModel} from "../utils/models";
import SportItem from "./SportItem";
import {useState} from "react";
import MyText from "./common/MyText";

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

    let data = Object.values(SportModel).map((item, index) => ({item, index, selected: false}));

    const [items, setItems] = useState(data);

    return <View style={styles.container}>
        <MyText style={styles.text} text={'Wählen Sie Ihre sportlichen Aktivitäten aus'}/>
        <View style={styles.listContainer}>
            <FlatList data={items}
                      renderItem={sportData => <SportItem
                          setSelected={() => {
                              setItems((currentItems) => [...currentItems.map(item => item.index === sportData.item.index ? {
                                  ...item,
                                  selected: !item.selected
                              } : item)])
                          }}
                          selected={sportData.item.selected}
                          text={sportData.item.item}/>}/>
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

