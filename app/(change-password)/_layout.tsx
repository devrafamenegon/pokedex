import { Stack } from "expo-router";

export default function ChangePasswordLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="change-password-first-step" />
      <Stack.Screen name="change-password-second-step" />
    </Stack>
  );
}
