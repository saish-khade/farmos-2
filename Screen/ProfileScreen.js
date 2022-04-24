// import React from "react";
import React, {useState,createRef,useEffect} from "react";
import { useNavigation } from '@react-navigation/native';
import firebase from '@firebase/app';
import AsyncStorage from '@react-native-async-storage/async-storage'
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Image,
  Button,
  TouchableOpacity,ScrollView
} from "react-native";
import PostComponent from "./Components/PostCard";

// import Emoji from 'react-native-emoji';
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

const ProfileScreen = (props) => {
  // const navigation = useNavigation();
  const [posts, setallPosts ] = useState([]);
  const [email,setEmail] = useState("");
  const [name, setName] = useState("");
  getEmailFirst().then((em) => {
    console.log("Email x ,", em)
    setEmail(em)
    return
  })
  useEffect(() => {
    const fetchName = async() => {
      try {
        const emx = await getEmailFirst();
        await firebase.firestore()
        .collection('user')
        .where('email', '==', emx )
        .get()
        .then((querySnapshot)=> {
         
          querySnapshot.forEach(doc => {
            const {fname, lname} = doc.data();
            setName(fname + " " + lname)
          })

        })
      }
      catch(e){
        console.log(e);
      }
    }
  
    const fetchPosts = async() => {
      try{
        const list = [];
        let i=0;
        // const emx = "t@t.com";
        const emx = await getEmailFirst();
        // const email = await getEmailFirst();
        await firebase.firestore()
        .collection('posts')
        .where('email', '==', emx )
        .get()
        .then((querySnapshot)=> {
          console.log('Total Posts: ',querySnapshot.size);
          querySnapshot.forEach(doc => {
            const {email, post} = doc.data();
            list.push({
              email,
              post,
              id:i++
            });
          })

        })
        setallPosts(list);

        console.log('Posts:', list);

      }catch(e){
        console.log(e);
      }
    }

    fetchPosts();
    fetchName();
  },[]);

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            // borderColor: "#000",
            borderBottomWidth: 1,
            borderBottomColor: "#000",
            paddingBottom: 10,
            backgroundColor:"#2DD0F3",
            marginTop:15
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly"
            }}
          >
          <View style={styles.profileHeaderPicCircle}>
          <Text style={{fontSize: 65, color: '#307ecc'}}>
            {name.charAt(0)}
          </Text>
        </View>
          </View>

          <Text
            style={{
                textAlign:"center",
                fontSize:25
            }}
          >{name}</Text>
          <View style={styles.postFooter}>
              <TouchableOpacity onPress={() => props.navigation.navigate('EditProfileScreen')} style={styles.profilebtn} activeOpacity={0.5}>
                <Text style={{ textAlign: "center" }}>Edit Profile</Text>
              </TouchableOpacity>

              
            </View>
          

          <View
            style={{
              width: "50%",
              marginLeft: "auto",
            }}
          >

          </View>
        </View>

        {
        posts.map((post) => {
          //console.log("post ")
          
          return (
            
           <PostComponent email={name} post={post.post} id={post.id} />
          )
        })}


      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({

  profileHeader: {
    flexDirection: 'row',
    backgroundColor: "#2DD0F3",
    padding: 15,
    textAlign: 'center',
  },

  profileHeaderPicCircle: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    color: 'white',
    backgroundColor: '#ffffff',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop : 20
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 100,
    borderWidth: 1,
    overflow: "hidden",
    marginVertical: 5,
    marginBottom:15
  },
  postImage : {
    width: 60,
    height: 60,
    borderRadius: 50,
    borderWidth: 1,
    overflow: "hidden",
    marginVertical: 5,
    marginBottom:15
  },
  
  postHeader: {
    display: "flex",
    flexDirection: "row",
  },
  postHeaderText: {
    marginTop: 10,
    fontSize: 20,
    marginLeft: 10,
  },
  postHeaderTextSub: {
    marginLeft: 10,
  },
  postBody: {
    padding: 5,
  },
  postBodyText: {
    fontSize: 15,
  },
  postFooter: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  likebtn: {
    backgroundColor: "#ccc",
    padding: 20,
    margin: 10,
    width: "50%",
    textAlign: "center",
  },
  profilebtn: {
    backgroundColor: "#eee",
    padding: 20,
    margin: 10,
    width: "50%",
    textAlign: "center",
    borderColor:"#ccc"
  },
  post: {
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#aaa",
  },
});

export default ProfileScreen;