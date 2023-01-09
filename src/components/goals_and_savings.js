import React from 'react';
import { View,StyleSheet,Text } from 'react-native';

export const Goals=()=>{
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Andy’s Savings</Text>
            <Text style={styles.subT}>Saved a total of ₹6,480 this month 
and is close to achieving one goal</Text>
            <View style={styles.innerC}>
                <View style={{borderWidth:1,borderColor:'black',height:38,width:4,opacity:0.5}}/>
                <View style={{marginLeft:15}}>
                    <Text style={{color:'#31446B',fontSize:18,fontWeight:'600'}}>Playstation 5 </Text>
                    <Text>₹36,480 saved  of  ₹40,000 goal</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#F5F7FB',
        borderRadius:10,
        padding:12
    },
    title:{
        color:'#112854',
        fontSize:18,
        fontWeight:'700'
    },
    subT:{
        color:'#5682AB',
        fontSize:18,
        fontWeight:'600'
    },
    innerC:{
        backgroundColor:'#FFFFFF',
        borderRadius:10,
        padding:12,
        flexDirection:'row'
    }
});