import { View, Text, useColorScheme, ScrollView, Pressable, Button, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import className from 'twrnc';
import Eye from '../../assets/icons/eye-icon.svg';
import EyeOff from '../../assets/icons/eye-off-icon.svg';
import QRcode from '../../assets/icons/qrcode-icon.svg';
import Copy from '../../assets/icons/copy-icon.svg';
import Filter from '../../assets/icons/filter-funnel-icon.svg';
import FilterLine from '../../assets/icons/filter-alt-icon.svg';
import WithDrawal from '../../assets/icons/withdraw-dollar-sign-svgrepo-com.svg';
import MobileData from '../../assets/icons/mobile-svgrepo-com.svg';
import InvestMent from '../../assets/icons/bank_finance_cash_dollar_purchase_money_transfer_buy.svg';
import Transfer from '../../assets/icons/bank-transfer-icon.svg';
import Deposit from '../../assets/icons/bank-svgrepo-com.svg';
import Bet from '../../assets/icons/gambler-bet-svgrepo-com (1).svg';
import BetCasino from '../../assets/icons/bet-casino-chip-svgrepo-com (2).svg';
import ReUseableStyles from '../../utils/reuseableColors';
import * as Clipboard from 'expo-clipboard';
import { shouldShowModal } from '../../features/auth/auth';
import { useAppDispatch } from '../../features/hooks';


const Home = () => {
  const [showBalance, setShowBalance] = useState<boolean>(false);
  const currentMode = useColorScheme();
  const getmode = ReUseableStyles();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(shouldShowModal(false));
}, [])

  const toggleShowBalance = () => {
    setShowBalance(prev => !prev)
  };

  const copyToClipboard = async (text: string) => {
    await Clipboard.setStringAsync(text);
  }

  const transactions = [
    {
      amount: '₦3,500',
      recipient: 'Adewale Olayemi',
      date: '25 Mar 2024, 07:34pm',
      status: 'Successful',
      type: 'Transfer',
    },
    {
      amount: '₦14,200',
      recipient: 'Michael Okpara',
      date: '26 Mar 2024, 08:34am',
      status: 'Successful',
      type: 'Withdrawal',
    },
    {
      amount: '₦23,200',
      recipient: 'Chima Obina',
      date: '27 Mar 2024, 10:54am',
      status: 'Unsuccessful',
      type: 'Investment'
    },
    {
      amount: '₦1000',
      recipient: 'Chima Obina',
      date: '27 Mar 2024, 10:54am',
      status: 'Successful',
      type: 'Mobile Data'
    },
    {
      amount: '₦23,200',
      recipient: 'Esther Adanna',
      date: '29 Mar 2024, 04:55pm',
      status: 'Successful',
      type: 'Deposit',
    },
    {
      amount: '₦11,890',
      recipient: 'Adewale, Tunji',
      date: '30 Mar 2024, 11:22am',
      status: 'Pending',
      type: 'Withdrawal',
    },
    {
      amount: '₦1,500',
      recipient: 'Seun Kunle',
      date: '1 April 2024, 05:34pm',
      status: 'Pending',
      type: 'Betting',
    },
  ]
  return (
      
        <View style={className` ${ currentMode === 'light' ? 'bg-[#f7f7f7]' : 'bg-[#000e28]'} h-full flex-1 border-t-[#ff6e00] `}>
          <View style={className`flex-1 bg-[#ff9913]  h-60 w-full absolute top-0 rounded-br-3xl rounded-bl-3xl p-1`}></View>
             <ScrollView style={className`px-4 pt-4 `}>
              <View style={className` flex-row items-center justify-between px-4`}>

                <View style={className` `}>
                  <Text style={className`text-xl font-bold text-[#001a71]`} >Hello,</Text>
                  <Text style={className`text-3xl font-bold text-white`} >Adebisi!</Text>
                </View>

                <View style={className`p-2 border border-white rounded-xl flex-row items-center gap-1`}>
                  <Text style={className`text-xs font-bold text-white`}>092139101</Text>
                  <TouchableOpacity onPress={() =>copyToClipboard('092139101')}>
                     <Copy width={16} height={16}  />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={className`p-4 rounded-xl my-3 bg-[#fdae44]`}>
                  <Text style={className`text-white font-bold text-sm italic`}>Tier 3 Verification in progress</Text>
              </View>

              <View style={className`p-4 rounded-xl my-3 bg-[#fdae44] flex-row justify-between items-center gap-4`}>
                  {
                    showBalance ? (
                  <Pressable onPress={toggleShowBalance}>
                    <View style={className`flex-row justify-between items-center gap-2`}>
                      <Text style={className`text-white font-bold text-3xl`}>₦562,890.00</Text>
                      <Eye width={30} height={30} />
                    </View>
                  </Pressable>
                    ) : (
                      <Pressable onPress={toggleShowBalance}>
                      <View style={className`flex-row gap-2 items-center`}>
                        <View style={className`p-2 bg-black rounded-full`}></View>
                        <View style={className`p-2 bg-black rounded-full`}></View>
                        <View style={className`p-2 bg-black rounded-full`}></View>
                        <EyeOff width={30} height={30} />
                      </View>
                      </Pressable>
                    )
                  }
                  <QRcode width={30} height={30} />
              </View>

              <View style={className`my-1 flex-row items-center justify-between px-4`}>
                <Text style={className`${getmode.text} font-bold text-sm`}>Transaction History</Text>
                <View style={className`flex-row items-center `}>
                <Filter width={22} height={22} stroke={'white'}/>
                <FilterLine width={22} height={22} stroke={'white'}/>

                </View>
              </View>
                
              <View style={className`pb-32`}>
                {
                  transactions.map((transaction, index) => (
                    <View key={index} style={className`p-4 flex-row items-center justify-between border-b border-b-gray-200 ${getmode.background}`}>
                  <View style={className`flex-row items-center gap-2`}>
                    <View style={className`flex-row rounded-full p-2 bg-[#fdae44] justify-center items-center`}>
                      {
                        transaction.type === 'Withdrawal' ? (
                          <WithDrawal width={18} height={18} />
                        ) 
                        : transaction.type === 'Transfer' ? (
                          <Transfer width={18} height={18} />
                        )
                        : transaction.type === 'Deposit' ? (
                          <Deposit width={18} height={18} />
                        )
                        : transaction.type === 'Betting' ? (
                          <BetCasino width={18} height={18} />
                        )
                        : transaction.type === 'Investment' ? (
                          <InvestMent width={18} height={18} />
                        )
                        : transaction.type === 'Mobile Data' ? (
                          <MobileData width={18} height={18} />
                        )
                        :  (
                          <></>
                        )
                      }
                      
                    </View>
                    <View>
                      <Text style={className`text-sm font-bold ${getmode.text}`}>{transaction.type}</Text>
                      <Text style={className`text-xs ${getmode.grayText}`}>{transaction.date}</Text>
                    </View>
                  </View>

                  <View>

                    <Text style={className`font-bold text-lg text-right ${getmode.text}`}>{transaction.amount}</Text>
                    <Text style={className`font-bold text-[9px] ${transaction.status === 'Successful' ? 'text-green-400' :
                    transaction.status === 'Pending' ? 'text-yellow-400' : 'text-red-400'

                     } `}>Transaction {transaction.status}</Text>
                  </View>
                    
                </View>
                  ))
                }
              </View>

             </ScrollView>
        </View>
  )
}

export default Home