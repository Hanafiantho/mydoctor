import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    Splash,
    GetStarted,
    Login,
    Register,
    UploadPhoto,
    Doctor,
    Hospitals,
    Messages,
} from '../pages';
import { ButtomNavigator } from '../components';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
        <Tab.Navigator tabBar={(props) => <ButtomNavigator {...props} />}>
            <Tab.Screen
                name="Doctor"
                component={Doctor}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="Messages"
                component={Messages}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="Hospitals"
                component={Hospitals}
                options={{ headerShown: false }}
            />
        </Tab.Navigator>
    );
};

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="splash"
                component={Splash}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Get Started"
                component={GetStarted}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Register"
                component={Register}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Upload Photo"
                component={UploadPhoto}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Main App"
                component={MainApp}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

export default Router;
