import React, {useState, createRef, useEffect} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Loader from './Components/Loader';
import firebase from '@firebase/app';
import firestore from '@firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage'
const submitUser = async (userDetails) => {
   
  firebase.firestore()
  .collection('user')
  .add(userDetails)
  .then(() => {
    console.log('User Added!');
    
  })
  .catch((error) => {
    console.log('Something went wrong with added user to firestore.', error);
  });
}

const getEmailFirst = async () => {
  try {
    const email = await AsyncStorage.getItem('email');
    if (email !== null) {
      // We have data!!
      console.log(email);
      return email;
    }else {
      return 'saishkhade@gmail.com'
    }
  } catch (error) {
    // Error retrieving data
  }
}

const RegisterScreen = (props) => {
  const [userFirstName, setUserFirstName] = useState('');
  const [userLastName, setUserLastName] = useState('');
  const [userState, setUserState] = useState('');
  const [userZipCode, setUserZipCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');

  const fisrNameInputRef = createRef();
  const lastNameInputRef = createRef();
  const stateInputRef = createRef();
  const zipcodeInputRef = createRef();

  const handleSubmitButton = () => {
    setErrortext('');
    if (!userFirstName) {
      alert('Please fill First Name');
      return;
    }
    if (!userLastName) {
      alert('Please fill Last Name');
      return;
    }
    if (!userState) {
      alert('Please provide State name');
      return;
    }
    if (!userZipCode) {
      alert('Please fill ZipCode');
      return;
    }
    // firestore with email
    getEmailFirst().then((email) => {
      // firestore post
      // email, name, number, state, pincode
      console.log("RS" ,email)
      const userSave = {
        fname : userFirstName,
        lname : userLastName,
        state : userState,
        zip : userZipCode,
        email: email
      } 
      return userSave;
      

    }).then((user) => {
      
      return submitUser(user)
    })
    .then(props.navigation.navigate('LoginScreen'))
    .then(console.log("Done"))
    
    
   
  };
  const lang = ["English", "Hindi", "Marathi"]
  return (
    <View style={{flex: 1, backgroundColor: "#2DD0F3",}}>
      <Loader loading={loading} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <View style={{alignItems: 'center'}}>
        <View style={{alignItems: 'center'}}>
                <Text style={styles.logo}>FARMOS</Text>
                <Text  style={styles.head}>Social Media For Farmers</Text>
            </View>
        </View>
        <KeyboardAvoidingView enabled>
        <View style={styles.inputView1}>
              <SelectDropdown style={{backgroundColor:'#00000'}}
                defaultButtonText={"Choose Language"}
                data={lang}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index)
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  // text represented after item is selected
                  // if data array is an array of objects then return selectedItem.property to render after item is selected
                  return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                  // text represented for each item in dropdown
                  // if data array is an array of objects then return item.property to represent item in dropdown
                  return item
                }}
                buttonStyle={{backgroundColor:'ffff'}}
                renderDropdownIcon={() => {
                  return (
                    <FontAwesome name="chevron-down" color={"#444"} fontSize={18}/>
                  );
                }}
                dropdownIconPosition={"right"}
              />
        </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              onChangeText={(UserFirstName) => setUserFirstName(UserFirstName)}
              underlineColorAndroid="#f000"
              placeholder="Enter First Name"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              returnKeyType="next"
              onSubmitEditing={() =>
                lastNameInputRef.current && lastNameInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              onChangeText={(UserLastName) => setUserLastName(UserLastName)}
              underlineColorAndroid="#f000"
              placeholder="Enter Last Name"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              returnKeyType="next"
              onSubmitEditing={() =>
                stateInputRef.current && stateInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              onChangeText={(UserState) =>
                setUserState(UserState)
              }
              underlineColorAndroid="#f000"
              placeholder="Enter State"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              returnKeyType="next"
              onSubmitEditing={() =>
                zipcodeInputRef.current &&
                zipcodeInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
    
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              onChangeText={(UserZipCode) =>
                setUserZipCode(UserZipCode)
              }
              underlineColorAndroid="#f000"
              placeholder="Enter ZipCode"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              ref={zipcodeInputRef}
              returnKeyType="next"
              onSubmitEditing={Keyboard.dismiss}
              blurOnSubmit={false}
            />
          </View>
          {errortext != '' ? (
            <Text style={styles.errorTextStyle}>
              {errortext}
            </Text>
          ) : null}
          <TouchableOpacity
             style={styles.loginBtn}
            activeOpacity={0.5}
            onPress={handleSubmitButton}>
            <Text style={styles.loginText}>REGISTER</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
export default RegisterScreen;

const styles = StyleSheet.create({
  logo:{
    marginTop:60,
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 60,
    fontWeight: "bold",
    fontFamily:'Roboto',
    marginBottom:5
  },
  head: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 20,
    fontFamily:'Roboto',
    marginBottom:30
  },
  inputView1:{
    marginLeft: 40,
    width:"80%",
    backgroundColor:"#ffff",
    height:50,
    marginBottom:20,
    padding:20,
    justifyContent:'center',
     alignItems:'center'
  },
  inputView:{
    marginLeft: 40,
    width:"80%",
    backgroundColor:"#ffff",
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"#000"
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#00FF85",
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginLeft: 40,
    marginBottom:20
  },
  loginText:{
    color:"white",
    justifyContent:"center",
    fontWeight: "bold",
    fontSize:20
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  successTextStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    padding: 30,
  },
});