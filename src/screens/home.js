import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import { getList } from "../store/api";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { Header } from "../components/header_section";
import { BalanceBlock } from "../components/balance_block";
import { ScanCode } from "../components/scan_code_section";
import { Transactions } from "../components/transactions";
import { Goals } from "../components/goals_and_savings";
import { GameofTheDay } from "../components/game_of_the_day";
import { FooterSection } from "../components/footer_section";
import { AntDesign } from "@expo/vector-icons";

const Home = () => {
  const [list, setList] = useState([]);
  const changeList = (data) => {
    setList(data?.data?.split(""));
  };
  useEffect(() => {
    getList(changeList);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ flex: 1 }}>
          <LinearGradient colors={["#6C0070", "#AD54AF", "#AB0CB0"]}>
            <Header />
            <View style={{ paddingHorizontal: 12 }}>
              <BalanceBlock />
              <ScanCode />
            </View>
          </LinearGradient>
          <View style={{ paddingHorizontal: 12, paddingVertical: 12 }}>
            <Transactions />
          </View>
          <View style={{ paddingHorizontal: 12 }}>
            <Goals />
          </View>
          <View style={{ paddingHorizontal: 12 }}>
            <GameofTheDay list={list} />
          </View>
        </View>
      </ScrollView>
      <FooterSection />
      <View style={styles.parent}>
        <Text style={styles.text}>Parental controls</Text>
        <AntDesign name="setting" size={20} color="#979797" />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  parent: {
    padding: 10,
    backgroundColor: "#E5E5E5",
    borderRadius: 27,
    width: 191,
    marginLeft: "48%",
    justifyContent: "center",
    position:'absolute',
    alignItems: "center",
    bottom:30,
    right:15,
    flexDirection: "row",
  },
  text: {
    fontSize: 12,
    color: "black",
    opacity: 0.8,
    fontWeight: "600",
  },
});
