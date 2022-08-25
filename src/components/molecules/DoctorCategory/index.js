import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { colors, fonts } from '../../../utils';

const DoctorCategory = ({ icon, category }) => {
    return (
        <View style={styles.categoryItemContainer}>
            <Image source={icon} style={styles.categoryIcon} />
            <Text style={styles.categoryItemTitle}>Saya butuh</Text>
            <Text style={styles.categoryDoctorName}>{category}</Text>
        </View>
    );
};

export default DoctorCategory;

const styles = StyleSheet.create({
    categoryIcon: {
        width: 46,
        height: 46,
        marginBottom: 28,
    },
    categoryItemContainer: {
        borderRadius: 10,
        backgroundColor: colors.green2,
        padding: 12,
        marginRight: 10,
        width: 100,
    },
    categoryItemTitle: {
        fontFamily: fonts.primary[300],
        fontSize: 12,
        color: colors.text.primary,
    },
    categoryDoctorName: {
        fontFamily: fonts.primary[600],
        fontSize: 12,
        color: colors.text.primary,
    },
});
