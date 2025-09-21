import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { ICONS } from "@/constants/icons";

const onboarding = () => {
  return (
    <SafeAreaView className="bg-primary w-full h-full items-center">
      <View className="flex flex-col gap-y-16 w-full px-[25px]">
        <View className="flex flex-col gap-y-8 items-center">
          <View className="flex flex-col border-r-[12px] border-b-[12px] rounded-[12px] justify-center gap-y-2 bg-primary p-[33px]">
            <Image source={ICONS.logo} />
          </View>
          <View className="flex flex-col">
            <Text className="text-white text-[60px] font-bold">PoolSave:</Text>
            <Text className="text-white text-[48px] font-bold">
              Save. Rotate:
            </Text>
            <Text className="text-[48px] font-bold text-secondary text-center">
              Grow.
            </Text>
          </View>

          <View className="flex-col gap-y-2">
            <Text className="text-white text-[20px] font-bold text-center">
              ONCHAIN SAVINGS THAT
            </Text>
            <Text className="text-white text-[20px] font-bold text-center">
              ACTUALLY WORK
            </Text>
            <View className="flex flex-row justify-center w-[320px] h-[12px] gap-x-[8px]">
              <View className="bg-white rounded-full h-[12px] w-[12px]">
              </View>
              <View className="bg-secondary rounded-full h-[12px] w-[32px]">
              </View>
              <View className="bg-accent rounded-full h-[12px] w-[12px]"> 
              </View>
            </View>
          </View>
        </View>

        <View className="flex flex-row gap-x-4 w-full  h-[117.516px]">
          <View className="flex flex-col w-1/2 p-[16px] border-r-[12px] border-b-[12px] rounded-[12px] justify-center gap-y-2">
            <View className="w-[33.097px] h-[33.097px] bg-secondary rounded-lg"></View>
            <Text className="text-white font-bold">STABLE COINS</Text>
            <Text className="text-white">7.8% APY</Text>
          </View>

          <View className="flex flex-col w-1/2 p-[16px] border-r-[12px] border-b-[12px] rounded-[12px] justify-center gap-y-2">
            <View className="w-[33.097px] h-[33.097px] bg-accent rounded-lg"></View>
            <Text className="text-white font-bold">BTC VAULt</Text>
            <Text className="text-white">7.8% APY</Text>
          </View>
        </View>

        <View className="flex flex-col gap-y-[49px]">
          <TouchableOpacity className="w-full bg-secondary h-[67px] rounded-[12px] justify-center items-center">
            <Link className="text-primary font-bold text-[20px]" href="/(tabs)">
              GET STARTED
            </Link>
          </TouchableOpacity>
          <View>
            <Text className="text-text font-semibold text-center">POWERED BY BTCFI ON STARKNET</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default onboarding;
