import { View, StyleSheet, ActivityIndicator, useColorScheme, Text } from 'react-native'
import React from 'react'
import { BlurView } from 'expo-blur';
import className from 'twrnc';
import WaspeedWhite from '../assets/icons/warpspeed-logo-white.svg';
import WaspeedOrange from '../assets/icons/warpspeed-logo-orange.svg';

const SpinnerModal = () => {
    const currentMode = useColorScheme();
  return (
    <BlurView style={{ zIndex: 2, width: '100%', height: '100%', position: 'absolute'}} experimentalBlurMethod='dimezisBlurView' tint='regular' intensity={20}>
    <View style={className`flex-1 flex-row justify-center items-center`}>
      {/* Background circular tube */}
      <View style={styles.tubeContainer}>
        <View style={styles.tube} />
      </View>
     
    
      <ActivityIndicator size={92}  color={currentMode === 'light' ? '#ffffff' : '#ff9913'  } style={[styles.spinner, className``]} />
    </View>
  </BlurView>
  )
}

const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    tubeContainer: {
      position: 'absolute',
      width: 100, // Set a fixed width for the tube
      height: 100, // Set a fixed height for the tube
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalIntensity: {
        // backgroundColor: 'rgba(0, 0, 0, 0.80)', 
    },
    tube: {
      width: '75%',
      height: '75%',
      borderRadius: 50, // Make it circular
      borderWidth: 7, // Width of the tube
      borderColor: '#f7f7f7', // Light gray color for the tube
      position: 'absolute',
    },
    spinner: {
      position: 'absolute',
    },
  });
  

export default SpinnerModal