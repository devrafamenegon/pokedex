import React, { RefObject, useRef, useState } from 'react';
import { useRouter } from 'expo-router';
import HeaderView from '@/components/HeaderView';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { CTAButton } from '@/components/CTAButton';
import { OTPInput } from '@/components/OtpInput';

const ForgotPasswordCodeScreen = () => {
  const router = useRouter();

  const [codes, setCodes] = useState<string[] | undefined>(Array(6).fill(""));
  const [errorMessages, setErrorMessages] = useState<string[]>();
  
  const isValid = () => codes!.every((code) => code !== '' && code !== undefined);

  const refs: RefObject<TextInput>[] = [
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
  ];

  const onChangeCode = (text: string, index: number) => {
    if (text.length > 1) {
      setErrorMessages(undefined);

      const newCodes = text.split("");
      setCodes(newCodes);

      refs[5]!.current?.focus();
      return;
    }

    setErrorMessages(undefined);

    const newCodes = [...codes!];
    newCodes[index] = text;

    setCodes(newCodes);

    if (text !== "" && index < 5) {
      refs[index + 1]!.current?.focus();
    }
  };

  const handleResendCode = () => {
    // TODO
    console.log('Reenviando código')
  }

  const handleCodeSubmit = () => {
    router.push('/(change-password)/change-password-second-step' as any);
  };

  return (
    <HeaderView headerTitle='Esqueci minha senha'>
      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.firstText}>Insira o código</Text>
          <Text style={styles.secondText}>Digite o código de 6 dígitos enviado para <Text style={styles.emailText}>meuemail@gmail.com</Text></Text>
        </View>
        <OTPInput
          codes={codes!}
          errorMessages={errorMessages}
          onChangeCode={onChangeCode}
          refs={refs}
          config={{
            backgroundColor: '#fff',
            textColor: '#000',
            borderColor: '#ccc',
            errorColor: '#ff000f',
            focusColor: '#000',
          }}
        />

        <Text style={styles.tipText}>Não recebeu o código?</Text>

        <View>
          <Pressable onPress={handleResendCode}>
            <Text style={styles.resendCodeText}>Reenvie agora</Text>
          </Pressable>
        </View>
        
        <View style={styles.buttonContainer}>
          <CTAButton 
            title='Continuar'
            type={!isValid ? 'deactivate' : 'default'}
            onPress={handleCodeSubmit}
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
    marginBottom: 24,
    alignItems: 'center',
    textAlign: 'center'
  },
  firstText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 26,
    color: '#000',
    textAlign: 'center'
  },
  secondText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#666',
    textAlign: 'center'
  },
  emailText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#000',
  },
  tipText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#4D4D4D',
    textAlign: 'center',
    marginTop: 16
  },
  resendCodeText: {
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

export default ForgotPasswordCodeScreen;