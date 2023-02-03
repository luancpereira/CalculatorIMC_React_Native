import axios from "axios";
import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import styles from "./style";

export default function Testes({ title }) {

    const [a, seta] = useState(null)

function requestApi() {
    axios.get('http://1220-177-52-105-183.ngrok.io/getdata')
    .then(function (response) {
      seta(response)
    })
    .catch(function (error) {
      console.log(error);
    });
}

  return (
    <View style={styles.boxTitle}>
        <Button onPress={requestApi}>Teste</Button>
      <Text style={styles.textTitle}>{a}</Text>
    </View>
  );
}
