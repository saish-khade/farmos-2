import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState}from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';

import DateTime from '../Weather/DateTime'
import WeatherScroll from '../Weather/WeatherScroll'
const API_KEY ='eab60c17fd9166c582b9ee1b7a05f892';

export default function Weather() {
  Location.installWebGeolocationPolyfill();
  const [data, setData] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((success) => {
        
      let {latitude, longitude } = success.coords;
      fetchDataFromApi(latitude,longitude )
    
     

  }, (err) => {
    if(err){
      fetchDataFromApi("20.5937", "78.9629")
    }
  })
  }, [])

  const fetchDataFromApi = (latitude, longitude) => {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`
    ).then(res => res.json()).then(data => {

      console.log(data)
      setData(data)
      })
  }

  return (
    <View style={styles.container}>
        <DateTime current={data.current} timezone={data.timezone} lat={data.lat} lon={data.lon} />
        <WeatherScroll weatherData={data.daily}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2DD0F3",
    justifyContent: 'center'
    
  },
 
});