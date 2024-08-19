import InputScreen from "@/components/InputScreen"
import { useRouter } from "expo-router";

const ChangePasswordSecondStepScreen = () => {
  const router = useRouter();

  const handlePasswordSubmit = () => {
    router.push('/(onboard)/(login)/login-with-email' as any)
  };

  return (
    <InputScreen 
      headerTitle='Trocar senha'
      title='Tudo certo!' 
      subtitle='Digite sua nova senha'
      placeholder='Nova senha'
      buttonText='Alterar'
      onSubmit={handlePasswordSubmit}
      validate={(value) => value.length >= 8}
      tipText='Lembre-se bem dessa senha.'
      secureTextEntry
    />
  ) 
}

export default ChangePasswordSecondStepScreen;