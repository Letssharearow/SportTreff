import {StatusBar} from 'expo-status-bar';
import {Button, StyleSheet, Text, TextInput, View, FlatList} from 'react-native';
import {useState} from "react";
import GoalItem from "./components/GoalItem";

export default function App() {

    const [text, setText] = useState('');
    const [goals, setGoals] = useState([]);

    function goalInputHandler(newText) {
        setText(newText);
    }

    function addGoalHandler() {
        setGoals((oldGoals => [...oldGoals, text]));
    }


    return (
        <View style={styles.appContainer}>
            <View style={styles.inputContainer}>
                <TextInput onChangeText={goalInputHandler} style={styles.textInput}
                           placeholder={'new goal'}>{text}</TextInput>
                <Button onPress={addGoalHandler} title={'Add Goal'}/>
            </View>
            <View style={styles.listContainer}>
                <FlatList data={goals} renderItem={itemData => {
                    return <GoalItem text={itemData.item}/>
                }}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        paddingTop: 50,
        paddingHorizontal: 16,
        justifyContent: 'space-between',
        flex: 1,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
        flex: 1,
    },
    textInput: {
        backgroundColor: '#EEEEFF',
        padding: 8,
        width: '70%',
        borderWidth: 1,
        marginRight: 6,
    },
    listContainer: {
        flex: 5,
    },
});
