import React, { useEffect } from "react";
import {View, Text, StyleSheet} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import { useDispatch } from "react-redux";
import { addMyProducts } from "../Redux/MyProductSliceReduser";

import Profile from "./Profile"
import ViewCart from "./ViewCart"


const Stack = createNativeStackNavigator();

let items = [
    {
      id: 0,
      image:
        'https://cdn.runrepeat.com/i/puma/35333/puma-men-s-rs-x-retro-sneaker-high-risk-red-steel-gray-indigo-bunting-7-high-risk-red-steel-gray-indigo-bunting-9ebf-380.jpg',
      name: 'Puma RS-X',
      brand: 'PUMA',
      price: 3300,
      qty: 1,
    },
    {
      id: 1,
      image:
        'https://cdn.runrepeat.com/i/puma/25788/puma-suede-classic-sneakers-basses-mixte-adulte-gris-grey-white-66-36-eu-3-5-uk-mixte-adulte-gris-grey-white-66-ca4b-380.jpg',
      name: 'Puma RS-Curve',
      brand: 'PUMA',
      price: 3000,
      qty: 1,
    },
    {
      id: 2,
      image:
        'https://cdn.runrepeat.com/i/adidas/38813/adidas-originals-men-s-zx-22-boost-sneaker-cream-white-cream-white-clear-brown-12-5-cream-white-cream-white-clear-brown-fc40-250.jpg',
      name: 'Adidas ZX 22',
      brand: 'ADIDAS',
      price: 3600,
      qty: 1,
    },
    {
      id: 3,
      image:
        'https://cdn.runrepeat.com/i/adidas/36948/adidas-ozweego-celox-beige-2a62-250.jpg',
      name: 'Adidas Ozweego Celox',
      brand: 'ADIDAS',
      price: 3600,
      qty: 1,
    },
    {
      id: 4,
      image:
        'https://cdn.runrepeat.com/i/nike/37512/nike-zoom-air-fire-white-navy-red-1b81-250.jpg',
      name: 'Nike Zoom Air Fire',
      brand: 'NIKE',
      price: 3300,
      qty: 1,
    },
];


const Main = () => {
  const dispatch = useDispatch();

  useEffect( () => {
    items.map( (item) => {
      dispatch(addMyProducts(item))
    })
  },[])

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Profile" 
          component={Profile} 
          options={{headerShown: false}} 
        />
        <Stack.Screen 
          name="ViewCart" 
          component={ViewCart}  
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default Main;
