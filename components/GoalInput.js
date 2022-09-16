import {
  View,
  TextInput,
  StyleSheet,
  Button,
  Modal,
  Image,
  Keyboard,
} from 'react-native';
import React, { useRef, useState } from 'react';

export const GoalInput = (props) => {
  const [isFocused, setIsFocused] = useState(false);
  const [error, setError] = useState(false);
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const addGoalHandler = () => {
    if (enteredGoalText) {
      props.onAddGoal(enteredGoalText);
      setEnteredGoalText('');
    }
  };
  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  return (
    <Modal visible={props.visible} animationType="slide" style={styles.modal}>
      <View style={styles.inputContainer}>
        <Image
          source={require('../assets/target-img.png')}
          style={styles.image}
        />

        <View style={{ width: '100%' }}>
          <TextInput
            style={[
              styles.textInput,
              { borderColor: error ? 'red' : isFocused ? 'blue' : '#ccc' },
            ]}
            onChangeText={goalInputHandler}
            placeholder="Your course goal!"
            value={enteredGoalText}
          />
        </View>

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              onPress={addGoalHandler}
              color="#5e0acc"
              type="Submit"
            />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCanceled} color="#f31828" />
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#fbd7dd',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 24,
    padding: 16,
    borderBottomWidth: 1,
    alignItems: 'center',
    borderBottomColor: '#ccc',
  },
  textInput: {
    height: 50,
    borderWidth: 1,
    color: '#000',
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    paddingLeft: 16,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 13,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
  },
});
