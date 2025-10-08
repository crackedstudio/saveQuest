import { Button, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import "./pools";
import { Link } from "expo-router";
import {
  SafeAreaView,
} from "react-native-safe-area-context";
import { ICONS } from "@/constants/icons";
import { useAccount } from "@/context/UserContext";
import { useState } from "react";

export default function Index() {
  const {account} = useAccount();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const createPool = async () => {

    if (!account) return;

    setIsLoading(true);

    try {
       const result = await account.execute(
        '0x06940bf1022c25fe4feca4e869c18a1d8f6e10330909a086e761d1d5fbb0c857',
        "create_pool",
        [
          "firstpool",
          "fpm",
          100,
          10,
          '0x0054bd06a78db79f274984edf6907148c57af42f06ffd9a764ffe40ed9e0129b',
          '0x0341e472cdfe6fc6a6d9684d26f1028b177c48a52ffd4c847fea60e66b21a455',
          98765432123,
          "ipfs://test-uri-metadata-hash",
        ],
        false // Require biometric authentication
      );
      
      console.log('Transaction successful:', result);
      
    } catch (error) {
        console.error("Error creating pool:", error);
    }
  }

  return (
    <SafeAreaView className="w-full h-full bg-primary">
      <ScrollView className="w-full h-full p-[24px] ">
        <View className="gap-y-6 flex flex-col">
          {/* Header */}
          <View className="flex flex-row justify-between items-center">
            <View className="flex flex-row items-center gap-x-2">
              <Image className="h-[40px] w-[40px]" source={ICONS.logo} />
              <Text className="text-white text-[28px] font-bold">PoolSave</Text>
            </View>
            <View className="flex flex-row items-center gap-x-2">
              <Text className="text-white bg-bg px-3 py-2 rounded-xl">{account ? `${account.address?.slice(0,4)}...${account.address?.slice(-4)}` : '—'}</Text>
              <Text className="text-secondary">◻︎</Text>
            </View>
          </View>

          {/* Balance Cards */}
          <View className="bg-bg rounded-2xl p-[16px] border border-highlight">
            <View className="flex-row justify-between items-center">
              <Text className="text-white font-extrabold text-[16px]">POOL BALANCE</Text>
              <Text className="text-secondary bg-black px-3 py-1 rounded-xl">sepolia</Text>
            </View>
            <Text className="text-white font-extrabold text-[28px] mt-2">$8,847.92</Text>
            <Text className="text-text">Active in 2 pools</Text>
          </View>

          <View className="bg-bg rounded-2xl p-[16px] border border-highlight">
            <Text className="text-white font-extrabold text-[16px]">MY SAVINGS</Text>
            <Text className="text-white font-extrabold text-[28px] mt-2">$4,000.00</Text>
            <Text className="text-text">Personal vault</Text>
          </View>

          {/* Actions */}
          <View className="gap-y-4">
            <TouchableOpacity className="w-full bg-secondary h-[64px] justify-center items-center rounded-[16px]">
              <Link className="text-black font-extrabold text-[18px]" href="/(tabs)/pools">+ DEPOSIT</Link>
            </TouchableOpacity>
            <TouchableOpacity className="w-full bg-bg h-[64px] justify-center items-center rounded-[16px]">
              <Link className="text-white font-extrabold text-[18px]" href="/(tabs)/pools">— WITHDRAW</Link>
            </TouchableOpacity>
            <TouchableOpacity className="w-full bg-bg h-[64px] justify-center items-center rounded-[16px]">
              <Link className="text-white font-extrabold text-[18px]" href="/create-pool/info">✚ CREATE POOL</Link>
            </TouchableOpacity>

            <Button title="Create Poolss" onPress={createPool} />

          </View>

          {/* Your Pools */}
          <View className="gap-y-3">
            <Text className="text-white text-[20px] font-extrabold">YOUR POOLS</Text>
            <View className="flex flex-row justify-between p-[16px] w-full bg-[#FFFFFF1A] rounded-[12px] border-l-[8px] border-secondary">
              <View className="w-[48px] h-[48px] bg-secondary rounded-lg" />
              <View className="flex-1 px-3">
                <Text className="text-white font-extrabold text-[18px]">Stablecoins</Text>
                <Text className="text-text">USDC + USDT</Text>
              </View>
              <View className="items-end">
                <Text className="text-white font-extrabold text-[18px]">$8,247.50</Text>
                <Text className="text-secondary">+4.2% APY</Text>
              </View>
            </View>

            <View className="flex flex-row justify-between p-[16px] w-full bg-[#FFFFFF1A] rounded-[12px] border-l-[8px] border-accent">
              <View className="w-[48px] h-[48px] bg-accent rounded-lg" />
              <View className="flex-1 px-3">
                <Text className="text-white font-extrabold text-[18px]">BTC Vault</Text>
                <Text className="text-text">Bitcoin Savings</Text>
              </View>
              <View className="items-end">
                <Text className="text-white font-extrabold text-[18px]">$4,600.42</Text>
                <Text className="text-accent">+7.8% APY</Text>
              </View>
            </View>
          </View>

          {/* Powered by */}
          <View className="bg-bg rounded-2xl p-[16px]">
            <Text className="text-white text-[18px] font-extrabold">POWERED BY BTCfi</Text>
            <Text className="text-text">Secured on StarkNet</Text>
            <View className="flex-row gap-x-2 mt-3">
              <View className="w-[28px] h-[28px] rounded-full bg-[#666]" />
              <View className="w-[28px] h-[28px] rounded-full bg-[#777]" />
              <View className="w-[28px] h-[28px] rounded-full bg-[#888]" />
              <Text className="text-white">+12</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
