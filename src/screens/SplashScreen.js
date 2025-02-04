import React, { useEffect } from 'react';
import { Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getItem } from '../utils/storage';
import { useDispatch } from 'react-redux';
import { login } from '../redux/userSlice';
import LottieView from 'lottie-react-native';
import { LinearGradient } from 'react-native-linear-gradient';

const SplashScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(async () => {
      const storedUser = await getItem('loggedInUser');
      // console.warn('storedUser', storedUser);
      if (storedUser) {
        dispatch(login(storedUser));
        navigation.replace('Home');
      } else {
        navigation.replace('Login');
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [dispatch, navigation]);

  return (
    <LinearGradient
      colors={['#1D4E89', '#00A6A6']}
      style={styles.container}
    >
      <LottieView
        source={require('../../assets/animations/splash-animation.json')}
        autoPlay
        loop
        style={styles.animation}
      />
      <Text style={styles.text}>Welcome to the Expense Tracker!</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 20,
  },
  animation: {
    width: 150,
    height: 150,
  },
});

export default SplashScreen;
