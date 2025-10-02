import { Stack } from "expo-router";
import "../global.css";
import { StatusBar } from "react-native";
import { AccountProvider } from "@/context/UserContext";


export default function RootLayout() {
  return (
    <>
    <AccountProvider> 
      <StatusBar  />

      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
      </AccountProvider>
    </>
  );
}