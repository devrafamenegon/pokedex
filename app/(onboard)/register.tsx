import { CTAButton } from "@/components/CTAButton";
import { useRouter } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import BackArrowIcon from "@/components/icon/back-arrow";
import { CTAIconButton } from "@/components/CTAIconButton";

const RegisterScreen = () => {
  const router = useRouter();

  const handleBack = () => {
    console.log('Back button pressed');
    router.push('/entry-selection');
  };

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
      <View style={styles.headerContainer}>
        <Pressable style={styles.backArrow} onPress={handleBack}>
          <BackArrowIcon />
        </Pressable>
        <Text style={styles.header}>Criar conta</Text>
      </View>
      <View style={styles.contentContainer}>
        <Image source={require('@/assets/images/trainers/6.png')} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Falta pouco para explorar esse mundo!</Text>
          <Text style={styles.subtitle}>Como deseja se conectar?</Text>
        </View>
        <View style={styles.buttonContainer}>
          <View>
            <CTAIconButton title="Continuar com a Apple" logo='logo-apple' onPress={handleRegisterWithApple}/>
          </View>
          <View>
            <CTAIconButton title="Continuar com o Google" logo='logo-google' onPress={handleRegisterWithGoogle}/>
          </View>
          <View>
            <CTAButton title="Continuar com um e-mail" type="default" onPress={handleRegisterWithEmail}/>
          </View>
        </View>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    paddingVertical: 40,
    paddingHorizontal: 16,
    backgroundColor: '#FFF'
  },
  headerContainer: {
    height: 38,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  backArrow: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    padding: 32,
    margin: -32,
    zIndex: 1
  },
  header: {
    flex: 1,
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
  },
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