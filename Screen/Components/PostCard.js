import React, {useState,createRef,useEffect} from "react";
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    TextInput,
    Image,
    Alert,
    Button,
    Container,
    TouchableOpacity,
  } from "react-native";


  const PostComponent = (props) => {
   
    return(
 <View>
          <View className="post" style={styles.post}>
            <View className="postHeader" style={styles.postHeader}>
            <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly"
            }}
          >
            <Image
              source={require("../DrawerScreens/Images/user2.png")}
              style={styles.image}
              resizeMode="cover"
            />
            
          </View>
              <View>
                
                <Text style={styles.postHeaderText} >{props.email}</Text>
                <Text style={styles.postHeaderTextSub}>
                  Mumbai, Maharashtra
                </Text>
              </View>
            </View>

            <View style={styles.postBody}>
              <Text style={styles.postBodyText}>
                {props.post}
              </Text>
              
            </View>

            
        </View> 
        </View>
        );
    }

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
      });
    export default PostComponent;