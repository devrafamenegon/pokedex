import { Redirect, Stack } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";

export default function AuthRoutesLayout() {
  const { isSignedIn } = useAuth();

  if (isSignedIn) {
    return <Redirect href={"/(tabs)/pokedex"} />;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
