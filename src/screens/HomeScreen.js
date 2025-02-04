import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert, Image, ActivityIndicator } from 'react-native';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/userSlice';
import Button from '../components/Button';
import { getItem } from '../utils/storage';
import ProfilePicture from '../../assets/avatar.png'

const HomeScreen = ({ navigation }) => {
  const [storedUser, setStoredUser] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getItem('loggedInUser');
      setStoredUser(user);
    };

    fetchUser();
  }, []);

  const handleLogout = () => {
    Alert.alert(
      "Confirm Logout",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel",
        },
        {
          text: "Logout",
          onPress: () => {
            dispatch(logout());
            navigation.replace('Login');
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      {storedUser ? (
        <View style={styles.userInfo}>
          <Image source={ProfilePicture} style={styles.profilePic} />
          <Text style={styles.welcomeText}>Welcome,</Text>
          <Text style={styles.userName}>{storedUser.name}</Text>
          <Text style={styles.userEmail}>{storedUser.email}</Text>
        </View>
      ) : (
        <ActivityIndicator />
      )}

      <Button title="Add Transaction" onPress={() => navigation.navigate('AddTransaction')} />
      <Button title="View Transactions" onPress={() => navigation.navigate('Transactions')} />
      <Button title="Logout" onPress={handleLogout} style={{ backgroundColor: 'red' }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  userInfo: {
    marginBottom: 30,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
    borderColor: 'black',
    borderWidth: 1
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  userName: {
    fontSize: 20,
    fontWeight: '500',
    color: '#333',
    marginBottom: 5,
  },
  userEmail: {
    fontSize: 15,
    color: 'gray',
  },
  loadingText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default HomeScreen;
