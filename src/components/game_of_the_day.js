import React from "react";
import { View, StyleSheet, FlatList ,Text} from "react-native";

export const GameofTheDay = ({list}) => {
    const RenderItem=({item})=>{
        return(
            <View style={styles.outerC}>
                <View style={styles.gameC}>
                    <Text style={styles.text}>{item}</Text>
                </View>
            </View>
        )
    }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game of the day</Text>
      <View>
        <FlatList 
        data={list?list:null}
        renderItem={RenderItem}
        />
      </View>
      <View style={styles.inner}>
        <Text style={styles.sub}>Win prizes worth ₹4000 or more. </Text>
        <View style={styles.ctaC}>
          <Text style={styles.ctaT}>Try your luck</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    title:{
        color:'#631E00',
        fontSize:18,
        fontWeight:'700'
    },
    container:{
        padding:12
    },
    sub:{
        color:'#AB604F',
        opacity:0.8,
        fontSize:18
    },
    inner:{
        justifyContent:'center',
        alignItems:'center'
    },
    ctaC:{
        backgroundColor:'#AB604F',
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        borderRadius:28
    },
    ctaT:{
        color:'#FFFFFF',
        fontSize:18,
        fontWeight:'600'
    },
    outerC:{
        borderColor:'#D72027',
        borderWidth:5,
        borderRadius:8
    },
    gameC:{

    },
    text:{
        color:'#631E00',
        fontFamily:'600',
        fontSize:60
    }
});
