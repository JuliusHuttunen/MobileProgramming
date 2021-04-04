import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function History({ route }) {
  const [text, setText] = React.useState('Calculator history');
  const { data } = route.params;


  return (
    <View style={styles.container}>
      <View style={{padding: 40}}>
      <Text>{text}</Text>
      </View>
      <StatusBar style="auto" />
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