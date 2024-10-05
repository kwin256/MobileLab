
import React from 'react';
import { Button, TextInput, View } from 'react-native';
import { styles } from '../App';
export default function ToDoForm() {
    return (
        <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task..."
        />
        <Button title="Add" />
      </View>
    );
}

