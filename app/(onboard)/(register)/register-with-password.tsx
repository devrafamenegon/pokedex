import React from 'react';
import RegisterInputScreen from '@/components/RegisterInputScreen';
import { useRouter, useLocalSearchParams } from 'expo-router';

const RegisterWithPasswordScreen = () => {
  const router = useRouter();
  const { email } = useLocalSearchParams();

  const handlePasswordSubmit = (password: string) => {
    router.push({
      pathname: '/(onboard)/(register)/register-with-name' as any,
      params: { email, password },
    });
  };

  return (
    <RegisterInputScreen
      title="Agora..."
      subtitle="Crie uma senha"
      placeholder="Senha"
      buttonText='Continuar'
      tipText="Sua senha deve ter pelo menos 8 caracteres"
      secureTextEntry
      onSubmit={handlePasswordSubmit}
      validate={(value) => value.length >= 8}
    />
  );
};

export default RegisterWithPasswordScreen;
