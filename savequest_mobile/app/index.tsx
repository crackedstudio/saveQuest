import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { ICONS } from "@/constants/icons";

const onboarding = () => {
  return (
    <SafeAreaView className="bg-primary w-full h-full items-center">
      <View className="flex flex-col gap-y-8 w-full px-[25px]">
        <View className="flex flex-col gap-y-8 items-center">
          <View className="flex flex-col border-r-[8px] border-b-[8px] rounded-[12px] justify-center gap-y-2 bg-primary p-[33px]">
            <Image source={ICONS.logo} />
          </View>
          <View className="flex flex-col">
            <Text className="text-white text-[32px] font-[900px]">PoolSave:</Text>
            <Text className="text-white text-[32px] font-[900px]">
              Save. Rotate:
            </Text>
            <Text className="text-[32px] font-[900px] text-secondary text-center">
              Grow.
            </Text>
          </View>

          <View className="flex-col gap-y-2">
            <Text className="text-white text-[18px] font-bold text-center">
              ONCHAIN SAVINGS THAT
            </Text>
            <Text className="text-white text-[18px] font-bold text-center">
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

        <View className="flex flex-row gap-x-4 w-full  h-[117.516px] mt-[50px]">
          <View className="flex flex-col w-1/2 p-[16px] border-r-[8px] border-b-[8px] rounded-[12px] justify-center gap-y-2">
            <View className="w-[33.097px] h-[33.097px] bg-secondary rounded-lg"></View>
            <Text className="text-white font-bold text-[14px]">STABLE COINS</Text>
            <Text className="text-[12px] text-highlight">7.8% APY</Text>
          </View>

          <View className="flex flex-col w-1/2 p-[16px] border-r-[8px] border-b-[8px] rounded-[12px] justify-center gap-y-2">
            <View className="w-[33.097px] h-[33.097px] bg-accent rounded-lg"></View>
            <Text className="text-white font-bold text-[14px]">BTC VAULt</Text>
            <Text className="text-highlight text-[12px]">7.8% APY</Text>
          </View>
        </View>

        <View className="flex flex-col gap-y-[49px]">
          <TouchableOpacity className="w-full bg-secondary h-[60px] rounded-[16px] justify-center items-center">
            <Link className="text-primary font-bold text-[18px]" href="/(tabs)">
              GET STARTED
            </Link>
          </TouchableOpacity>
          <View>
            <Text className="text-text font-semibold text-center text-[12px]">POWERED BY BTCFI ON STARKNET</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default onboarding;
