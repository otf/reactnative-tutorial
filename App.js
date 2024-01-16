import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import PizzaTranslator from "./PizzaTranslator";

export default function App() {
  return (
    <View style={styles.container}>
      <PizzaTranslator />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
