import React from 'react';
import RegisterInputScreen from '@/components/RegisterInputScreen';
import { useRouter } from 'expo-router';

const ForgotPasswordScreen = () => {
  const router = useRouter();

  const handleEmailSubmit = (email: string) => {
    router.push({
      pathname: '/(onboard)/(login)/forgot-password-code' as any,
      params: { email },
    });
  };

  return (
    <RegisterInputScreen
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
