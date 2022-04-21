// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import { useNavigation } from '@react-navigation/core';
import React, {useState, createRef, useEffect} from 'react';
require("firebase/firestore")
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
import { auth } from '../firebase';
import AsyncStorage from '@react-native-async-storage/async-storage'
import Loader from './Components/Loader';
const saveUserFirst = async (user) => {
  try {
    await AsyncStorage.setItem(
      'email',
      user
    );

    
  } catch (error) {
    // Error saving data
  }
}

const RegisterScreen = (props) => {
  const [userEmail, setUserEmail] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [confirmPassword, setConfirmPassword ] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  const [
    isRegistraionSuccess,
    setIsRegistraionSuccess
  ] = useState(false);

  const emailInputRef = createRef();
  const phoneInputRef = createRef();
  const passwordInputRef = createRef();
  const confirmInputRef = createRef();
  const navigation = useNavigation();
  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged(user => {
  //     if (user) {
  //       props.navigation.navigate('RegisterScreen')
  //     }
  //   })

  //   return unsubscribe
  // }, [])

  const handleSignUp = () =>{
    auth
      .createUserWithEmailAndPassword(userEmail, userPassword)
      .then(userCredentials => {
        console.log("Register In")
        return userCredentials
      }).then(data => {
        saveUserFirst(data.user.email).then(props.navigation.navigate("RegisterScreen"))
      })
      
      
      .catch(error => alert(error.message))
  }

  const handleSubmitButton = () => {
    setErrortext('');
    if (!userPhone) {
      alert('Please fill Mobile No.');
      return;
    }
    if (!confirmPassword) {
      alert('Please fill Password');
      return;
    }
    if (!userPassword) {
      alert('Please fill Password');
      return;
    }
    if(userEmail!="" || userEmail==""){
      const alph = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      if(!alph.test(userEmail))
      {
        console.warn("Please provide proper Email ID ")
      }
      if (userPhone.length == 10) {
          if(userPassword == confirmPassword){
            props.navigation.navigate('RegisterScreen')
          } else{
            console.warn("Passwords donot match")
          }
      }
      else{
        console.warn("Enter a valid Phone No.")
      }
  
    } 
  };
  return (
    <View style={{flex: 1,  backgroundColor: "#2DD0F3",}}>
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
        <View style={styles.inputView}>
              <TextInput
                style={styles.inputText}
                onChangeText={(UserEmail) =>
                  setUserEmail(UserEmail)
                }
                placeholder="Enter Email(Optional)" //dummy@abc.com
                underlineColorAndroid="#f000"
                placeholderTextColor="#8b9cb5"
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                ref={emailInputRef}
                
                onSubmitEditing={() =>
                  phoneInputRef.current &&
                 phoneInputRef.current.focus()
                }
                blurOnSubmit={false}
                />
         </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              onChangeText={(UserPhone) => setUserPhone(UserPhone)}
              underlineColorAndroid="#f000"
              placeholder="Enter Mobile No."
              placeholderTextColor="#8b9cb5"
              keyboardType= "number-pad"
              ref={phoneInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordInputRef.current &&
                passwordInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              onChangeText={(UserPassword) =>
                setUserPassword(UserPassword)
              }
              underlineColorAndroid="#f000"
              placeholder="Enter Password"
              placeholderTextColor="#8b9cb5"
              ref={passwordInputRef}
              returnKeyType="next"
              secureTextEntry={true}
              onSubmitEditing={() =>
                ageInputRef.current &&
                ageInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              onChangeText={(ConfirmPassword) =>
                setConfirmPassword(ConfirmPassword)
              }
              underlineColorAndroid="#f000"
              placeholder="Confirm Password"
              placeholderTextColor="#8b9cb5"
              ref={confirmInputRef}
              returnKeyType="next"
              secureTextEntry={true}
              
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
            onPress={handleSignUp}>
            <Text style={styles.loginText}>NEXT</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
export default RegisterScreen;

const styles = StyleSheet.create({
  logo:{
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 60,
    fontWeight: "bold",
    fontFamily:'Roboto',
    marginTop: 60,
    marginBottom:5
  },
  head: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 20,
    fontFamily:'Roboto',
    marginBottom:40
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