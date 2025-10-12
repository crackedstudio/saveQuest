import { View, Text, Image, TouchableOpacity, Pressable, Alert } from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { ICONS } from "@/constants/icons";
import { Button } from "@react-navigation/elements";
import { AegisProvider, SecureStorage, useAegis } from '@cavos/aegis';
import { openAuthSessionAsync } from 'expo-web-browser';
import * as SecureStore from "expo-secure-store";
// import {
//   CavosWallet,
//   SignInWithApple,
//   SignInWithGoogle,
// } from "cavos-service-native";
// import { useAccount } from "@/context/UserContext";

const onboarding = () => {
  // const [wallet, setWallet] = useState<CavosWallet | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { aegisAccount, signUp } = useAegis();
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
    // Wallet deployment state
    const [isDeploying, setIsDeploying] = useState(false);


    // Google OAuth authentication state
    const [isGoogleLoggingIn, setIsGoogleLoggingIn] = useState(false);

    const loadExistingWallet = useCallback(async () => {
      try {
        // Retrieve the saved private key from secure storage
        const savedPrivateKey = await SecureStore.getItemAsync(
          "wallet_private_key"
        );
  
        // If we have a private key and the SDK is initialized, connect the account
        if (savedPrivateKey && aegisAccount) {
          await aegisAccount.connectAccount(savedPrivateKey);
          setWalletAddress(aegisAccount.address);
        }
      } catch (error) {
        console.log("No existing wallet found or error loading:", error);
      }
    }, [aegisAccount]);
  
    // Load existing wallet when component mounts
    useEffect(() => {
      loadExistingWallet();
    }, [loadExistingWallet]);


    const handleDeployWallet = async () => {
      if (!aegisAccount) {
        alert("Error: Aegis SDK not initialized");
        return;
      }
  
      setIsDeploying(true);
      try {
        // Deploy new wallet using Aegis SDK (gasless deployment)
        const privateKey = await aegisAccount.deployAccount();
  
        // Save private key securely to device storage
        await SecureStore.setItemAsync("wallet_private_key", privateKey);
  
        // Update UI state with the new wallet address
        setWalletAddress(aegisAccount.address);
  
        // Show success message with wallet details
        Alert.alert(
          "Wallet Created!",
          `Your wallet has been deployed successfully.\n\nAddress: ${aegisAccount.address}\n\nPrivate Key: ${privateKey}\n\n⚠️ IMPORTANT: Save your private key securely!`,
          [{ text: "OK" }]
        );
      } catch (error) {
        console.error("Wallet deployment failed:", error);
        const errorMessage =
          error instanceof Error ? error.message : "Unknown error occurred";
        Alert.alert("Error", `Failed to deploy wallet: ${errorMessage}`);
      } finally {
        setIsDeploying(false);
      }
    };

  // const {setAccount} = useAccount();

  // const handleLoginSuccess = (walletInstance: CavosWallet) => {
  //   console.log("Login successful, wallet created:", walletInstance.address);
  //   console.log("Wallet info:", walletInstance.getWalletInfo());
  //   setWallet(walletInstance);
  //   setAccount(walletInstance);
  // };

  // const handleLoginError = (error: any) => {
  //   console.error("Login failed:", error);
  //   setIsLoading(false);
  // };

  useEffect(() => {
    if (aegisAccount?.isWalletConnected()) {
      router.replace("/(tabs)");
    }
  }, [aegisAccount?.address])


    if (aegisAccount?.isWalletConnected()) {
      return (
        <View>
          <Text>{aegisAccount?.address}</Text>
        </View>
      )
    }

    const deployAccount = async () => {
      try {
        const pk = await aegisAccount.deployAccount();  
        console.log(pk)
      } catch (error) {
        console.log(error)
      }
      
    }

      // Login with Apple
  const loginWithApple = async () => {
    const url = await aegisAccount.getAppleOAuthUrl('exp://192.168.1.16:8081');
    const result = await openAuthSessionAsync(url, 'exp://192.168.1.16:8081');
    await aegisAccount.handleOAuthCallback(result);
  };

  const loginWithGoogle = async () => {
    const url = await aegisAccount.getGoogleOAuthUrl('exp://192.168.1.16:8081');
    const result = await openAuthSessionAsync(url, 'exp://192.168.1.16:8081');
    await aegisAccount.handleOAuthCallback(result);
  };


  return (
    <SafeAreaView className="bg-primary w-full h-full items-center">
      <View className="flex flex-col gap-y-8 w-full px-[25px]">
        <View className="flex flex-col gap-y-8 items-center">
          <View className="flex flex-col border-r-[8px] border-b-[8px] rounded-[12px] justify-center gap-y-2 bg-primary p-[33px]">
            <Image source={ICONS.logo} />
          </View>
          <View className="flex flex-col">
            <Text className="text-white text-[32px] font-[900px]">
              PoolSave:
            </Text>
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
              <View className="bg-white rounded-full h-[12px] w-[12px]"></View>
              <View className="bg-secondary rounded-full h-[12px] w-[32px]"></View>
              <View className="bg-accent rounded-full h-[12px] w-[12px]"></View>
            </View>
          </View>
        </View>

        <View className="flex flex-row gap-x-4 w-full  h-[117.516px] mt-[50px]">
          <View className="flex flex-col w-1/2 p-[16px] border-r-[8px] border-b-[8px] rounded-[12px] justify-center gap-y-2">
            <View className="w-[33.097px] h-[33.097px] bg-secondary rounded-lg"></View>
            <Text className="text-white font-bold text-[14px]">
              STABLE COINS
            </Text>
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

        
          
          <View className="flex flex-col gap-y-4">
          <Pressable className="bg-gray-400 p-4" onPress={() =>  loginWithApple()}>
            <Text className="text-white">Apple login</Text>
          </Pressable>

          <Pressable className="bg-gray-400 p-4" onPress={() =>  loginWithGoogle()}>
            <Text className="text-white">google Acct</Text>
          </Pressable>
              {/* <SignInWithApple
            appId={process.env.EXPO_PUBLIC_CAVOS_APP_ID!}
            network="sepolia"
            finalRedirectUri="yourapp://callback"
            onSuccess={handleLoginSuccess}
            onError={handleLoginError}
          >
            <Text className="text-slate-700">Sign in with Apple</Text>
          </SignInWithApple>

          <SignInWithGoogle
            appId={process.env.EXPO_PUBLIC_CAVOS_APP_ID!}
            network="sepolia"
            finalRedirectUri="yourapp://callback"
            onSuccess={handleLoginSuccess}
            onError={handleLoginError}
          >
            <Text className="text-slate-700">Sign in with Google</Text>
          </SignInWithGoogle> */}
          </View>
          
          <View>
            <Text className="text-text font-semibold text-center text-[12px]">
              POWERED BY BTCFI ON STARKNET
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default onboarding;
