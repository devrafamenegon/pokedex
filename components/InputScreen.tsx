import React, { useState } from 'react';
import { InputModeOptions, StyleSheet, Text, View } from 'react-native';
import HeaderView from "@/components/HeaderView";
import CustomTextInput from "@/components/CustomTextInput";
import { CTAButton } from "@/components/CTAButton";

interface InputScreenProps {
  headerTitle: string;
  title: string;
  subtitle: string;
  placeholder: string;
  buttonText: string;
  onSubmit: (value: string) => void;
  tipText?: string;
  secureTextEntry?: boolean;
  autoCapitalize?: 'none' | 'words' | 'sentences' | 'characters',
  inputMode?: InputModeOptions,
  validate?: (value: string) => boolean,
  isLoading?: boolean
}

const InputScreen: React.FC<InputScreenProps> = ({
  headerTitle,
  title,
  subtitle,
  placeholder,
  tipText,
  buttonText,
  onSubmit,
  secureTextEntry = false,
  validate = () => true,
  autoCapitalize = 'none',
  inputMode = 'text',
  isLoading = false
}) => {
  const [value, setValue] = useState('');

  const isValid = validate(value);

  const handleContinue = () => {
    if (isValid) {
      onSubmit(value);
    }
  };

  return (
    <HeaderView headerTitle={headerTitle}>
      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.firstText}>{title}</Text>
          <Text style={styles.secondText}>{subtitle}</Text>
        </View>
        <CustomTextInput 
          placeholder={placeholder} 
          value={value} 
          onChangeText={setValue}
          secureTextEntry={secureTextEntry}
          autoCapitalize={autoCapitalize}
          inputMode={inputMode}
        />
        {tipText && (
          <Text style={styles.tipText}>{tipText}</Text>
        )}
        <View style={styles.buttonContainer}>
          <CTAButton 
            title={buttonText}
            type={!isValid ? 'deactivate' : 'default'}
            onPress={handleContinue}
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
    marginBottom: 24,
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
  tipText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#4D4D4D',
    textAlign: 'center',
    marginTop: 8
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end'
  }
});

export default InputScreen;
