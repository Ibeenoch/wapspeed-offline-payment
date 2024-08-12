import { View, Text, useColorScheme, TouchableOpacity } from 'react-native'
import React from 'react'
import className from 'twrnc';
import ReUseableStyles from '../../utils/reuseableColors';
import Security from '../../assets/icons/security-free-material-svgrepo-com.svg';
import Devices from '../../assets/icons/device-mobile-svgrepo-com.svg';
import Limits from '../../assets/icons/setting-2-svgrepo-com.svg';
import Business from '../../assets/icons/bank-svgrepo-com (1).svg';
import Pos from '../../assets/icons/shopping-pos-machine-svgrepo-com.svg';
import Transfer from '../../assets/icons/transfer-horizontal-svgrepo-com.svg';
import Language from '../../assets/icons/language-svgrepo-com.svg';
import Notification from '../../assets/icons/notification-bell-1397-svgrepo-com.svg';
import ArrowForward from '../../assets/icons/arrow-forward-icon.svg';
import ArrowUpRight from '../../assets/icons/arrow-right-up-svgrepo-com.svg';

const Settings = () => {
  const currentMode = useColorScheme();
  const getmode = ReUseableStyles();

  const settingsItems = [
    {name: 'Security'},
    {name: 'Devices'},
    {name: 'Limits'},
    {name: 'Business Type'},
    {name: 'POS Terminal Configuration'},
    {name: 'Transfer Configuration'},
    {name: 'Language'},
    {name: 'Notification Preference'},
  ];
  return (
    <View style={className`flex-1 px-4 ${currentMode === 'light' ? 'bg-[#f7f7f7]' : 'bg-[#000e28]'}`}>
      <View style={className`pt-8`}>
        {
          settingsItems.map((setting, index) => (
            <TouchableOpacity key={index}>
              <View  style={className`flex-row p-2 ${getmode.background} rounded-xl mb-2 items-center justify-between`}>
                <View style={className`flex-row gap-2 items-center`}>
                  <View style={className`p-2 bg-[#f96d0e] rounded-full `}>
                    {
                      setting.name === 'Security' ? (
                        <Security width={18} height={18} />
                      )
                      : setting.name === 'Devices' ? (
                        <Devices width={18} height={18} />
                      )
                      : setting.name === 'Business Type' ? (
                        <Business width={18} height={18} />
                      )
                      : setting.name === 'POS Terminal Configuration' ? (
                        <Pos width={18} height={18} />
                      )
                      : setting.name === 'Transfer Configuration' ? (
                        <Transfer width={18} height={18} />
                      )
                      : setting.name === 'Language' ? (
                        <Language width={18} height={18} />
                      ) 
                      : setting.name === 'Limits' ? (
                        <Limits width={18} height={18} />
                      ) 
                      : (
                        <Notification width={18} height={18} />
                      )
                    }
                  </View>
                  <Text style={className`font-bold text-sm ${getmode.text} `}>{setting.name} </Text>
                </View>
                <ArrowForward width={18} height={18} stroke={'#f96d0e'} />
              </View>
            </TouchableOpacity>
          ))
        }
      </View>

      <TouchableOpacity>
        <View style={className`flex-row justify-center items-center mt-8 py-1 mx-auto w-40 bg-[#c21807] bg-opacity-30  rounded-xl`}>
          <Text style={className`font-bold text-[#c21807] text-lg`}>Sign Out </Text>
          <ArrowUpRight width={20} height={20} />
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Settings