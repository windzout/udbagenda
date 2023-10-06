navigation.navigate('ContactList');
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, Alert } from 'react-native';

function ContactListScreen({ navigation }) {
  const [contacts, setContacts] = useState([]);

 
  const initialContacts = [
    { id: '1', name: 'Juan', lastName: 'Pérez', phoneNumber: '555-1234' },
    { id: '2', name: 'María', lastName: 'González', phoneNumber: '555-5678' },
  ];

  useEffect(() => {
    setContacts(initialContacts);
  }, []);

  const handleAddContact = () => {
    navigation.navigate('AddContact');
  };

  const handleDeleteContact = (contactId) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== contactId);
    setContacts(updatedContacts);
  };

  return (
    <View>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name} {item.lastName}</Text>
            <Text>{item.phoneNumber}</Text>
            <Button
              title="Eliminar"
              onPress={() => handleDeleteContact(item.id)}
            />
          </View>
        )}
      />
      <Button title="Agregar Contacto" onPress={handleAddContact} />
    </View>
  );
}

const handleAddContact = () => {
    navigation.navigate('AddContact');
  };

  return (
    <View>
      <FlatList
 
      />
      <Button title="Agregar Contacto" onPress={handleAddContact} />
    </View>
  )

export default ContactListScreen;
