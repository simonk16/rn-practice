import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from "./components/GoalInput"

export default function App() {
  
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false)
  
  const addGoalHandler = goal => {
    setCourseGoals(currentGoals => [
      ...currentGoals, 
      { key: Math.random().toString(), value: goal }
    ]);
    setIsAddMode(false) 
  }; 

  const removeGoalHandler = goalKey => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.key !== goalKey);
    })
  }

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  }

  return (
    <View style={style.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)}/>
      
      <GoalInput visible={isAddMode } onAddGoal={addGoalHandler} onCancel={cancelGoalAdditionHandler}/>
      <FlatList 
        style={{marginBottom: 20}}
        data={courseGoals} 
        renderItem={itemData => <GoalItem id={itemData.item.key} onDelete={removeGoalHandler} title={itemData.item.value} />} 
      /> 
    </View>
  ); 
}

const style = StyleSheet.create({
  screen: {
    padding: 50
  }
})