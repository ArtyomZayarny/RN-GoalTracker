import { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import { GoalInput } from './components/GoalInput';
import { GoalItem } from './components/GoalItem';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };
  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  };

  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), text: enteredGoalText },
    ]);
    endAddGoalHandler();
  };
  const deleteGoalHandler = (id) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  };
  return (
    <>
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#5e0acc"
          onPress={startAddGoalHandler}
        />
        {modalIsVisible && (
          <GoalInput
            onAddGoal={addGoalHandler}
            visible={modalIsVisible}
            onCanceled={endAddGoalHandler}
          />
        )}
        <View style={styles.goalsContainer}>
          <FlatList
            keyExtractor={(item) => item.id}
            alwaysBounceVertical={false}
            data={courseGoals}
            renderItem={(itemData) => (
              <GoalItem goal={itemData.item} onDeleteGoal={deleteGoalHandler} />
            )}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
    backgroundColor: '#fbd7dd',
  },
  goalsContainer: {
    flex: 5,
  },
});
