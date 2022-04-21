import React from 'react';
import {View, Text, SafeAreaView, StyleSheet,Image,TouchableOpacity, ScrollView} from 'react-native';
import { Card } from 'react-native-elements'

const WheatScreen = ({ navigation }) => {
    return (
      <ScrollView  style={styles.container}>
      <Image
              source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyibu5FYyNTgI40SvxBsZOBNeqN9zMwQs6OA&usqp=CAU'}}
              style={styles.cropimage}
              resizeMode="cover"
            />
        <View>
          <Text style={styles.title}>
           Wheat
          </Text>
          <Card>
           <Text style={styles.head}>Introduction</Text>
            <Text style={styles.txt1}>Wheat occupies the prime position among the food crops in the world.
             In India, it is the second important food crop being next to rice and contributes to the total foodgrain production of the country to the extent of about 25%.{'\n'}
             Type of Crop: Rabi
            </Text>
            <View style={styles.headerLine} />
           <Text style={styles.head}>Soil</Text>
              <Text style={styles.txt1}>Wheat is grown in a variety of soils of India. Soils with a clay loam or loam texture, 
               good structure and moderate water holding capacity are ideal for wheat cultivation.
                Care should be taken to avoid very porous and excessively drained oils.
              </Text>
              <View style={styles.headerLine} />
           <Text style={styles.head}>Sowing</Text>
              <Text style={styles.txt1}>
                 Best sowing time for wheat plantation is from late October to December.
                 There may be slight variation for each region.
              </Text>
              <View style={styles.headerLine} />
           <Text style={styles.head}>Irrigation Type: Sprinkler</Text>
              <Text style={styles.txt1}>Water Requirement: 450 - 650 mm{'\n'}Generally, 6 irrigation are needed to get good yield of wheat. It should be done in the following stages- {'\n'}
                  I  - Crown root initiation stage : 20-25 days{'\n'}
                  II - Tillering stage : 40 - 45 days{'\n'}   
                  III - Jointing stage : 60 - 65 days{'\n'}
                  IV - Flowering stage : 80 - 85 days{'\n'}
                  V - Milking stage : 100 - 105 days{'\n'}
                  VI - Dough stage : 115 - 120 days
              </Text>
              <View style={styles.headerLine} />
           <Text style={styles.head}>Harvesting</Text>
              <Text style={styles.txt1}>
               The rain-fed crop reaches the harvest stage much earlier than the irrigated crop. 
               The crop is harvested when the grains become hard and the straw becomes dry and brittle.
               The harvest begins from February and can last until end April.
               The harvesting is mostly done by sickle.
              </Text>
          </Card>
        </View> 
     </ScrollView>
    );
  };
  
const PotatoScreen = ({ navigation }) => {
    return (
      <ScrollView style={styles.container}>
      <Image
              source={{uri:'https://www.latiaagribusinesssolutions.com/wp-content/uploads/2018/02/potato-farming-in-Kenya-1600x800.jpg'}}
              style={styles.cropimage}
              resizeMode="cover"
            />
        <View>
          <Text style={styles.title}>
           Potato
          </Text>
          <Card>
           <Text style={styles.head}>Introduction</Text>
            <Text style={styles.txt1}>Potato is the most important food crop of the world. Potato is a temperate crop grown under subtropical conditions in India. The potato is a crop which has always been the 'poor man's friend'. 
            Potato is being cultivated in the country for the last more than 300 years.{'\n'}
            Type of Crop: Rabi
            </Text>
            <View style={styles.headerLine} />
           <Text style={styles.head}>Soil</Text>
              <Text style={styles.txt1}>Loamy and sandy loam soils, rich in organic matter with good drainage and aeration are most suitable for cultivation of potato crop. 
              The soil with pH range of 5.2-6.4 is considered to be ideal.
              </Text>
              <View style={styles.headerLine} />
           <Text style={styles.head}>Sowing</Text>
              <Text style={styles.txt1}>Best time of planting is when maximum and minimum temperature is from 30-32 °C and 18-20 °C respectively.
                 The sowing time of potato is from October to December.
              </Text>
              <View style={styles.headerLine} />
           <Text style={styles.head}>Irrigation Type: Sprinkler</Text>
              <Text style={styles.txt1}>Water Requirement: 500 - 700 mm{'\n'}Depending soil moisture present in soil, irrigate field immediately or 2-3 days after planting. Light and frequent irrigation gives best result, avoid flood irrigation as it will cause rot disease.
               For medium to heavy soils, three to four irrigation is required whereas for sandy soils, 8-12 irrigation are necessary.
               Second irrigation should be done within 30-35days after planting depending on soil moisture. 
              Remaining irrigation should be given as per requirement of soil and crop need. 
              Stop irrigation 10-12 days before harvesting.
              </Text>
              <View style={styles.headerLine} />
           <Text style={styles.head}>Harvesting</Text>
              <Text style={styles.txt1}>
              The best Harvesting time of potato is 75-120 days after planting, depending on the area of sowing, soil type and variety. 
              </Text>
          </Card>
        </View> 
     </ScrollView>
    );
};
  
