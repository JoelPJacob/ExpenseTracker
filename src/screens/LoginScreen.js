import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/userSlice';
import { Formik } from 'formik';
import { loginValidationSchema } from '../validations';
import { Button, InputField, Toast } from '../components';

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);

  const handleLogin = (values) => {
    const user = users.find((u) => u.email === values.email && u.password === values.password);

    if (user) {
      dispatch(login(user));
      Toast('Login Successful');
      navigation.replace('Home');
    } else {
      Toast('Login Failed, Invalid credentials');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitle}>Please enter your credentials to continue.</Text>
      </View>

      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={loginValidationSchema}
        onSubmit={handleLogin}
      >
        {({ handleChange, handleSubmit, values, errors, touched, handleBlur, resetForm }) => (
          <View style={styles.formContainer}>
            <InputField
              placeholder="Email"
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              error={touched.email && errors.email}
              style={styles.inputField}
            />
            <InputField
              placeholder="Password"
              secureTextEntry
              value={values.password}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              error={touched.password && errors.password}
              style={styles.inputField}
            />
            <Button
              title="Login"
              onPress={handleSubmit}
              style={styles.loginButton}
            />
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Register');
                resetForm();
              }}
              style={styles.registerLink}
            >
              <Text style={styles.registerText}>Don't have an account? Register here</Text>
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
    backgroundColor: '#f5f5f5',
  },
  header: {
    marginBottom: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#36454f',
    marginTop: 10,
  },
  formContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  inputField: {
    marginBottom: 15,
  },
  loginButton: {
    backgroundColor: '#007AFF',
  },
  registerLink: {
    marginTop: 10,
    alignItems: 'center',
  },
  registerText: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default LoginScreen;
