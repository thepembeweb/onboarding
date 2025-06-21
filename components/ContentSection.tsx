import { StyleSheet, Text, View } from "react-native";
import FeatureRow from "./FeatureRow";

const ContentSection = ({ title }: { title: string }) => (
  <View style={styles.container}>
    <Text style={styles.title}>
      {title}
      <Text style={styles.titleAccent}> 🚀</Text>
    </Text>

    <FeatureRow
      icon="check-circle"
      title="Learn React Native"
      description="Master the fundamentals of React Native development."
    />
    <FeatureRow
      icon="code-tags"
      title="Build Real Apps"
      description="Create real-world applications with practical examples."
    />
    <FeatureRow
      icon="rocket"
      title="Advance Your Skills"
      description="Take your React Native skills to the next level."
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 24,
    color: "#222",
    letterSpacing: 0.5,
    textShadowColor: "#e0e7ff",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 8,
  },
  titleAccent: {
    color: "#007AFF",
    fontSize: 32,
  },
});

export default ContentSection;
