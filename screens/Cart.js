import React, { useEffect, useState, useContext } from 'react';
import { View, Text, Button, FlatList, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { CartContext } from "../CartContext";
export function Cart ({navigation}) {
const {items, getItemsCount, getTotalPrice} = useContext(CartContext);
  const nextScren =()=>{
    navigation.navigate("Pay");
  }
  function Totals() {
    let [total, setTotal] = useState(0);
    useEffect(() => {
      setTotal(getTotalPrice());
    });
    return (
       <View style={styles.cartLineTotal}>
          <Text style={[styles.lineLeft, styles.lineTotal]}>Total</Text>
          <Text style={styles.lineRight}>GHS {total}.00</Text>
       </View>
    );
  }
function renderItem({item}) {
    return (
      <View style={{marginBottom:50,}}>    
        <View style={{backgroundColor:"white"}}>
          <View>
            <Image
              style={styles.image}
              source={item.product.image}
            />
          </View>
            <View style={styles.cartLine}>
              <Text style={styles.lineLeft}>{item.product.name} x {item.qty}</Text>
              <Text style={styles.lineRight}>GHS {item.totalPrice}.00</Text>
            </View>
            <View>
            <Text style ={{fontSize:20, color:"black"}}>{item.product.color}</Text>
            <Text style ={{fontSize:20, color:"black"}}>{item.product.Size}</Text>
          </View> 
          </View>
      </View>
            
    );
  }

  return (
    <ScrollView style={{bottom:20}}>
    <FlatList
      style={styles.itemsList}
      contentContainerStyle={styles.itemsListContainer}
      data={items}
      renderItem={renderItem}
      keyExtractor={(item) => item.product.id.toString()}
      ListFooterComponent={Totals}
    />
     <TouchableOpacity onPress={nextScren}
     style={{alignItems:"center", marginTop:15, backgroundColor:"aqua", width:"60%", justifyContent:"center", alignSelf:"center", paddingVertical:15}}>
       <Text style={{fontSize:18}}>Check Out</Text>
     </TouchableOpacity>
     </ScrollView>
  );
}
const styles = StyleSheet.create({
  cartLine: { 
    flexDirection: 'row',
  },
  cartLineTotal: { 
    flexDirection: 'row',
    borderTopColor: '#dddddd',
    borderTopWidth: 1
  },
  image: {
    height: 300,
    width: '100%'
  },
  lineTotal: {
    fontWeight: 'bold',    
  },
  lineLeft: {
    fontSize: 20, 
    lineHeight: 40, 
    color:'#333333' 
  },
  lineRight: { 
    flex: 1,
    fontSize: 20, 
    fontWeight: 'bold',
    lineHeight: 40, 
    color:'#333333', 
    textAlign:'right',
  },
  itemsList: {
    backgroundColor: '#eeeeee',
  },
  itemsListContainer: {
    backgroundColor: '#eeeeee',
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});