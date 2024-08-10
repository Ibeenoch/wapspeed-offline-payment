import { View, Text, useColorScheme, TouchableOpacity, Pressable } from 'react-native'
import React, { useState } from 'react'
import { router, Tabs } from 'expo-router'
import { Image } from 'expo-image';
import { useAppDispatch, useAppSelector } from '../../features/hooks'
import { selectUser,   } from '../../features/auth/auth'
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view'
import { Skeleton } from 'moti/skeleton'
import className from 'twrnc';
import HomeWhite from '../../assets/icons/house-white-icon.svg';
import HomeInactive from '../../assets/icons/house-inactive-icon.svg';
import HomeOrange from '../../assets/icons/house-orange-icon.svg';
import CollectionWhite from '../../assets/icons/cash-money-white.svg';
import CollectionOrange from '../../assets/icons/cash-money-orange.svg';
import CollectionInactive from '../../assets/icons/cash-money-inactive.svg';
import PaymentOrange from '../../assets/icons/send-2-icon.svg';
import PaymentInactive from '../../assets/icons/send-2-icon-inactive.svg';
import PaymentWhite from '../../assets/icons/send-2-icon-white.svg';
import SettingOrange from '../../assets/icons/setting-orange-icon.svg';
import SettingInactive from '../../assets/icons/setting-icon-inactive.svg';
import SettingWhite from '../../assets/icons/setting-white-icon.svg';
import WarpSpeed from '../../assets/icons/warpspeed-logo-white.svg'
import ArrowBack from '../../assets/icons/arrow-back-icon.svg'



