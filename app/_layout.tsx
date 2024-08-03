import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    "Poppins-Regular": require('../assets/fonts/Poppins-Regular.ttf'),
    "Poppins-Medium": require('../assets/fonts/Poppins-Medium.ttf'),
    "Poppins-SemiBold": require('../assets/fonts/Poppins-SemiBold.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack initialRouteName="(onboard)" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(onboard)" />
      <Stack.Screen name="entry-selection" />
      <Stack.Screen name="register" />
      <Stack.Screen name="login" />
      <Stack.Screen name="pokedex" />
    </Stack>
  );
}
