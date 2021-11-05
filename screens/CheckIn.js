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


const CheckIn=({navigation})=>{
    const nextScren=()=>{
        navigation.navigate("Check");
    }
    return(
        <ScrollView 
        style={{flex:1, backgroundColor:"orange"}}
        showsVerticalScrollIndicator={false}>
           <ImageBackground 
           source={require("../images/3.jpg")}
           style={{
               height:Dimensions.get("window").height/2.5,
           }}>
               <View style={styles.login1}>
                 
               {/* <AntDesign name="laptop" size={24} color="black" /> */}
                   <Text style={{fontSize:24, color:"orange", fontWeight:"bold"}}>Payment Prerequisite.....</Text>   
               </View>

           </ImageBackground>
           <View style={styles.bottonview}>
                <View style={{padding:40}}>
                    <Text style={{color:"#4632a1", fontSize:24, fontWeight:"bold"}}>Payment Details</Text>  
                   <View style={{marginTop:30}}>
                       <View>    
                            <TextInput placeholder="Fullname..." style={{borderBottomWidth:1, width:"100%", paddingTop:30}}/>
                       </View>
                       <View>    
                            <TextInput placeholder="example@email.com" keyboardType="email-address"  style={{borderBottomWidth:1, width:"100%", paddingTop:30}}/>
                       </View>
                       <View  style={{ marginTop:20, flexDirection:"row",}}>
                            <TextInput keyboardType="numeric" placeholder="phone number" style={{borderBottomWidth:1, width:"100%", }}/>
                       </View>
                       <View  style={{ marginTop:20, flexDirection:"row",}}>
                            <TextInput placeholder="Address" style={{borderBottomWidth:1, width:"100%", }}/>
                       </View> 
                   </View>
                   <View style={{
                       height:100,
                       justifyContent:"center",
                       alignItems:"center",
                   }}>
                       <TouchableOpacity onPress={nextScren} style={{borderRadius:20,backgroundColor:"#4632a1", width:180, height:45, alignItems:"center", justifyContent:"center"}}>
                           <Text style={{fontSize:24, color:"silver"}}>Proceed</Text>
                       </TouchableOpacity>
                   </View>
                   
                </View>
           </View>
        </ScrollView>
    );
};

export default CheckIn;

const styles = StyleSheet.create({
    login1:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    bottonview:
    {
        flex:1.5,
        backgroundColor:"orange",
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