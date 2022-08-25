import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { colors, fonts } from '../../../utils';
import { ProfileDummy } from '../../../assets';

const HomeProfile = ({ name, profesion }) => {
    return (
        <View style={styles.homeProfileContainer}>
            <View>
                <Image source={ProfileDummy} style={styles.avatar} />
            </View>
            <View
                style={{
                    paddingLeft: 12,
                    justifyContent: 'center',
                }}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.profesion}>{profesion}</Text>
            </View>
        </View>
    );
};

export default HomeProfile;

const styles = StyleSheet.create({
    avatar: {
        width: 46,
        height: 46,
        borderRadius: 46 / 2,
    },
    homeProfileContainer: {
        flexDirection: 'row',
    },
    name: {
        color: colors.text.primary,
        fontFamily: fonts.primary[600],
        fontSize: 16,
    },
    profesion: {
        color: colors.text.secondary,
        fontFamily: fonts.primary[400],
        fontSize: 12,
    },
});
