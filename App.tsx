import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import AppNavigator from './src/navigation/AppNavigator'
import BottomTab from './src/navigation/bottomTab'
import { NavigationContainer } from '@react-navigation/native'
import SplashScreen from 'react-native-splash-screen'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import store from './src/Redux/store'
import { Provider } from 'react-redux'

const App = () => {
  // SplashScreen.hide()
  return (

    <NavigationContainer>
      <Provider store={store}>

      <BottomTab />
      </Provider>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})