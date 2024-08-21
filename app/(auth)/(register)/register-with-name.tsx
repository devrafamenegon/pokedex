import React, { useEffect, useState } from 'react';
import InputScreen from '@/components/InputScreen';
import { useRouter } from 'expo-router';
import { useSignUp } from '@clerk/clerk-expo';
import { getCredentials } from '@/utils/secureStore';

const RegisterWithNameScreen = () => {
  const { isLoaded, signUp } = useSignUp();
  const router = useRouter();

  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCredentials = async () => {
      const { email, password } = await getCredentials();

      if (email && password) {
        setCredentials({ email, password });
      }
    };

    fetchCredentials();
  }, []);

  const handleNameSubmit = async (name: string) => {
    if (!isLoaded || isLoading) {
      return;
    }
    
    setIsLoading(true);

    try {
      const { email, password } = credentials;

      if (!email || !password) {
        throw new Error('Email or Password not informed.');
      }

      await signUp.create({
        emailAddress: email,
        password,
        firstName: name,
      });

      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' });

      router.push('/email-verification-code' as any);
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <InputScreen
      headerTitle='Criar conta'
      title="Pra finalizar"
      subtitle="Qual é o seu nome?"
      placeholder="Nome"
      buttonText='Criar conta'
      tipText='Esse será seu nome de usuário no aplicativo.'
      onSubmit={handleNameSubmit}
      validate={(value) => value.length >= 2}
      autoCapitalize='words'
      inputMode='text'
      isLoading={isLoading}
    />
  );
};

export default RegisterWithNameScreen;
