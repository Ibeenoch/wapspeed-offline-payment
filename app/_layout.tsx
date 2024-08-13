import React, { useState } from 'react'
import { Stack, router } from 'expo-router'
import { Provider, } from 'react-redux'
import { persistor, store } from '../features/store'
import { PersistGate } from 'redux-persist/integration/react';
import { View, useColorScheme } from 'react-native'
import { useAppSelector } from '../features/hooks'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import SpinnerModal from '../components/SpinnerModal';
import className from 'twrnc';
import { Image } from 'expo-image';

const App = () => {
    const { showmodal, } = useAppSelector((state) => state.auth );
    const currentMode = useColorScheme();
    return (
        <>
            <Stack>
                <Stack.Screen name='(tabs)'  options={{ headerShown: false,   }}  />
                <Stack.Screen name='offline'  options={{ 
                   headerStyle: {
                    backgroundColor: currentMode === 'light' ? '#f7f7f7' : '#000e28',
                  },
                  title: 'Offline Payment',
                  headerTitleAlign: 'center',
                  headerTintColor:  currentMode === 'light' ? '#000' : '#fff',
                  }}  />
                <Stack.Screen name='scanner'  options={{ 
                   headerStyle: {
                    backgroundColor:  currentMode === 'light' ? '#f7f7f7' : '#000e28',
                  },
                  title: 'Scanning',
                  headerTitleAlign: 'center',
                  headerTintColor:  currentMode === 'light' ? '#000' : '#fff',
                  }}  />
                  
                <Stack.Screen name='confirmdetails'  options={{ 
                   headerStyle: {
                    backgroundColor:  currentMode === 'light' ? '#f7f7f7' : '#000e28',
                  },
                  title: '',
                  headerLeft: () => {
                    return (
                      <View style={className`py-4`}>
                      <Image source={require('../assets/icons/waspspeed.png')} style={className`w-40 h-10 rounded-xl`} />
                      </View>
                    )
                  }
                  }}  />
                  
                <Stack.Screen name='confirmpayment'  options={{ 
                   headerStyle: {
                    backgroundColor:  currentMode === 'light' ? '#f7f7f7' : '#000e28',
                  },
                  title: 'Transaction Pin',
                  headerTitleAlign: 'center',
                  headerTintColor:  currentMode === 'light' ? '#000' : '#fff',
                  }}  />

                <Stack.Screen name='success'  options={{ 
                   headerStyle: {
                    backgroundColor:  currentMode === 'light' ? '#f7f7f7' : '#000e28',
                  },
                  title: 'Processing',
                  headerTitleAlign: 'center',
                  headerTintColor:  currentMode === 'light' ? '#000' : '#fff',
                  }}  />
            </Stack>
            {
                showmodal && (
                    <SpinnerModal />
                )
            }
        </>
  )
}

const AppProvider = () => (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <App />
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  );
  
  export default AppProvider;
