import { CTAButton } from "@/components/button/CTAButton";
import { CTAIconButton } from "@/components/button/CTAIconButton";
import HeaderView from "@/components/HeaderView";
import BackArrowIcon from "@/components/icon/back-arrow";
import { useRouter } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const LoginScreen = () => {
  const router = useRouter();

  const handleBack = () => {
    router.push("/entry-selection");
  };

  const handleLoginWithApple = () => {
    // TODO
  };

  const handleLoginWithGoogle = () => {
    // TODO
  };

  const handleLoginWithEmail = () => {
    router.push("/login-with-email");
  };

  return (
    <HeaderView headerTitle="Entrar">
      <View style={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <Image
            source={require("@/assets/images/trainers/7.png")}
            style={styles.image}
          />
        </View>
        <View style={styles.footerContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Que bom te ver aqui novamente!</Text>
            <Text style={styles.subtitle}>Como deseja se conectar?</Text>
          </View>
          <View style={styles.buttonContainer}>
            <CTAIconButton
              title="Continuar com a Apple"
              logo="logo-apple"
              onPress={handleLoginWithApple}
            />
            <CTAIconButton
              title="Continuar com o Google"
              logo="logo-google"
              onPress={handleLoginWithGoogle}
            />
            <CTAButton
              title="Continuar com um e-mail"
              type="default"
              onPress={handleLoginWithEmail}
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

export default LoginScreen;
