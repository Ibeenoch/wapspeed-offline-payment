import React, { useState } from 'react'
import { Stack, router } from 'expo-router'
import { Provider, } from 'react-redux'
import { persistor, store } from '../features/store'
import { PersistGate } from 'redux-persist/integration/react';
import { TouchableOpacity, View, useColorScheme } from 'react-native'
import { useAppSelector } from '../features/hooks'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import SpinnerModal from '../components/SpinnerModal';
import className from 'twrnc';
import { Image } from 'expo-image';
import ArrowBack from '../assets/icons/arrow-back-icon.svg'

const App = () => {
    const { showmodal, } = useAppSelector((state) => state.auth );

    return (
        <>
            <Stack>
                <Stack.Screen name='(tabs)'  options={{ headerShown: false,   }}  />
                <Stack.Screen name='offline'  options={{ 
                   headerStyle: {
                    backgroundColor: '#f96d0e',
                  },
                  title: 'Offline Payment',
                  headerTitleAlign: 'center',
                  }}  />
                <Stack.Screen name='scanner'  options={{ 
                   headerStyle: {
                    backgroundColor: '#f96d0e',
                  },
                  title: 'Scanning',
                  headerTitleAlign: 'center',
                  
                  }}  />
                  
                <Stack.Screen name='confirmdetails'  options={{ 
                   headerStyle: {
                    backgroundColor: '#f96d0e',
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
                    backgroundColor: '#f96d0e',
                  },
                  title: 'Transaction Pin',
                  headerTitleAlign: 'center',
                  }}  />

                <Stack.Screen name='success'  options={{ 
                   headerStyle: {
                    backgroundColor: '#f96d0e',
                  },
                  title: 'Processing',
                  headerTitleAlign: 'center',
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
