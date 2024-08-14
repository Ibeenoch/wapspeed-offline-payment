import { View, Text, useColorScheme, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../features/hooks'
import { selectUser, setHasSentSMS, shouldShowModal } from '../features/auth/auth';
import Wait from '../assets/icons/announcement-color-icon.svg'
import className from 'twrnc';
import ReUseableStyles from '../utils/reuseableColors';
import { router } from 'expo-router';
import CryptoJs from 'crypto-es';
import * as SMS from 'expo-sms';

const LastStep = () => {
    const dispatch = useAppDispatch();
    const { qrCodedetails, hasSentSms } = useAppSelector(selectUser);
    const getmode = ReUseableStyles();
    const currentMode = useColorScheme();

    useEffect(() => {
        dispatch(shouldShowModal(false));
        dispatch(setHasSentSMS(false));
    }, [])

  const  handleSendEncryptedSMS = async() => {
      let key = 'myright45'
      const encryptedData = CryptoJs.AES.encrypt(JSON.stringify(qrCodedetails), key).toString();
      console.log('encrypted data ', encryptedData);
      await SMS.sendSMSAsync(
        ['55567'], encryptedData
      )
      dispatch(setHasSentSMS(true))
    }

const handleSuccess = () => {
    if(hasSentSms){
        router.push('success')
    }
}

  return (
        <View style={className`flex-1 px-2 ${currentMode === 'light' ? 'bg-[#f7f7f7]' : 'bg-[#000e28]'}`}>
            <View style={className`flex-row justify-center items-center h-[70%] gap-3 `}>
                <Wait width={50} height={50} fill={`${currentMode === 'light' ? 'black': 'white'}`} /> 
                {/* <Text style={className`${getmode.text} text-sm w-[250px] `}>Payment Processing, You will receive an SMS notification upon completion.</Text> */}
                <Text style={className`${getmode.text} italic text-[17px] w-[250px] `}> <Text style={className`text-orange-500`}>Important:</Text> When you click the "Send SMS" button below, you will be redirected to your SMS messenger with a pre-populated message containing a transaction token. Please do not edit the message. Simply send the sms to enable us process your transaction.</Text>
            </View>

            <View style={className`absolute bottom-5 w-full ml-2 flex-col gap-2`}>
              <TouchableOpacity onPress={handleSendEncryptedSMS} style={className` w-full rounded-xl bg-[#f96d0e]`}>
                <View style={className`w-full px-6 py-4  flex-row justify-center items-center`}>
                  <Text style={className`text-sm font-bold text-white`}>Send SMS</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={handleSuccess} style={className` w-full rounded-xl ${hasSentSms ? 'bg-opacity-100' : 'bg-opacity-30'} bg-[#f96d0e]`}>
                <View style={className`w-full px-6 py-4  flex-row justify-center items-center`}>
                  <Text style={className`text-sm font-bold  ${hasSentSms ? 'text-white' : 'text-[#f96d0e]'}`}>Complete Transaction</Text>
                </View>
              </TouchableOpacity>
            </View>

    </View>
  )
}

export default LastStep