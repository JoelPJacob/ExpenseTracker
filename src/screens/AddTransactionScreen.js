import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { addTransaction } from '../redux/transactionSlice';
import InputField from '../components/InputField';
import Button from '../components/Button';
import { transactionValidationSchema } from '../validations/transactionValidation';
import Toast from '../components/ToastComponent';
import { getItem } from '../utils/storage'

const AddTransactionScreen = ({ navigation }) => {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      const storedUser = await getItem('loggedInUser');
      setUser(storedUser);
    };

    fetchUser();
  }, []);

  return (
    <Formik
      initialValues={{ title: '', amount: '' }}
      validationSchema={transactionValidationSchema}
      onSubmit={(values, { resetForm }) => {
        if (!user) {
          Toast("User not found!");
          return;
        }
        const transaction = { 
          id: Date.now(), 
          ...values, 
          userEmail: user.email, 
        };
        
        dispatch(addTransaction(transaction));
        resetForm();
        Toast("Transaction Added Successfully");
        navigation.navigate('Transactions');
      }}
    >
      {({ handleChange, handleSubmit, values, errors, touched }) => (
        <View style={styles.container}>
          <InputField
            label="Title"
            placeholder="Enter Title"
            value={values.title}
            onChangeText={handleChange('title')}
            required={true}
          />
          {touched.title && errors.title && <Text style={styles.errorText}>{errors.title}</Text>}

          <InputField
            label="Amount"
            placeholder="Enter Amount"
            keyboardType="numeric"
            value={values.amount}
            onChangeText={handleChange('amount')}
            required={true}
          />
          {touched.amount && errors.amount && <Text style={styles.errorText}>{errors.amount}</Text>}

          <Button title="Add Transaction" onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
  },
});

export default AddTransactionScreen;
