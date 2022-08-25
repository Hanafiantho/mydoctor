import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { colors, fonts } from '../../../utils';
import { IconStar } from '../../../assets';

const RatedDoctor = ({ photo, name, category, rate }) => {
    return (
        <View style={styles.ratedDoctorContainer}>
            <View>
                <Image source={photo} style={styles.avatar} />
            </View>
            <View style={styles.doctorInfo}>
                <Text style={styles.doctorName}>{name}</Text>
                <Text>{category}</Text>
            </View>
            <View style={styles.doctorRate}>
                {[...Array(rate)].map((each, key) => (
                    <IconStar key={key} />
                ))}
            </View>
        </View>
    );
};

export default RatedDoctor;

const styles = StyleSheet.create({
    ratedDoctorContainer: {
        flexDirection: 'row',
        marginBottom: 16,
    },
    doctorInfo: {
        justifyContent: 'center',
        paddingLeft: 12,
        flex: 1,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
    },
    doctorName: {
        fontFamily: fonts.primary[600],
        fontSize: 16,
        color: colors.text.primary,
        marginBottom: 2,
    },
    doctorCategory: {
        color: colors.text.secondary,
        fontFamily: fonts.primary[400],
        fontSize: 12,
    },
    doctorRate: {
        flexDirection: 'row',
    },
});
