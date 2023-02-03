import React from "react";
import { View, Text, TouchableOpacity, Share } from "react-native";
import styles from "./style";
export default function ResultIMC({ resultImc, messageResultImc }) {
  const onShare = async () => {
    const result = await Share.share({
      message: `Meu imc hoje é: ${resultImc}`,
    });
  };

  return (
    <View style={styles.contextImc}>
      <View style={styles.boxShareButton}>
        {resultImc != null ? (
          <TouchableOpacity onPress={onShare} style={styles.shared}>
            <Text style={styles.sharedText}>Share</Text>
          </TouchableOpacity>
        ) : (
          <View />
        )}
      </View>
      <Text style={styles.information}>{messageResultImc}</Text>
      <Text style={styles.resultImc}>{resultImc}</Text>
    </View>
  );
}
