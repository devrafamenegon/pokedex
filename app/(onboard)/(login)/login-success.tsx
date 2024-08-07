import { CTAButton } from "@/components/CTAButton";
import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

const LoginSuccessScreen = () => {
  const router = useRouter();

  const handleContinue = () => {
    router.push('/(pokedex)/pokedex' as any)
  }

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Image source={require('@/assets/images/trainers/duo_4.png')} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Bem-vindo de volta, Treinador!</Text>
          <Text style={styles.subtitle}>Esperamos que tenha tido uma longa jornada desde a última vez em que nos visitou.</Text>
        </View>
        <CTAButton title="Continuar" onPress={handleContinue}/>
      </View>
    </View>
    
  )
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: 40,
    flex: 1
  },
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    paddingHorizontal: 16,
    paddingBottom: 40,
    backgroundColor: '#fff'
  },
  image: {
    alignSelf: 'center',
  },
  textContainer: {
    display: 'flex',
    gap: 16,
    marginBottom: 32
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
    color: '#666666',
  },
})

export default LoginSuccessScreen;