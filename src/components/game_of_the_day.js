import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList, Text,TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getList } from "../store/api";
export const GameofTheDay = ({ list }) => {
  const [finalList, setFinalList] = useState(list);
  const changeList=(data)=>{
    console.log('---c',data);
    if(data?.data){
        setFinalList(data?.data?.split(""))
    }else{
        setFinalList(data)
    }
  }

  console.log('----f',finalList,list);
  useEffect( () => {
    const getStoredValueCB=async()=>{
        const listStored = await AsyncStorage.getItem("game_data") || [];
        console.log('---stooredd',listStored);
        listStored.length>1? listStored.split(""):[];
         if (listStored !== list && list.length>1) {
            console.log('---equal',list);
           changeList(list);
         } else {
           changeList(listStored);
         }
    }
   getStoredValueCB()
  },[]);
  const RenderItem = ({ item }) => {
    console.log('---item',item);
    return (
      <View style={styles.outerC}>
        <View style={styles.gameC}>
          <Text style={styles.text}>{item}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game of the day</Text>
      {console.log('---rend',list,finalList)}
      <View>
        <FlatList
          data={finalList ?? list}
          renderItem={RenderItem}
          contentContainerStyle={{
            flexDirection: "row",
            borderColor: "rgba(136,23,34,0.3)",
            borderWidth: 5,
            borderRadius: 8,
            justifyContent: "center",
            alignItems: "center",
          }}
          keyExtractor={(item,index)=>index}
          extraData={finalList}
        />
      </View>
      <View style={styles.inner}>
        <Text style={styles.sub}>Win prizes worth ₹4000 or more. </Text>
        <TouchableOpacity style={styles.ctaC} onPress={()=>getList(changeList)}>
          <Text style={styles.ctaT}>Try your luck</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "#631E00",
    fontSize: 18,
    fontWeight: "700",
  },
  container: {
    padding: 12,
    backgroundColor: "#FBF7F5",
    marginTop: 12,
    borderRadius: 10,
    borderWidth: 0.5,
    marginBottom: 10,
  },
  sub: {
    color: "#AB604F",
    opacity: 0.8,
    fontSize: 18,
  },
  inner: {
    justifyContent: "center",
    alignItems: "center",
  },
  ctaC: {
    backgroundColor: "#AB604F",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 28,
  },
  ctaT: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
  },
  outerC: {
    flexDirection: "row",
    margin: 5,
  },
  gameC: {
    backgroundColor: "rgba(218, 155, 124, 0.3)",
    borderRadius: 7,
    borderWidth: 5,
    borderColor: "rgba(0, 0, 0, 0.1)",
    width:51,
    justifyContent:'center',
    alignItems:'center'
  },
  text: {
    color: "#631E00",
    fontFamily: "600",
    fontSize: 60,
  },
});
