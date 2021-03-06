import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Modal } from "react-native"

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText)
    };

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal("")
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={style.inputContainer}>
                <TextInput
                    placeholder="Course Goal"
                    style={style.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <Button title="CANCEL" color="red" onPress={props.onCancel}/>
                <Button title="ADD"
                    onPress={addGoalHandler} />
            </View>
        </Modal>
    )
}

const style = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        borderBottomColor: "black",
        borderBottomWidth: 1,
        width: "80%",
        marginBottom: 10
    }
})

export default GoalInput;