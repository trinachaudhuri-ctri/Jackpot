import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View ,StyleSheet,Text} from 'react-native';
import {Header} from '../components/header_section';
import {BalanceBlock} from '../components/balance_block';
import { ScanCode } from '../components/scan_code_section';
const  Home=()=>{
    return(
        <View >
            <LinearGradient colors={['#6C0070','#AD54AF','#AB0CB0']} style={{height:'70%'}}>
             <Header />
            <View style={{paddingHorizontal:12}}>
            <BalanceBlock />
            <ScanCode/>
            </View>
            </LinearGradient>

        </View>
    )
}

export default Home;

const styles = StyleSheet.create({

});

