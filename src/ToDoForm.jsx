
import React from 'react';
import { Button, TextInput, View } from 'react-native';
import { styles } from '../App';
export default function ToDoForm({ addTask }) {
  const [taskText, setTaskText] = React.useState('');

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        value={taskText}
        onChangeText={(text) => setTaskText(text)}
      />
      <Button title="Add"
       disabled={taskText.trim() === ''}
       onPress={() => {
        addTask(taskText);
        setTaskText('');
      }} />
    </View>
  );
}

