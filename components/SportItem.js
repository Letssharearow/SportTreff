import {Pressable, StyleSheet, Text, View} from "react-native";

function SportItem(props) {
    return <Pressable onPress={props.setSelected}>
        <View style={props.selected ? styles.containerSelected : styles.container}>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    </Pressable>
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