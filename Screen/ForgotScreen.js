import React, {useState, createRef} from 'react';
import {View, Text, SafeAreaView, StyleSheet, TextInput} from 'react-native';

const ForgotScreen = () => {
    const [userPhone, setUserPhone] = useState('');
    const phoneInputRef = createRef();
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            flex: 1,
          }}>
          <Text
            style={{
              fontSize: 24,
              marginBottom: 10,
              fontWeight:'bold'
            }}>
            Find Your Account
          </Text>
          <Text
            style={{
              fontSize: 20,
              marginBottom: 16,
            }}>
            Enter your phone number
          </Text>
          <View style={styles.inputView}>
              <TextInput
                style={styles.inputText}
                onChangeText={(UserPhone) =>
                  setUserPhone(UserPhone)
                }
              onChangeText={(UserPhone) => setUserPhone(UserPhone)}
              underlineColorAndroid="#f000"
              keyboardType= "number-pad"
              ref={phoneInputRef}
              returnKeyType="next"
              blurOnSubmit={false}
              underlineColorAndroid="#f000"
              />
            </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ForgotScreen;

const styles =StyleSheet.create({
    inputView:{
        width:"100%",
        height:40,
        marginBottom:20,
        justifyContent:"center",
        padding:10,
        borderWidth: 1,
        borderColor:'#8b9cb5'
      },
});