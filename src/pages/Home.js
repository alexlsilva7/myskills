import React from "react";

import { Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity } from "react-native";

export function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Welcome, Alex</Text>
            <TextInput style={styles.input} placeholder="New skill" placeholderTextColor='#555' />
            <TouchableOpacity style={styles.button} activeOpacity={0.7}>
                <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
            <Text style={[styles.title, { marginTop: 30 }]}>My Skills</Text>

        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: "flex-start",
        padding: 25,
    },
    title: {
        fontSize: 28,
        color: '#FFF',
        fontWeight: 'bold',
    },
    input: {
        backgroundColor: '#1F1E25',
        color: '#FFF',
        fontSize: 18,
        padding: 15,
        marginTop: 30,
        borderRadius: 7,
        width: '100%',
    },
    button: {
        backgroundColor: '#A370F7',
        padding: 15,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 20, 
        width: '100%',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 17,
        fontWeight: 'bold',
    }

});