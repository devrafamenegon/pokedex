import { useState } from "react";
import { InputModeOptions, StyleSheet, TextInput } from "react-native";

interface CustomTextInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry: boolean;
  autoCapitalize?: "none" | "words" | "sentences" | "characters";
  inputMode?: InputModeOptions;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  placeholder,
  value = "",
  onChangeText,
  secureTextEntry,
  autoCapitalize = "none",
  inputMode = "text",
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TextInput
      style={[styles.textInput, isFocused && styles.focusedTextInput]}
      placeholder={placeholder}
      placeholderTextColor="#999"
      value={value}
      onChangeText={onChangeText}
      selectionColor="#000"
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      secureTextEntry={secureTextEntry}
      autoCapitalize={autoCapitalize}
      inputMode={inputMode}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1.5,
    borderRadius: 5,
    borderColor: "#999",
    paddingHorizontal: 14,
    paddingVertical: 16,
    fontFamily: "Poppins-Regular",
    fontSize: 16,
  },
  focusedTextInput: {
    borderColor: "#000",
  },
});

export default CustomTextInput;
