import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import firebase from 'firebase';

function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
   
  const handleLogin = () => {
    if (email.trim() === '' || password === '') {
      Alert.alert('Campos Vacíos', 'Por favor, completa todos los campos.');
      return;
    }

    
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        // Inicio de sesión exitoso, puedes redirigir a la siguiente pantalla
        // O realizar cualquier otra acción necesaria
      })
      .catch(error => {
        // Manejo de errores de inicio de sesión
        Alert.alert('Error de inicio de sesión', error.message);
      });
  };

  return (
    <View>
      <TextInput
        placeholder="Correo electrónico"
        value={email}
        onChangeText={text => setEmail(text)}
        keyboardType="email-address" // Para mostrar el teclado de correo electrónico
      />
      <TextInput
        placeholder="Contraseña"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />
      <Button title="Iniciar sesión" onPress={handleLogin} />
    </View>

    

    
  );
}
};

const handleRegister = () => {
    navigation.navigate('Register'); // Navegar a la pantalla de registro
  };

  return (
    <View>
      {/* ... otros campos de entrada y botón de inicio de sesión ... */}
      <Button title="Registrarme" onPress={handleRegister} />
    </View>
  )

export default LoginScreen;