const RiceScreen = ({ navigation }) => {
    return (
      <ScrollView style={styles.container}>
      <Image
              source={{uri:'https://world-crops.com/wp-content/uploads/038-Rice-field.jpg'}}
              style={styles.cropimage}
              resizeMode="cover"
            />
        <View>
          <Text style={styles.title}>
           Rice
          </Text>
          <Card>
           <Text style={styles.head}>Introduction</Text>
            <Text style={styles.txt1}>Rice is the most important food crop of India covering about one-fourth of the total cropped area and providing food to about half of the Indian population.
            Rice is the most important food crop of India covering about one-fourth of the total cropped area and providing food to about half of the Indian population.
            </Text>
            <View style={styles.headerLine} />
           <Text style={styles.head}>Soil</Text>
              <Text style={styles.txt1}>It can be grown on a variety of soils with low permeability and pH varying from 5.0 to 9.5. 
              Sandy loam to loamy sand to silty loam to clay loams, silty to clayey loam soils with low permeability, free of water logging and sodicity are considered best for paddy cultivation.
              </Text>
              <View style={styles.headerLine} />
           <Text style={styles.head}>Sowing</Text>
              <Text style={styles.txt1}>
                Kharif Crop: July to August{'\n'}
                Rabi Crop: September to November{'\n'}
                Summer Crop: January to April
              </Text>
              <View style={styles.headerLine} />
           <Text style={styles.head}>Irrigation Type</Text>
              <Text style={styles.txt1}>Water Requirement: 900 - 2500 mm{'\n'}Rice is traditionally cultivated through flood irrigation and consumes 85% of the water used in agriculture.
              </Text>
              <View style={styles.headerLine} />
           <Text style={styles.head}>Harvesting</Text>
              <Text style={styles.txt1}>
                Kharif Crop: October to December{'\n'}
                Rabi Crop: December to January{'\n'}
                Summer Crop: May to June
              </Text>
          </Card>
        </View> 
     </ScrollView>
    );
};
  