const  Tablayout = () => {
  const [activeTabs, setActiveTab ] = useState<string>('')
  const [mainModal, setMainModal ] = useState<boolean>(false)
  const currentMode = useColorScheme();
  const dispatch = useAppDispatch();
  const { skeletonHome, imageUrl } = useAppSelector(selectUser);

  const cancelMainModal = () => {
    setMainModal(false)
  }

  const openMainModal = () => {
    setMainModal(true)
  }

  const skeletonCommonProps = {
    backgroundColor: currentMode === 'light' ? '#e9eaec' : '#17233b',
    colorMode: currentMode === 'light' ? 'light' : 'dark'
  } as const;



  return (
    <>
      <Tabs 
      
      screenOptions={{
        tabBarStyle: {
          borderRadius: 50,
          position: 'absolute',
          bottom: 5,
          zIndex: 8,
          marginBottom: 15,
          marginHorizontal: 9,
          paddingHorizontal: 10,
          paddingBottom: 20,
          paddingTop: 15,
          height: 85,
          borderTopWidth: 0,
          backgroundColor:  currentMode === 'dark' ?  '#0e1a32' : '#f7f7f7',
          display: 'flex',
          alignItems: 'center'
        },

        
      tabBarActiveTintColor: currentMode === 'light' ? `#0261ef` : `#ff6e00`,
      tabBarInactiveTintColor: currentMode === 'light' ? `#9eacc7` : `#b9c1ce`,
      headerStyle: {
        backgroundColor: '#ff9913',
        borderColor: '#ff9913'
      }
      }}
      >
        <Tabs.Screen name='index'  options={{
          title: 'Home',
          headerTitle: '',
          headerLeft: () => {
            return (
               <View style={className`flex-row items-center`}>
                <WarpSpeed width={80} height={80} />
                  <View style={className`flex-row -ml-4`}>
                    <Text style={className`text-black font-bold text-lg`}>WARP</Text>
                    <MaskedView
                    style={{ height: 24}}
                    maskElement={<Text style={className`text-lg`}>SPEED</Text>}
                    >
                    <LinearGradient colors={[   '#FFA500', '#808000','yellow', 'yellow', 'yellow' ]} start={{ x:1, y: 2}}
                    end={{ x:0, y:0.33}}
                    style={{ flex: 1 }}
                    >
                      <Text style={[className`text-lg opacity-0`, { fontWeight: 1500 }]}>SPEED</Text>
                    </LinearGradient>
                    </MaskedView>
                  </View>

                
               </View>
            )
          },
          headerRight: () => {
            return (
              <View style={className`pr-2`}>
                <Image style={className`w-10 h-10 rounded-xl border border-white`} source={require('../../assets/icons/profile.png')} />
              </View>
            )
          },
          tabBarIcon: () => {
            return  <View style={className`flex-row justify-center items-center`}>
                      {
                        currentMode === 'light' ? (
                          activeTabs === 'index' ? <HomeOrange width={22} height={22}  /> : <HomeInactive width={17} height={17}  />
                        ) : (
                          activeTabs === 'index' ? <HomeOrange width={22} height={22}  /> : <HomeWhite width={17} height={17}  />
                        )
                      }
                  </View>
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 800,
            color: currentMode === 'light' ? `${activeTabs === 'index' ? '#ff9913' : '#001a71'}` : `${activeTabs === 'index' ? '#ff9913' : '#fff'}`,
          },
          tabBarButton: (props) => (
            <Pressable  {...props}
              onPress={() => {
                router.push('(tabs)/')
                setActiveTab('index')
              }}
            />
          )
        }} />
        <Tabs.Screen name='payment'  options={{
          title: 'Payment',
          headerShown: true,
          headerTitle: 'Payment',
          headerTitleAlign: 'center',
          headerLeft: () => {
            return (
              <View style={className`pl-4`}>
                <TouchableOpacity onPress={() => router.back()}>
                  <ArrowBack width={28} height={28}  />
                </TouchableOpacity>
              </View>
            )
          },
          tabBarIcon: () => {
            return  (
                    <View style={className`flex-row justify-center items-center`}>
                      {
                        currentMode === 'light' ? (
                          activeTabs === 'payment' ? <PaymentOrange width={34} height={34}  /> : <PaymentInactive width={24} height={24}   />
                        ) : (
                          activeTabs === 'payment' ? <PaymentOrange width={34} height={34} /> : <PaymentWhite width={24} height={24}  />
                        )
                      }
                    </View>
                    )
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 800,
            color: currentMode === 'light' ? `${activeTabs === 'payment' ? '#ff9913' : '#001a71'}` : `${activeTabs === 'payment' ? '#ff9913' : '#fff'}`,
          },
          tabBarButton: (props) => (
            <Pressable  {...props}
              onPress={() => {
                router.push('(tabs)/payment')
                setActiveTab('payment')
              }}
            />
          )
        }} />
        <Tabs.Screen name='collections'  options={{
          title: 'Collections',
          tabBarIcon: () => {
            return  <View  style={className`flex-row justify-center items-center`}>
                      {
                        currentMode === 'light' ? (
                          activeTabs === 'collections' ? <CollectionOrange width={40} height={40}  /> : <CollectionInactive width={30} height={30}  />
                        ) : (
                          activeTabs === 'collections' ? <CollectionOrange width={40} height={40} /> : <CollectionWhite width={30} height={30}  />
                        )
                      }               
               </View>
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 800,
            color: currentMode === 'light' ? `${activeTabs === 'collections' ? '#ff9913' : '#001a71'}` : `${activeTabs === 'collections' ? '#ff9913' : '#fff'}`,
          },
          tabBarButton: (props) => (
            <Pressable  {...props}
              onPress={() => {
                router.push('(tabs)/collections')
                setActiveTab('collections')
              }}
            />
          )
        }} />
        <Tabs.Screen name='settings'  options={{
          title: 'Settings',
          tabBarIcon: () => {
            return  <View style={className`flex-row justify-center items-center`}>
                     {
                        currentMode === 'light' ? (
                          activeTabs === 'settings' ? <SettingOrange width={35} height={35}  /> : <SettingInactive width={25} height={25}   />
                        ) : (
                          activeTabs === 'settings' ? <SettingOrange width={35} height={35} /> : <SettingWhite width={25} height={25}   />
                        )
                      }                    
                    </View>
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 800,
            color: currentMode === 'light' ? `${activeTabs === 'settings' ? '#ff9913' : '#001a71'}` : `${activeTabs === 'settings' ? '#ff9913' : '#fff'}`,
          },
          tabBarButton: (props) => (
            <Pressable  {...props}
              onPress={() => {
                router.push('(tabs)/settings')
                setActiveTab('settings')
              }}
            />
          )
      }}/>
      </Tabs>
         
    </>
  )
}

export default  Tablayout