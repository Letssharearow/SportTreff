import {Pressable, StyleSheet, Text, View} from "react-native";

function SportItem(props) {
    return <View style={props.selected ? styles.containerSelected : styles.container}>
        <Pressable onPress={props.setSelected.bind(this, props.index)}>
            <Text style={styles.text}>{props.text}</Text>
        </Pressable>
    </View>
}

export default SportItem

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#c009ce',
        padding: 5,
        margin: 10,
    },
    containerSelected: {
        backgroundColor: '#09ce47',
        padding: 5,
        margin: 10,
    },
    text: {
        fontSize: 20,
    }
})