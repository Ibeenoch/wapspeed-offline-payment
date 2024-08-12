import { View, Text, useColorScheme, TextInput, TouchableOpacity, Keyboard } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import className from 'twrnc'
import { router } from 'expo-router';
import ArrowForward from '../assets/icons/arrow-right-icon.svg';
import DeleteIconBlack from '../assets/icons/delete-left-icon.svg';
import DeleteIconWhite from '../assets/icons/delete-left-icon-white.svg';
import { useAppDispatch } from '../features/hooks';
import { setPasscode, shouldShowModal } from '../features/auth/auth';
import { delayNavigation } from '../utils/useIntervalHook';
import ReUseableStyles from '../utils/reuseableColors';

const Passcode = () => {
    const [currentIndex, setCurrentIndex] = useState<number>();
    const [passcodeReady, setPasscodeReady] = useState<boolean>(false);
    const [arrNum, setArrNum] = useState<string[]>(Array(6).fill(''));
    const dispatch = useAppDispatch()
    const getmode = ReUseableStyles();
    const currentMode = useColorScheme();
    const inputRefs = useRef<TextInput[]>([]);

    useEffect(() => {
      setCurrentIndex(0);
      inputRefs.current[0].focus();
    }, [])

    useEffect(() => {
      let newArr = arrNum.filter((t) => t.length > 0);
      if(newArr.length === 6){
        setPasscodeReady(true);
      }else{
        setPasscodeReady(false);
      }
    }, [arrNum])

    
    useEffect(() => {
      dispatch(shouldShowModal(false));
  }, [])
    
    // Update number and focus the next input
    const updateNum = (val: string) => {
     
      const nextIndex = arrNum.findIndex(num => num === ''); // Find the first empty index
      if (nextIndex !== -1) {
        const newArrNum = [...arrNum];
        newArrNum[nextIndex] = val;
        setArrNum(newArrNum);
        
  
        // Focus the next TextInput
        if (inputRefs.current[nextIndex + 1]) {
          setCurrentIndex(nextIndex + 1)
          inputRefs.current[nextIndex + 1].focus();
        }
        }
     
    };

  

    const deleteLastNum = () => {
      const newArrNum = [...arrNum];
      const lastIndex = arrNum.findLastIndex(num => num !== '');
      if (lastIndex !== -1) {
        newArrNum[lastIndex] = '';
        setArrNum(newArrNum);
        setCurrentIndex(lastIndex);
        inputRefs.current[lastIndex].focus();
      }
    };

    const handleNext = async() => {
      if(!passcodeReady)return;
      const passcode = arrNum.join('');
      dispatch(setPasscode(passcode));
      dispatch(shouldShowModal(true));
      delayNavigation('success');
    }

 // dark '#000e28' : light '#f7f7f7'        

  return (
    <View style={className`flex-1 ${currentMode === 'light' ? 'bg-[#f7f7f7]' : 'bg-[#000e28]'}`}>

        <View>
            <Text style={className` ${ currentMode === 'light' ? 'text-black' : 'text-white'} font-bold text-xl text-center pt-5 pb-1`}>Confirm your Passcode</Text>
            <Text style={className` ${ currentMode === 'light' ? 'text-black' : 'text-white'} text-[15px] text-center pb-7`}>Enter your 6 digit passcode</Text>
        </View>

        <View style={className`mx-6 p-4 rounded-xl ${ currentMode === 'light' ? 'bg-[#fff]' : 'bg-[#0e1a32]'}`}>
             <View style={className`flex flex-row w-full justify-center gap-1 `}>
        {arrNum.map((num, index) => (
          <TextInput
            key={index}
            ref={ref => inputRefs.current[index] = ref!}
            value={num}
            secureTextEntry={true}
            onChangeText={(text) => {
              // Allow only single character input
              if (text.length <= 1) {
                updateNum(text);
              }
            }}
            cursorColor={`#f96d0e`}
            autoComplete='off'
            // editable={false}
            showSoftInputOnFocus={false}
            // onFocus={() => handleFocus(index)}
            style={className`p-2 rounded-md font-bold text-lg text-center ${ currentIndex === index ? `${currentMode === 'light' ? 'text-black bg-white border border-[#f96d0e]' : 'border border-[#f96d0e] text-white bg-[#0e1a32]'} ` : `${currentMode === 'light' ? 'text-black bg-[#f4f5f9]' : 'text-white bg-[#333e52]'} ` }  `}
            maxLength={1} // Ensure only one character
          />
        ))}
      </View>
        </View>


        <View style={className`mx-4 my-6 p-4 rounded-xl ${currentMode === 'light' ? '' : ''}`}>
        <View style={className`flex-row flex-wrap w-full justify-between gap-2 mb-2`}>
          {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map(num => (
              <TouchableOpacity key={num} onPress={() => updateNum(num)} style={className`rounded-full p-6 w-[27%] ${currentMode === 'light' ? 'bg-[#f7f7f7]' : 'bg-[#1a263e]'}`} >
                <View >
                    <Text style={className`font-bold text-2xl text-center ${currentMode === 'light' ? 'text-black' : 'text-white bg-[#1a263e]'}`}>{num}</Text>
                </View>
              </TouchableOpacity>
          ))}

            { 
            currentMode === 'light' ? (
                <TouchableOpacity onPress={deleteLastNum}  style={className`rounded-full p-6 w-[27%] bg-[#f7f7f7] ` } >
                  <View >
                        <DeleteIconBlack width={30} height={30}  />
                  </View>
                </TouchableOpacity>   
            ) : (
                <TouchableOpacity onPress={deleteLastNum}  style={className`rounded-full p-6 w-[27%] bg-[#1a263e]` } >
                  <View >
                        <DeleteIconWhite width={30} height={30}   />
                  </View>
                </TouchableOpacity>   
            )
            
            }

                           


                <TouchableOpacity onPress={() => updateNum('0')}  style={className`rounded-full p-6 w-[27%]  ${ currentMode === 'light' ? 'bg-[#f7f7f7]' : 'bg-[#1a263e]'}` } >
               <View >
                <Text style={className`font-bold text-2xl text-center ${currentMode === 'light' ? 'text-black' : 'text-white bg-[#1a263e]'}`}>0</Text>
               </View>
                </TouchableOpacity>              

                <TouchableOpacity onPress={handleNext} style={className`rounded-full flex-row justify-center p-6 w-[27%]  ${ currentMode === 'light' ? `${passcodeReady ? 'bg-[#f96d0e]' : 'bg-[#ffb84d] bg-opacity-20'   } ` : `${passcodeReady ? 'bg-[#f96d0e]' : 'bg-[#ffb84d] bg-opacity-10'  }`  }` }>
                          <ArrowForward  width={30} height={30} fill={currentMode === 'light' ? 'white' : 'white' } stroke={currentMode === 'light' ? 'white' : 'white' } />
                </TouchableOpacity> 
              

        </View>
      </View>

          <View style={className``}> 
            <Text style={className`text-center text-xs text-[#f96d0e] `}>Forgot passcode?</Text>
          </View>
    </View>
  )
}

export default Passcode