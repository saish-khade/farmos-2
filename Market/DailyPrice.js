import React from 'react'
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { Card } from 'react-native-elements';
import { color } from 'react-native-reanimated';

const DailyPrice = ({data}) => {
    return (
        <View >

            {
                data && data.length > -1 ? 

                data.map((data, idx) => (

                    idx !== -1 &&  <DailyPriceItem  key={idx} dailyprice={data}/>
                ))

                :

                <View/>
            }
          
            

        </View>
    )
}

const DailyPriceItem = ({dailyprice}) => {
    
    return (
        <Card style={{width:'80%'}}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../assets/crop.jpg')}
              style={styles.image}
              resizeMode="cover"
            />
            <Text style={styles.header}>{dailyprice.name}</Text>
          </View>
          <View style={styles.headerLine} />
          <TouchableOpacity
                  style={styles.box1} disabled={true}>
                <Text style={styles.txt}>Commodity Number: {dailyprice.commodity_number}</Text>
              </TouchableOpacity>
          <View style={{flexDirection:"row"}}>
              <TouchableOpacity
                  style={styles.box} disabled={true}>
                <Text style={styles.txt}>Min</Text>
              </TouchableOpacity>
              <TouchableOpacity
                  style={styles.box} disabled={true}>
                <Text style={styles.txt}>Avg</Text>
              </TouchableOpacity>
              <TouchableOpacity
                  style={styles.box} disabled={true}>
                <Text style={styles.txt}>Max</Text>
              </TouchableOpacity>
              
          </View>

          <View style={{flexDirection:"row"}}>
              <TouchableOpacity
                  style={styles.box} disabled={true}>
                <Text style={styles.txt}>₹ {dailyprice.min_price}/Qtl</Text>
              </TouchableOpacity>
              <TouchableOpacity
                  style={styles.box} disabled={true}>
                <Text style={styles.txt}>₹ {dailyprice.avg_price}/Qtl</Text>
              </TouchableOpacity>
              <TouchableOpacity
                  style={styles.box} disabled={true}>
                <Text style={styles.txt}>₹ {dailyprice.max_price}/Qtl</Text>
              </TouchableOpacity>
              
          </View>
    </Card>
    )
}

export default DailyPrice;

const styles = StyleSheet.create({
    box:{
      color: '#000',
      backgroundColor : '#228B22',
      padding : 6,
      fontSize: 13,
      margin: 4,
      marginTop:5,
      width: 100,
      alignItems:'center',
       
    },
    box1:{
      color: '#000',
      backgroundColor : '#228B22',
      padding : 6,
      fontSize: 13,
      margin: 4,
      marginTop:10,
      width: '97%',
      alignItems:'center',
    },
    txt:{
      color:'#fff'
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
     
    },
    header:{
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#228B22',
      marginTop: 30,
      marginLeft:15,
     
    },
    headerLine: {
      height: 1,
      marginHorizontal: 10,
      backgroundColor: '#228B22',
      marginTop: 1,
      marginBottom:10
    },
  });

  