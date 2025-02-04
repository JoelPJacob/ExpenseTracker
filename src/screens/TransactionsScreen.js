import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTransaction } from '../redux/transactionSlice';
import { getItem } from '../utils/storage';
import { DeleteIcon } from '../svg';

const TransactionsScreen = () => {
  const [userEmail, setUserEmail] = useState(null);
  const transactions = useSelector((state) => state.transactions.transactions);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      const storedUser = await getItem('loggedInUser');
      if (storedUser) {
        setUserEmail(storedUser.email);
      }
    };

    fetchUser();
  }, []);

  const handleDelete = (id) => {
    Alert.alert(
      "Confirm Deletion",
      "Are you sure you want to delete this transaction?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Delete", onPress: () => dispatch(deleteTransaction(id)), style: "destructive" },
      ]
    );
  };

  // Filter transactions by userEmail
  const userTransactions = transactions.filter(
    (transaction) => transaction.userEmail === userEmail
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Transaction List</Text>
      {userTransactions.length === 0 ? (
        <Text style={styles.noTransactions}>No transactions added</Text>
      ) : (
        <FlatList
          data={userTransactions}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.transaction}>
              <View style={styles.transactionDetails}>
                <Text
                  style={styles.title}
                  numberOfLines={1}
                >
                  {item.title}
                </Text>
                <Text style={styles.amount}>₹{item.amount}</Text>
              </View>
              <TouchableOpacity onPress={() => handleDelete(item.id)} style={styles.deleteButton}>
                {/* <Text style={styles.deleteText}>Delete</Text> */}
                <DeleteIcon width={20} height={20} />
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 10,
  },
  noTransactions: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
  transaction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 18,
    marginVertical: 5,
    alignItems: 'center',
  },
  transactionDetails: {
    flex: 1,
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  amount: {
    fontSize: 14,
    color: 'green',
  },
  deleteButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  deleteText: {
    color: 'red',
    fontSize: 14,
    fontWeight: '500',
  },
});

export default TransactionsScreen;
