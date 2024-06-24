import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, Modal, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const CustomTextInput = ({ label, placeholder, value, onChangeText, secureTextEntry }) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}:</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const App = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <CustomTextInput
        label="Nombre"
        placeholder="Escribe tu nombre"
        value={nombre}
        onChangeText={setNombre}
      />
      <CustomTextInput
        label="Correo"
        placeholder="Escribe tu correo"
        value={correo}
        onChangeText={setCorreo}
        keyboardType="email-address"
      />
      <CustomTextInput
        label="Contraseña"
        placeholder="Escribe tu contraseña"
        value={contrasena}
        onChangeText={setContrasena}
        secureTextEntry
      />
      <TouchableOpacity style={styles.saveButton} onPress={handlePress}>
        <Text style={styles.saveButtonText}>Guardar...</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Formulario enviado</Text>
            <Text>Nombre: {nombre}</Text>
            <Text>Correo: {correo}</Text>
            <Text>Contraseña: {contrasena}</Text>
            <TouchableOpacity style={styles.button} onPress={closeModal}>
              <Text style={styles.buttonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20, 
  },
  input: {
    height: 40,
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    marginBottom: 10, 
  },
  label: {
    fontSize: 16,
    color: 'green', 
    marginBottom: 4,
  },
  saveButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default App;






