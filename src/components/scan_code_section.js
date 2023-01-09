import React from 'react';
import { View,StyleSheet,Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
export const ScanCode=()=>{
    return(
        <View style={styles.container}>
            <View style={styles.scan}>
                <Text style={styles.text}>
                    Scan code
                </Text>
                <View style={styles.icon}>
                <Ionicons name="scan-sharp" size={24} color="white" />
                </View>
            </View>
            <View style={styles.iconB}>
            <Feather name="arrow-up-right" size={30} color="white" />
            </View>
            <View>
            <View style={styles.iconB}>
            <Entypo name="dots-three-horizontal" size={24} color="white" />
            </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        marginTop:21,
        justifyContent:'space-between'
    },
    scan:{
        flexDirection:'row',
        backgroundColor:'#650F5C',
        width:197,
        height:56,
        justifyContent:'space-between',
        padding:10,
        borderRadius:10,
        alignItems:'center'
    },
    text:{
        fontSize:18,
        fontWeight:'600',
        color:'#FFF'
    },
    icon:{
        backgroundColor:'#FFF',
        width:35,
        height:35,
        borderRadius:17.5,
        opacity:0.2,
        justifyContent:'center',
        alignItems:'center'
    },
    iconB:{
        backgroundColor:'#650F5C',
        width:73.15,
        height:56,
        opacity:0.4,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
    }
});