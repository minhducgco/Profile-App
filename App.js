import React from "react";
import { StyleSheet, ScrollView, View, Image, Text, TouchableOpacity } from "react-native";
import Constants from "expo-constants";
import { MaterialIcons, Ionicons, Entypo, AntDesign,FontAwesome5} from "@expo/vector-icons";

const POLO_BLUE_COLOR = 'rgb(51,60,87)'; 
const FOLLOW_COLOR = 'rgb(71,113,246)';
const SEND_MESSAGE_COLOR = 'rgb(120,213,250)';

export default function App() {
  const imgData = [
    { id: 1, imgSource: require('./assets/1.jpg') },
    { id: 2, imgSource: require('./assets/2.jpg') },
    { id: 3, imgSource: require('./assets/3.jpg') },
    { id: 4, imgSource: require('./assets/4.jpg') },
    { id: 5, imgSource: require('./assets/5.jpg') },
    { id: 6, imgSource: require('./assets/6.jpg') },
  ];
  const centerImgData = Math.floor(imgData.length / 2);
  return (
    <View style={styles.container}>
      <View style={styles.layoutHeader}>
        <View style={styles.layoutHeaderChild}>
          <Ionicons name="md-arrow-round-back" size={24} color="black" />
        </View>
        <View style={styles.layoutHeaderChild}>
          <Entypo name="grid" size={24} color="black" />
        </View>
      </View>
      <View style={styles.personalInfor}>
        <View style={styles.avatarArea}>
          <Image style={styles.avatar} source={require('./assets/avatar.jpg')}/>
        </View>
        <View style={styles.userInfor}>
          <Text style={styles.userName}>Do Minh Duc</Text>
          <Text style={styles.userJob}>Deverloper</Text>
          <View style={styles.followWrapper}>
            <TouchableOpacity style={styles.followButton}  >
              <Text style={styles.textFollow} onPress={() => alert("Followed")}>Follow</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sendButton}>
              <MaterialIcons name="send" size={32} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.statistics}>
        <View style={styles.statisticsChild}>
          <View style={styles.statisticsGrandChild}>
            <Text style={styles.statisticsTitle}>210</Text>
          </View>
          <View style={styles.statisticsGrandChild}>
            <Text style={styles.statisticsSub}>Photos</Text>
          </View>
        </View>
        <View style={styles.statisticsChild}>
          <View style={styles.statisticsGrandChild}>
            <Text style={styles.statisticsTitle}>15k</Text>
          </View>
          <View style={styles.statisticsGrandChild}>
            <Text style={styles.statisticsSub}>Followers</Text>
          </View>
        </View>
        <View style={styles.statisticsChild}>
          <View style={styles.statisticsGrandChild}>
            <Text style={styles.statisticsTitle}>605</Text>
          </View>
          <View style={styles.statisticsGrandChild}>
            <Text style={styles.statisticsSub}>Following</Text>
          </View>
        </View>
      </View>
      <View style={styles.photosArea}>
          <ScrollView
            contentContainerStyle={{
            flexDirection:"row",
            justifyContent:"center",
            alignItems:"center"
           }}
          >
            <View>
              {imgData.slice(0,centerImgData).map(item =>{
                return <Image source={item.imgSource} style={styles.image} key={item.key}/>;
              })}
            </View>
            <View style={styles.photos}>
              {imgData.slice(centerImgData).map(item =>{
                return <Image source={item.imgSource} style={styles.image} key={item.key}/>;
              })}
              </View>
          </ScrollView>
      </View>            
      <View style={styles.bottonTab}>
        <View style={styles.bottonTabChild}>
          <FontAwesome5 name="newspaper" size={24} color="black" />
        </View>
        <View style={styles.bottonTabChild}>
          <Entypo name="home" size={24} color="black" />
        </View>
        <View style={styles.bottonTabChild}>
          <AntDesign name="user" size={24} color="black" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  personalInfor: {
    flex: 0.25,
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
  }, 
  statistics: {
    flex: 0.15,
    flexDirection: "row",
  },
  photosArea: {
    flex:0.55,
  },
  avatarArea: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 170,
    height: 170,
    backgroundColor: '#999',
    borderRadius: 180,
  },
  userInfor: {
    flex: 0.6,
    flexDirection: "column",
    justifyContent: 'space-between',
  },
  iconSend: {
    width: 150,
    height: 150,
  },
  userName: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#323C57",
  },
  userJob: {
    fontSize: 28,
    color: "#a1a1a1",
    marginTop: 8,
  },
  followWrapper: {
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 16,
  },
  followButton:{
    flex: 0.5,
    backgroundColor: FOLLOW_COLOR,
    width: 120,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
	  width: 0,
  	height: 3,
      },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  textFollow: {
    fontSize: 28,
    color: '#fff',
  },
  sendButton:{
    flex: 0.3,
    backgroundColor: SEND_MESSAGE_COLOR,
    width: 40,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 16,
    shadowColor: "#000",
    shadowOffset: {
	  width: 0,
  	height: 3,
      },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  statisticsChild: {
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  statisticsTitle:{
    fontSize: 34,
    fontWeight: "bold",
    color: "#323C57",
  },
  statisticsSub: {
    fontSize: 24,
    color: "#a1a1a1",
    marginTop: 8,
  },
  image: {
    width: 150,
    height: 150,
  },
  bottonTab: {
    flex: 0.025,
    flexDirection: "row",
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  layoutHeader: {
    flex: 0.025,
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
    width: 170,
    height: 170,
    borderRadius: 12,
  },
});
