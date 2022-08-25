import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors, fonts } from '../../utils';

const Messages = () => {
    return (
        <View style={styles.messagesContainer}>
            <View style={styles.messageContent}>
                <Text style={styles.pageTitle}>Messages</Text>
            </View>
        </View>
    );
};

export default Messages;

const styles = StyleSheet.create({
    messagesContainer: {
        flex: 1,
        backgroundColor: colors.secondary,
    },
    messageContent: {
        flex: 1,
        backgroundColor: colors.white,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    pageTitle: {
        marginTop: 30,
        marginLeft: 16,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        fontSize: 20,
    },
});
