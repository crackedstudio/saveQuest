import { View, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ICONS } from '@/constants/icons'
import { router } from 'expo-router'
import { useAegis } from "@cavos/aegis";

const pools = () => {

  const { aegisAccount } = useAegis();
  const [pools, setPools] = useState([])

  const getPools = async () => {
    if (!aegisAccount?.isWalletConnected()) return;
    const result = await aegisAccount.call(
      '0x00aff32441e682601f203dcdfec4f823f8f11f44b4660a0c42acc4780fd59bbf',
      'get_all_pools',
      [],
    );
    console.log('Pools:', result);
    setPools(result)
    alert(result)
  }

  useEffect(() => {
    getPools();
  }, []);

  
  return (
    <SafeAreaView
     className="w-full h-full bg-primary"
    >
    {/* <ScrollView className='w-full' contentContainerStyle={{ padding: 24, rowGap: 24 }}> */}
    <View className='flex flex-col gap-y-6 w-full'>
      {/* Header */}
      <View className="flex flex-row justify-between">
        <View className="flex flex-row justify-center bg-primary items-center gap-x-2">
          <Image className="h-[36px] w-[36px]" source={ICONS.logo} />
          <Text className="text-white text-[24px] font-bold">PoolSave</Text>
        </View>
      </View>

      {/* Toggle Tabs */}
      <View className='flex flex-row p-[8px] bg-black rounded-xl h-[64px] w-full gap-x-2 shadow-custom'>
        <TouchableOpacity className='bg-secondary w-1/2 rounded-xl justify-center items-center'>
          <Text className='text-[16px] font-bold'>MY POOLS</Text>
        </TouchableOpacity>

        <TouchableOpacity className='bg-highlight w-1/2 rounded-xl justify-center items-center'>
          <Text className='text-[16px] font-bold text-white'>PUBLIC POOLS</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={pools}
        renderItem={(pool) => (
          <View className='bg-bg rounded-2xl p-[16px] w-full border-l-[8px] border-secondary'>
        <View className='flex flex-row justify-between items-start'>
          <View className='flex flex-row items-center gap-x-4'>
            <View className='w-[48px] h-[48px] rounded-xl bg-secondary' />
            <View className='flex flex-col gap-y-1'>
              <Text className='text-white text-[18px] font-bold'>Stablecoin{"\n"}Squad</Text>
              {/* <Text className='text-text text-[12px]'>{pool?.id}</Text> */}
            </View>
          </View>
          <View className='items-end'>
            <Text className='text-secondary text-[22px] font-extrabold'>$2,500</Text>
            <Text className='text-text text-[12px]'>8 members</Text>
          </View>
        </View>

        <View className='mt-6'>
          <View className='flex flex-row justify-between items-center mb-2'>
            <Text className='text-white text-[16px] font-bold'>Next Yield Recipient:</Text>
            <Text className='text-secondary text-[16px] font-bold'>Sarah M.</Text>
          </View>
          <View className='w-full h-[10px] bg-[#5A5A5A] rounded-full overflow-hidden'>
            <View className='h-full w-[65%] bg-black' />
          </View>
          <Text className='text-text text-[12px] mt-2'>18 days remaining</Text>
        </View>

        <View className='mt-6 flex flex-row justify-between items-center'>
          <View>
            <Text className='text-accent text-[18px] font-extrabold'>+$187.50</Text>
            <Text className='text-text text-[12px]'>Yield accrued</Text>
          </View>
          <TouchableOpacity className='bg-secondary px-[18px] py-[12px] rounded-xl' onPress={() => router.push({ pathname: '/pool/[id]', params: { id: 'stablecoin-squad' } })}>
            <Text className='text-black text-[16px] font-extrabold'>VIEW DETAILS</Text>
          </TouchableOpacity>
        </View>
      </View>)
        }
        // keyExtractor = {pools => pool.id}
      />


      {/* <View className='bg-bg rounded-2xl p-[16px] w-full border-l-[8px] border-secondary'>
        <View className='flex flex-row justify-between items-start'>
          <View className='flex flex-row items-center gap-x-4'>
            <View className='w-[48px] h-[48px] rounded-xl bg-secondary' />
            <View className='flex flex-col gap-y-1'>
              <Text className='text-white text-[18px] font-bold'>Stablecoin{"\n"}Squad</Text>
              <Text className='text-text text-[12px]'>USDC Pool</Text>
            </View>
          </View>
          <View className='items-end'>
            <Text className='text-secondary text-[22px] font-extrabold'>$2,500</Text>
            <Text className='text-text text-[12px]'>8 members</Text>
          </View>
        </View>

        <View className='mt-6'>
          <View className='flex flex-row justify-between items-center mb-2'>
            <Text className='text-white text-[16px] font-bold'>Next Yield Recipient:</Text>
            <Text className='text-secondary text-[16px] font-bold'>Sarah M.</Text>
          </View>
          <View className='w-full h-[10px] bg-[#5A5A5A] rounded-full overflow-hidden'>
            <View className='h-full w-[65%] bg-black' />
          </View>
          <Text className='text-text text-[12px] mt-2'>18 days remaining</Text>
        </View>

        <View className='mt-6 flex flex-row justify-between items-center'>
          <View>
            <Text className='text-accent text-[18px] font-extrabold'>+$187.50</Text>
            <Text className='text-text text-[12px]'>Yield accrued</Text>
          </View>
          <TouchableOpacity className='bg-secondary px-[18px] py-[12px] rounded-xl' onPress={() => router.push({ pathname: '/pool/[id]', params: { id: 'stablecoin-squad' } })}>
            <Text className='text-black text-[16px] font-extrabold'>VIEW DETAILS</Text>
          </TouchableOpacity>
        </View>
      </View> */}

      {/* Pool Card 2 */}
      {/* <View className='bg-bg rounded-2xl p-[16px] w-full border-l-[8px] border-accent'>
        <View className='flex flex-row justify-between items-start'>
          <View className='flex flex-row items-center gap-x-4'>
            <View className='w-[48px] h-[48px] rounded-xl bg-accent' />
            <View className='flex flex-col gap-y-1'>
              <Text className='text-white text-[18px] font-bold'>Bitcoin{"\n"}Builders</Text>
              <Text className='text-text text-[12px]'>BTC Pool</Text>
            </View>
          </View>
          <View className='items-end'>
            <Text className='text-accent text-[22px] font-extrabold'>$1,800</Text>
            <Text className='text-text text-[12px]'>6 members</Text>
          </View>
        </View>

        <View className='mt-6'>
          <View className='flex flex-row justify-between items-center mb-2'>
            <Text className='text-white text-[16px] font-bold'>Next Yield Recipient:</Text>
            <Text className='text-accent text-[16px] font-bold'>You!</Text>
          </View>
          <View className='w-full h-[10px] bg-[#5A5A5A] rounded-full overflow-hidden'>
            <View className='h-full w-[85%] bg-black' />
          </View>
          <Text className='text-text text-[12px] mt-2'>4 days remaining</Text>
        </View>

        <View className='mt-6 flex flex-row justify-between items-center'>
          <View>
            <Text className='text-secondary text-[18px] font-extrabold'>+$234.67</Text>
            <Text className='text-text text-[12px]'>Yield accrued</Text>
          </View>
          <TouchableOpacity className='bg-secondary px-[18px] py-[12px] rounded-xl' onPress={() => router.push({ pathname: '/pool/[id]', params: { id: 'bitcoin-builders' } })}>
            <Text className='text-black text-[16px] font-extrabold'>VIEW DETAILS</Text>
          </TouchableOpacity>
        </View>
      </View>  */}
    </View>
    {/* </ScrollView> */}
    </SafeAreaView>
  )
}

export default pools