import { Text, View } from "react-native";
import "./onbarding";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href="/onbarding">Go to Onbarding page</Link>
    </View>
  );
}
