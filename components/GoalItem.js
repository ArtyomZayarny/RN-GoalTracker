import { Pressable, StyleSheet, Text, View } from 'react-native';

export const GoalItem = ({ goal, onDeleteGoal }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#210644' }}
        style={({ pressed }) => pressed && styles.pressedItem}
        onPress={onDeleteGoal.bind(this, goal.id)}
      >
        <Text style={styles.goalItemText}>{goal.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    marginVertical: 8,
    borderRadius: 6,
    backgroundColor: '#DF4C3C',
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalItemText: {
    padding: 8,
    fontSize: 18,
    color: '#fff',
  },
});
