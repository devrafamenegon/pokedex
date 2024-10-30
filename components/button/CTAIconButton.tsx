import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, StyleSheet, type ButtonProps, Pressable } from "react-native";

export type CTAIconButtonProps = ButtonProps & {
  title: string;
  logo: "logo-google" | "logo-apple";
};

export function CTAIconButton({ title, logo, ...rest }: CTAIconButtonProps) {
  return (
    <Pressable style={styles.button} {...rest}>
      <Ionicons name={logo} size={27} style={styles.icon} />
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderColor: "#DBDCDD",
    borderWidth: 2,
    borderRadius: 100,
    paddingHorizontal: 32,
    paddingVertical: 12,
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  text: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 18,
    textAlign: "center",
    alignItems: "center",
  },
  icon: {},
});
