import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({ navigation, route }) => {
  const handleLogout = () => {
    // await AsyncStorage.removeItem('userData');
    navigation.navigate('Login');
  };

  const userData = route.params;

  if (!userData) {
    // Handle case when userData is not available
    return (
      <View style={styles.container}>
        <Text>Error: User data not available</Text>
      </View>
    );
  }

  const { name, phoneNumber, age, address } = userData;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome, {name}</Text>
      <Text>Phone Number: {phoneNumber}</Text>
      <Text>Age: {age}</Text>
      <Text>Address: {address}</Text>
      <Button title="Logout" onPress={handleLogout} />
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
});

export default HomeScreen;
