import { Stack, Tabs } from "expo-router";
import "../global.css"

export default function RootLayout() {
  return <Tabs>
    <Tabs.Screen
      name="index"
      options={{
        title: "HOME",
        headerShown: false,
      }}
    />
    <Tabs.Screen
      name="pools"
      options={{
        title: "POOLS",
        headerShown: false,
      }}
    />

    <Tabs.Screen
      name="savings"
      options={{
        title: "SAVINGS",
        headerShown: false,
      }}
    />

    <Tabs.Screen
      name="profile"
      options={{
        title: "PROFILE",
        headerShown: false,
      }}
    />
  </Tabs>
}
