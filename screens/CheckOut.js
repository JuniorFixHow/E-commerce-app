import React, {useState} from "react";
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
    import {Picker} from '@react-native-picker/picker';


const CheckOut=({navigation})=>{
    const Paid=()=>{
        alert("Paid Successfully...")
    }

    const [selectDataValue, setselectDataValue]=useState("Select Payment Card")
    return(
        <ScrollView 
        style={{flex:1, backgroundColor:"orange"}}
        showsVerticalScrollIndicator={false}>
           <ImageBackground 
           source={require("../images/5.jpg")}
           style={{
               height:Dimensions.get("window").height/2.5,
           }}>
               <View style={styles.login1}>
                 
               {/* <AntDesign name="laptop" size={24} color="black" /> */}
                   <Text style={{fontSize:30, color:"orange", fontWeight:"bold"}}>Check out......</Text>   
               </View>

           </ImageBackground>
           <View style={styles.bottonview}>
                <View style={{padding:40}}>
                    <Text style={{color:"#4632a1", fontSize:24, fontWeight:"bold"}}>Pay</Text>

                    
                   <View style={{marginTop:30, }}>
                        
                       <Picker 
                        selectedValue={selectDataValue} 
                        style={styles.selected} 
                        onValueChange={(itemValue, itemIndex)=>setselectDataValue(itemValue)}
                        
                        >
                        <Picker.Item label="Credit Card" value="css" />
                        <Picker.Item label="Debit Card" value="human" />
                        <Picker.Item label="Master Card" value="edu" />
                        <Picker.Item label="PayPal" value="pay" />
                        </Picker>

                       
                       <View  style={{ marginTop:20, flexDirection:"row",}}>
                            <TextInput keyboardType="numeric" placeholder="card number" style={{borderBottomWidth:1, width:"100%", }}/>
                       </View>
                   </View>
                   <View style={{
                       height:100,
                       justifyContent:"center",
                       alignItems:"center",
                   }}>
                       <TouchableOpacity onPress={Paid} style={{borderRadius:20,backgroundColor:"#4632a1", width:180, height:45, alignItems:"center", justifyContent:"center"}}>
                           <Text style={{fontSize:24, color:"silver"}}>Check</Text>
                       </TouchableOpacity>
                   </View>
                   
                </View>
           </View>
        </ScrollView>
    );
};

export default CheckOut;

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
    selected:{
        height:50, 
        width:280,
        //fontSize:50,
        color:"black", 
        borderColor:"black",
        borderBottomWidth:1,
        right:8
      },
     
     
});