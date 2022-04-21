import React from 'react';
import {View, Text, SafeAreaView, StyleSheet,Image,TouchableOpacity, ScrollView} from 'react-native';
import { Card } from 'react-native-elements';
import { WheatScreen, PotatoScreen, RiceScreen, CottonScreen, SugarcaneScreen, ChilliScreen, MaizeScreen, OnionScreen} from './MainCrops/CropsScreen';

import 'react-native-gesture-handler';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const CropCalendar = ({navigation}) => {
  return (
    <ScrollView style={{flex: 1}}>
     
        <View
          style={{
            flexDirection:'row'
          }}>
            <TouchableOpacity
                style={styles.box}   onPress={() => navigation.navigate('Wheat')}>
              <Image
            source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyibu5FYyNTgI40SvxBsZOBNeqN9zMwQs6OA&usqp=CAU'}}
            style={styles.image}
            resizeMode="cover"
          />
              <Text style={styles.txt}> Wheat</Text>
            </TouchableOpacity>
           
            <TouchableOpacity
                style={styles.box} onPress={() => navigation.navigate('Rice')} >
                  <Image
            source={require('./MainCrops/CropsImages/rice.jpg')}
            style={styles.image}
            resizeMode="cover"
          />
              <Text style={styles.txt}>Rice</Text>
            </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection:'row'
          }}>
            <TouchableOpacity
                style={styles.box} onPress={() => navigation.navigate('Potato')}>
                  <Image
            source={{uri:'https://www.latiaagribusinesssolutions.com/wp-content/uploads/2018/02/potato-farming-in-Kenya-1600x800.jpg'}}
            style={styles.image}
            resizeMode="cover"
          />
              <Text style={styles.txt}>Potato</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.box} onPress={() => navigation.navigate('Cotton')}>
                  <Image
            source={{uri:'https://media.fashionnetwork.com/m/f965/bf23/e7df/a629/b2c7/f827/5071/718c/de44/ea65/ea65.jpg'}}
            style={styles.image}
            resizeMode="cover"
          />
            <Text style={styles.txt}>Cotton</Text>
            </TouchableOpacity>
            </View>
            <View
          style={{
            flexDirection:'row'
          }}>
            <TouchableOpacity
                style={styles.box} onPress={() => navigation.navigate('Sugarcane')}>
                  <Image
            source={{uri:'https://agriculturepost.com/wp-content/uploads/2019/07/Facing-droughts-sugarcane-acreage-declines-by-10.jpg'}}
            style={styles.image}
            resizeMode="cover"
          />
            <Text style={styles.txt}>Sugarcane</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.box} onPress={() => navigation.navigate('Chilli')}>
                  <Image
            source={{uri:'https://kj1bcdn.b-cdn.net/media/25047/chilli.png'}}
            style={styles.image}
            resizeMode="cover"
          />
            <Text style={styles.txt}>Chilli</Text>
            </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection:'row'
          }}>
            <TouchableOpacity
                style={styles.box} onPress={() => navigation.navigate('Maize')}>
                  <Image
            source={{uri:'https://farmsfriend.com/wp-content/uploads/2020/04/05-2.jpg'}}
            style={styles.image}
            resizeMode="cover"
          />
            <Text style={styles.txt}>Maize</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.box} onPress={() => navigation.navigate('Onion')}>
                  <Image
            source={{uri:'https://kj1bcdn.b-cdn.net/media/25084/growing-organic-onions-e1523106941962.jpg'}}
            style={styles.image}
            resizeMode="cover"
          />
            <Text style={styles.txt}>Onion</Text>
            </TouchableOpacity>
        </View>
    
    </ScrollView>
  );
};

const CropCalendarScreen = () => {
  return (
      <Stack.Navigator initialRouteName="CropCalendar">
        {/* SplashScreen which will come once for 5 Seconds */}
        <Stack.Screen
          name="CropCalendar"
          component={CropCalendar}
          // Hiding header for Splash Screen
          options={{headerShown: false}}
        />
        {/* Auth Navigator: Include Login and Signup */}
        <Stack.Screen
          name="Wheat"
          component={WheatScreen}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Rice"
          component={RiceScreen}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Potato"
          component={PotatoScreen}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Cotton"
          component={CottonScreen}
          options={{headerShown: true}}
        />
       <Stack.Screen
          name="Sugarcane"
          component={SugarcaneScreen}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Chilli"
          component={ChilliScreen}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Maize"
          component={MaizeScreen}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Onion"
          component={OnionScreen}
          options={{headerShown: true}}
        />
      </Stack.Navigator>
  );
};

export default CropCalendarScreen;


const styles = StyleSheet.create({
  box:{
    color: '#000',
    backgroundColor : '#ffff',
    padding : 6,
    fontSize: 13,
    margin: 6,
    width: 185,
    alignItems:'center',
    marginBottom:10,
  },
  image: {
    width: 160,
    height: 160,
    borderWidth: 1,
    overflow: 'hidden',
    marginVertical: 10,
    alignItems: 'center',
    borderRadius:10
  },
  cropimage:{
    width: "100%",
    height: 160,
    borderWidth: 1,
    overflow: 'hidden',
    alignItems: 'center',
  },
  txt:{
    fontSize:20,
    color:'#000'
  },
  headerLine: {
    height: 2,
    marginHorizontal: 0,
    backgroundColor: 'black',
    marginTop: 2,
    marginBottom:2
  },
  txt1:{
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10, 
    textAlign:"justify"
  },
  head:{
    fontSize: 15,
    margin: 5,
    fontWeight:"bold"
  }

})