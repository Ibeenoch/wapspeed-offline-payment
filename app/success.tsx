import { View, Text, useColorScheme, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useAppDispatch } from '../features/hooks'
import { shouldShowModal } from '../features/auth/auth';
import Wait from '../assets/icons/wait-icon.svg'
import className from 'twrnc';
import ReUseableStyles from '../utils/reuseableColors';
import { router } from 'expo-router';

const Success = () => {
    const dispatch = useAppDispatch();
    const getmode = ReUseableStyles();
    const currentMode = useColorScheme();

    useEffect(() => {
        dispatch(shouldShowModal(false));
    }, [])


  return (
        <View style={className`flex-1 px-4 ${currentMode === 'light' ? 'bg-[#f7f7f7]' : 'bg-[#000e28]'}`}>
            <View style={className`flex-row justify-center items-center h-[100%] gap-3 px-8`}>
                <Wait width={30} height={30} fill={`${currentMode === 'light' ? 'black': 'white'}`} /> 
                <Text style={className`${getmode.text} text-sm w-[250px] `}>Payment Processing, You will receive an SMS notification upon completion.</Text>
            </View>

            <TouchableOpacity onPress={() => router.push('(tabs)/')} style={className`absolute bottom-5  ml-4 w-full rounded-xl bg-[#ff9913]`}>
          <View style={className`w-full px-6 py-4  flex-row justify-center items-center`}>
            <Text style={className`text-sm font-bold text-white`}>Continue To Dashboard</Text>
          </View>
        </TouchableOpacity>
        
    </View>
  )
}

export default Success