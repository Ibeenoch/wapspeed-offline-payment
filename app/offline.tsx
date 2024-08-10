import { View, Text, TouchableOpacity, useColorScheme, Button } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import className from 'twrnc';
import { Camera, CameraType, CameraView, CameraViewRef, useCameraPermissions } from 'expo-camera';
import ReUseableStyles from '../utils/reuseableColors';
import ScanQR from '../assets/icons/cashless-qr-code-payment-icon.svg'
import { router } from 'expo-router';

const Offline = () => {
    const [facing, setFacing] = useState<CameraType>('back');
    // const [ permission, requestPermission ] = useCameraPermissions();
    const currentMode = useColorScheme();
    const getmode = ReUseableStyles();

    // if(!permission){
    //   return <View />;
    // }

    // if(!permission.granted){
    //   return (
    //     <View>
    //       <Text>We need your permission to show the camera</Text>
    //       <Button onPress={requestPermission} title='grant permission'  />
    //     </View>
    //   )
    // }

    const handleOfflinePayment = async() => {
      router.push('scanner')

    };

    const toggleCameraFacing = () => {

    }

  return (
    <View style={className` ${ currentMode === 'light' ? 'bg-[#f7f7f7]' : 'bg-[#000e28]'} p-4 h-full flex-1 border-t-[#ff6e00] `}>
    <Text style={className`font-bold text-lg mb-3 ${getmode.text}`}>Offline Payments</Text>

        <View style={className`flex-col justify-center items-center gap-2 h-[80%]`}>
            <Text style={className`text-xl font-bold text-center ${getmode.text}`}>To make offline Payment</Text>
            <TouchableOpacity onPress={handleOfflinePayment} style={className` bg-opacity-50 bg-[#FFB84D] py-1 px-2 rounded-xl flex-row items-center gap-2`} >
                <ScanQR width={20} height={20} />
                <Text style={className`text-lg text-center text-orange-500 font-bold`}>Scan The QRcode</Text>
            </TouchableOpacity> 
        </View>
        
    </View>
  )
}

export default Offline