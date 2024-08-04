import { CTAButton } from "@/components/CTAButton";
import ArrowIcon from "@/components/icon/arrow";
import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native"

const RegisterScreen = () => {
  const router = useRouter();

  const handleRegisterWithApple = () => {
    router.push('/register-with-apple');
  };

  const handleRegisterWithGoogle = () => {
    router.push('/register-with-google');
  };

  const handleRegisterWithEmail = () => {
    router.push('/register-with-email');
  };

  return (
    <View style={styles.container}>
      <View style={styles.backContainer}>
        <ArrowIcon />
        <Text style={styles.header}>Criar conta</Text>
      </View>
      <View style={styles.buttonContainer}>
        <CTAButton title="Continuar com a Apple" type="ghost" onPress={handleRegisterWithApple}/>
      </View>
      <View style={styles.buttonContainer}>
        <CTAButton title="Continuar com o Google" type="ghost" onPress={handleRegisterWithGoogle}/>
      </View>
      <View style={styles.buttonContainer}>
        <CTAButton title="Continuar com um e-mail" type="default" onPress={handleRegisterWithEmail}/>
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

export default RegisterScreen;