const CottonScreen = ({ navigation }) => {
    return (
      <ScrollView style={styles.container}>
      <Image
              source={{uri:'https://media.fashionnetwork.com/m/f965/bf23/e7df/a629/b2c7/f827/5071/718c/de44/ea65/ea65.jpg'}}
              style={styles.cropimage}
              resizeMode="cover"
            />
        <View>
          <Text style={styles.title}>
           Cotton
          </Text>
          <Card>
            <Text style={styles.head}>Introduction</Text>
            <Text style={styles.txt1}>Cotton is one of the most important fiber and cash crop of India and plays a 
              dominant role in the industrial and agricultural economy of the country. Cotton is a Kharif crop in the major parts of the 
              country viz. Punjab, Haryana, Rajasthan, Uttar Pradesh, Madhya Pradesh, Gujarat, 
              Maharashtra and parts of Andhra Pradesh & Karnataka. It provides the basic raw material (cotton fibre) to cotton textile industry. 
            </Text>
            <View style={styles.headerLine} />
            <Text style={styles.head}>Soil</Text>
            <Text style={styles.txt1}>Cotton is grown on a variety of soils ranging from well drained deep alluvial soils 
                        in the north to black clayey soils of varying depth in central region and in black and mixed black and red soils in south zone. 
                        Cotton is semi-tolerant to salinity and sensitive to water logging.
            </Text>
            <View style={styles.headerLine} />
           <Text style={styles.head}>Sowing</Text>
              <Text style={styles.txt1}>
              The sowing season of cotton varies considerably from tract to tract and is generally early (April-May) in northern India and 
              is delayed as we proceed to down south(monsoon based in southern zone). 
              </Text>
              <View style={styles.headerLine} />
           <Text style={styles.head}>Irrigation Type</Text>
              <Text style={styles.txt1}>Water Requirement: 700 - 1300 mm{'\n'}The water requirement is low during first
                  60-70 days after sowing & highest during flowering & boll development.
                  Cotton is commonly flood irrigated although irrigation by furrow or alternate 
                  furrow method is more effective and water saving. Drip irrigation is becoming popular 
                  particularly in the hybrids for central and southern zones.
              </Text>
              <View style={styles.headerLine} />
           <Text style={styles.head}>Harvesting</Text>
              <Text style={styles.txt1}>
              Harvest begins in October in northern India and typically continues until January in the rest of the country.
              </Text>
          </Card>
        </View> 
     </ScrollView>
    );
};

const SugarcaneScreen = ({ navigation }) => {
    return (
      <ScrollView style={styles.container}>
      <Image
              source={{uri:'https://agriculturepost.com/wp-content/uploads/2019/07/Facing-droughts-sugarcane-acreage-declines-by-10.jpg'}}
              style={styles.cropimage}
              resizeMode="cover"
            />
        <View>
          <Text style={styles.title}>
           Sugarcane
          </Text>
          <Card>
            <Text style={styles.head}>Introduction</Text>
            <Text style={styles.txt1}>Sugarcane is a tropical plant and grown as cash crop in the world. India is the fourth largest growing economy in the 
            world, next to US, China and Japan. Sugarcane is the main source of sugar (80%) globally. The 
            sugar juice is used for making white sugar, brown sugar (khandsari) and jaggery 
            (gur). The main by-products of sugarcane industry are bagasse and molasses.{'\n'} 
            Type of crop: Kharif
            </Text>
            <View style={styles.headerLine} />
            <Text style={styles.head}>Soil</Text>
            <Text style={styles.txt1}>Sugarcane can be grown in well drained rich alluvial, heavy loams or lava soil. 
            It is generally cultivated on loams and clayey loams of the Great Plains and black soils, brown or reddish loams and laterites in Peninsular India.
            </Text>
            <View style={styles.headerLine} />
           <Text style={styles.head}>Sowing</Text>
              <Text style={styles.txt1}>
              In India planting Seasons of Sugarcane in subtropical regions are September to October (Autumn) and February to March (spring),
               whereas in tropical regions it is June to August (Adsali) and January to February and October to November (Eksali). 
              </Text>
              <View style={styles.headerLine} />
           <Text style={styles.head}>Irrigation Type: Drip</Text>
              <Text style={styles.txt1}>Water Requirement: 1500 - 2500 mm{'\n'}Generally, sugarcane crop requires 6-8 irrigations in subtropical region 
                whereas in tropical region number of irrigation may range from 20-36. Irrigations are to be given once in 7 days 
                during germination phase (1 –35 days after planting), once in 10 days during 
                tillering phase (36 – 100 days after planting), again once in 7 days during grand 
                growth phase (101-270 days after planting) and once in 15 days during maturity 
                phase (271 days after planting up to harvest) adjusting it to the rain fall pattern of 
                the area.
              </Text>
              <View style={styles.headerLine} />
           <Text style={styles.head}>Harvesting</Text>
              <Text style={styles.txt1}>
              Depending upon the variety and sowing time it takes about 12 to 18 months  for sugarcane to mature. 
              Generaly December to March is the period of harvesting.
              </Text>
          </Card>
        </View> 
     </ScrollView>
    );
};
  
