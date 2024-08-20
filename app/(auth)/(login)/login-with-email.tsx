import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import HeaderView from '@/components/HeaderView';
import { CTAButton } from '@/components/CTAButton';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import CustomTextInput from '@/components/CustomTextInput';

const LoginWithEmailScreen = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (email: string, password: string) => {
    // Processar o login com o email e senha
    console.log(`Logging user: ${email}, ${password}`);
    // Navegar para a próxima etapa ou tela de conclusão
    router.push('/login-load')
  };

  const handleForgot = () => {
    router.push('/forgot-password')
  }

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
  }
});

export default LoginWithEmailScreen;
