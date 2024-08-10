import { View, Text, useColorScheme } from 'react-native'
import React from 'react'
import className from 'twrnc';

const Settings = () => {
  const currentMode = useColorScheme();
  return (
    <View style={className`flex-1 px-4 ${currentMode === 'light' ? 'bg-[#f7f7f7]' : 'bg-[#000e28]'}`}>
      <Text>settings</Text>
    </View>
  )
}

export default Settings