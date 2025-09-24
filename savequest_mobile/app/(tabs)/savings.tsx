import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const savings = () => {
  return (
    <SafeAreaView className="w-full h-full bg-primary p-4 gap-y-4 flex flex-col">
      <View className="flex flex-col w-full h-[120px] border-r-[8px] border-b-[8px] rounded-[16px] justify-center gap-y-2">
        <View className="border w-full h-full p-[16px] gap-y-2 rounded-[12px] bg-bg">
          <Text className="text-white font-bold">TOTAL SAVINGS</Text>
          <Text className="text-white font-bold text-[24px]">$4,000.00</Text>
          <Text className="text-text">Personal Vault balance</Text>
        </View>
      </View>

      <View className="flex w-full h-[108px] flex-row gap-x-2">
        <View className="w-1/2 border rounded-[12px] border h-[108px] border-r-[8px] border-b-[8px] rounded-[16px] flex flex-col items-center justify-center">
          <Text className="text-accent font-bold text-[16px]">ADD FUNDS</Text>
        </View>

        <View className="w-1/2 border rounded-[12px] border h-[108px] border-r-[8px] border-b-[8px] rounded-[16px] flex flex-col items-center justify-center">
          <Text className="text-secondary font-bold text-[16px]">WITHDRAW</Text>
        </View>
      </View>

      <View className="flex flex-col gap-y-2">
        <Text className="text-white font-bold text-[18px]">
          SAVINGS BREAKDOWN
        </Text>

        <View className="flex flex-row justify-around p-[14px] h-[90px] w-full border-shadow-secondary bg-[#FFFFFF1A] rounded-[12px] border-l-[8px]">
          <View className="w-[38px] h-[38px] bg-secondary rounded-lg"></View>
          <View className="flex flex-col">
            <Text className="text-white font-bold text-[16px]">
              Stablecoins
            </Text>
            <Text className="text-text text-[12px]">USDC + USDT</Text>
          </View>
          <View className="flex flex-col">
            <Text className="text-white font-bold text-[18px]">$5,847.92</Text>
            <Text className="text-secondary text-right text-[12px]">
              + 4.2% APY
            </Text>
          </View>
        </View>

        <View className="flex flex-row justify-around p-[14px] h-[90px] w-full border-shadow-accent bg-[#FFFFFF1A] rounded-[12px] border-l-[8px]">
          <View className="w-[38px] h-[38px] bg-accent rounded-lg"></View>
          <View className="flex flex-col">
            <Text className="text-white font-bold text-[16px]">BTC Vault</Text>
            <Text className="text-text text-[12px]">Bitcoin savings</Text>
          </View>
          <View className="flex flex-col">
            <Text className="text-white font-bold text-[18px]">$5,847.92</Text>
            <Text className="text-accent text-right text-[12px]">
              + 4.2% APY
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default savings;
