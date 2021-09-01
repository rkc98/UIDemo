import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import OnBoarding from '../screens/OnBoarding'
import ThirdDemo from '../screens/ThirdDemo'
import TwoDemo from '../screens/TwoDemo'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={OnBoarding} />
                <Stack.Screen name="second" component={TwoDemo} />
                <Stack.Screen name="third" component={ThirdDemo} />
                

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator

const styles = StyleSheet.create({})
