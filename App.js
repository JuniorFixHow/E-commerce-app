// import React from "react";
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { NavigationContainer } from "@react-navigation/native";
// import LoginScreen from "./Screens/Login";
// import SignupScreen from "./Screens/Signup";

// const Stack = createNativeStackNavigator();


//   function App() {
//     return (
      
//         <NavigationContainer>
//           <Stack.Navigator>
//             <Stack.Screen name= "Login" component={LoginScreen}/>
//             <Stack.Screen name ="Signup" component={SignupScreen}/>
//           </Stack.Navigator>
//         </NavigationContainer>
      
//     );
//   }
  
//   export default App;

import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProductsList } from './screens/ProductsList.js';
import { ProductDetails } from './screens/ProductDetails.js';
import { Cart } from './screens/Cart.js';
import { CartIcon } from './components/CartIcon.js';
import { CartProvider } from './CartContext.js';
import CheckOut from "./screens/CheckOut";
import CheckIn from './screens/CheckIn.js';
import  LoginScreen  from "./screens/Login";
import  SignupScreen  from "./screens/Signup";
const Stack = createNativeStackNavigator();
function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" >
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="Check" component={CheckOut} />
          <Stack.Screen name="Pay" component={CheckIn} />
          <Stack.Screen name='Products' component={ProductsList} 
          options={({ navigation }) => ({
            title: 'Products',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>
          })}/>
          <Stack.Screen name='ProductDetails' component={ProductDetails} 
          options={({ navigation }) => ({
            title: 'Product details',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>,
          })} />
          <Stack.Screen name='Cart' component={Cart} 
          options={({ navigation }) => ({
            title: 'My cart',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>,
          })} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}
const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20
  }
});
export default App;