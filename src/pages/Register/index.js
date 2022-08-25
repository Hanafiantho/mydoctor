import { StyleSheet, SafeAreaView, View } from 'react-native';
import React from 'react';
import { Header, Input, Gap, Button } from '../../components';
import { colors } from '../../utils';

const Register = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Header title="Daftar Akun" onPress={() => navigation.goBack()} />
            <View style={styles.registerConten}>
                <Input label="Full Name" />
                <Gap height={24} />
                <Input label="Pekerjaan" />
                <Gap height={24} />
                <Input label="Email Address" />
                <Gap height={24} />
                <Input label="Password" />
                <Gap height={40} />
                <Button
                    children="Continue"
                    primary
                    onPress={() => navigation.navigate('Upload Photo')}
                />
            </View>
        </View>
    );
};

export default Register;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1,
    },
    registerConten: {
        padding: 40,
    },
});
