import { Stack } from "expo-router";

export default function LoginLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" />
      <Stack.Screen name="login-with-email" />
      <Stack.Screen name="login-load" />
      <Stack.Screen name="login-success" />
      <Stack.Screen name="forgot-password" />
      <Stack.Screen name="forgot-password-code" />
    </Stack>
  );
}
