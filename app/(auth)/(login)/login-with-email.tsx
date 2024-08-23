import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import HeaderView from '@/components/HeaderView';
import { CTAButton } from '@/components/CTAButton';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import CustomTextInput from '@/components/CustomTextInput';
import { useSignIn } from '@clerk/clerk-expo';

const LoginWithEmailScreen = () => {
  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(''); // Novo estado para mensagem de erro

  const handleSubmit = async (email: string, password: string) => {
    if (!isLoaded) {
      return;
    }

    setIsLoading(true);
    setErrorMessage('');

    try {
      const completeSignIn = await signIn.create({
        identifier: email,
        password,
      });

      await setActive({ session: completeSignIn.createdSessionId });

      router.push('/login-load');
    } catch (err: any) {
      const error = err?.errors?.[0];
      if (error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage('Algo deu errado. Tente novamente.');
      }
      console.error(JSON.stringify(err, null, 2));
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgot = () => {
    router.push('/forgot-password');
  };

  const isValid = () => email.includes('@') && password.length >= 8;

  return (
    <HeaderView headerTitle='Entrar'>
      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.firstText}>Bem vindo de volta!</Text>
          <Text style={styles.secondText}>Preencha os dados</Text>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.input}>
            <Text style={styles.label}>E-mail</Text>
            <CustomTextInput 
              placeholder='E-mail' 
              value={email} 
              onChangeText={setEmail}
              secureTextEntry={false}
            />
          </View>
          <View style={styles.input}>
            <Text style={styles.label}>Senha</Text>
            <CustomTextInput 
              placeholder='Senha'
              value={password} 
              onChangeText={setPassword}
              secureTextEntry={true}
            />
          </View>
        </View>
        {errorMessage ? (
          <Text style={styles.errorText}>{errorMessage}</Text>
        ) : null}
        <View>
          <Pressable onPress={handleForgot}>
            <Text style={styles.forgotText}>Esqueceu sua senha?</Text>
          </Pressable>
        </View>
        <View style={styles.buttonContainer}>
          <CTAButton 
            title='Entrar'
            type={isValid() ? 'default' : 'deactivate'}
            onPress={() => handleSubmit(email, password)}
            disabled={isLoading}
          />
        </View>
      </View>
    </HeaderView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-start',   
  },
  textContainer: {
    display: 'flex',
    marginTop: 40,
    alignItems: 'center',
    textAlign: 'center'
  },
  firstText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 26,
    color: '#4D4D4D',
    textAlign: 'center'
  },
  secondText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 26,
    color: '#000',
    textAlign: 'center'
  },
  inputContainer: {
    display: 'flex',
    gap: 16,
    marginVertical: 24,
  },
  input: {
    display: 'flex',
    gap: 8
  },
  label: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#000',
  },
  forgotText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#173EA5',
    textAlign: 'center',
    padding: 8
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  errorText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#FF0000',
    textAlign: 'center',
    marginTop: 16,
  }
});

export default LoginWithEmailScreen;
