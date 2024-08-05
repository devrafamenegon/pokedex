import React from 'react';
import { Text, StyleSheet, type ButtonProps, Pressable } from 'react-native';

export type CTAButtonProps = ButtonProps & {
  title: string,
  type?: 'default' | 'outline' | 'ghost' | 'deactivate';
};

export function CTAButton({
  title,
  type = 'default',
  ...rest
}: CTAButtonProps) {
  return (
    <Pressable
      style={[
        styles.button,
        type === 'default' && styles.defaultButton,
        type === 'outline' && styles.outlineButton,
        type === 'ghost' && styles.ghostButton,
        type === 'deactivate' && styles.deactivateButton,
      ]}
      {...rest}
    >
      <Text
        style={[
          styles.text,
          type === 'default' && styles.defaultText,
          type === 'outline' && styles.outlineText,
          type === 'ghost' && styles.ghostText,
          type === 'deactivate' && styles.deactivateText,
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 100,
    paddingHorizontal: 8,
    paddingVertical: 10,
  },
  text: {
    fontFamily: 'Poppins-SemiBold',
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
  ghostButton: {
    backgroundColor: 'transparent',
  },
  ghostText: {
    color: '#173EA5',
  },
});
