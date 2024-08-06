import React from 'react';
import RegisterInputScreen from '@/components/RegisterInputScreen';
import { useRouter, useLocalSearchParams } from 'expo-router';

const RegisterWithNameScreen = () => {
  const { email, password } = useLocalSearchParams();
  const router = useRouter();

  const handleNameSubmit = (name: string) => {
    // Processar o registro com o nome, email e senha
    console.log(`Registering user: ${name}, ${email}, ${password}`);
    // Navegar para a próxima etapa ou tela de conclusão
    router.push('/(onboard)/(register)/register-load' as any)
  };

  return (
    <RegisterInputScreen
      title="Pra finalizar"
      subtitle="Qual é o seu nome?"
      placeholder="Nome"
      buttonText='Criar conta'
      tipText='Esse será seu nome de usuário no aplicativo.'
      onSubmit={handleNameSubmit}
      validate={(value) => value.length >= 2}
    />
  );
};

export default RegisterWithNameScreen;
