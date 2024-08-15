import { View, Text, useColorScheme, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../features/hooks'
import { resetSendCount, selectUser, setHasSentSMS, setSendCount, shouldShowModal } from '../features/auth/auth';
import Wait from '../assets/icons/announcement-color-icon.svg'
import className from 'twrnc';
import ReUseableStyles from '../utils/reuseableColors';
import { router } from 'expo-router';
import CryptoJs from 'crypto-es';
import CryptoJS from 'crypto-js'
import * as SMS from 'expo-sms';

const LastStep = () => {
    const dispatch = useAppDispatch();
    const { qrCodedetails, hasSentSms, sendCount } = useAppSelector(selectUser);
    const getmode = ReUseableStyles();
    const currentMode = useColorScheme();

    useEffect(() => {
        dispatch(shouldShowModal(false));
        dispatch(setHasSentSMS(false));
    }, [])

  const  handleSendEncryptedSMS = async() => {
    // let payload = {"Name":"Sunday Adelodun","Amount":"75000","Time":"10:43 am"}
    // const key = "`\x04\xd6,ge\x0f\xb3\xbe\xa2&\xf9\xaf:g\x9f\x14i\xbdr\xf3|\xb2=";
    //   const encryptedData = CryptoJs.AES.encrypt(JSON.stringify(payload), key).toString();
    //     const hexFormat = CryptoJs.enc.Hex.stringify(CryptoJs.enc.Base64.parse(encryptedData))

      // 192-bit key (24 bytes)
      const key = CryptoJS.enc.Hex.parse('6004d62c67650fb3bea226f9af3a679f1469bd72f37cb23d');

      // Data to encrypt
      const data = `{"Name":"${qrCodedetails['Merchant Name']}","Amount":"${qrCodedetails.Amount}","Time":"12:43 am"}`;
  console.log(data);
      // Encrypting
      const encrypted = CryptoJS.AES.encrypt(data, key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7,
      });
  
      // Convert encrypted data to hex format
      const encryptedHex = encrypted.ciphertext.toString(CryptoJS.enc.Hex);
  
      console.log('encrypted data now is ', encryptedHex, encryptedHex.length, sendCount);
      
      if(sendCount === 0 || isNaN(sendCount) || sendCount === null ){
        await SMS.sendSMSAsync(
            ['07044214274'], encryptedHex
          )
          dispatch(setSendCount(1))
          console.log('i increased');
      }else{
        await SMS.sendSMSAsync(
            ['07044214274'], ''
          )
        //   
          dispatch(setSendCount(1))
        }
        dispatch(setHasSentSMS(true))
     
      
    }

const handleSuccess = () => {
    if(hasSentSms){
        dispatch(resetSendCount(0))
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