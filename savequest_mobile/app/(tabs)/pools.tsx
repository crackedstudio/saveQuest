import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ICONS } from '@/constants/icons'

const pools = () => {
  return (
    <SafeAreaView
     className="w-full h-full bg-primary"
    >
    <View className='flex flex-col p-[24px] gap-y-8 w-full'>
       <View className="flex flex-row justify-between">
        <View className="flex flex-row justify-center bg-primary items-center">
          <Image className="h-[40px] w-[40px] p-[10px]" source={ICONS.logo} />
          <Text className="text-white text-[24px] font-bold">PoolSave</Text>
        </View>
      </View>
      <View className='flex flex-row p-[8px] bg-black rounded-lg h-[76px] w-full gap-x-1'>
        <TouchableOpacity className='bg-secondary w-1/2 rounded-lg justify-center items-center'>
          <Text className='text-[18px] font-bold'>MY POOLS</Text>
        </TouchableOpacity>

        <TouchableOpacity className='bg-highlight w-1/2 rounded-lg justify-center items-center'>
          <Text className='text-[18px] font-bold text-white'>PUBLIC POOLS</Text>
        </TouchableOpacity>
      </View>    
    </View>
    </SafeAreaView>
  )
}

export default pools