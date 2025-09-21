import { Text, View } from "react-native";
import "./pools";
import { Link } from "expo-router";
import { SafeAreaFrameContext, SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView
    className="w-full h-full bg-primary"
    >
    <View
     
    >
      <Text className="text-white font-bold">Welcome to SaveQuest!</Text>
      <Link className="text-white" href="/">Go to onboarding</Link>
    </View>
    </SafeAreaView>
  );
}
