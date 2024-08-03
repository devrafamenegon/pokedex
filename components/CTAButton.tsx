import React from 'react';
import { Text, StyleSheet, type ButtonProps, TouchableOpacity } from 'react-native';

export type ThemedButtonProps = ButtonProps & {
  title: string,
  type?: 'default' | 'outline' | 'deactivate';
};

export function CTAButton({
  title,
  type = 'default',
  ...rest
}: ThemedButtonProps) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        type === 'default' && styles.defaultButton,
        type === 'outline' && styles.outlineButton,
        type === 'deactivate' && styles.deactivateButton,
      ]}
      {...rest}
    >
      <Text
        style={[
          styles.text,
          type === 'default' && styles.defaultText,
          type === 'outline' && styles.outlineText,
          type === 'deactivate' && styles.deactivateText,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 100,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  text: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    textAlign: 'center',
  },
  defaultButton: {
    backgroundColor: '#173EA5',
  },
  defaultText: {
    color: '#FFF',
  },
  deactivateButton: {
    backgroundColor: '#E6E6E6',
  },
  deactivateText: {
    color: '#999',
  },
  outlineButton: {
    borderColor: '#173EA5',
    borderWidth: 2,
    backgroundColor: 'transparent',
  },
  outlineText: {
    color: '#173EA5',
  },
});
