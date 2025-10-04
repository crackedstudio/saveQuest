import { Button, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import "./pools";
import { Link } from "expo-router";
import {
  SafeAreaFrameContext,
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
        '0x049cb7d3b96ac799ad408ce6a543cff1445ed455f69ea3609a7a7aaafa80d3a7',
        // '0x0702c1fb5e7b53d57ca091184e4c76f75f0f7346a2dbc13909f6bd538cae9059',
        'create_pool',
        // 'set_counter',
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
      console.log(account?.address)
      
    } catch (error) {
        console.error("Error creating pool:", error);
    }
  }

  return (
    <SafeAreaView className="w-full h-full bg-primary">
      <ScrollView className="w-full h-full p-[24px] ">
        <View className="gap-y-4 flex flex-col">
          <View className="flex flex-row justify-between">
            <View className="flex flex-row justify-center bg-primary items-center">
              <Image className="h-[40px] w-[40px] p-[10px]" source={ICONS.logo} />
              <Text className="text-white text-[24px] font-bold">PoolSave</Text>
            </View>
          </View>
          <View className="flex flex-col gap-y-2">
            <View className="flex flex-col w-full h-[120px] gap-y-2  border-r-[8px] border-b-[8px] rounded-[12px] justify-center gap-y-2">
              <View className="border w-full h-full p-[16px] rounded-[12px] border-highlight">
                <Text className="text-white font-bold text-[16px]">POOL BALANCE</Text>
                <Text className="text-white font-bold text-[24px]">
                  $8,847.92
                </Text>
                <Text className="text-text text-[12px]">Active in 2 pools</Text>
                <Text className="text-white">Address: {account?.address}</Text>
                <Text className="text-white">Network: {account?.network}</Text>
                <Text className="text-white">Email: {account?.email}</Text>
        
              </View>
            </View>

            <View className="flex flex-col w-full h-[120px] border-r-[8px] border-b-[8px] rounded-[12px] justify-center gap-y-2">
              <View className="border w-full h-full p-[16px] rounded-[12px] border-highlight">
                <Text className="text-white font-bold text-[16px]">MY SAVINGS</Text>
                <Text className="text-white font-bold text-[24px]">
                  $4,000.00
                </Text>
                <Text className="text-text text-[12px]">Personal Vault</Text>
              </View>
            </View>
          </View>

          <View className="flex flex-col gap-y-4">
            <TouchableOpacity className="w-full bg-secondary h-[60px] justify-center items-center border-r-[8px] border-b-[8px] rounded-[16px]">
              <Link
                className="text-primary font-bold text-[18px]"
                href="/(tabs)/pools"
              >
                DEPOSIT
              </Link>
            </TouchableOpacity>

            <TouchableOpacity className="w-full bg-primary h-[60px] justify-center items-center border-r-[8px] border-b-[8px] rounded-[16px]">
              <Link
                className="text-white font-bold text-[18px]"
                href="/(tabs)/pools"
              >
                WITHDRAW
              </Link>
            </TouchableOpacity>

            <TouchableOpacity className="w-full bg-primary h-[60px] justify-center items-center border-r-[8px] border-b-[8px] rounded-[16px]">
              <Link
                className="text-white font-bold text-[18px]"
                href="/(tabs)/pools"
              >
                CREATE POOL
              </Link>
            </TouchableOpacity>

            <Button
              title="execute"
              onPress={() => {
                createPool();
                alert("done")
              }}
            />
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
