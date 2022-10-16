import React, { useState } from "react";

import { Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Touchable } from "react-native";
import { Button } from "../components/Button";
import { SkillCard } from "../components/SkillCard";

export function Home() {

    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState([]);

    function handleAddNewSkill() {
        setMySkills(oldState => [...oldState, newSkill]);
    }


    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Welcome, Alex</Text>
            <TextInput style={styles.input}
                placeholder="New skill"
                placeholderTextColor='#555'
                onChangeText={setNewSkill}
            />

           <Button onPress={handleAddNewSkill}/>
            <Text style={[styles.title, { marginVertical: 30 }]}>My Skills</Text>
            {
                mySkills.map(skill => (
                    <SkillCard key={skill} skill={skill}/>
                ))
            }
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
    
    

})