const ChilliScreen = ({ navigation }) => {
    return (
      <ScrollView  style={styles.container}>
      <Image
              source={{uri:'https://kj1bcdn.b-cdn.net/media/25047/chilli.png'}}
              style={styles.cropimage}
              resizeMode="cover"
            />
        <View>
          <Text style={styles.title}>
           Chilli
          </Text>
          <Card>
           <Text style={styles.head}>Introduction</Text>
            <Text style={styles.txt1}>Chilli is a spicy fruit used in cuisine preparations. It is mostly added as an ingredient in foods to make it spicy. 
            Chilli has various local names in India like lanka, mirchi etc. Chillies can be grown both as Kharif and Rabi crop.
            </Text>
            <View style={styles.headerLine} />
           <Text style={styles.head}>Soil</Text>
              <Text style={styles.txt1}>It has been found that black soil which retains moisture is ideal in case they are grown as rainfed crops.
               Under irrigated conditions, the crop needs well-drained sandy loam with rich organic content. 
              They can also be grown in deltaic soil under irrigated conditions.
              </Text>
              <View style={styles.headerLine} />
           <Text style={styles.head}>Sowing</Text>
              <Text style={styles.txt1}>
              Sowing months are May to June for Kharif crop, September to October for Rabi crops. 
              If they are grown as summer crops then January-February months are chosen.
              </Text>
              <View style={styles.headerLine} />
           <Text style={styles.head}>Irrigation Type: Seepage</Text>
              <Text style={styles.txt1}>Number of irrigations, interval between two successive irrigations depends on type of soils, age of crop and climatic conditions:{'\n'}
                    Light soils : 7-10 days interval{'\n'}
                    Heavy soils : 10-15 days interval{'\n'}
                    Summer : 5-6 days interval{'\n'}
                    After every harvesting of chilli one irrigation should be provided (as per the moisture regime of soils)
                    Irrigation should be provided at 40-60% depletion of available soil moisture.
              </Text>
              <View style={styles.headerLine} />
           <Text style={styles.head}>Harvesting</Text>
              <Text style={styles.txt1}>
              Chilli plant produce ripe fruit 2–4 months after sowing.
              The harvesting of chilli is done according to the intended use of chillies.
              For making powdered chilli and dry chilli, fruits are harvested when the chilli turns dark red in color.
              </Text>
          </Card>
        </View> 
     </ScrollView>
    );
};

const MaizeScreen = ({ navigation }) => {
  return (
    <ScrollView  style={styles.container}>
    <Image
            source={{uri:'https://farmsfriend.com/wp-content/uploads/2020/04/05-2.jpg'}}
            style={styles.cropimage}
            resizeMode="cover"
          />
      <View>
        <Text style={styles.title}>
         Maize
        </Text>
        <Card>
         <Text style={styles.head}>Introduction</Text>
          <Text style={styles.txt1}>Maize is one of the most versatile emerging crops having wider adaptability under
            varied agro-climatic conditions. Globally, maize is known as queen of cereals because it has the highest genetic yield potential among the cereals.
            In India, maize is the third most important food crops after rice and wheat.
          </Text>
          <View style={styles.headerLine} />
         <Text style={styles.head}>Soil</Text>
            <Text style={styles.txt1}>Maize can be grown successfully in variety of soils ranging from loamy sand to clay loam. 
                However, soils with good organic matter content having high water holding capacity with neutral 
                pH are considered good for higher productivity.
            </Text>
            <View style={styles.headerLine} />
         <Text style={styles.head}>Sowing</Text>
            <Text style={styles.txt1}>
            Maize can be grown in all seasons viz; Kharif (monsoon), post monsoon, Rabi (winter) and spring.{'\n'}
            Kharif:	Last week of June to first fortnight July{'\n'}
            Rabi: Last week of October for inter cropping and up to 15th of November for sole crop{'\n'}
            Spring: First week of February
            </Text>
            <View style={styles.headerLine} />
         <Text style={styles.head}>Irrigation Type</Text>
            <Text style={styles.txt1}>Water Requirement: 500 - 800 mm{'\n'}The irrigation water management depends on season as about 80 % of maize is cultivated during monsoon season particularly under rainfed conditions.
            In general, the irrigation should be applied in furrows up to 2/3rd height of the ridges/beds.
            </Text>
            <View style={styles.headerLine} />
         <Text style={styles.head}>Harvesting</Text>
            <Text style={styles.txt1}>
             Kharif Crop: November to December{'\n'}
             Rabi Crop:  April to June
            </Text>
        </Card>
      </View> 
   </ScrollView>
  );
};

