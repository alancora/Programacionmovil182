import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SectionList } from 'react-native';
import React from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <SectionList
        sections={[
          {
            title: 'Grupo A',
            data: [
              { key: '1', name: 'Alan' },
              { key: '2', name: 'Cristian' },
              { key: '3', name: 'Aldair' },
              { key: '4', name: 'Josue' },
            ],
          },
          {
            title: 'Grupo B',
            data: [
              { key: '5', name: 'Luis' },
              { key: '6', name: 'Caro' },
              { key: '7', name: 'Monse' },
              { key: '8', name: 'Majo' },
            ],
          },
          {
            title: 'Grupo C',
            data: [
              { key: '9', name: 'Valeria' },
              { key: '10', name: 'Andres' },
              { key: '11', name: 'Geraldine' },
              { key: '12', name: 'Marcos' },
            ],
          },
        ]}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
        renderSectionHeader={({ section }) => <Text style={styles.section}>{section.title}</Text>}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingTop: 40,
  },
  item: {
    padding: 10,
    fontSize: 24,
    height: 50,
    borderColor: 'blue',
    borderBottomWidth: 1,
  },
  section: {
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: 'red',
    paddingTop: 4,
    paddingBottom: 4,
  },
});
