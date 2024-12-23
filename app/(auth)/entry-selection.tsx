import ArrowIcon from "@/components/icon/arrow";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import OnboardPage from "./components/OnboardPage";
import { CTAButton } from "@/components/button/CTAButton";

const AuthScreen = () => {
  const router = useRouter();

  const handleRegister = () => {
    router.push("/(register)");
  };

  const handleLogin = () => {
    router.push("/(login)");
  };

  const handleSkip = () => {
    router.replace("/(tabs)/pokedex");
  };

  return (
    <View style={styles.container}>
      <View style={styles.skipContainer}>
        <Pressable onPress={handleSkip} style={styles.skipButton}>
          <Text style={styles.skip}>Pular </Text>
          <ArrowIcon />
        </Pressable>
      </View>
      <OnboardPage
        imageSource={require("@/assets/images/trainers/duo_2.png")}
        title="Está pronto para essa aventura?"
        subtitle="Basta criar uma conta e começar a explorar o mundo dos Pokémon hoje!"
        buttonTitle="Criar conta"
        onButtonPress={handleRegister}
      />
      <View style={styles.buttonContainer}>
        <CTAButton
          title="Ja tenho uma conta"
          type="ghost"
          onPress={handleLogin}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    justifyContent: "flex-end",
    display: "flex",
    paddingVertical: 40,
    paddingHorizontal: 16,
  },
  skipContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  skipButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  skip: {
    fontFamily: "Poppins-Medium",
    fontSize: 18,
  },
  buttonContainer: {
    marginTop: 4,
  },
});

export default AuthScreen;
