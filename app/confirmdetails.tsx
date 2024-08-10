import { View, Text, useColorScheme, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import className from 'twrnc';
import ReUseableStyles from '../utils/reuseableColors';
import { useAppSelector } from '../features/hooks';
import { selectUser } from '../features/auth/auth';
import moment from 'moment'
import Waspeed from '../assets/icons/warpspeed-logo-orange.svg'
import Edit from '../assets/icons/edit_icon (1).svg'
import { router } from 'expo-router';

const Confirmdetails = () => {
  const { qrCodedetails } = useAppSelector(selectUser);
  const [amount, setAmount] = useState<string>(`₦${String(qrCodedetails.amount)}`)
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
      <View style={className`-mt-4 -ml-2 flex-row items-center`}>
        <Waspeed width={90} height={90} />
        <View style={className`flex-row -ml-4`}>
                    <Text style={className`text-[#ff9913] font-bold text-lg`}>WARP</Text>
                    <Text style={className`text-yellow-500 font-bold text-lg`}>Speed</Text>
         </View>
      </View>

      <View style={className`flex-col justify-center items-center  border-b border-b-orange-400  border-dotted my-2 py-2`}>
        <View style={className`flex-row items-center gap-1`}>
            <TextInput cursorColor={'#ff9913'} style={className`text-center text-3xl text-[#ff9913] font-bold`} maxLength={12} keyboardType='number-pad' value={amount} onChangeText={handleAmount} />
            <Edit width={15} height={15} stroke={'orange'} />
        </View>
        <Text style={className`text-center text-xs ${getmode.grayText}`}>transaction in progress</Text>
        <Text style={className`text-center text-xs ${getmode.grayText}`}>today {now} </Text>
      </View>

      <View style={className`border-b border-b-orange-400  border-dotted  my-2`}>
        <View style={className`flex-row justify-between px-4 pb-3`}>
          <Text style={className` ${getmode.grayText} text-sm`}>Recipient Details: </Text>
          
          <View>
              <Text style={className`text-right font-bold text-sm ${getmode.text}`}>{qrCodedetails && qrCodedetails.name}</Text>
              <Text style={className`text-right text-sm  ${getmode.grayText} `}>{qrCodedetails && qrCodedetails.merchantName}</Text>
          </View>
        </View>
      </View>

      <View style={className`border-b border-b-orange-400  border-dotted my-2`}>
        <View style={className`flex-row justify-between  px-4 pb-3`}>
          <Text style={className` ${getmode.grayText} text-sm`}>Sender Details: </Text>
          
          <View>
              <Text style={className`text-right font-bold text-sm text-black  ${getmode.text}`}>{qrCodedetails && qrCodedetails.senderId}</Text>
              <Text style={className`text-right text-sm  ${getmode.grayText}`}>{qrCodedetails && qrCodedetails.merchantName}</Text>
          </View>
        </View>
      </View>

      <View style={className`border-b border-b-orange-400 border-dotted my-2`}>
        <View style={className`flex-row justify-between items-center px-4 pb-3 `}>
          <Text style={className` ${getmode.grayText} text-sm`}>Transaction Ref: </Text>
          
          <View>
              <Text style={className`text-right font-bold text-sm text-black  ${getmode.text}`}>{qrCodedetails && qrCodedetails.transactionRef}</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity onPress={() => router.push('confirmpayment')} style={className`absolute bottom-5 ml-4  w-full rounded-xl bg-[#ff9913]`}>
          <View style={className`w-full px-6 py-4  flex-row justify-center items-center`}>
            <Text style={className`text-lg font-bold text-white`}>Proceed</Text>
          </View>
        </TouchableOpacity>
    
    </View>
  )
}

export default Confirmdetails