const OnionScreen = ({ navigation }) => {
  return (
    <ScrollView  style={styles.container}>
    <Image
            source={{uri:'https://kj1bcdn.b-cdn.net/media/25084/growing-organic-onions-e1523106941962.jpg'}}
            style={styles.cropimage}
            resizeMode="cover"
          />
      <View>
        <Text style={styles.title}>
         Onion
        </Text>
        <Card>
         <Text style={styles.head}>Introduction</Text>
          <Text style={styles.txt1}>India is the second largest onion growing country in the world.
              The onion is a hardy cool-season biennial but usually grown as annual crop. The onion has narrow, hollow leaves and a base which enlarges to form a bulb. 
              The bulb can be white, yellow, or red and require 80 to 150 days to reach harvest.
              The major Onion producing states are Maharashtra, Madhya Pradesh, Karnataka, Gujarat, Rajasthan, Bihar, Andhra Pradesh, Haryana, West Bengal,
              Uttar Pradesh, Chhattisgarh, Odisha, Tamil Nadu, Jharkhand and Telangana in the country.
          </Text>
          <View style={styles.headerLine} />
         <Text style={styles.head}>Soil</Text>
            <Text style={styles.txt1}>Onion can be grown in all types of soils such as sandy loam, clay loam, silt loam and heavy soils. 
            However, the best soil for successful onion cultivation is deep, friable loam and alluvial soils with good drainage, moisture holding capacity and sufficient organic matter.
            </Text>
            <View style={styles.headerLine} />
         <Text style={styles.head}>Sowing</Text>
            <Text style={styles.txt1}>
            Onions can be grown from seeds, seedlings and bulblets.{'\n'}
            Kharif:	May - June{'\n'}
            Late Kharif: August - September{'\n'}
            Rabi: October - November
            </Text>
            <View style={styles.headerLine} />
         <Text style={styles.head}>Irrigation Type</Text>
            <Text style={styles.txt1}>Water Requirement: 350 - 550 mm{'\n'}Irrigation requirement of onion depends upon the season, soil type, method of irrigation and age of the crop. Onion needs irrigation at the time of transplanting, three days after transplanting and subsequently at   7-10 days interval depending upon the soil moisture. 
            In general, Kharif crop needs 5-8 irrigations, the late Kharif crop requires 10-12 and Rabi crop needs 12-15 irrigations.
            </Text>
            <View style={styles.headerLine} />
         <Text style={styles.head}>Harvesting</Text>
            <Text style={styles.txt1}>
            Onion is harvested depending upon the purpose for which the crop is planted. 0nion crop is ready for harvesting in five months for dry onion. 
            However, for marketing as green onion, the crop becomes ready in three months after transplanting.{'\n'}
            Kharif:	October - December{'\n'}
            Late Kharif: January - March{'\n'}
            Rabi: April - May
            </Text>
        </Card>
      </View> 
   </ScrollView>
  );
};
  
  
  export {WheatScreen, PotatoScreen, RiceScreen, CottonScreen, SugarcaneScreen, ChilliScreen, MaizeScreen, OnionScreen};
  
  const styles = StyleSheet.create({
    container:{
      flex: 1, 
      backgroundColor:'#ededed', 
      marginBottom:15
    },
    title:{
      fontSize: 28, 
      marginTop: 15,
      color :'#308a54',
      textAlign: 'center',
      fontWeight:"bold" 
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
      backgroundColor: '#308a54',
      marginTop: 5,
      marginBottom:10
    },
    txt1:{
      marginLeft: 5,
      marginRight: 5,
      marginBottom: 10, 
      textAlign:"justify"
    },
    head:{
      fontSize: 18,
      margin: 5,
      fontWeight:"bold",
      color :'#308a54',
      textAlign: 'center'
    }
  })

 