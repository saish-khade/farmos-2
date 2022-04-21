import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator,ScrollView} from 'react-native'
import { WebView } from 'react-native-webview'
import { createStackNavigator } from "@react-navigation/stack";
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons'; 

const MainScheme = ({navigation}) => {
      return (
        <ScrollView style={styles.container}>
          <Card containerStyle={{borderRadius:15,borderColor:'#000'}}>
          <Text style={styles.head}>Pradhan Mantri Krishi Sinchayee Yojana </Text>
          <Text style={styles.txt1}>Pradhan Mantri Krishi Sinchai Yojana is a national mission to improve farm productivity and ensure better utilization of the resources in the country.
          The budget of ₹53 billion in a time span of one year 2015-2016 has been allocated to this scheme.
           The decision was taken on 1 July 2015 at the meeting of Cabinet Committee on Economic Aproved with an outlay of 50000 crore for period of 5 years.
            </Text>
              <TouchableOpacity
                onPress={() =>  navigation.navigate('Browser')}
                style={styles.button}
              >
              <View style={{
            flexDirection:'row',
            justifyContent: 'space-between'
          }}>
              <Text style={styles.text}>Read More</Text>
              <Icon name="chevron-forward-circle-outline" size={28} color="#fff" />
              </View>
              </TouchableOpacity>
         
          </Card>

        <Card containerStyle={{borderRadius:15,borderColor:'#000'}}>
          <Text style={styles.head}>PM-Kisan Scheme </Text>
          <Text style={styles.txt1}>Pradhan Mantri Kisan Samman Nidhi Yojana is an initiative of the Government wherein 120 million small and marginal farmers of India with less than
                two hectares of landholding will get up to Rs. 6,000 per year as minimum income support. 
                PM-Kisan scheme has become operational since 1st December 2018. 
                Under this scheme, cultivators will get Rs. 6000 in three installments.
            </Text>
            <TouchableOpacity
                onPress={() =>  navigation.navigate('Browser1')}
                style={styles.button}>
              <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
              <Text style={styles.text}>Read More</Text>
              <Icon name="chevron-forward-circle-outline" size={28} color="#fff" />
              </View>
            </TouchableOpacity>
        </Card>
        <Card containerStyle={{borderRadius:15,borderColor:'#000'}}>
          <Text style={styles.head}>Sub-Mission on Agricultural Mechanization - SMAM) </Text>
          <Text style={styles.txt1}>To extend the benefits of agricultural mechanization to small and marginal landholding farmers in areas where energy consumption in agriculture is low.
              To create awareness among participants through demonstrations and human resource development.
            </Text>
            <TouchableOpacity
                onPress={() =>  navigation.navigate('Browser2')}
                style={styles.button}>
              <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
              <Text style={styles.text}>Read More</Text>
              <Icon name="chevron-forward-circle-outline" size={28} color="#fff" />
              </View>
            </TouchableOpacity>
        </Card>

        <Card containerStyle={{borderRadius:15,borderColor:'#000'}}>
          <Text style={styles.head}>Babasaheb Ambedkar Krishi Swavalamban Yojana</Text>
          <Text style={styles.txt1}>Scheduled Caste Sub-Plan implemented to increase the income of Scheduled Caste, Neo-Buddhist farmers and their standard of living.
           The scheme is only for SC/Nav Baudha Caste farmers below the poverty line or Income limit up to Rs. 150000/-, income certificate necessary.
            The landholding limit is 0.40 ha. to 6.00 ha.
            </Text>
            <TouchableOpacity
                onPress={() =>  navigation.navigate('Browser3')}
                style={styles.button}>
              <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
              <Text style={styles.text}>Read More</Text>
              <Icon name="chevron-forward-circle-outline" size={28} color="#fff" />
              </View>
            </TouchableOpacity>
        </Card>

        <Card containerStyle={{borderRadius:15,borderColor:'#000'}}>
          <Text style={styles.head}>Ekatmik Falotpadan Vikas Abhiyan</Text>
          <Text style={styles.txt1}>The main objective of the campaign is to double the production of horticulture sector in the country during the campaign period. 
          This includes production of quality planting material, planting of new orchards, revival of old orchards, enhancing irrigation capacity through collective farms, controlled farming in greenhouses, shednethouses, integrated inertia and integrated code management, organic farming, manpower development, extraction management.
            </Text>
            <TouchableOpacity
                onPress={() =>  navigation.navigate('Browser4')}
                style={styles.button}>
              <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
              <Text style={styles.text}>Read More</Text>
              <Icon name="chevron-forward-circle-outline" size={28} color="#fff" />
              </View>
            </TouchableOpacity>
        </Card>

        <Card containerStyle={{borderRadius:15,borderColor:'#000'}}>
          <Text style={styles.head}>National Food Security Campaign: Cereals, oilseeds, sugarcane and cotton</Text>
          <Text style={styles.txt1}>Centrally sponsored National Food Security Mission has been implemented in the state since 2007-08.
          Under this scheme, subsidy will be provided to farmers for seed distribution, integrated nutrient management (micronutrients), integrated pest management (crop protection drugs and biological components, herbicides), individual farms, pump sets, pipes, various agricultural implements.
            </Text>
            <TouchableOpacity
                onPress={() =>  navigation.navigate('Browser5')}
                style={styles.button}>
              <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
              <Text style={styles.text}>Read More</Text>
              <Icon name="chevron-forward-circle-outline" size={28} color="#fff" />
              </View>
            </TouchableOpacity>
        </Card>

        <Card containerStyle={{borderRadius:15,borderColor:'#000'}}>
          <Text style={styles.head}>Mahatma Jyotiba Phule Loan Waiver Scheme</Text>
          <Text style={styles.txt1}>Mahatma Jyotiba Phule Loan Waiver Scheme is a loan scheme run by the state government of Maharashtra, under which the loans of small and marginal farmers living in the state are being waived. 
          Under this scheme, the loan of eligible farmers up to Rs 2 lakh will be waived. 
            </Text>
            <TouchableOpacity
                onPress={() =>  navigation.navigate('Browser6')}
                style={styles.button}>
              <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
              <Text style={styles.text}>Read More</Text>
              <Icon name="chevron-forward-circle-outline" size={28} color="#fff" />
              </View>
            </TouchableOpacity>
        </Card>

        <Card containerStyle={{borderRadius:15,borderColor:'#000'}}>
          <Text style={styles.head}>Bhausaheb Phundkar Horticulture Plantation Scheme</Text>
          <Text style={styles.txt1}>In order to increase the cultivation of orchards, the government has started a horticulture scheme in the name of the late former Agriculture Minister Bhausaheb (Pandurang) Fundkar through the Department of Agriculture. 
          To provide sustainable source of income to the farmers in the form of orchards along with crops and livestock through this scheme. 
          To help increase and double the income of farmers through the scheme. 
            </Text>
            <TouchableOpacity
                onPress={() =>  navigation.navigate('Browser7')}
                style={styles.button}>
              <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
              <Text style={styles.text}>Read More</Text>
              <Icon name="chevron-forward-circle-outline" size={28} color="#fff" />
              </View>
            </TouchableOpacity>
        </Card>
        </ScrollView>
      )
    
  }

  const Browser = ({navigation}) => {
    const LoadingIndicatorView = () => {
      return <ActivityIndicator color='#009b88' size='large' style={styles.ActivityIndicatorStyle} />
    }
      return (
        <WebView
          source={{ uri: 'https://mahadbtmahait.gov.in/Farmer/SchemeData/SchemeData?str=E9DDFA703C38E51AC7B56240D6D84F28' }}
          renderLoading={LoadingIndicatorView}
          startInLoadingState={true}
        />
      )  
  }

  const Browser1= ({navigation}) => {
    const LoadingIndicatorView = () => {
      return <ActivityIndicator color='#009b88' size='large' style={styles.ActivityIndicatorStyle} />
    }
      return (
        <WebView
          source={{ uri: 'https://www.pmkisan.gov.in/' }}
          renderLoading={LoadingIndicatorView}
          startInLoadingState={true}
        />
      )
  }

  const Browser2= ({navigation}) => {
    const LoadingIndicatorView = () => {
      return <ActivityIndicator color='#009b88' size='large' style={styles.ActivityIndicatorStyle} />
    }
      return (
        <WebView
          source={{ uri: 'https://mahadbtmahait.gov.in/Farmer/SchemeData/SchemeData?str=E9DDFA703C38E51A23C0254248DAFF28' }}
          renderLoading={LoadingIndicatorView}
          startInLoadingState={true}
        />
      )
  }

  const Browser3= ({navigation}) => {
    const LoadingIndicatorView = () => {
      return <ActivityIndicator color='#009b88' size='large' style={styles.ActivityIndicatorStyle} />
    }
      return (
        <WebView
          source={{ uri: 'https://mahadbtmahait.gov.in/Farmer/SchemeData/SchemeData?str=E9DDFA703C38E51A986837A04E50D9EF' }}
          renderLoading={LoadingIndicatorView}
          startInLoadingState={true}
        />
      )
  }

  const Browser4= ({navigation}) => {
    const LoadingIndicatorView = () => {
      return <ActivityIndicator color='#009b88' size='large' style={styles.ActivityIndicatorStyle} />
    }
      return (
        <WebView
          source={{ uri: 'https://mahadbtmahait.gov.in/Farmer/SchemeData/SchemeData?str=E9DDFA703C38E51AF823840F3424F82E' }}
          renderLoading={LoadingIndicatorView}
          startInLoadingState={true}
        />
      )
  }

  const Browser5= ({navigation}) => {
    const LoadingIndicatorView = () => {
      return <ActivityIndicator color='#009b88' size='large' style={styles.ActivityIndicatorStyle} />
    }
      return (
        <WebView
          source={{ uri: 'https://mahadbtmahait.gov.in/Farmer/SchemeData/SchemeData?str=E9DDFA703C38E51A64CDF3CE7D352F8F' }}
          renderLoading={LoadingIndicatorView}
          startInLoadingState={true}
        />
      )
  }

  const Browser6= ({navigation}) => {
    const LoadingIndicatorView = () => {
      return <ActivityIndicator color='#009b88' size='large' style={styles.ActivityIndicatorStyle} />
    }
      return (
        <WebView
          source={{ uri: 'https://mjpsky.maharashtra.gov.in/index.html' }}
          renderLoading={LoadingIndicatorView}
          startInLoadingState={true}
        />
      )
  }

  const Browser7= ({navigation}) => {
    const LoadingIndicatorView = () => {
      return <ActivityIndicator color='#009b88' size='large' style={styles.ActivityIndicatorStyle} />
    }
      return (
        <WebView
          source={{ uri: 'https://mahadbtmahait.gov.in/Farmer/SchemeData/SchemeData?str=E9DDFA703C38E51AD8FABF0B538FA508' }}
          renderLoading={LoadingIndicatorView}
          startInLoadingState={true}
        />
      )
  }
  
  const Stack = createStackNavigator();

  const SchemeScreen = () => {
    return (
        <Stack.Navigator initialRouteName="MainScheme">
          <Stack.Screen
            name="MainScheme"
            component={MainScheme}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Browser"
            component={Browser}
            options={{headerShown: false}}
          />  
          <Stack.Screen
            name="Browser1"
            component={Browser1}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Browser2"
            component={Browser2}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Browser3"
            component={Browser3}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Browser4"
            component={Browser4}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Browser5"
            component={Browser5}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Browser6"
            component={Browser6}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Browser7"
            component={Browser7}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
    );
  };
  
export default SchemeScreen;

    
  const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#ededed',
        marginBottom:20
      },
      buttonList: {
        flex: 1,
        justifyContent: 'center'
      },
      button: {
        marginLeft: 85,
        marginRight: 70,
        margin:5,
        backgroundColor:"#00FF85",
        borderRadius: 30,
        padding: 10,
        width:"47%"
      },
      text: {
        fontWeight:"bold",
        color :'#ffff',
        textAlign: 'center',
        fontSize: 20,
        marginLeft:5
      },
      ActivityIndicatorStyle: {
        flex: 1,
        justifyContent: 'center'
      },
      head:{
        fontSize: 18,
        margin: 5,
        fontWeight:"bold",
        color :'#000',
        textAlign: 'center'
      },
      txt1:{
        marginLeft: 5,
        marginRight: 5,
        textAlign:"justify",
        margin:5,
        fontSize:15
      },
    })

  