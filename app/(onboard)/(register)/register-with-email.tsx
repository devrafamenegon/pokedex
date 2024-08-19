import React from 'react';
import InputScreen from '@/components/InputScreen';
import { useRouter } from 'expo-router';

const RegisterWithEmailScreen = () => {
  const router = useRouter();

  const handleEmailSubmit = (email: string) => {
    router.push({
      pathname: '/(onboard)/(register)/register-with-password' as any,
      params: { email },
    });
  };

  return (
    <InputScreen
      headerTitle='Criar conta'
      title="Vamos começar!"
      subtitle="Qual é o seu e-mail?"
      placeholder="E-mail"
      buttonText='Continuar'
      tipText="Use um endereço de e-mail válido."
      onSubmit={handleEmailSubmit}
      validate={(value) => value.includes('@')}
    />
  );
};

export default RegisterWithEmailScreen;
