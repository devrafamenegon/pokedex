import { CTAButton } from "@/components/CTAButton";
import ArrowIcon from "@/components/icon/arrow";
import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native"

const LoginScreen = () => {
  const router = useRouter();

  const handleLoginWithApple = () => {
    router.push('/login-with-apple');
  };

  const handleLoginWithGoogle = () => {
    router.push('/login-with-google');
  };

  const handleLoginWithEmail = () => {
    router.push('/login-with-email');
  };

  return (
    <View style={styles.container}>
      <View style={styles.backContainer}>
        <ArrowIcon />
        <Text style={styles.header}>Entrar</Text>
      </View>
      <View style={styles.buttonContainer}>
        <CTAButton title="Continuar com a Apple" type="ghost" onPress={handleLoginWithApple}/>
      </View>
      <View style={styles.buttonContainer}>
        <CTAButton title="Continuar com o Google" type="ghost" onPress={handleLoginWithGoogle}/>
      </View>
      <View style={styles.buttonContainer}>
        <CTAButton title="Continuar com um e-mail" type="default" onPress={handleLoginWithEmail}/>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'flex-end',
    display: 'flex',
    paddingVertical: 40,
    paddingHorizontal: 16
  },
  backContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  header: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18
  },
  buttonContainer: {
    marginTop: 4 
  }
});

export default LoginScreen;