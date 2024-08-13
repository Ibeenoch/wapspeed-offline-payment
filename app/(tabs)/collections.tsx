import { View, Text, useColorScheme, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import className from 'twrnc';
import { PieChart } from 'react-native-gifted-charts'
import ReUseableStyles from '../../utils/reuseableColors';
import Salary from '../../assets/icons/payroll-salary-icon.svg';
import FreeLance from '../../assets/icons/computer-businesswoman-icon.svg';
import Voluntary from '../../assets/icons/volunteer-svgrepo-com.svg';
import Gift from '../../assets/icons/class-reward-svgrepo-com.svg';
import Netflix from '../../assets/icons/netflix-1-logo-svgrepo-com.svg';
import AirBnb from '../../assets/icons/airbnb-svgrepo-com.svg';
import Spotify from '../../assets/icons/spotify-color-svgrepo-com.svg';
import Amazon from '../../assets/icons/amazon-color-svgrepo-com.svg';
import Menu from '../../assets/icons/menu-dots-svgrepo-com.svg';

const Collections = () => {
  const currentMode = useColorScheme();
  const getmode = ReUseableStyles();
  
  const pieChartData = [
    {
      value: 47,
      color: '#009fff',
      gradientCenterColor: '#006dff',
      focused: true,
    },
    {
      value: 40,
      color: '#93fcf8',
      gradientCenterColor: '#3be9de',
    },
    {
      value: 16,
      color: '#bdb2fa',
      gradientCenterColor: '#8f80f3',
    },
    {
      value: 3,
      color: '#ffa5ba',
      gradientCenterColor: '#ff7f97',
    },
  ];

  const renderDot = (color: string) => {
    return (
      <View 
      style={{
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: color,
        marginRight: 10,
      }}
      />
    )
  };

  const renderLegendComponent = () => {
    return (
      <View style={className`${ currentMode === 'light' ? 'bg-[#f7f7f7] border-b-[#f96d0e] border-b border-dashed border-opacity-30' : 'bg-[#000e28] border-b-[#f96d0e] border-b border-dashed border-opacity-30'}  pb-4`}>
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 10}}>
          <View style={{ flexDirection: 'row', alignItems: 'center', width: 120, marginRight: 20}}>
            {renderDot('#006dff')}
            <Text style={{ fontWeight: 500, color: `${ currentMode === 'light' ? '#000' : '#fff'}`}}>Expense: 47%</Text>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center', width: 120}}>
            {renderDot('#8f80f3')}
            <Text  style={{ fontWeight: 500, color: `${ currentMode === 'light' ? '#000' : '#fff'}`}}>Savings:  16%</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center'}}>
          <View style={{ flexDirection: 'row', alignItems: 'center', width: 120, marginRight: 20 }}>
            {renderDot('#3be9de')}
            <Text  style={{ fontWeight: 500, color: `${ currentMode === 'light' ? '#000' : '#fff'}`}}>Investment:  40%</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', width: 120}}>
            {renderDot('#ff7f97')}
            <Text  style={{ fontWeight: 500, color: `${ currentMode === 'light' ? '#000' : '#fff'}`}}>Others:  3%</Text>
          </View>
        </View>
      </View>
    )
  }

  const budgets = [
    {
      type: 'Housing',
      amount: '₦965,355.75',
      percent: '62%',
      backgroundColor: 'bg-purple-500'
    },
    {
      type: 'Food',
      amount: '₦75,550.35',
      percent: '19%',
      backgroundColor: 'bg-cyan-500'
    },
    {
      type: 'Saving',
      amount: '₦234,680.35',
      percent: '13%',
      backgroundColor: 'bg-orange-500'
    },
    {
      type: 'Airtime/Data',
      amount: '₦24,000.65',
      percent: '7%',
      backgroundColor: 'bg-pink-500'
    },
    {
      type: 'Leisure',
      amount: '₦58,000.54',
      percent: '27%',
      backgroundColor: 'bg-yellow-500'
    },
  ];

  const incomeData = [
    {
      type: 'Salary',
      amount: '₦558,000.00',
    },
    {
      type: 'Freelance',
      amount: '₦145,000.00',
    },
    {
      type: 'Rewards',
      amount: '₦98,600.00',
    },
    {
      type: 'Voluntary',
      amount: '₦13,000.00',
    },
  ];

  const monthlySpendings = [
    {
      title: 'AirBnB Rent',
      date: '2024-08-02',
      amount: '₦89,800.99'
    },
    {
      title: 'Netflix',
      date: '2024-08-03',
      amount: '₦13,500.99'
    },
    {
      title: 'Spotify',
      date: '2024-08-04',
      amount: '₦5,500.89'
    },
    {
      title: 'Amazon',
      date: '2024-08-05',
      amount: '₦17,100.59'
    },
  ]

  return (
    <ScrollView>
      <View style={className`  ${currentMode === 'light' ? 'bg-[#f7f7f7]' : 'bg-[#000e28]'}`}>
        <View style={className` `}>
          <View style={className`w-full flex-row justify-center  ${ currentMode === 'light' ? 'bg-[#f7f7f7]' : 'bg-[#000e28]'}  h-50`}>
            <PieChart
            data={pieChartData}
            donut
            showGradient
            sectionAutoFocus
            radius={90}
            innerRadius={60}
            innerCircleColor={'#232b5d'}
            centerLabelComponent={() => {
              return (
                <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{ fontSize: 22, color: 'white', fontWeight: 'bold'}}>47%</Text>
                  <Text style={{ fontSize: 14, color: 'white'}}>Expenditures</Text>
                </View>
              )
            }}
            />
          </View>
          {renderLegendComponent()}
        </View>

        <Text style={className`text-sm font-bold pl-2 mt-1 mb-1 ${getmode.text}`}>Spendings</Text>
        <ScrollView horizontal={true} style={className`pb-2 border-b  ${currentMode === 'light' ? 'border-b-[#f96d0e]' :  'border-b-[#f96d0e]'} border-dashed border-opacity-30`} >
        <View style={className`flex-row gap-2 px-2 items-center`}>
          <TouchableOpacity>
            <View style={className`border border-dashed bg-[#f96d0e] bg-opacity-30 ${currentMode === 'light' ? 'border-[#f96d0e]' :  'border-[#f96d0e]'} border-opacity-50 rounded-xl px-3 py-9 flex-row justify-center items-center`}>
              <Text style={className`font-bold text-lg text-[#f96d0e] `}>+</Text>
            </View>
          </TouchableOpacity>

          <View style={className`flex-row gap-2 items-center`}>
              {
                budgets.map((item, index) => (
                  <View key={index} style={className`p-2 w-18 rounded-xl flex-col gap-5 ${item.backgroundColor}`}>
                    <Text style={className`text-white font-bold text-left text-[9px]`}>{item.type} </Text>
                    <Text style={className`text-white font-bold text-left text-[9px]`}>{item.amount} </Text>
                    <View style={className`py-1 pl-1 bg-gray-400 bg-opacity-10 rounded-full w-7 flex-row justify-center items-center`}>
                      <Text style={className`text-white font-bold text-center text-[9px]`}>{item.percent} </Text>
                    </View>
                  </View>
                ))
              }
          </View>
        </View>
        </ScrollView>

        <Text style={className`text-sm pl-2 mt-1 font-bold  ${getmode.text}`}>Income</Text>
        <ScrollView horizontal={true} style={className` py-2 border-b ${currentMode === 'light' ? 'border-b-[#f96d0e]' :  'border-b-[#f96d0e]'} border-dashed border-opacity-30`} >
          <View style={className`flex-row gap-2 items-center px-2`}>
        {
          incomeData.map((income, index) => (
            <View key={index} style={className`${currentMode === 'light' ? 'bg-[#f96d0e]' : 'bg-[#f96d0e]'} w-23 pb-2 rounded-xl p-2`}>
                <View style={className`flex-row justify-between `}>
                  <View style={className`flex-row justify-between items-center p-1 border border-white border-opacity-40 rounded-full`}>
                    {
                      income.type === 'Salary' ? (
                        <Salary width={11} height={11} fill={'white'} />
                      ) 
                      : income.type === 'Freelance' ? (
                        <FreeLance width={11} height={11} fill={'white'} />
                      ) 
                      : income.type === 'Rewards' ? (
                        <Gift width={11} height={11} fill={'white'} />
                      ) 
                      : (
                        <Voluntary  width={11} height={11} fill={'white'}/>
                      )
                    }
                  </View>

                  <Menu  width={15} height={15} stroke={'white'}/>
                </View>

                <Text style={className`text-[9px] text-white text-left my-2`}>{income.type} </Text>
                <Text style={className`text-[11px] text-white text-left`}>{income.amount} </Text>
            </View>
          ))
        }
        </View> 
        </ScrollView>

        <Text style={className`text-sm pl-2 pt-2 font-bold  ${getmode.text}`}>August Spending</Text>
        <ScrollView  style={className`w-full py-2 `} >
          <View style={className`flex-col mb-12 pb-12 px-4`}>
              {
                monthlySpendings.map((monthly, index) => (
                  <View key={index} style={className`flex-row rounded-xl py-2 my-1 ${currentMode === 'light' ? 'bg-white' : 'bg-[#0e1a32]'} justify-between items-center px-2`}>
                  <View key={index} style={className`flex-row gap-2 items-center px-2`}>
                    <View style={className`py-2 `}>
                        {
                          monthly.title === 'AirBnB Rent' ? (
                            <AirBnb width={30} height={30}  />
                          ) 
                          : monthly.title === 'Netflix' ? (
                            <Netflix width={30} height={30}  />
                          )
                          : monthly.title === 'Spotify' ? (
                            <Spotify width={30} height={30}  />
                          ) 
                          : (
                            <Amazon width={30} height={30}  />
                          )
                        }
                    </View>
                    <View >
                      <Text style={className`font-bold text-left text-xs ${getmode.text}`}>{monthly.title} </Text>
                      <Text style={className`font-bold text-left text-[9px] ${getmode.grayText}`}>{monthly.date} </Text>
                    </View>
                  </View>

                  <Text style={className`text-xs ${getmode.text} pr-3 font-bold`}>{monthly.amount}</Text>
                  </View>
                ))
              }
          </View>
        </ScrollView>

      </View>
    </ScrollView>
  )
}

export default Collections