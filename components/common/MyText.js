import {StyleSheet, Text} from "react-native";

function MyText(props) {
    return <Text style={styles.text}>{props.text}</Text>
}

const styles = StyleSheet.create({
    text: {
        color: '#ccc',
        fontSize: 20,
    }
})

export default MyText;