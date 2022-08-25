import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import React from 'react';
import { BGGetStarted, ILLogo } from '../../assets';
import { Button, Gap } from '../../components';

export default function GetStarted({ navigation }) {
    return (
        <ImageBackground
            source={BGGetStarted}
            style={styles.getStartedContainer}>
            <View>
                <ILLogo />
                <Text style={styles.getStartedTitle}>
                    Konsultasi dengan dokter jadi lebih mudah & fleksibel
                </Text>
            </View>
            <View>
                <Button primary onPress={() => navigation.navigate('Register')}>
                    Get Started
                </Button>
                <Gap height={20} />
                <Button onPress={() => navigation.replace('Login')}>
                    Sign In
                </Button>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    getStartedContainer: {
        flex: 1,
        padding: 40,
        justifyContent: 'space-between',
    },
    getStartedTitle: {
        color: 'white',
        fontSize: 28,
        marginTop: 91,
        fontFamily: 'Nunito-SemiBold',
    },
});
