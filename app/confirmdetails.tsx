import { View, Text, useColorScheme, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import className from 'twrnc';
import ReUseableStyles from '../utils/reuseableColors';
import { useAppSelector } from '../features/hooks';
import { selectUser } from '../features/auth/auth';
import moment from 'moment'
import Edit from '../assets/icons/edit_icon (1).svg'
import { router } from 'expo-router';

const Confirmdetails = () => {
  const { qrCodedetails } = useAppSelector(selectUser);
  const [amount, setAmount] = useState<string>(`₦${qrCodedetails.Amount}`)
  const currentMode = useColorScheme();
  const getmode = ReUseableStyles();
  
  const now = moment().format('YYYY-MM-DD HH:mm:ss');
  console.log('qrcode details is ', qrCodedetails, amount);

      const formatNumber = (value: string) => {
        // Remove any non-numeric characters
        const numericValue = value.replace(/[^\d]/g, '');
        
        // Format the number with commas
        const formattedValue = numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        
        return formattedValue;
    };

  const handleAmount = (str: string) => {
     const formattedValue = formatNumber(str);
    setAmount(`₦${formattedValue}`)
  }

  return (
    <View style={className` ${ currentMode === 'light' ? 'bg-[#f7f7f7]' : 'bg-[#000e28]'} p-4 h-full flex-1 border-t-[#ff6e00] `}>
      
    <ScrollView style={className``}>
      <View style={className``}>
        <Text style={className`text-2xl text-center font-bold ${getmode.text}`}>Confirm Transaction</Text>
      </View>

      <View style={className`flex-col justify-center items-center  border-b border-b-[#f96d0e]  border-dotted my-2 py-2`}>
        <View style={className`flex-row items-center gap-1`}>
            <TextInput cursorColor={'#f96d0e'} style={className`text-center text-3xl text-[#f96d0e] font-bold`} maxLength={12} keyboardType='number-pad' value={amount} onChangeText={handleAmount} />
            <Edit width={15} height={15} stroke={'#f96d0e'} />
        </View>
        <Text style={className`text-center text-xs ${getmode.grayText}`}>transaction in progress</Text>
        <Text style={className`text-center text-xs ${getmode.grayText}`}>today {now} </Text>
      </View>
    
      <View style={className`border-b border-b-[#f96d0e]  border-dotted  my-2`}>
        <View style={className`flex-row justify-between px-4 pb-3`}>
          <Text style={className` ${getmode.grayText} text-sm`}>Merchant Name: </Text>
          
          <View>
              <Text style={className`text-right font-bold text-sm ${getmode.text}`}>{qrCodedetails && qrCodedetails['Merchant Name']}</Text>
              <Text style={className`text-right text-sm  ${getmode.grayText} `}></Text>
          </View>
        </View>
      </View>
    
      <View style={className`border-b border-b-[#f96d0e]  border-dotted my-2`}>
        <View style={className`flex-row justify-between  px-4 pb-3`}>
          <Text style={className` ${getmode.grayText} text-sm`}>Account Number: </Text>
          
          <View>
              <Text style={className`text-right font-bold text-sm text-black  ${getmode.text}`}>{qrCodedetails && qrCodedetails['Account Number']}</Text>
              <Text style={className`text-right text-sm  ${getmode.grayText}`}></Text>
          </View>
        </View>
      </View>
     
      <View style={className`border-b border-b-[#f96d0e] border-dotted my-2`}>
        <View style={className`flex-row justify-between items-center px-4 pb-3 `}>
          <Text style={className` ${getmode.grayText} text-sm`}>Store Name: </Text>
          
          <View>
              <Text style={className`text-right font-bold text-sm text-black  ${getmode.text}`}>{qrCodedetails && qrCodedetails['Store Name']}</Text>
          </View>
        </View>
      </View>
    </ScrollView>

      <View style={className`relative bottom-0  w-full flex-col gap-2`}>
      <TouchableOpacity onPress={() => router.push('confirmpayment')} style={className`w-full rounded-xl bg-[#f96d0e]`}>
          <View style={className`w-full px-6 py-4  flex-row justify-center items-center`}>
            <Text style={className`text-lg font-bold text-white`}>Proceed</Text>
          </View>
        </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push('offline')} style={className`w-full rounded-xl bg-[#f96d0e] bg-opacity-40`}>
          <View style={className`w-full px-6 py-4  flex-row justify-center items-center`}>
            <Text style={className`text-lg font-bold text-[#f96d0e]`}>Cancel</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Confirmdetails