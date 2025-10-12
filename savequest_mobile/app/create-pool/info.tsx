import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'
import { usePoolCreate, TokenType, GroupType, YieldContractType } from '@/context/PoolCreateContext'
import { getTokenAddress, getYieldContractAddress } from '@/utils/tokenAddresses'

export default function CreatePoolInfo() {
  const { state, setState } = usePoolCreate()
  const [name, setName] = useState(state.poolName)
  const [collectionSymbol, setCollectionSymbol] = useState(state.collectionSymbol)
  const [token, setToken] = useState<TokenType>(state.token)
  const [groupType, setGroupType] = useState<GroupType>(state.groupType)
  const [yieldContractType, setYieldContractType] = useState<YieldContractType>(state.yieldContractType)

  const handleTokenChange = (selectedToken: TokenType) => {
    setToken(selectedToken)
    setState((s) => ({ 
      ...s, 
      token: selectedToken,
      depositTokenAddress: getTokenAddress(selectedToken)
    }))
  }

  const handleYieldContractChange = (selectedYieldContract: YieldContractType) => {
    setYieldContractType(selectedYieldContract)
    setState((s) => ({ 
      ...s, 
      yieldContractType: selectedYieldContract,
      yieldContractAddress: getYieldContractAddress(selectedYieldContract)
    }))
  }

  const proceed = () => {
    setState((s) => ({ 
      ...s, 
      poolName: name.trim(), 
      collectionSymbol: collectionSymbol.trim(),
      token, 
      groupType,
      yieldContractType,
      yieldContractAddress: getYieldContractAddress(yieldContractType)
    }))
    router.push('/create-pool/members')
  }

  return (
    <SafeAreaView className="w-full h-full bg-primary">
      <ScrollView className="p-[24px]" contentContainerStyle={{ paddingBottom: 40 }}>
        <View className="flex flex-row items-center justify-between mb-6">
          <TouchableOpacity className="w-[44px] h-[44px] rounded-lg bg-bg items-center justify-center" onPress={() => router.back()}>
            <Text className="text-white">←</Text>
          </TouchableOpacity>
          <Text className="text-white text-[22px] font-bold">CREATE POOL</Text>
          <View className="w-[44px]" />
        </View>

        <View className="bg-bg rounded-2xl p-[20px]">
          <Text className="text-white text-[18px] font-extrabold mb-3">POOL DETAILS</Text>
          <Text className="text-text mb-2">POOL NAME</Text>
          <View className="rounded-xl border border-secondary px-3 mb-4">
            <TextInput
              placeholder="Enter pool name..."
              placeholderTextColor="#AAAAAA"
              value={name}
              onChangeText={setName}
              className="text-white h-[48px]"
            />
          </View>

          <Text className="text-text mb-2">COLLECTION SYMBOL</Text>
          <View className="rounded-xl border border-secondary px-3">
            <TextInput
              placeholder="Enter collection symbol (e.g., SAVE1)"
              placeholderTextColor="#AAAAAA"
              value={collectionSymbol}
              onChangeText={setCollectionSymbol}
              className="text-white h-[48px]"
            />
          </View>

          <Text className="text-text mt-5 mb-3">TOKEN TYPE</Text>
          <View className="flex flex-row gap-x-3">
            {(['USDT','USDC','BTC'] as TokenType[]).map((t) => (
              <TouchableOpacity key={t} onPress={() => handleTokenChange(t)} className={`flex-1 h-[70px] rounded-xl items-center justify-center ${token === t ? 'bg-secondary' : 'bg-highlight'}`}>
                <Text className={`${token === t ? 'text-black' : 'text-white'} font-extrabold`}>{t}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View className="bg-bg rounded-2xl p-[20px] mt-5">
          <Text className="text-white text-[18px] font-extrabold mb-3">GROUP TYPE</Text>
          <View className="gap-y-3">
            <TouchableOpacity onPress={() => setGroupType('closed')} className={`rounded-xl p-[16px] ${groupType==='closed' ? 'bg-black border-secondary border' : 'bg-highlight'}`}>
              <Text className="text-white text-[16px] font-extrabold">CLOSED GROUP</Text>
              <Text className="text-text">Invite only</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setGroupType('open')} className={`rounded-xl p-[16px] ${groupType==='open' ? 'bg-black border-secondary border' : 'bg-highlight'}`}>
              <Text className="text-white text-[16px] font-extrabold">OPEN GROUP</Text>
              <Text className="text-text">Anyone can join</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="bg-bg rounded-2xl p-[20px] mt-5">
          <Text className="text-white text-[18px] font-extrabold mb-3">YIELD PROTOCOL</Text>
          <Text className="text-text mb-3">SELECT YIELD PROTOCOL</Text>
          <View className="flex flex-row gap-x-3">
            {(['COMPOUND','AAVE','YIELD_PROTOCOL'] as YieldContractType[]).map((y) => (
              <TouchableOpacity key={y} onPress={() => handleYieldContractChange(y)} className={`flex-1 h-[70px] rounded-xl items-center justify-center ${yieldContractType === y ? 'bg-secondary' : 'bg-highlight'}`}>
                <Text className={`${yieldContractType === y ? 'text-black' : 'text-white'} font-extrabold text-xs`}>{y}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <TouchableOpacity onPress={proceed} className="bg-secondary rounded-2xl mt-8 h-[56px] items-center justify-center">
          <Text className="text-black text-[18px] font-extrabold">NEXT</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}


