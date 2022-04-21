import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {homeScreenStack, weatherScreenStack, MarketScreenStack, PricePredictionScreenStack, CropCalendarScreenStack } from "./StackNavigator";
import Icon from 'react-native-vector-icons/Ionicons';  

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>

<Tab.Screen name="Home" component={homeScreenStack} options={{
            headerShown: false,
            tabBarActiveBackgroundColor:'#d9d7d2',
            tabBarShowLabel:false,
            tabBarIcon:({tintColor})=>(  
                <Icon name="ios-home" color='#2DD0F3' size={30}/>  
            )
          }} />

        <Tab.Screen name="Weather" component={weatherScreenStack} 
        options={{
            headerShown: false,
            tabBarActiveBackgroundColor:'#d9d7d2',
            tabBarShowLabel:false,
            tabBarIcon:({tintColor})=>(  
                <Icon name="ios-cloud" color='#2DD0F3' size={30}/>  
            )
          }}
      />
      <Tab.Screen name="CropCalendar" component={CropCalendarScreenStack} 
        options={{
            headerShown: false,
            tabBarActiveBackgroundColor:'#d9d7d2',
            tabBarShowLabel:false,
            tabBarIcon:({tintColor})=>(  
                <Icon name="ios-calendar" color='#2DD0F3' size={30}/>  
            )
          }}
      />
      
      
      <Tab.Screen name="Market" component={MarketScreenStack} options={{
            headerShown: false,
            tabBarActiveBackgroundColor:'#d9d7d2',
            tabBarShowLabel:false,
            tabBarIcon:({tintColor})=>(  
                <Icon name="ios-wallet" color='#2DD0F3' size={30}/>  
            )
          }}/>
      <Tab.Screen name="PricePrediction" component={PricePredictionScreenStack} 
         options={{
            headerShown: false,
            tabBarActiveBackgroundColor:'#d9d7d2',
            tabBarShowLabel:false,
            tabBarIcon:({tintColor})=>(  
                <Icon name="ios-trending-up" color='#2DD0F3' size={30}/>  
            )
          }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;