import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { colors, fonts } from '../../../utils';
import { News1Dummy } from '../../../assets';

const News = ({ title, date, image }) => {
    return (
        <View style={styles.newsContainer}>
            <View style={styles.titleWrapper}>
                <Text style={styles.newsTitle}>{title}</Text>
                <Text style={styles.newsDate}>{date}</Text>
            </View>
            <View>
                <Image source={image} style={styles.newsPicture} />
            </View>
        </View>
    );
};

export default News;

const styles = StyleSheet.create({
    newsContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
        paddingBottom: 12,
        paddingHorizontal: 16,
        marginBottom: 16,
    },
    titleWrapper: {
        flex: 1,
    },
    newsTitle: {
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        fontSize: 16,
        marginBottom: 4,
    },
    newsDate: {
        fontFamily: fonts.primary[400],
        fontSize: 12,
        color: colors.text.secondary,
    },
    newsPicture: {
        width: 80,
        height: 60,
    },
});
