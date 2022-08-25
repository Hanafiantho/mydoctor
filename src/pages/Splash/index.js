import { StyleSheet, Text, SafeAreaView } from 'react-native';
import React, { useEffect } from 'react';
import { ILLogo } from '../../assets';
import { colors, fonts } from '../../utils';

export default function Splash({ navigation }) {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Get Started');
        }, 3000);
    }, [navigation]);

    return (
        <SafeAreaView style={styles.splashContainer}>
            <ILLogo />
            <Text style={styles.splashTitle}>My Doctor</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    splashContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
    },
    splashTitle: {
        fontSize: 20,
        color: colors.text.primary,
        marginTop: 20,
        fontFamily: fonts.primary[600],
    },
});
