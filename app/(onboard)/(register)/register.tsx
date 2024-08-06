import { CTAButton } from "@/components/CTAButton";
import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native"
import { CTAIconButton } from "@/components/CTAIconButton";
import HeaderView from "@/components/HeaderView";

const RegisterScreen = () => {
  const router = useRouter();

  const handleRegisterWithApple = () => {
    // TODO
  };

  const handleRegisterWithGoogle = () => {
    // TODO
  };

  const handleRegisterWithEmail = () => {
    router.push('/(onboard)/(register)/register-with-email' as any);
  };

  return (
    <HeaderView>
      <View style={styles.contentContainer}>
        <Image source={require('@/assets/images/trainers/6.png')} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Falta pouco para explorar esse mundo!</Text>
          <Text style={styles.subtitle}>Como deseja se conectar?</Text>
        </View>
        <View style={styles.buttonContainer}>
          <CTAIconButton title="Continuar com a Apple" logo='logo-apple' onPress={handleRegisterWithApple}/>
          <CTAIconButton title="Continuar com o Google" logo='logo-google' onPress={handleRegisterWithGoogle}/>
          <CTAButton title="Continuar com um e-mail" type='default' onPress={handleRegisterWithEmail}/>
        </View>
      </View>
    </HeaderView>
  )
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-end',   
  },
  image: {
    alignSelf: 'center'
  },
  textContainer: {
    display: 'flex',
    gap: 16,
    marginTop: 8
  },
  title: {
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    fontSize: 26,
  },
  subtitle: {
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    lineHeight: 21,
    color: '#666666'
  },
  buttonContainer: {
    display: 'flex',
    gap: 12,
    marginTop: 32
  }
});

export default RegisterScreen;