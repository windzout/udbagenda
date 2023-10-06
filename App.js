import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import ContactListScreen from './ContactListScreen';
import AddContactScreen from './AddContactScreen';

const AppNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    Register: RegisterScreen,
    ContactList: ContactListScreen,
    AddContact: AddContactScreen,
  },
  {
    initialRouteName: 'Login', // Pantalla inicial al arrancar la aplicación
  }
);

const AppContainer = createAppContainer(AppNavigator);

function App() {
  return <AppContainer />;
}

export default App;
