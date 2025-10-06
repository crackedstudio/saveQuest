import { Stack } from "expo-router";
import "../global.css";
import { StatusBar } from "react-native";
import { AccountProvider } from "@/context/UserContext";


export default function RootLayout() {
  return (
    <>
    <AccountProvider> 
      <StatusBar  />

      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: '#1A1A1A' },
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="(tabs)" />
      </Stack>
      </AccountProvider>
    </>
  );
}