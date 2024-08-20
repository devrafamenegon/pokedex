import React from 'react';
import InputScreen from '@/components/InputScreen';
import { useRouter, useLocalSearchParams } from 'expo-router';

const RegisterWithPasswordScreen = () => {
  const router = useRouter();
  const { email } = useLocalSearchParams();

  const handlePasswordSubmit = (password: string) => {
    router.push({
      pathname: '/register-with-name',
      params: { email, password },
    });
  };

  return (
    <InputScreen
      headerTitle='Criar conta'
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
