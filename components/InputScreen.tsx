import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HeaderView from "@/components/HeaderView";
import CustomTextInput from "@/components/CustomTextInput";
import { CTAButton } from "@/components/CTAButton";

interface InputScreenProps {
  headerTitle: string;
  title: string;
  subtitle: string;
  placeholder: string;
  buttonText: string;
  tipText?: string;
  secureTextEntry?: boolean;
  onSubmit: (value: string) => void;
  validate?: (value: string) => boolean;
}

const InputScreen: React.FC<InputScreenProps> = ({
  headerTitle,
  title,
  subtitle,
  placeholder,
  tipText,
  buttonText,
  secureTextEntry = false,
  onSubmit,
  validate = () => true,
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
        />
        {tipText && (
          <Text style={styles.tipText}>{tipText}</Text>
        )}
        <View style={styles.buttonContainer}>
          <CTAButton 
            title={buttonText}
            type={!isValid ? 'deactivate' : 'default'}
            onPress={handleContinue}
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
