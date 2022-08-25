import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {
    DoctorCategory,
    Gap,
    HomeProfile,
    News,
    RatedDoctor,
} from '../../components';
import { colors, fonts } from '../../utils';
import {
    AlexaDummy,
    ILDokterObat,
    ILDokterPsikiater,
    ILDokterUmum,
    PoeDummy,
    SunnyDummy,
    News1Dummy,
    News2Dummy,
    News3Dummy,
} from '../../assets';

const Doctor = () => {
    const doctorCategory = [
        { icon: ILDokterUmum, name: 'dokter umum' },
        { icon: ILDokterPsikiater, name: 'psikiater' },
        { icon: ILDokterObat, name: 'dokter obat' },
        { icon: ILDokterObat, name: 'dokter anak' },
    ];

    const topRatedDoctors = [
        {
            photo: AlexaDummy,
            name: 'Alexa Rachel',
            category: 'Podiatrist',
            rate: 5,
        },
        {
            photo: SunnyDummy,
            name: 'Sunny Frank',
            category: 'Podiatrist',
            rate: 3,
        },
        {
            photo: PoeDummy,
            name: 'Poe Minn',
            category: 'Podiatrist',
            rate: 4,
        },
    ];

    const newsData = [
        {
            title: 'Is it safe to stay at home during coronavirus',
            date: 'Today',
            Image: News1Dummy,
        },
        {
            title: 'Consume yellow citrus helps you healthier',
            date: 'Today',
            Image: News2Dummy,
        },
        {
            title: 'Learn how to make a proper orange juice at home',
            date: 'Today',
            Image: News3Dummy,
        },
    ];

    return (
        <View style={styles.doctorContainer}>
            <View style={styles.doctorContent}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.profileSection}>
                        <HomeProfile
                            name="Shayna Melinda"
                            profesion="Product Designer"
                        />
                    </View>

                    <Text style={styles.doctorPageTitle}>
                        Mau konsultasi dengan siapa hari ini?
                    </Text>

                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}>
                        <Gap width={16} />
                        {doctorCategory.map((each, key) => (
                            <DoctorCategory
                                key={key}
                                icon={each.icon}
                                category={each.name}
                            />
                        ))}
                        <Gap width={6} />
                    </ScrollView>
                    <Gap height={30} />

                    <View style={styles.topRatedDoctorSection}>
                        <Text style={styles.sectionTitle}>
                            Top Rated Doctors
                        </Text>
                        {topRatedDoctors.map((each, key) => (
                            <RatedDoctor
                                key={key}
                                photo={each.photo}
                                name={each.name}
                                category={each.category}
                                rate={each.rate}
                            />
                        ))}
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <Gap width={16} />
                        <Text style={styles.sectionTitle}>Good News</Text>
                    </View>
                    {newsData.map((each, key) => (
                        <News
                            key={key}
                            title={each.title}
                            date={each.date}
                            image={each.Image}
                        />
                    ))}

                    <Gap height={30} />
                </ScrollView>
            </View>
        </View>
    );
};

export default Doctor;

const styles = StyleSheet.create({
    doctorContainer: {
        flex: 1,
        backgroundColor: colors.secondary,
    },
    doctorContent: {
        flex: 1,
        backgroundColor: colors.white,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    doctorPageTitle: {
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        fontSize: 20,
        maxWidth: 209,
        marginLeft: 16,
        marginBottom: 16,
    },
    profileSection: {
        paddingHorizontal: 16,
        marginVertical: 30,
    },
    topRatedDoctorSection: {
        paddingHorizontal: 16,
        marginBottom: 14,
    },
    sectionTitle: {
        fontFamily: fonts.primary[600],
        fontSize: 16,
        color: colors.text.primary,
        marginBottom: 16,
    },
});
