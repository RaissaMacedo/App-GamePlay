// estrutura da minha interface
import React from "react";
import { View, Text, Image, StatusBar } from "react-native";
import { ButtonIcon } from "../../components/ButtonIcon";
import IlustrationImg from "../../assets/illustration.png";
import { styles } from "./styles";

export function SignIn() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Image source={IlustrationImg} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se {"\n"} e organize {`\n`} jogatinas
        </Text>
        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {`\n`} favoritos com seus amigos
        </Text>
        <ButtonIcon title="Entrar com Discord" activeOpacity={0.7} />
      </View>
    </View>
  );
}
