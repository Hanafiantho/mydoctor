import { View, StyleSheet } from 'react-native';
import React from 'react';

const Gap = ({ width, height }) => {
    return <View style={styles.gapContainer(width, height)}></View>;
};

export default Gap;

const styles = StyleSheet.create({
    gapContainer: (width, height) => ({
        height: height,
        width: width,
    }),
});
