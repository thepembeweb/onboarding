import { useRef } from "react";
import { Animated, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Banner from "./Banner";
import ContentSection from "./ContentSection";
import Footer from "./Footer";

export const Welcome = () => {
  const bannerAnim = useRef(new Animated.Value(1)).current;

  const handleContinue = () => {
    Animated.sequence([
      Animated.timing(bannerAnim, {
        toValue: 1.15,
        duration: 120,
        useNativeDriver: true,
      }),
      Animated.timing(bannerAnim, {
        toValue: 1,
        duration: 120,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={{ transform: [{ scale: bannerAnim }] }}>
        <Banner source={require("../assets/logo.png")} />
      </Animated.View>
      <ContentSection title="Welcome to RN Mastery" />
      <Footer onPress={handleContinue} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 16,
  },
  contentSection: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contentTitle: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
  },
});
