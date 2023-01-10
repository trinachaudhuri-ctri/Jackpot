import { LinearGradient } from "expo-linear-gradient";
import React,{useEffect,useState} from "react";
import { getList } from "../store/api";
import { View, StyleSheet, ScrollView } from "react-native";
import { Header } from "../components/header_section";
import { BalanceBlock } from "../components/balance_block";
import { ScanCode } from "../components/scan_code_section";
import { Transactions } from "../components/transactions";
import { Goals } from "../components/goals_and_savings";
import { GameofTheDay } from "../components/game_of_the_day";
const Home = () => {
    const [list,setList]=useState([])
    console.log('---list',list);
    const changeList=(data)=>{
        setList(data.split(''))
    }
    useEffect(()=>{
        getList(changeList);
    },[])

  return (
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
          <GameofTheDay list={list}/>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
