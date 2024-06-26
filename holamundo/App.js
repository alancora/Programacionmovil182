import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'; 


const Texto = ({ estilo }) => {
  const [contenido, setContenido] = useState('HolaMundo');

  
  const actualizarContenido = () => {
    setContenido('State actualizo este texto');
  };

  return (
    <TouchableOpacity onPress={actualizarContenido}>
      <Text style={[styles.text, estilo]}>{contenido}</Text>
    </TouchableOpacity>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      {/* Renderizando el componente Texto con diferentes estilos */}
      <Texto estilo={styles.red} />
      <Texto estilo={styles.green} />
      <Texto estilo={styles.blue} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  text: {
    color: 'yellow',
    fontSize: 25,
    height: 150,
    width: 150,
    textAlign: 'center', 
    textAlignVertical: 'center', 
  },
  red: {
    flex: 1, 
    backgroundColor: 'blue',
  },
  green: {
    flex: 2, 
    backgroundColor: 'red',
  },
  blue: {
    flex: 3, 
    backgroundColor: 'blue',
  },
});
