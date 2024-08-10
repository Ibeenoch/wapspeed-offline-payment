import { View, Text, useColorScheme, Button } from 'react-native'
import React, { useState } from 'react'
import { CameraType, CameraView, useCameraPermissions } from 'expo-camera';
import ReUseableStyles from '../utils/reuseableColors';
import className from 'twrnc';
import { useAppDispatch,  } from '../features/hooks';
import { setQRcodeDetails } from '../features/auth/auth';
import { router } from 'expo-router';

const Scanner = () => {
    const [facing, setFacing] = useState<CameraType>('back');
    const dispatch = useAppDispatch();
    const [ permission, requestPermission ] = useCameraPermissions();
    const currentMode = useColorScheme();
    const getmode = ReUseableStyles();
    

    if(!permission){
      return <View />;
    }

    if(!permission.granted){
      return (
        <View>
          <Text>We need your permission to show the camera</Text>
          <Button onPress={requestPermission} title='grant permission'  />
        </View>
      )
    };

    const handleScan = (result: any) => {
      if(result && result.data){
        console.log(result && result.data);
        dispatch(setQRcodeDetails(result.data))
        router.push('confirmdetails')
      }
      //  LOG  {"name":"John Doe","amount":50000,"merchantName":"Merchant XYZ","senderId":"123456","transactionRef":"TXN987654"}
    }
  return (
    <View style={className` ${ currentMode === 'light' ? 'bg-[#f7f7f7]' : 'bg-[#000e28]'} p-4 h-full flex-1 border-t-[#ff6e00] `}>
      <CameraView style={{flex: 1, height:100}} facing={facing}
      barcodeScannerSettings={{
        barcodeTypes: ['qr'],
      }}
      onBarcodeScanned={handleScan}
      />
    </View>
  )
}

export default Scanner