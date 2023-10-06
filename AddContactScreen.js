import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

function AddContactScreen({ navigation }) {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleAddContact = () => {
    if (!name || !lastName || !phoneNumber) {
      Alert.alert('Campos Vacíos', 'Por favor, completa todos los campos.');
      return;
    }

    const newContact = {
      id: Date.now().toString(),
      name,
      lastName,
      phoneNumber,
    };

    navigation.navigate('ContactList');
  };

  return (
    <View>
      <TextInput
        placeholder="Nombre"
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        placeholder="Apellido"
        value={lastName}
        onChangeText={text => setLastName(text)}
      />
      <TextInput
        placeholder="Número de teléfono"
        value={phoneNumber}
        onChangeText={text => setPhoneNumber(text)}
        keyboardType="numeric"
      />
      <Button title="Agregar Contacto" onPress={handleAddContact} />
    </View>
  );
}

export default AddContactScreen;
