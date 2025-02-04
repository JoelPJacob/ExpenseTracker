import React, { useState } from 'react';
import { TextInput, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { EyeOpenIcon, EyeClosedIcon } from '../svg';

const InputField = ({
    label,
    placeholder,
    value,
    onChangeText,
    onBlur,
    keyboardType = 'default',
    secureTextEntry = false,
    error,
    required = false, 
}) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View style={styles.container}>
            {label && (
                <View style={styles.labelContainer}>
                    <Text style={styles.label}>{label}</Text>
                    {required && <Text style={styles.required}>*</Text>} 
                </View>
            )}
            <View style={[styles.inputContainer, error && styles.inputError]}>
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    value={value}
                    onChangeText={onChangeText}
                    onBlur={onBlur}
                    keyboardType={keyboardType}
                    secureTextEntry={secureTextEntry && !showPassword}
                    placeholderTextColor={'#36454f'}
                />
                {secureTextEntry && (
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.icon}>
                        {showPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}
                    </TouchableOpacity>
                )}
            </View>
            {error && <Text style={styles.error}>{error}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    labelContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    label: {
        fontSize: 14,
        fontWeight: '500',
        marginBottom: 5,
    },
    required: {
        color: 'red',
        marginLeft: 5,
        fontSize: 16,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    inputError: {
        borderColor: 'red',
    },
    input: {
        flex: 1,
        paddingVertical: 10,
        color:'black'
    },
    icon: {
        padding: 10,
    },
    error: {
        color: 'red',
        fontSize: 12,
        marginTop: 5,
    },
});

export default InputField;
