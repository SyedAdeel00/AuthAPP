import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [passcode, setPasscode] = useState('');

  const handleLogin = async () => {
    const storedUserDataString = await AsyncStorage.getItem('userData');
    console.log("Stored user data:", storedUserDataString); // Add this line
    if (storedUserDataString) {
      const storedUserData = JSON.parse(storedUserDataString);
      console.log("Input data:", phoneNumber, passcode); // Add this line
      if (
        storedUserData.phoneNumber === phoneNumber &&
        storedUserData.passcode === passcode
      ) {
        navigation.navigate('Home', storedUserData);
      } else {
        alert('Invalid phone number or passcode');
      }
    } else {
      alert('Please sign up first!');
    }
  };
  
  

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login</Text>
      <TextInput
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
        style={styles.input}
      />
      <TextInput
        placeholder="Passcode"
        value={passcode}
        onChangeText={setPasscode}
        secureTextEntry
        keyboardType="numeric"
        style={styles.input}
      />
      <Button title="Login" onPress={handleLogin} />
      <Text style={styles.signupText} onPress={() => navigation.navigate('Signup')}>Need to register? Sign up</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '80%',
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  signupText: {
    marginTop: 20,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
