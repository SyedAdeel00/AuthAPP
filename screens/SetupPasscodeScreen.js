import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SetupPasscodeScreen = ({ navigation, route }) => {
  const [passcode, setPasscode] = useState('');
  const [confirmPasscode, setConfirmPasscode] = useState('');

  const handleSetupPasscode = async () => {
    if (passcode === confirmPasscode && passcode.length === 4) {
      const userData = {
        name: route.params.name,
        phoneNumber: route.params.phoneNumber,
        age: route.params.age,
        address: route.params.address,
        passcode: passcode,
      };
      console.log("Saving user data:", userData); // Add this line
      // Store user data in AsyncStorage
      await AsyncStorage.setItem('userData', JSON.stringify(userData));
      navigation.navigate('Home', userData);
    } else {
      alert('Passcodes do not match or invalid passcode length!');
    }
  };
  
  

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Setup Passcode</Text>
      <TextInput
        placeholder="Enter Passcode"
        value={passcode}
        onChangeText={setPasscode}
        secureTextEntry
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        placeholder="Confirm Passcode"
        value={confirmPasscode}
        onChangeText={setConfirmPasscode}
        secureTextEntry
        keyboardType="numeric"
        style={styles.input}
      />
      <Button title="Set Passcode" onPress={handleSetupPasscode} />
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
});

export default SetupPasscodeScreen;
