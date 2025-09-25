import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

const savings = () => {
  return (
    <SafeAreaView className="w-full h-full bg-primary">
      <ScrollView >
        <View className="h-full p-4 gap-y-4 flex flex-col">
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
            <Text className="text-secondary font-bold text-[16px]">
              WITHDRAW
            </Text>
          </View>
        </View>

        <View className="flex flex-col gap-y-2">
          <Text className="text-white font-[900px] text-[18px]">
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
              <Text className="text-white font-bold text-[18px]">
                $5,847.92
              </Text>
              <Text className="text-secondary text-right text-[12px]">
                + 4.2% APY
              </Text>
            </View>
          </View>

          <View className="flex flex-row justify-around p-[14px] h-[90px] w-full border-shadow-accent bg-[#FFFFFF1A] rounded-[12px] border-l-[8px]">
            <View className="w-[38px] h-[38px] bg-accent rounded-lg"></View>
            <View className="flex flex-col">
              <Text className="text-white font-bold text-[16px]">
                BTC Vault
              </Text>
              <Text className="text-text text-[12px]">Bitcoin savings</Text>
            </View>
            <View className="flex flex-col">
              <Text className="text-white font-bold text-[18px]">
                $5,847.92
              </Text>
              <Text className="text-accent text-right text-[12px]">
                + 4.2% APY
              </Text>
            </View>
          </View>
        </View>

        <View className="flex flex-col gap-y-4">
          <View className=" flex flex-row justify-between w-full">
            <Text className="text-white text-[18px] font-[900px]">
              SAVINGS GOALS
            </Text>
            <TouchableOpacity className="bg-secondary px-[15px] py-[10px] rounded-[8px]">
              <Link href="/" className="text-[14px] font-[900px]">
                NEW GOAL
              </Link>
            </TouchableOpacity>
          </View>

          <View className="flex flex-col gap-y-2">
            <View className="flex flex-col border rounded-[12px] h-[144px] p-[20px] gap-y-2 bg-cardbg border-highlight">
              <View className="flex flex-row justify-between items-center">
                <View className="flex flex-col gap-y-1">
                  <Text className="text-white text-[16px] font-[900px]">
                    Emergency Fund
                  </Text>
                  <Text className="text-text font-[700px]">Target: $1000</Text>
                </View>
                <Text className="text-white font-[900px] text-[20px]">40%</Text>
              </View>
            </View>
          </View>

          <View className="flex flex-col border rounded-[12px] h-[144px] p-[20px] gap-y-2 bg-cardbg border-secondary">
            <View className="flex flex-row justify-between items-center">
              <View className="flex flex-col gap-y-1">
                <Text className="text-white text-[16px] font-[900px]">
                  Vacation Fund
                </Text>
                <Text className="text-text font-[700px]">Target: $5000</Text>
              </View>
              <Text className="text-white font-[900px] text-[20px]">0%</Text>
            </View>
          </View>
        </View>

        <View className="flex flex-col gap-y-4">
          <Text className="text-white text-[18px] font-[900px]">
            RECENT ACTIVITY
          </Text>

          <View className="flex flex-col gap-y-2">
            <View className="p-[16px] flex flex-row justify-between items-center h-[76px] bg-bg rounded-[8px]">
              <View className="flex flex-row gap-x-2">
                <View className="w-[40px] h-[40px] rounded-full bg-secondary">

                </View>
                <View className="flex flex-col gap-y-1">
                  <Text className="text-white font-[900px] text[16px]">Deposit</Text>
                  <Text className="text-text text-[14px] font-[700px]">Dec 15, 2025</Text>
                </View>
              </View>
              <Text className="text-secondary text-[14px] font-[900px]">+ $5000.00</Text>
            </View>

            <View className="p-[16px] flex flex-row justify-between items-center h-[76px] bg-bg rounded-[8px]">
              <View className="flex flex-row gap-x-2">
                <View className="w-[40px] h-[40px] rounded-full bg-accent">

                </View>
                <View className="flex flex-col gap-y-1">
                  <Text className="text-white font-[900px] text[16px]">Deposit</Text>
                  <Text className="text-text text-[14px] font-[700px]">Dec 15, 2025</Text>
                </View>
              </View>
              <Text className="text-accent text-[14px] font-[900px]">+ $5000.00</Text>
            </View>
          </View>
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default savings;
