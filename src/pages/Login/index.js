import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ILLogo } from '../../assets';
import { Input, Gap, Link, Button } from '../../components';
import { colors, fonts } from '../../utils';

const Login = ({ navigation }) => {
    return (
        <View style={styles.loginContainer}>
            <ILLogo />
            <Text style={styles.loginTitle}>Masuk dan mulai berkonsultasi</Text>
            <Input label="Email Address" />
            <Gap height={24} />
            <Input label="Password" />
            <Gap height={10} />
            <Link title="Forgot My Password" size={12} />
            <Gap height={40} />
            <Button
                children="Sign In"
                primary
                onPress={() => navigation.replace('Main App')}
            />
            <Gap height={30} />
            <Link title="Create New Account" size={16} align="center" />
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    loginContainer: {
        backgroundColor: colors.white,
        flex: 1,
        padding: 40,
    },
    loginTitle: {
        fontSize: 20,
        marginVertical: 40,
        color: colors.text.primary,
        fontFamily: fonts.primary[600],
        maxWidth: 160,
    },
});
