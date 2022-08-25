import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { colors, fonts } from '../../../utils';

const Button = ({ type, icon, primary, children, onPress }) => {
    if (type === 'icon') {
        return <TouchableOpacity onPress={onPress}>{icon}</TouchableOpacity>;
    }

    return (
        <TouchableOpacity
            style={styles.buttonContainer(primary)}
            onPress={onPress}>
            <Text style={styles.buttonText(primary)}>{children}</Text>
        </TouchableOpacity>
    );
};

export default Button;

const styles = StyleSheet.create({
    buttonContainer: (primary) => ({
        backgroundColor: primary
            ? colors.button.primary.background
            : colors.button.secondary.background,
        paddingVertical: 10,
        borderRadius: 10,
    }),
    buttonText: (primary) => ({
        color: primary
            ? colors.button.primary.text
            : colors.button.secondary.text,
        textAlign: 'center',
        fontSize: 18,
        fontFamily: fonts.primary[400],
    }),
});
