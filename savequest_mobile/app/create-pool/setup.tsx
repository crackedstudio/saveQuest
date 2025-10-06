import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'
import { usePoolCreate } from '@/context/PoolCreateContext'

export default function RotationSetup() {
  const { state, setState, reset } = usePoolCreate()
  const [monthly, setMonthly] = useState(String(state.monthlyContribution))
  const [startDate, setStartDate] = useState(state.startDateISO.slice(0, 10))

  const create = () => {
    const m = parseInt(monthly || '0', 10)
    setState((s) => ({ ...s, monthlyContribution: isNaN(m) ? 0 : m, startDateISO: new Date(startDate).toISOString() }))
    // Here you would call the contract/wallet flow, then show overview
    router.replace({ pathname: '/pool/overview', params: { name: state.poolName, token: state.token, members: String(state.members.length || 1) } })
    reset()
  }

  return (
    <SafeAreaView className="w-full h-full bg-primary">
      <ScrollView className="p-[24px]" contentContainerStyle={{ paddingBottom: 40 }}>
        <View className="flex flex-row items-center justify-between mb-6">
          <TouchableOpacity className="w-[44px] h-[44px] rounded-lg bg-bg items-center justify-center" onPress={() => router.back()}>
            <Text className="text-white">←</Text>
          </TouchableOpacity>
          <Text className="text-white text-[22px] font-bold">ROTATION SETUP</Text>
          <View className="w-[44px]" />
        </View>

        <View className="bg-bg rounded-2xl p-[20px]">
          <Text className="text-white text-[18px] font-extrabold mb-4">POOL SETTINGS</Text>
          <View className="gap-y-4">
            <View>
              <Text className="text-text mb-2">Monthly Contribution (USD)</Text>
              <View className="rounded-xl border border-secondary px-3">
                <TextInput value={monthly} onChangeText={setMonthly} keyboardType="number-pad" placeholder="500" placeholderTextColor="#AAAAAA" className="text-white h-[48px]" />
              </View>
            </View>
            <View>
              <Text className="text-text mb-2">Start Date</Text>
              <View className="rounded-xl border border-secondary px-3">
                <TextInput value={startDate} onChangeText={setStartDate} placeholder="YYYY-MM-DD" placeholderTextColor="#AAAAAA" className="text-white h-[48px]" />
              </View>
            </View>
          </View>
        </View>

        <TouchableOpacity onPress={create} className="bg-secondary rounded-2xl mt-8 h-[56px] items-center justify-center">
          <Text className="text-black text-[18px] font-extrabold">✓ CREATE POOL</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}


