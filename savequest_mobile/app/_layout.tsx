import { Stack, Tabs } from "expo-router";

export default function RootLayout() {
  // return <Stack 
  //   screenOptions={{
  //     // headerShown: false,
  //      headerStyle: {
  //         backgroundColor: '#f4511e',
  //       },
  //       headerTintColor: '#fff',
  //       headerTitleStyle: {
  //         fontWeight: 'bold',
  //       },
  //   }}
  // >
  //   <Stack.Screen 
  //     name="index" 
  //     // options={{ title: 'Welcome' }}
  //   />
  //   <Stack.Screen 
  //     name="onbarding" 
  //     // options={{ title: 'Onbarding' }}
  //   />
  // </Stack>;
  return <Tabs>
    <Tabs.Screen
      name="index"
      options={{
        title: "Home",
        headerShown: false,
      }}
    />
    <Tabs.Screen
      name="onbarding"
      options={{
        title: "Onbarding",
        headerShown: false,
      }}
    />
  </Tabs>
}
