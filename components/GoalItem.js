import {Text, View, StyleSheet} from "react-native";

function GoalItem(props) {
    return <View style={styles.goalStyle}>
        <Text style={styles.goalStyle}>{props.text}</Text>
    </View>
}

const styles = StyleSheet.create({
    goalStyle: {
        marginBottom: 2,
        backgroundColor: '#bbc',
        padding: 5,
    }
});


export default GoalItem