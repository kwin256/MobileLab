import React from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { styles } from '../App';

export default function ToDoList() {
    return (
        <ScrollView>
            <Pressable>
                <View style={[styles.task, styles.completed]}>
                    <Text style={styles.taskText}>Do laundry</Text>
                </View>
            </Pressable>
            <Pressable>
                <View style={[styles.task]}>
                    <Text style={styles.taskText}>Go to gym</Text>
                </View>
            </Pressable>
            <Pressable>
                <View style={[styles.task, styles.completed]}>
                    <Text style={styles.taskText}>Walk dog</Text>
                </View>
            </Pressable>
        </ScrollView>
    )
}
