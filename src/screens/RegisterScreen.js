import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../redux/userSlice';
import InputField from '../components/InputField';
import Button from '../components/Button';
import { registerValidationSchema } from '../validations';
import Toast from '../components/ToastComponent';

const RegisterScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users); 

  // Handle Registration
  const handleRegister = (values) => {
    const existingUser = users.find((u) => u.email === values.email); // Check if the user already exists

    if (existingUser) {
      Toast('User already registered with this email');
    } else {
      dispatch(registerUser(values));
      Toast('User Registered Successfully');
      navigation.navigate('Login');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subtitle}>Enter your details to register</Text>

      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={registerValidationSchema}
        onSubmit={handleRegister} 
      >
        {({ handleChange, handleSubmit, values, errors, touched, handleBlur }) => (
          <View style={styles.formContainer}>
            <InputField
              label="Name"
              placeholder="Enter your name"
              value={values.name}
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              error={touched.name && errors.name}
              required={true}
            />
            <InputField
              label="Email"
              placeholder="Enter your email"
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              keyboardType="email-address"
              error={touched.email && errors.email}
              required={true}
            />
            <InputField
              label="Password"
              placeholder="Enter your password"
              value={values.password}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              secureTextEntry
              error={touched.password && errors.password}
              required={true}
            />
            <Button
              title="Register"
              onPress={handleSubmit}
              style={styles.registerButton}
            />
            <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.loginLink}>
              <Text style={styles.loginText}>Already have an account? Login</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#36454f',
    marginTop: 10,
    textAlign: 'center',
  },
  formContainer: {
    width: '100%',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  registerButton: {
    backgroundColor: '#007AFF',
  },
  loginLink: {
    marginTop: 10,
    alignItems: 'center',
  },
  loginText: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default RegisterScreen;
