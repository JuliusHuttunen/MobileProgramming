import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';

export default function App() {
  const [text, setText] = React.useState('');
  const buttonPressed = () => {
    Alert.alert('Alert' , 'You typed ' + text)
  }

  return (
    <View style={styles.container}>
      <TextInput
       style={{width: 200, borderColor: 'grey', borderWidth: 1}}
       onChangeText={text => setText(text)}
       value={text}/>
      <Button title="Press" onPress={buttonPressed}/>
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
