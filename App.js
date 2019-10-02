import React, {useState} from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';

import GoalInput from './components/GoalInput';
import GoalItems from './components/GoalItems';

export default function App() {
  const [courseGoal, setCourseGoal] = useState([]);
  const [isAdd, setIsAdd] = useState(false);
  const addGoalHandler = (goalTitle) => {
    setCourseGoal((currentGoal) => [...currentGoal, { key: Math.random().toString(), value: goalTitle }]);
    setIsAdd(false);
  };

  const removeGoalHandler = (goalID) => {
    setCourseGoal((currentGoal) => {
      return currentGoal.filter((goal) => goal.key !== goalID);
    });
  };

  onCancelHandler = () => {
    setIsAdd(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAdd(true)} />
      <GoalInput visible={isAdd} onAddGoal={addGoalHandler} onCancel={onCancelHandler} />
      <FlatList 
        data={courseGoal}
        keyExtractor={(item, index) => item.key}
        renderItem={(itemData) => <GoalItems id={itemData.item.key} onDelete={removeGoalHandler} title={itemData.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: 'black', 
    borderWidth: 1, 
    padding: 10
  },
});
