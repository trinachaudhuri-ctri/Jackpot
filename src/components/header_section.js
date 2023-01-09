import React from 'react';
import { View,StyleSheet,Image,Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export const Header =()=>{
    return(
        <View style={styles.container}>
            <Image source={require('../../assets/logo.png')} style={styles.logo} resizeMode='contain'/>
            <View style={styles.profileC}>
                <Image source={require('../../assets/profile.png')} style={styles.profile}/>
                <Text style={styles.text}>Andy</Text>
                <AntDesign name="caretdown" size={10} color="#FDBBFF" style={{marginLeft:3}}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    logo:{
        height:41,
        width:39,
    },
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingTop:49,
        paddingHorizontal:12,
        marginBottom:10
    },
    profile:{
        height:29,
        width:29,
        borderRadius:14.5,
    },
    profileC:{
        backgroundColor:'#430754',
        width:101,
        height:37,
        borderRadius:32,
        borderWidth:1,
        opacity:0.65,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },
    text:{
        marginLeft:5,
        fontSize:16,
        fontWeight:'600',
        color:'#FFFFFF'
    }
});