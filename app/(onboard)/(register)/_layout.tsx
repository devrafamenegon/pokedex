import { Stack } from "expo-router";

export default function RegisterLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="register" />
      <Stack.Screen name="register-with-email" />
      <Stack.Screen name="register-with-password" />
      <Stack.Screen name="register-with-name" />
      <Stack.Screen name="register-load" />
      <Stack.Screen name="register-success" />
    </Stack>
  );
}
