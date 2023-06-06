import { StatusBar } from "expo-status-bar";
import { Text, TextInput, View } from "react-native";
import { styles } from "./styles/Styles";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <TextInput>Write here</TextInput>
    </View>
  );
}
