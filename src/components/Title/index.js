import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

export default function Title({ title }) {
  return (
    <View style={styles.boxTitle}>
      <Text style={styles.textTitle}>{title}</Text>
    </View>
  );
}
