import React, { ReactNode } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

interface BackgroundProps {
  // TIPAGEM
  children?: ReactNode;
}
export function Background({ children }: BackgroundProps) {
  const { backgroud } = theme.colors;

  return (
    <LinearGradient style={styles.container} colors={[backgroud]}>
      {children}
    </LinearGradient>
  );
}
