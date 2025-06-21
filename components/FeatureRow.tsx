import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

type FeatureRowProps = {
  icon: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  title: string;
  description: string;
};

const FeatureRow: React.FC<FeatureRowProps> = ({
  icon,
  title,
  description,
}) => (
  <View style={styles.container}>
    <MaterialCommunityIcons
      name={icon}
      size={32}
      color="#007AFF"
      style={styles.icon}
    />
    <View style={styles.content}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
    gap: 16,
    padding: 16,
    backgroundColor: "#f7fafd",
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  icon: {
    marginRight: 16,
    width: 32,
    textAlign: "center",
  },
  content: {
    flex: 1,
    gap: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 2,
    color: "#222",
  },
  description: {
    fontSize: 14,
    color: "#555",
  },
});

export default FeatureRow;
