import React,{useState} from 'react';
import { View,Text,TextInput,TouchableOpacity,StyleSheet } from 'react-native';
import { userLogin,userRegistration } from '../store/api';

const Profile=({navigation})=>{
    const [mobile,setMobile]=useState('')
    const Login=async()=>{
        userLogin(mobile)
    }
    const SignUp=()=>{
        userRegistration({firstName:'Trina',lastName:'test',mobileNumber:mobile,email:'test@gmail.com'})
    }
    return(
        <View style={styles.container}>
            <TextInput placeholder='Enter mobile number' style={styles.textInput} onChangeText={(e)=>setMobile(e)} value={mobile} keyboardType='numeric'/>
            <TouchableOpacity style={styles.button} onPress={Login}>
                <Text>Login</Text>
            </TouchableOpacity>
            <Text>--------OR----------</Text>
            <TouchableOpacity style={styles.button} onPress={SignUp}>
                <Text>Sign up</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Profile;
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    textInput:{
        padding:12,
        marginBottom:5
    },
    button:{
        padding:12,
        borderWidth:1,
        borderRadius:8
    }
});