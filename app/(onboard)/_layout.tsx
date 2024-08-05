import { Stack } from "expo-router";

export default function OnboardLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="entry-selection" />
      <Stack.Screen name="(login)" />
      <Stack.Screen name="(register)" />
    </Stack>
  );
}
