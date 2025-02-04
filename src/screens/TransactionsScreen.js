import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTransaction } from '../redux/transactionSlice';
import { getItem } from '../utils/storage';
import { DeleteIcon } from '../svg';
import moment from 'moment'; 

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

  const userTransactions = transactions.filter(
    (transaction) => transaction.userEmail === userEmail
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>💰 My Transactions</Text>
      {userTransactions.length === 0 ? (
        <Text style={styles.noTransactions}>No transactions added yet. 😊</Text>
      ) : (
        <FlatList
          data={userTransactions}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.transactionCard}>
              <View style={styles.transactionDetails}>
                <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
                <Text style={styles.date}>{moment(item.date).format('DD-MM-YYYY')}</Text>
                <Text style={styles.amount}>₹{item.amount}</Text>
              </View>
              <TouchableOpacity onPress={() => handleDelete(item.id)} style={styles.deleteButton}>
                <DeleteIcon width={20} height={20} fill="#FF5C5C" />
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
    backgroundColor: '#F4F7F9',
  },
  header: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
  },
  noTransactions: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 30,
    color: '#888',
  },
  transactionCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginVertical: 8,
    alignItems: 'center',
  },
  transactionDetails: {
    flex: 1,
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  date: {
    fontSize: 13,
    color: '#888',
    marginVertical: 4,
  },
  amount: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4CAF50',
  },
  deleteButton: {
    padding: 5,
    borderRadius: 8,
    backgroundColor: '#FFEAEA',
  },
});

export default TransactionsScreen;
