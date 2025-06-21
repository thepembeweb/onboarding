import React from "react";
import { View, Image, StyleSheet } from "react-native";

type BannerProps = {
  source: React.ComponentProps<typeof Image>["source"];
};

const Banner: React.FC<BannerProps> = ({ source }) => (
  <View style={styles.container}>
    <Image source={source} style={styles.logo} resizeMode="contain" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: 24,
    padding: 12,
    backgroundColor: "#f7fafd",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
  },
  logo: {
    width: 150,
    height: 50,
    borderRadius: 12,
  },
});

export default Banner;
