import React from 'react';
import { View,StyleSheet,Text, FlatList,Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { goals } from '../../data/goals';
export const Transactions=()=>{
    const RenderItem=({item})=>{
        return(
            <>
            <View style={styles.row}>
                <View style={{flexDirection:'row'}}>
                <View style={styles.imageC}>
                    <Image source={item.image} resizeMode='contain' style={styles.image}/>
                   
                </View>
                 <View style={{paddingLeft:16}}>
                    <Text style={styles.titleB}>{item.title}</Text>
                    <Text style={styles.time}>{item.time}</Text>
                </View>
                </View>
                <Text style={styles.amount(item?.type)}>{item.amount}</Text>
            </View>
            <View style={{borderBottomColor:'#000',opacity:0.8,borderBottomWidth:0.5,marginVertical:21}}/>
            </>
        )
    }
    if(!goals){
        return null
    }
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Recent transactions</Text>
            <FlatList
            data={goals}
            renderItem={RenderItem}
            keyExtractor={(item,index)=>index}
            />
            <View style={{flexDirection:'row',alignItems:'center'}}>
            <Text style={styles.transaction}>All transactions </Text>
            <MaterialIcons name="play-arrow" size={20} color="#A655A8" style={{marginTop:2}}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title:{
        color:'#600063',
        fontSize:18,
        fontWeight:'700',
        marginBottom:32
    },
    container:{
        backgroundColor:'#F8F5FB',
        borderRadius:10,
        padding:12
    },
    row:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    imageC:{
        backgroundColor:'#EDE0FF',
        width:50,
        height:50,
        borderRadius:25,
        opacity:0.7,
        justifyContent:'center',
        alignItems:'center'
    },
    image:{
        height:25,
        width:25
    },
    titleB:{
        color:'#000000',
        fontSize:18,
        opacity:0.9,
        fontWeight:'600'
    },
    time:{
        color:'#000000',
        opacity:0.3,
        fontSize:14,
        fontWeight:'600'
    },
    amount:(type)=>({
        color:type=='credit'?'#00600A':'#000000',
        fontWeight:'600',
        fontSize:18,
        opacity:0.9,
    }),
    transaction:{
        color:'#A655A8',
        fontSize:18,
        fontWeight:'600'
    }
});