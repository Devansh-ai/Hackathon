import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Icons } from '../../assets';
import HomeScreen from '../../screens/homeScreen';
import AccountScreen from '../../screens/accountScreen';
import AnalyticsScreen from '../../screens/analytics';
import WalletScreen from '../../screens/walletScreen';


const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (

    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#1E90FF',
        tabBarInactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Home" component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={Icons.homeSelected}
              style={[styles.icon, { tintColor: color, width: size, height: size }]}
            />
          ),
        }}
      />
      <Tab.Screen name="Wallet" component={WalletScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={Icons.walletSelected}
              style={[styles.icon, { tintColor: color, width: size, height: size }]}
            />
          ),
        }} />
      <Tab.Screen name="Analytics" component={AnalyticsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={Icons.analysisSelected}
              style={[styles.icon, { tintColor: color, width: size, height: size }]}
            />
          ),
        }} />
      <Tab.Screen name="Account" component={AccountScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={Icons.accountSelected}
              style={[styles.icon, { tintColor: color, width: size, height: size }]}
            />
          ),
        }} />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
  },
});