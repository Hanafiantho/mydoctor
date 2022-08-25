import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors, fonts } from '../../../utils';

const Link = ({ title, size, align }) => {
    return <Text style={styles.linkStyle(size, align)}>{title}</Text>;
};

export default Link;

const styles = StyleSheet.create({
    linkStyle: (size, align) => ({
        fontSize: size,
        color: colors.text.secondary,
        textDecorationLine: 'underline',
        fontFamily: fonts.primary[400],
        textAlign: align,
    }),
});
