import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

function ContactForm({ onAddContact }) {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleAddContact = () => {
    // Verifica si se han ingresado datos válidos
    if (name.trim() === '' || lastName.trim() === '' || phoneNumber.trim() === '') {
      alert('Por favor, completa todos los campos.');
      return;
    }

    // Crea un objeto de contacto con los datos ingresados
    const newContact = {
      name,
      lastName,
      phoneNumber,
    };

    // Llama a la función proporcionada para agregar el contacto
    onAddContact(newContact);

    // Limpia los campos después de agregar el contacto
    setName('');
    setLastName('');
    setPhoneNumber('');
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

export default ContactForm;
