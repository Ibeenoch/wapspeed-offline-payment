import { View, Text, useColorScheme, TouchableOpacity } from 'react-native'
import React from 'react'
import  className from 'twrnc';
import ReUseableStyles from '../../utils/reuseableColors';
import PeerToPeer from '../../assets/icons/decentralized-icon.svg';
import ArrowForward from '../../assets/icons/arrow-forward-icon.svg';
import BankTransfer from '../../assets/icons/bank-transfer-icon (2).svg';
import Bills from '../../assets/icons/bill-payment-icon.svg';
import TransferTwo from '../../assets/icons/transaction-transfer-icon.svg';
import AirtimeAndData from '../../assets/icons/airtime-data-icon.svg';
import Offline from '../../assets/icons/offline-icon.svg';
import { router } from 'expo-router';


const Payment = () => {
  const currentMode = useColorScheme();
  const getmode = ReUseableStyles();

  const paymentItems = [
    {
      name: 'Peer-To-Peer Transfer',
    },
    {
      name: 'Transfer To Other Bank',
    },
    {
      name: 'Offline Payment',
    },
    {
      name: 'Pay Bills',
    },
    {
      name: 'Airtime And Data',
    },
  ];

  const handleNavigation = (name: string) => {
    if(name === 'Offline Payment'){
      router.push('offline');
    }
  }

  return (
    <View style={className` ${ currentMode === 'light' ? 'bg-[#f7f7f7]' : 'bg-[#000e28]'} p-4 h-full flex-1 border-t-[#ff6e00] `}>
      
      <Text style={className`font-bold text-lg mb-3 ${getmode.text}`}>Payments</Text>
        {
          paymentItems.map((payment, index) => (
            <TouchableOpacity key={index} onPress={() =>handleNavigation(payment.name)}>
              <View style={className`p-4 rounded-xl my-2 ${getmode.background}`}>
                <View  style={className`flex-row justify-between  items-center`}>
                  <View style={className`flex-row items-center gap-4`}>
                    <View style={className`p-2 rounded-lg bg-[#f96d0e]`}>
                      {
                        payment.name === 'Peer-To-Peer Transfer' ? (
                          <PeerToPeer width={20} height={20} stroke={'white'} />
                        ) 
                        : payment.name === 'Transfer To Other Bank' ? (
                          <BankTransfer width={20} height={20} fill={'white'} />
                        )
                        : payment.name === 'Offline Payment' ? (
                          <Offline width={20} height={20} fill={'white'}/>
                        )
                        : payment.name === 'Airtime And Data' ? (
                          <AirtimeAndData width={20} height={20} fill={'white'} />
                        )
                        : (
                          <Bills  width={20} height={20} fill={'white'} />
                        )
                      }
                      
                    </View>
                    <Text style={className`text-sm font-bold ${getmode.text}`}>{payment.name}</Text>
                  </View>

                
                    <ArrowForward width={20} height={20} stroke={`${currentMode === 'light' ? '#f96d0e' : '#f96d0e'}`} />
      
                </View>
              </View>
            </TouchableOpacity>
          ))
        }
    </View>
  )
}

export default Payment