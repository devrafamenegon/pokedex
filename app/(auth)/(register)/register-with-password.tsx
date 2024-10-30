import React from "react";
import InputScreen from "@/components/InputScreen";
import { useRouter, useLocalSearchParams } from "expo-router";
import { saveCredentials } from "@/utils/secureStore";

const RegisterWithPasswordScreen = () => {
  const router = useRouter();
  const { email } = useLocalSearchParams();

  const handlePasswordSubmit = async (password: string) => {
    const emailString = Array.isArray(email) ? email[0] : email;

    await saveCredentials(emailString, password);

    router.push("/register-with-name");
  };

  return (
    <InputScreen
      headerTitle="Criar conta"
      title="Agora..."
      subtitle="Crie uma senha"
      placeholder="Senha"
      buttonText="Continuar"
      tipText="Sua senha deve ter pelo menos 8 caracteres"
      secureTextEntry
      onSubmit={handlePasswordSubmit}
      validate={(value) => value.length >= 8}
      autoCapitalize="none"
      inputMode="text"
    />
  );
};

export default RegisterWithPasswordScreen;
