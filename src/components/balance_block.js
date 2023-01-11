import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export const BalanceBlock = () => {
  return (
    <View>
      <View style={styles.container}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text style={styles.title}>Balance</Text>
            <Text style={styles.amount}>₹ 12000</Text>
          </View>
          <Image
            source={require("../../assets/eye.png")}
            style={styles.image}
          />
        </View>
      </View>
      <View style={styles.belowC}>
        <Text style={styles.titleB}>Savings</Text>
        <View style={styles.innerCB}>
          <Text style={styles.amountB}>₹ 36000</Text>
          <View style={styles.savemore}>
            <Text style={styles.ctaT}>Save More</Text>
          </View>
          <View></View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 43,
    width: 43,
  },
  title: {
    color: "#9B9B9B",
    fontSize: 18,
    fontWeight: "600",
  },
  amount: {
    fontSize: 30,
    fontWeight: "600",
  },
  gradient: {
    height: 119,
  },
  container: {
    backgroundColor: "white",
    padding: 12,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    elevation: 8,
  },
  belowC: {
    backgroundColor: "white",
    padding: 12,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopWidth: 1,
    borderTopColor: "rgba(148,11,154,0.1)",
  },
  titleB: {
    color: "rgba(104, 26, 96, 0.6)",
    fontSize: 18,
    fontWeight: "600",
  },
  amountB: {
    color: "#681A60",
    fontSize: 30,
    fontWeight: "600",
  },
  ctaT: { color: "#400142", fontSize: 15, fontWeight: "600" },
  innerCB: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  savemore: {
    backgroundColor: "#CEA4CE",
    borderRadius: 83,
    opacity: 0.3,
    width: 98,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    marginLeft: "35%",
  },
});
