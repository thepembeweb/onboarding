import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Welcome } from "./components/Welcome";

export default function App() {
  return (
    <SafeAreaProvider>
      <Welcome />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
