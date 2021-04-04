import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, FlatList } from 'react-native';

export default function App() {
  const [answer, setAnswer] = React.useState('');
  const [number1, setNumber1] = React.useState(0);
  const [number2, setNumber2] = React.useState(0);
  const [text, setText] = React.useState('Calculator');
  const [data, setData] = React.useState([]);

  const plusNumbers = () => {setAnswer(parseFloat(number1) + parseFloat(number2))
                            setText('The result is ')
                            const str = number1 + " + " + number2 + " = " + (parseFloat(number1) + parseFloat(number2));
                            setData([...data,{key:str}])
                          }
  
  
  const minusNumbers = () => {setAnswer(parseFloat(number1) - parseFloat(number2))
                            setText('The result is ')
                            const str = number1 + " - " + number2 + " = " + (parseFloat(number1) - parseFloat(number2));
                            setData([...data,{key:str}])
                           }

  return (
    <View style={styles.container}>
      <View style={{padding: 40}}>
      <Text>{text}{answer}</Text>
      </View>
      <TextInput
       style={{width: 200, borderColor: 'grey', borderWidth: 1}}
       onChangeText={number1 => setNumber1(number1)}
       value={number1}
       keyboardType='numeric'/>
       <TextInput
       style={{width: 200, borderColor: 'grey', borderWidth: 1}}
       onChangeText={number2 => setNumber2(number2)}
       value={number2}
       keyboardType='numeric'/>
      <StatusBar style="auto" />
      <View style={{width: 100, flexDirection: 'row', padding: 10, alignItems: 'center', justifyContent: 'space-around'}}>
        <Button title="+" onPress={plusNumbers}/>
        <Button title="-" onPress={minusNumbers}/>
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) =>
          <Text>{item.key}</Text>
        }
      />
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
