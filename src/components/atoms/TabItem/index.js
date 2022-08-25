import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import {
    IconDoctor,
    IconDoctorActive,
    IconHospitals,
    IconHospitalsActive,
    IconMessages,
    IconMessagesActive,
} from '../../../assets';
import Gap from '../Gap';
import { colors, fonts } from '../../../utils';

const TabItem = ({ label, active, onPress, onLongPress }) => {
    const Icon = () => {
        if (label === 'Doctor') {
            return active ? <IconDoctorActive /> : <IconDoctor />;
        }
        if (label === 'Messages') {
            return active ? <IconMessagesActive /> : <IconMessages />;
        }
        if (label === 'Hospitals') {
            return active ? <IconHospitalsActive /> : <IconHospitals />;
        }

        return <IconDoctor />;
    };

    return (
        <TouchableOpacity
            style={styles.tabItemContainer}
            onPress={onPress}
            onLongPress={onLongPress}>
            <Icon />
            <Gap height={4} />
            <Text style={styles.itemTitle(active)}>{label}</Text>
        </TouchableOpacity>
    );
};

export default TabItem;

const styles = StyleSheet.create({
    tabItemContainer: {
        flex: 1,
        alignItems: 'center',
    },
    itemTitle: (active) => ({
        fontFamily: fonts.primary[600],
        fontSize: 10,
        color: active ? colors.text.menuActive : colors.text.menuInActive,
    }),
});
