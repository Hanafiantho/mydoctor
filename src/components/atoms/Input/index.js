import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';
import { colors, fonts } from '../../../utils';

const Input = ({ label }) => {
    return (
        <View>
            <Text style={styles.inputLabelStyle}>{label}</Text>
            <TextInput style={styles.textInputStyle} />
        </View>
    );
};

export default Input;

const styles = StyleSheet.create({
    inputLabelStyle: {
        fontSize: 16,
        fontFamily: fonts.primary[400],
        color: colors.text.secondary,
        marginBottom: 6,
    },
    textInputStyle: {
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 10,
        padding: 12,
    },
});
