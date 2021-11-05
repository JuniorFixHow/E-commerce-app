import { Entypo, AntDesign, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import React from "react";
import {
    Text,
    ScrollView,
    ImageBackground,
    Dimensions, 
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    } from "react-native";


const LoginScreen=({navigation})=>{
    const nextScren=()=>{
        navigation.navigate("Signup");
    }
    const newPage=()=>{
        navigation.navigate("Products");
    }
    return(
        <ScrollView 
        style={{flex:1, backgroundColor:"aqua"}}
        showsVerticalScrollIndicator={false}>
           <ImageBackground 
           source={require("../images/6.jpg")}
           style={{
               height:Dimensions.get("window").height/2.5,
           }}>
               <View style={styles.login1}>
                 
               {/* <AntDesign name="laptop" size={24} color="black" /> */}
                   <Text style={{fontSize:24, color:"white", fontWeight:"bold"}}>Welcome To JuniorFixHow</Text>   
               </View>

           </ImageBackground>
           <View style={styles.bottonview}>
                <View style={{padding:40}}>
                    <Text style={{color:"#4632a1", fontSize:24, fontWeight:"bold"}}>Login</Text>
                    <View style={{flexDirection:"row"}}>
                    <Text>Don't have an account?</Text>
                        <TouchableOpacity onPress={nextScren}>
                        <Text style={{color:"blue", fontStyle:"italic"}}> Signup Now</Text> 
                        </TouchableOpacity>
                    </View>
                   
                   <View style={{marginTop:30}}>
                       <View>    
                            <TextInput placeholder="example@email.com" keyboardType="email-address" style={{borderBottomWidth:1, width:"100%", paddingTop:30}}/>
                       </View>
                       <View  style={{ marginTop:20, flexDirection:"row",}}>
                            <TextInput secureTextEntry placeholder="password" style={{borderBottomWidth:1, width:"100%", }}/>
                            <Feather name="eye" size={24} color="black" style={{right:20}}/>
                       </View> 
                   </View>
                   <View style={styles.forgot}>
                        <View style={{flex:1, marginLeft:-20}}>
                           <TouchableOpacity style={{marginLeft:20}}><Text style={{color:"#f2f" }}>Forgot Password?</Text></TouchableOpacity> 
                           
                        </View>
                   </View>
                   <View style={{
                       height:100,
                       justifyContent:"center",
                       alignItems:"center",
                   }}>
                       <TouchableOpacity onPress={newPage} style={{top:-25,borderRadius:20,backgroundColor:"#4632a1", width:180, height:45, alignItems:"center", justifyContent:"center"}}>
                           <Text style={{fontSize:24, color:"silver"}}>Login</Text>
                       </TouchableOpacity>
                   </View>
                   <View style={{flex:1}}>
                       <Text style={{textAlign:"center", top:-28, fontSize:20, color:"#4632a1"}}>or login with</Text>
                       <View style={{flexDirection:"row", justifyContent:"space-around"}}>
                           <TouchableOpacity><MaterialCommunityIcons name="gmail" size={40} color="#db3236" /></TouchableOpacity>
                           <TouchableOpacity><Entypo name="facebook-with-circle" size={40} color="#3b5998" /></TouchableOpacity>
                           <TouchableOpacity><MaterialCommunityIcons name="microsoft-outlook" size={40} color="#0072c6" /></TouchableOpacity>
                       </View>
                   </View>
                </View>
           </View>
        </ScrollView>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    login1:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    bottonview:
    {
        flex:1.5,
        backgroundColor:"aqua",
        bottom:50,
        borderTopStartRadius:60,
        borderTopEndRadius:60,
    },
    forgot:{
        height:50,
        marginTop:20,
        flexDirection:"row"
    }
});