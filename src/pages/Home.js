import React, { useEffect, useState } from "react";

import { Text, SafeAreaView, StyleSheet, TextInput, FlatList } from "react-native";
import { Button } from "../components/Button";
import { SkillCard } from "../components/SkillCard";

export function Home() {

    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState([]);
    const [greeting, setGreeting] = useState('');

    function handleAddNewSkill() {
        setMySkills(oldState => [...oldState, newSkill]);
    }

    useEffect(() => {
        const currentHour = new Date().getHours();
        if (currentHour < 12) {
            setGreeting('Good morning');
        } else if (currentHour >= 12 && currentHour < 18) {
            setGreeting('Good afternoon');
        } else {
            setGreeting('Good night');
        }
    }, []);


    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Welcome, Alex</Text>
            
            <Text style={styles.greetings}>{greeting}</Text>

            <TextInput style={styles.input}
                placeholder="New skill"
                placeholderTextColor='#555'
                onChangeText={setNewSkill}
            />

            <Button onPress={handleAddNewSkill} />
            <Text style={[styles.title, { marginVertical: 30 }]}>My Skills</Text>


            <FlatList 
                data={mySkills}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <SkillCard skill={item} />
                )}
                width="100%"
            />
            
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
    greetings: {
        color: '#FFF',
    }


})