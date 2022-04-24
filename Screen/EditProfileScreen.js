import React, {useEffect, useContext, useState, createRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  TextInput,
  StyleSheet,
  Alert,
} from 'react-native';
import firebase from '@firebase/app';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
//import FormButton from '../components/FormButton';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import { useNavigation } from '@react-navigation/native';

import {auth} from '../firebase';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage'

//import storage from '@react-native-firebase/storage';
const updateuser = async (userDetails) => {
   
  firebase.firestore()
  .collection('profile')
  .add(userDetails)
  .then(() => {
    Alert.alert(
      'Profile Updated!',
      'Your profile has been updated Successfully!',
    );
    
  })
  .catch((error) => {
    console.log('Something went wrong with added user to firestore.', error);
  });
}

const updaterealuser = async ({email,fname,lname}) => {
   
  firebase.firestore()
  .collection('user')
  //.where('email','=',email)
  .doc('hiG87uNtjOxU1cSNnSGX')
  .update({
    email : email,
    fname : fname,
    lname : lname
  })
  .then(() => {
    console.log('Profile Updated');
    
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

const EditProfileScreen = (props) => {
  // const navigation = useNavigation();
  //const {user, logout} = useContext(auth);
  //const [userData, setUserData] = useState(null);
  const [userFirstName, setUserFirstName] = useState('');
  const [userLastName, setUserLastName] = useState('');
  const [userAboutMe, setUserAboutMe] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userCountry, setUserCountry] = useState('');
  const [userCity, setUserCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');

  const firstNameInputRef = createRef();
  const lastNameInputRef = createRef();
  const aboutmeInputRef = createRef();
  const phoneInputRef = createRef();
  const countryInputRef = createRef();
  const cityInputRef = createRef();
  // const getUser = async() => {
  //   const currentUser = await firestore()
  //   .collection('users')
  //   .doc(user.uid)
  //   .get()
  //   .then((documentSnapshot) => {
  //     if( documentSnapshot.exists ) {
  //       console.log('User Data', documentSnapshot.data());
  //       setUserData(documentSnapshot.data());
  //     }
  //   })
  // }

  // const handleUpdate = async() => {
    

  //   firestore()
  //   .collection('users')
  //   .doc(user.uid)
  //   .update({
  //     fname: userData.fname,
  //     lname: userData.lname,
  //     about: userData.about,
  //     phone: userData.phone,
  //     country: userData.country,
  //     city: userData.city,
      
  //   })
  //   .then(() => {
  //     console.log('User Updated!');
  //     Alert.alert(
  //       'Profile Updated!',
  //       'Your profile has been updated successfully.'
  //     );
  //   })  
    

  // };

  // useEffect(() => {
  //   getUser();
  // }, []);
  const handleEditProfileButton = () => {
    getEmailFirst().then((email) => {
    // firestore post
    // email, name, number, state, pincode
      console.log("RS" ,email)
      const userSave = {
        fname : userFirstName,
        lname : userLastName,
        // aboutme : userAboutMe,
        // phone : userPhone,
        // counry : userCountry,
        // city : userCity,
        email: email
      } 
      return userSave;
    

    })
    // .then((user) => {
    
    //   return updateuser(user)
      
    // })
      .then((user) => {
      return updaterealuser(user)
    })
    .then(console.log("Profile Updated"))
  };
  

  

  

  

  
  return (
    <View style={styles.container}>
      <Text style={styles.head}>Edit Profile</Text>
      
      {/* <BottomSheet
        ref={this.bs}
        snapPoints={[330, -5]}
        renderContent={this.renderInner}
        renderHeader={this.renderHeader}
        initialSnap={1}
        callbackNode={this.fall}
        enabledGestureInteraction={true}
      /> */}

      <Animated.View>
        

        <View  style={styles.action} >
          <FontAwesome name="user-o" color="#333333" size={20} />
          <TextInput
            placeholder="First Name"
            placeholderTextColor="#85b9cb"
            underlineColorAndroid="#f000"
            autoCapitalize="sentences"
            returnKeyType="next"
            autoCorrect={false}
            onChangeText={(userFirstName) => setUserFirstName(userFirstName)}
            onSubmitEditing={() =>
              firstNameInputRef.current && firstNameInputRef.current.focus()
            }
            style={styles.textInput}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#333333" size={20} />
          <TextInput
            placeholder="Last Name"
            placeholderTextColor="#85b9cb"
            underlineColorAndroid="#f000"
            autoCapitalize="sentences"
            returnKeyType="next"
            autoCorrect={false}
            onChangeText={(userLastName) => setUserLastName(userLastName)}
            onSubmitEditing={() =>
              lastNameInputRef.current && lastNameInputRef.current.focus()
            }
            style={styles.textInput}
          />
        </View>
        <View style={styles.action}>
          <Ionicons name="ios-clipboard-outline" color="#333333" size={20} />
          <TextInput
            multiline
            numberOfLines={3}
            placeholder="About Me"
            placeholderTextColor="#85b9cb"
            autoCapitalize="sentences"
            returnKeyType="next"
            onChangeText={(userAboutMe) => setUserAboutMe(userAboutMe)}
            autoCorrect={true}
            onSubmitEditing={() =>
              aboutmeInputRef.current && aboutmeInputRef.current.focus()
            }
            style={[styles.textInput, {height: 40}]}
          />
        </View>
        <View style={styles.action}>
          <Feather name="phone" color="#333333" size={20} />
          <TextInput
            placeholder="Phone"
            placeholderTextColor="#85b9cb"
            keyboardType="number-pad"
            onChangeText={(userPhone) => setUserPhone(userPhone)}
            autoCorrect={false}
            onSubmitEditing={() =>
              phoneInputRef.current && phoneInputRef.current.focus()
            }
            style={styles.textInput}
          />
        </View>

        <View style={styles.action}>
          <FontAwesome name="globe" color="#333333" size={20} />
          <TextInput
            placeholder="Country"
            placeholderTextColor="#85b9cb"
            autoCorrect={false}
            onChangeText={(userCountry) => setUserCountry(userCountry)}
            onSubmitEditing={() =>
              countryInputRef.current && countryInputRef.current.focus()
            }
            style={styles.textInput}
          />
        </View>
        <View style={styles.action}>
          <MaterialCommunityIcons
            name="map-marker-outline"
            color="#333333"
            size={20}
          />
          <TextInput
            placeholder="City"
            placeholderTextColor="#85b9cb"
            autoCorrect={false}
            onChangeText={(userCity) => setUserCity(userCity)}
            onSubmitEditing={() =>
              cityInputRef.current && cityInputRef.current.focus()
            }
            style={styles.textInput}
          />
        </View>
        {/* <Button buttonTitle="Update" onPress={handleUpdate} /> */}
        <View
            style={{
              width: "90%",
              marginCentre: "auto",
              marginLeft: "5%"
            }}
          >
            <Button onPress={handleEditProfileButton} title="Update" color="#2DD0F3">
              Update
            </Button>
        </View>
      </Animated.View>
    </View>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:120
  },
  head: {
    fontSize:40,
    marginLeft:100,
    marginBottom:30
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    width: '100%',
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#2e64e5',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#333333',
  },
});
