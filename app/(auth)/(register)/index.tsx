import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";
import HeaderView from "@/components/HeaderView";
import { CTAIconButton } from "@/components/button/CTAIconButton";
import { CTAButton } from "@/components/button/CTAButton";

const RegisterScreen = () => {
  const router = useRouter();

  const handleRegisterWithApple = () => {
    // TODO
  };

  const handleRegisterWithGoogle = () => {
    // TODO
  };

  const handleRegisterWithEmail = () => {
    router.push("/register-with-email");
  };

  return (
    <HeaderView headerTitle="Criar conta">
      <View style={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <Image
            source={require("@/assets/images/trainers/6.png")}
            style={styles.image}
          />
        </View>
        <View style={styles.footerContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>
              Falta pouco para explorar esse mundo!
            </Text>
            <Text style={styles.subtitle}>Como deseja se conectar?</Text>
          </View>
          <View style={styles.buttonContainer}>
            <CTAIconButton
              title="Continuar com a Apple"
              logo="logo-apple"
              onPress={handleRegisterWithApple}
            />
            <CTAIconButton
              title="Continuar com o Google"
              logo="logo-google"
              onPress={handleRegisterWithGoogle}
            />
            <CTAButton
              title="Continuar com um e-mail"
              type="default"
              onPress={handleRegisterWithEmail}
            />
          </View>
        </View>
      </View>
    </HeaderView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  headerContainer: {
    flex: 2 / 5,
    paddingTop: 16,
  },
  image: {
    maxHeight: "100%",
    alignSelf: "center",
    resizeMode: "contain",
  },
  footerContainer: {
    flex: 3 / 5,
  },
  textContainer: {
    display: "flex",
    gap: 16,
    marginTop: 8,
  },
  title: {
    textAlign: "center",
    fontFamily: "Poppins-Medium",
    fontSize: 26,
  },
  subtitle: {
    textAlign: "center",
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    lineHeight: 21,
    color: "#666666",
  },
  buttonContainer: {
    display: "flex",
    gap: 12,
    marginTop: 32,
  },
});

export default RegisterScreen;
