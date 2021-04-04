import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function App() {
  const [text, setText] = React.useState('Guess a number between 1-100!')
  const [guess, setGuess] = React.useState('');
  const randomNumber = React.useState(Math.floor(Math.random() * 100) + 1);
  const [tries, setTries] = React.useState(1);
  const makeGuess = () => {
  if(parseFloat(randomNumber) < parseFloat(guess)) {
    setText('Your guess ' + guess + ' was too high!')
    setTries(tries + 1);
  }
  else if(parseFloat(randomNumber) > parseFloat(guess)) {
    setText('Your guess ' + guess + ' was too low!')
    setTries(tries + 1);
  }
  else if(parseFloat(randomNumber) === parseFloat(guess)){
    Alert.alert('The number ' + parseFloat(randomNumber) + ' WAS correct!', 'You needed ' + tries + ' guess(es)')
    setText('Guess a number between 1-100!');
    setTries(1);
  }
}

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20}}>{text}</Text>
      <TextInput 
       style={{width: 200, borderColor: 'grey', borderWidth: 1, margin: 20}}
       onChangeText={guess => setGuess(guess)}
       value={guess}
       keyboardType='numeric'/>
      <Button title="Make a guess" onPress={makeGuess}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
});
