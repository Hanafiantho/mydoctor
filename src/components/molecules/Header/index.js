import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { IconArrowBack } from '../../../assets';
import { Button, Gap } from '../../atoms';
import { colors, fonts } from '../../../utils';

const Header = ({ title, onPress }) => {
    return (
        <View style={styles.headerContainer}>
            <Button type="icon" icon={<IconArrowBack />} onPress={onPress} />
            <Text style={styles.headerTitle}>{title}</Text>
            <Gap width={24} />
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    headerContainer: {
        paddingHorizontal: 16,
        paddingTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.white,
    },
    headerTitle: {
        flex: 1,
        fontSize: 20,
        fontFamily: fonts.primary[600],
        textAlign: 'center',
        color: colors.text.primary,
    },
});
