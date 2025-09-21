import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import "./pools";
import { Link } from "expo-router";
import {
  SafeAreaFrameContext,
  SafeAreaView,
} from "react-native-safe-area-context";
import { ICONS } from "@/constants/icons";

export default function Index() {
  return (
    <SafeAreaView className="w-full h-full bg-primary">
      <ScrollView className="w-full h-full p-[24px] ">
        <View className="gap-y-8 flex flex-col">
          <View className="flex flex-row justify-between">
            <View className="flex flex-row justify-center bg-primary items-center">
              <Image className="h-[40px] w-[40px] p-[10px]" source={ICONS.logo} />
              <Text className="text-white text-[24px] font-bold">PoolSave</Text>
            </View>
          </View>
          <View className="flex flex-col gap-y-4">
            <View className="flex flex-col w-full  h-[153.841px] border-r-[12px] border-b-[12px] rounded-[12px] justify-center gap-y-2">
              <View className="border w-full h-full p-[16px] rounded-[12px] border-highlight">
                <Text className="text-white font-bold">POOL BALANCE</Text>
                <Text className="text-white font-bold text-[36px]">
                  $8,847.92
                </Text>
                <Text className="text-text">Active in 2 pools</Text>
              </View>
            </View>

            <View className="flex flex-col w-full h-[153.841px] border-r-[12px] border-b-[12px] rounded-[12px] justify-center gap-y-2">
              <View className="border w-full h-full p-[16px] rounded-[12px] border-highlight">
                <Text className="text-white font-bold">MY SAVINGS</Text>
                <Text className="text-white font-bold text-[36px]">
                  $4,000.00
                </Text>
                <Text className="text-text">Personal Vault</Text>
              </View>
            </View>
          </View>

          <View className="flex flex-col gap-y-4">
            <TouchableOpacity className="w-full bg-secondary h-[67px] justify-center items-center border-r-[8px] border-b-[8px] rounded-[8px]">
              <Link
                className="text-primary font-bold text-[20px]"
                href="/(tabs)/pools"
              >
                DEPOSIT
              </Link>
            </TouchableOpacity>

            <TouchableOpacity className="w-full bg-primary h-[67px] justify-center items-center border-r-[8px] border-b-[8px] rounded-[8px]">
              <Link
                className="text-white font-bold text-[20px]"
                href="/(tabs)/pools"
              >
                WITHDRAW
              </Link>
            </TouchableOpacity>

            <TouchableOpacity className="w-full bg-primary h-[67px] justify-center items-center border-r-[8px] border-b-[8px] rounded-[8px]">
              <Link
                className="text-white font-bold text-[20px]"
                href="/(tabs)/pools"
              >
                CREATE POOL
              </Link>
            </TouchableOpacity>
          </View>

          <View className="flex flex-col gap-y-4">
            <Text className="text-white font-bold text-[24px]">YOUR POOLS</Text>
            <View className="flex flex-row justify-around p-[20px] h-[100px] w-full border-shadow-secondary bg-[#FFFFFF1A] rounded-[12px] border-l-[8px]">
              <View className="w-[48px] h-[48px] bg-secondary rounded-lg"></View>
              <View className="flex flex-col">
                <Text className="text-white font-bold text-[20px]">
                  Stablecoins
                </Text>
                <Text className="text-text text-[14px]">USDC + USDT</Text>
              </View>
              <View className="flex flex-col">
                <Text className="text-white font-bold text-[20px]">
                  $5,847.92
                </Text>
                <Text className="text-secondary text-right text-[14px]">
                  + 4.2% APY
                </Text>
              </View>
            </View>

            <View className="flex flex-row justify-around p-[20px] h-[100px] w-full border-shadow-accent bg-[#FFFFFF1A] rounded-[12px] border-l-[8px]">
              <View className="w-[48px] h-[48px] bg-accent rounded-lg"></View>
              <View className="flex flex-col">
                <Text className="text-white font-bold text-[20px]">
                  BTC Vault
                </Text>
                <Text className="text-text text-[14px]">Bitcoin savings</Text>
              </View>
              <View className="flex flex-col">
                <Text className="text-white font-bold text-[20px]">
                  $5,847.92
                </Text>
                <Text className="text-accent text-right text-[14px]">
                  + 4.2% APY
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
