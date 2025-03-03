import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Link href="/community">Community</Link>
      <Link href="/area-ranking">Area-Ranking</Link>
      <Link href="/login">login</Link>
      <Link href="/register">register</Link>
    </View>
  );
}
