// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, {useEffect, useState} from 'react';
import {View, Text, Alert, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { auth } from '../../firebase';  



import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import AsyncStorage from '@react-native-async-storage/async-storage'
const getEmail = async () => {
  try {
    const email = await AsyncStorage.getItem('email');
    console.log("AsyncEmail " ,email)
    if (email !== null) {
      // We have data!!
      
      return email;
    }
  } catch (error) {
    // Error retrieving data
  }
}




const CustomSidebarMenu = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('Raju');
  useEffect(() => {
      /// firstore get users with email 
      getEmail().then(email => {
        
        setEmail(email)
      })
  }, [])
 

  const handleLogout = () => {
    AsyncStorage.removeItem("email").then(
      auth.signOut().then(props.navigation.replace("Auth"))
    )
    
  }

  return (
    <View style={stylesSidebar.sideMenuContainer}>
      <View style={stylesSidebar.profileHeader}>
        <View style={stylesSidebar.profileHeaderPicCircle}>
          <Text style={{fontSize: 25, color: '#307ecc'}}>
            {'Manali Shinde'.charAt(0)}
          </Text>
        </View>
        <Text style={stylesSidebar.profileHeaderText}>
          {email}
        </Text>
      </View>
      <View style={stylesSidebar.profileHeaderLine} />

      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label={() => 
            <Text style={{color: 'white'}}>
              Logout
            </Text>
          }
          icon={({focused}) => <Icon name="log-out-outline" size={25} color="#fff" />
          }
          
          onPress={() => {
            props.navigation.toggleDrawer();
            Alert.alert(
              'Logout',
              'Are you sure? You want to logout?',
              [
                {
                  text: 'Cancel',
                  onPress: () => {
                    return null;
                  },
                },
                {
                  text: 'Confirm',
                  onPress: () => {
                    handleLogout();
                  },
                },
              ],
              {cancelable: false},
            );
          }}
         
        />
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomSidebarMenu;

const stylesSidebar = StyleSheet.create({
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: "#2DD0F3",
    paddingTop: 40,
    color: 'white',
  },
  profileHeader: {
    flexDirection: 'row',
    backgroundColor: "#2DD0F3",
    padding: 15,
    textAlign: 'center',
  },
  profileHeaderPicCircle: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    color: 'white',
    backgroundColor: '#ffffff',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileHeaderText: {
    color: 'white',
    alignSelf: 'center',
    paddingHorizontal: 10,
    fontWeight: 'bold',
    fontSize: 20
  },
  profileHeaderLine: {
    height: 1,
    marginHorizontal: 20,
    backgroundColor: '#e2e2e2',
    marginTop: 15,
  },
});