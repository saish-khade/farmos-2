// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React
import React from 'react';

// Import Navigators from React Navigation
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

// Import Screens
import CustomSidebarMenu from './Components/CustomSidebarMenu';

import TabNavigator from '../navigation/TabNavigator'
import {settingScreenStack, ProfileScreenStack, SchemeScreenStack} from '../navigation/StackNavigator'
import Icon from 'react-native-vector-icons/Ionicons';  




const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


const DrawerNavigatorRoutes = (props) => {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false,
        drawerActiveTintColor:'#fff',
        drawerInactiveTintColor:'#fff',
        itemStyle: {marginVertical: 4, color: 'white',},
          labelStyle: {
            fontSize: 30,
          },
      }}
      drawerContent={(props) => <CustomSidebarMenu {...props} />}>
        
      <Drawer.Screen
        name="homeScreenStack"
        options={{drawerLabel: 'Home', 
        drawerIcon: (({focused}) => <Icon name="home-outline" size={25} color="#fff" />)
      }}
        
        component={TabNavigator}

      />
      <Drawer.Screen
        name="ProfileScreenStack"
        options={{drawerLabel: 'Profile', 
        drawerIcon: (({focused}) => <Icon name="ios-person-circle-outline" size={25} color="#fff" />)
      }}
        
        component={ProfileScreenStack}

      />
      <Drawer.Screen
        name="SchemeScreenStack"
        options={{drawerLabel: 'Schemes', color:'#ffff',
        drawerIcon: (({focused}) => <Icon name="newspaper-outline" size={25} color="#fff" />)
      }}
        component={SchemeScreenStack}
      />
      <Drawer.Screen
        name="settingScreenStack"
        options={{drawerLabel: 'Settings', color:'#ffff',
        drawerIcon: (({focused}) => <Icon name="settings-outline" size={25} color="#fff" />)
      }}
        component={settingScreenStack}
      />
      
    </Drawer.Navigator>
  
  );
};

export default DrawerNavigatorRoutes;