import React, {useState,createRef,useEffect} from "react";
import { useNavigation } from '@react-navigation/core'
import { auth } from '../../firebase'
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  Alert,
  Button,
  Container,
  TouchableOpacity,
} from "react-native";
import firebase from '@firebase/app';
import PostComponent from "../Components/PostCard";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { crop } from "../../assets/crop.jpg";
// import Emoji from 'react-native-emoji';
import ProfileScreen from "../ProfileScreen";
import { FlatList } from "react-native-gesture-handler";
// impo



  const submitPost = async (userDetails) => {
   

    firebase.firestore()
    .collection('posts')
    .add(userDetails)
    .then(() => {
      // console.log('Post Added!');
      Alert.alert(
        'Post published!',
        'Your post has been published Successfully!',
      );
      setPost(null);
      
      // navigation.navigate("DrawerNavigationRoutes")
    })
    .catch((error) => {
      console.log('Something went wrong with added post to firestore.', error);
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

const HomeScreen = ({navigation}) => {
  const gotoProfile = () => {
    navigation.replace('ProfileScreen');
  }
  const [post, setPost] = useState(null);
  const [posts, setallPosts ] = useState([]);
  const [nameEm, setnameEm ] = useState({});
  const [email, setEmail] = useState("t@t.com");
  const [n,setn] = useState("x");

  useEffect(() => {
    let nameX = {}
    const fetchName = async() => {
      try {
        const emx = await getEmailFirst();
        setEmail(emx);
        await firebase.firestore()
        .collection('user')

        
        .get()
        .then((querySnapshot)=> {
         
          querySnapshot.forEach(doc => {
            // console.log()
            const {fname, lname, email} = doc.data();
            if(email == emx) {
              console.log("email Main",email)
              setn(fname);
            }
            nameX[email] = fname + " " + lname;
          })

        })
        setnameEm(nameX);
      }
      catch(e){
        console.log(e);
      }
    }

    const fetchPosts = async() => {
      try{
        const list = [];
        let i=0;
        await firebase.firestore()
        .collection('posts')
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
  
  const handlePostButton = () => {
    getEmailFirst().then((email) => {
    // firestore post
    // email, name, number, state, pincode
      console.log("RS" ,email)
      const userSave = {
        post : post ,
        email: email
      } 

      setallPosts([...posts,userSave]);
      return userSave;
    

    }).then((user) => {
    
      return submitPost(user)
    })
    .then(console.log("Post Uploaded")).then(setPost(""))
  };

  return (
    <ScrollView style={{ flex: 1 }}>
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            // borderColor: "#000",
            borderBottomWidth: 1,
            borderBottomColor: "#000",
            paddingBottom: 10,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <View style={styles.profileHeaderPicCircle}>
          <Text style={{fontSize: 25, color: '#307ecc'}}>
            {n.charAt(0)}
          </Text>
        </View>

            <TextInput
              style={styles.input}
              multiline
              editable
              maxLength={100}
              value={post}
              placeholder="Write Your Post"
              onChangeText={(content) => setPost(content)}
            />
          </View>

          <View
            style={{
              width: "50%",
              marginLeft: "auto",
            }}
          >
            <Button onPress={handlePostButton} title="post" color="#2DD0F3">
              Post
            </Button>
          </View>
        </View>
        
        {/* here we have to fetch the post */}

        {/* <Container>
            <FlatList
              data={post}
              renderItem={({item}) => <PostCard item={item} />}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
            />
        
        </Container> */}
        {
        posts.map((post) => {
          //console.log("post ")
          
          return (
            
           <PostComponent email={nameEm[post.email]} post={post.post} id={post.id}/>
          )
        })}
        {/* <View>
          <View className="post" style={styles.post}>
            <View className="postHeader" style={styles.postHeader}>
              <Image
                source={require("../../assets/crop.jpg")}
                style={styles.image}
                resizeMode="cover"
              />
              <View>
                <Text style={styles.postHeaderText} onPress={gotoProfile}>Raju Farmer</Text>
                <Text style={styles.postHeaderTextSub}>
                  Mumbai, Maharashtra
                </Text>
              </View>
            </View>

            <View style={styles.postBody}>
              <Text style={styles.postBodyText}>
                Fertilizing Crops!!!
              </Text>
              
            </View>

            
        </View> */}


      </View>
    </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 60,
    height: 60,
    borderRadius: 50,
    borderWidth: 1,
    overflow: "hidden",
    marginVertical: 5,
  },
  input: {
    height: 40,
    width: "78%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
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
  post: {
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#aaa",
  },
  profileHeaderPicCircle: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    color: 'white',
    backgroundColor: '#ffffff',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;