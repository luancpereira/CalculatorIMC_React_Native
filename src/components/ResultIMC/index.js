import React from "react";
import { View, Text } from "react-native";
import styles from "./style";
export default function ResultIMC({ resultImc, messageResultImc }) {
  return (
    <View style={styles.resultImc}>
      <Text style={styles.information}>{messageResultImc}</Text>
      <Text style={styles.numberImc}>{resultImc}</Text>
    </View>
  );
}
