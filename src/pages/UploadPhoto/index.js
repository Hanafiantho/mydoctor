import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { Header, Link, Button, Gap } from '../../components';
import { colors, fonts } from '../../utils';
import { ILNullPhoto, IconAddPhoto } from '../../assets';

const UploadPhoto = ({ navigation }) => {
    return (
        <View style={styles.uploadPhotoContainer}>
            <Header title="Upload Photo" onPress={() => navigation.goBack()} />
            <View style={styles.addPhotoContent}>
                <View style={styles.profile}>
                    <View style={styles.avatarWrapper}>
                        <Image source={ILNullPhoto} style={styles.avatar} />
                        <IconAddPhoto style={styles.iconAddPhoto} />
                    </View>
                    <Text style={styles.userName}>Shayna Melinda</Text>
                    <Text style={styles.userJob}>Product Designer</Text>
                </View>
                <View style={styles.bottomContent}>
                    <Button children="Upload and Continue" primary />
                    <Gap height={30} />
                    <Link title="Skip for this" align="center" size={16} />
                </View>
            </View>
        </View>
    );
};

export default UploadPhoto;

const styles = StyleSheet.create({
    addPhotoContent: {
        flex: 1,
        justifyContent: 'space-between',
    },
    profile: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    avatarWrapper: {
        width: 130,
        height: 130,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 130 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 26,
    },
    avatar: {
        width: 110,
        height: 110,
    },
    iconAddPhoto: {
        position: 'absolute',
        bottom: 8,
        right: 6,
    },
    uploadPhotoContainer: {
        flex: 1,
        backgroundColor: colors.white,
    },
    userName: {
        fontSize: 24,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        textAlign: 'center',
        marginBottom: 4,
    },
    userJob: {
        fontFamily: fonts.primary[400],
        fontSize: 18,
        color: colors.text.secondary,
        textAlign: 'center',
    },
    bottomContent: {
        paddingHorizontal: 40,
        paddingBottom: 64,
    },
});
