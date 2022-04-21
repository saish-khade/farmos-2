import React, {useState, useEffect} from 'react';
import {View, Text,  ScrollView, Image, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {OnionScreen, PotatoScreen, GarlicScreen, MethiScreen} from './MainCrops/CropsPrediction'

const Stack = createStackNavigator();

const CropPriceScreen = ({navigation}) => {
  
  return (
    <ScrollView style={{flex: 1, marginBottom:10, backgroundColor:"#fff"}}>
      <View style={{flex: 1, padding: 16, alignItems: 'center',}}>
        
          <Text
            style={{
              fontSize: 30,
              textAlign: 'center',
              marginBottom: 30,
              fontWeight: "bold"
            }}>
            Crop Price Prediction
          </Text>

      </View>
      <View>
      <TouchableOpacity  style={styles.box} onPress={() => navigation.navigate('Onion')}>
          <View style={styles.imageContainer}>
            <Image
              source={require('./MainCrops/CropsImages/onion.jpg')}
              style={styles.image}
              resizeMode="cover"
            />
            <Text style={styles.header}>Onion, Quality</Text>
          </View>
    </TouchableOpacity>
      <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('Potato')}>
          <View style={styles.imageContainer}>
            <Image
              source={require('./MainCrops/CropsImages/potato.jpg')}
              style={styles.image}
              resizeMode="cover"
            />
            <Text style={styles.header}>Potato, Quality</Text>
          </View>
    </TouchableOpacity>
    
    <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('Garlic')}>
          <View style={styles.imageContainer}>
            <Image
              source={require('./MainCrops/CropsImages/garlic.jpg')}
              style={styles.image}
              resizeMode="cover"
            />
            <Text style={styles.header}>Garlic, Quality</Text>
          </View>
    </TouchableOpacity>
    <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('Methi')}>
          <View style={styles.imageContainer}>
            <Image
              source={require('./MainCrops/CropsImages/methi.jpg')}
              style={styles.image}
              resizeMode="cover"
            />
            <Text style={styles.header}>Methi, Quality</Text>
          </View>
    </TouchableOpacity>
      </View>
      </ScrollView>
  );
};

const PricePredictionScreen = () => {
  return (
      <Stack.Navigator initialRouteName="CropPriceScreen">
        {/* SplashScreen which will come once for 5 Seconds */}
        <Stack.Screen
          name="CropPriceScreen"
          component={CropPriceScreen}
          // Hiding header for Splash Screen
          options={{headerShown: false}}
        />
        {/* Auth Navigator: Include Login and Signup */}
        <Stack.Screen
          name="Onion"
          component={OnionScreen}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Potato"
          component={PotatoScreen}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Garlic"
          component={GarlicScreen}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Methi"
          component={MethiScreen}
          options={{headerShown: true}}
        />  
      </Stack.Navigator>
  );
};
export default PricePredictionScreen;

const styles = StyleSheet.create({
    box:{
      backgroundColor : '#F4F4F4',
      margin: 10,
      marginTop:10,
      borderColor: "#C4C4C4"
    },
    imageContainer: {
      flexDirection: 'row',
    },
    image: {
      width: 60,
      height: 60,
      borderRadius: 50,
      borderWidth: 1,
      overflow: 'hidden',
      marginVertical: 10,
      marginLeft:20
     
    },
    header:{
      fontSize: 18,
      textAlign: 'center',
      color: '#000',
      marginTop: 30,
      marginLeft:15,
     
    },
  });