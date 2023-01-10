import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export const Goals = () => {
  return (
    <View style={{ borderWidth: 0.5, borderRadius: 10, opacity: 0.7 }}>
      <View style={styles.container}>
        <Text style={styles.title}>Andy’s Savings</Text>
        <Text style={styles.subT}>
          Saved a total of ₹6,480 this month and is close to achieving one goal
        </Text>
        <View style={styles.innerC}>
          <View
            style={{
              borderWidth: 1,
              borderColor: "black",
              height: 38,
              width: 4,
              opacity: 0.5,
            }}
          />
          <View style={{ marginLeft: 15 }}>
            <Text style={{ color: "#31446B", fontSize: 18, fontWeight: "600" }}>
              Playstation 5{" "}
            </Text>
            <Text>₹36,480 saved of ₹40,000 goal</Text>
          </View>
        </View>
      </View>
      <View style={styles.belowC}>
        <Text style={styles.text}>Add and view goals</Text>
        <MaterialIcons
          name="play-arrow"
          size={20}
          color="#667DAC"
          style={{ marginTop: 3 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F7FB",
    padding: 12,
  },
  title: {
    color: "#112854",
    fontSize: 18,
    fontWeight: "700",
  },
  subT: {
    color: "#5682AB",
    fontSize: 18,
    fontWeight: "600",
  },
  innerC: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 12,
    flexDirection: "row",
  },
  belowC: {
    backgroundColor: "#EEF1F3",
    flexDirection: "row",
    padding: 12,
    borderTopWidth: 0.5,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  text: {
    color: "#5770A4",
    fontSize: 18,
    fontWeight: "600",
  },
});
