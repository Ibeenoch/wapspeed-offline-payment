import React, { useState } from 'react'
import { Stack } from 'expo-router'
import { Provider, } from 'react-redux'
import { persistor, store } from '../features/store'
import { PersistGate } from 'redux-persist/integration/react';
import { useColorScheme } from 'react-native'
import { useAppSelector } from '../features/hooks'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import SpinnerModal from '../components/SpinnerModal'

const App = () => {
    const [loading, setLoading] = useState<boolean>(false);
    let colorScheme = useColorScheme();
    const { showmodal, } = useAppSelector((state) => state.auth );

    return (
        <>
            <Stack>
                <Stack.Screen name='(tabs)'  options={{ headerShown: false,   }}  />
                <Stack.Screen name='offline'  options={{ 
                   headerStyle: {
                    backgroundColor: '#ff9913',
                  },
                  title: 'Offline Payment',
                  headerTitleAlign: 'center',
                  }}  />
                <Stack.Screen name='scanner'  options={{ 
                   headerStyle: {
                    backgroundColor: '#ff9913',
                  },
                  title: 'Start Scanning',
                  headerTitleAlign: 'center',
                  
                  }}  />
                  
                <Stack.Screen name='confirmdetails'  options={{ 
                   headerStyle: {
                    backgroundColor: '#ff9913',
                  },
                  title: 'Confirm Transaction',
                  headerTitleAlign: 'center',
                  }}  />
                  
                <Stack.Screen name='confirmpayment'  options={{ 
                   headerStyle: {
                    backgroundColor: '#ff9913',
                  },
                  title: 'Transaction Pin',
                  headerTitleAlign: 'center',
                  }}  />

                <Stack.Screen name='success'  options={{ 
                   headerStyle: {
                    backgroundColor: '#ff9913',
                  },
                  title: '',
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
