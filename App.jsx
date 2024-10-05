/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet
} from 'react-native';
import ToDoForm from './src/ToDoForm';
import ToDoList from './src/ToDoList';

function App() {
  return (
    <SafeAreaView>
      <ToDoList />
      <ToDoForm />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    fontSize: 16,
  },
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
});

export { App, styles };

