import React, {useState, createRef} from 'react';
import {View, Text, SafeAreaView,TextInput,StyleSheet, Alert,TouchableOpacity, Keyboard, KeyboardAvoidingView} from 'react-native';

const ChangePassword = (props) => {
  const [userCurrentPassword, setUserCurrentPassword] = useState('');
  const [userNewPassword, setUserNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword ] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  const [
    isRegistraionSuccess,
    setIsRegistraionSuccess
  ] = useState(false);

  const currentPasswordInputRef = createRef();
  const newpasswordInputRef = createRef();
  const confirmInputRef = createRef();

  const handleSubmitButton = () => {
    setErrortext('');
    if(!userCurrentPassword){
      console.warn("Please give the current password")
    }
    if(userNewPassword == confirmPassword){
      props.navigation.navigate('SettingsScreen')
      } else{
        console.warn("Passwords donot match")
      } 
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView enabled>
      <View style={styles.inputView}>
      <TextInput
              style={styles.inputText}
              onChangeText={(UserCurrentPassword) =>
                setUserCurrentPassword(UserCurrentPassword)
              }
              underlineColorAndroid="#f000"
              placeholder="Enter Current Password"
              placeholderTextColor="#8b9cb5"
              ref={currentPasswordInputRef}
              returnKeyType="next"
              secureTextEntry={true}
              onSubmitEditing={() =>
                ageInputRef.current &&
                ageInputRef.current.focus()
              }
              blurOnSubmit={false}
            /></View>
            <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              onChangeText={(UserNewPassword) =>
                setUserNewPassword(UserNewPassword)
              }
              underlineColorAndroid="#f000"
              placeholder="Enter New Password"
              placeholderTextColor="#8b9cb5"
              ref={newpasswordInputRef}
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
              returnKeyType="next"
              onSubmitEditing={Keyboard.dismiss}
              blurOnSubmit={false}
            />
            </View>
            <TouchableOpacity
            style={styles.loginBtn}
            activeOpacity={0.5}
            onPress={handleSubmitButton}>
            <Text style={styles.loginText}>Save Changes</Text>
          </TouchableOpacity>
          
          </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ChangePassword ;
const styles = StyleSheet.create({
  inputView:{
    marginLeft: 40,
    width:"80%",
    backgroundColor:"#ffff",
    height:50,
    marginBottom:10,
    justifyContent:"center",
    padding:20,
    marginTop:10
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
    marginBottom:20,
    marginTop:10
  },
  loginText:{
    color:"white",
    justifyContent:"center",
    fontWeight: "bold",
    fontSize:20
  },
});