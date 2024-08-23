import React from 'react';
import InputScreen from '@/components/InputScreen';
import { useRouter } from 'expo-router';

const ForgotPasswordScreen = () => {
  const router = useRouter();

  const handleEmailSubmit = (email: string) => {
    router.push({
      pathname: '/forgot-password-code',
      params: { email },
    });
  };

  return (
    <InputScreen
      headerTitle='Esqueci minha senha'
      title="Vamos recuperar!"
      subtitle="Qual é o seu e-mail?"
      placeholder="E-mail"
      buttonText='Continuar'
      tipText="Vamos enviar um código de verificação para o seu e-mail."
      onSubmit={handleEmailSubmit}
      validate={(value) => value.includes('@')}
    />
  );
};

export default ForgotPasswordScreen;
