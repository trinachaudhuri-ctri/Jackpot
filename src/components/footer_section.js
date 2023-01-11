import React from "react";
import { Image,StyleSheet } from "react-native";

export const FooterSection = () => {
  return (
    <Image
      source={require("../../assets/footer.png")}
      style={styles.image}
      resizeMode='contain'
    />
  );
};

const styles = StyleSheet.create({
  image: {
    height: 76,
    width: 303,
    marginBottom:0
  },
});
