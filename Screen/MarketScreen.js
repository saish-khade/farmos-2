import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, StyleSheet, Image, TouchableOpacity} from 'react-native';
import  DailyPrice from '../Market/DailyPrice'
import moment from 'moment';

const MarketScreen = () => {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    fetch('https://farmos-api.herokuapp.com/api/dailyprice')
      .then(res => res.json()).then(data => {

        console.log(data)
        setData(data)
        })
  }, []);

  return (
    <ScrollView style={{flex: 1, marginBottom:10}}>
      <View style={{flex: 1, padding: 16, alignItems: 'center',}}>
        
          <Text
            style={{
              fontSize: 28,
              textAlign: 'center',
              marginBottom: 10,
              fontWeight: "bold"
            }}>
            APMC Market
          </Text>

      </View>

      <View
        style={{
          alignItems: 'center',
        }}>
        <Text style={{
              fontSize: 24,
              textAlign: 'center',
              marginBottom: 16,
            }}>
              {data.date}
          </Text>

          <DailyPrice data={data.result}/>
          
  </View>
     
</ScrollView>
  );
};

export default MarketScreen;

