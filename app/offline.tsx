import { View, Text, TouchableOpacity, useColorScheme, Button } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import className from 'twrnc';
import { Camera, CameraType, CameraView, CameraViewRef, useCameraPermissions } from 'expo-camera';
import ReUseableStyles from '../utils/reuseableColors';
import ScanQR from '../assets/icons/cashless-qr-code-payment-icon.svg'
import { router } from 'expo-router';

const Offline = () => {
    const currentMode = useColorScheme();
    const getmode = ReUseableStyles();

   

    const handleOfflinePayment = async() => {
      router.push('scanner')

    };



  return (
    <View style={className` ${ currentMode === 'light' ? 'bg-[#f7f7f7]' : 'bg-[#000e28]'} p-4 h-full flex-1 border-t-[#ff6e00] `}>

        <View style={className`flex-col justify-center items-center gap-2 h-[100%]`}>
            <Text style={className`text-xl font-bold text-center ${getmode.text}`}>Click to</Text>
            <TouchableOpacity onPress={handleOfflinePayment} style={className` bg-opacity-50 bg-[#FFB84D] py-1 px-2 rounded-xl flex-row items-center gap-2`} >
                <ScanQR width={20} height={20} />
                <Text style={className`text-lg text-center text-[#f96d0e] font-bold`}>Scan The QRcode</Text>
            </TouchableOpacity> 
        </View>
        
    </View>
  )
}

export default Offline