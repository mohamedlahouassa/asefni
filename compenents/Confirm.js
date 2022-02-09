import React, { Component } from 'react';
import { TouchableOpacity, Image, View, StyleSheet,ImageBackground,Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {connect} from 'react-redux';
//import Mp1 from './Mp1';
import * as firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyCL5uQWLuu53uvF-1FUgt6MDXZ2jgrJ_MY",
  authDomain: "pharma-43b99.firebaseapp.com",
  databaseURL: "https://pharma-43b99.firebaseio.com",
  projectId: "pharma-43b99",
  storageBucket: "phnpmarma-43b99.appspot.com",}
  firebase.initializeApp(firebaseConfig);
class Confirm extends React.Component{ 
    static navigationOptions = {
        title: 'Confirmation',
      };
  componentDidMount(){
    console.ignoredYellowBox = ['Setting a timer'];
  }
  async writeUserData(data){
  
    var key=firebase.database().ref('/alerts').push().key
    var date = new Date().getDate(); 
    var month = new Date().getMonth() + 1; 
    var year = new Date().getFullYear();
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds();
    var text=date+'-'+month+'-'+year;
    var tmt= hours+':'+min+':'+sec;
    firebase.database().ref('/alerts').child(key).set({
      firstname:data.firstname,
      lastname:data.lastname,
      email:data.email,
      phone_number:data.phone_number,
      uri:data.uri,
      case:data.case,
      location:data.location,
      key:key,
      date:text,
      time:tmt,
      name:55
    })

  
}



render(){
    return(
        <ImageBackground source={require('../Images/Home.jpg')} style={{width: '100%', height: '100%'}} >
<LinearGradient colors={['rgba(207,10,0,0.7)','rgba(245,165,0,0.2)']} style={{padding:5,flex:1,margin:8,marginBottom:60,borderColor:'rgb(245,165,0)',borderRadius:20,borderWidth:1}}>
<View style={{flex:1,flexDirection:'row',padding:5}}>
<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
<Image
style={{height:"70%",width:"90%",margin:5,borderRadius:14}}
source={{uri:this.props.uri}}
/>
</View>
<View style={{flex:1.5,paddingLeft:"5%",paddingTop:"20%"}}>
<Text style={styles.text}>{this.props.firstname} {this.props.lastname}</Text>
<Text style={styles.text}>{this.props.email}</Text>
<Text style={styles.text}>{this.props.case}</Text>

    
</View>
</View>
<View style={{flex:1,padding:15,}}>

<TouchableOpacity style={{alignSelf:"center",position:"absolute",bottom:-45}}  onPress={()=>this.writeUserData(this.props).
  then(()=>{alert("success"); this.props.navigation.navigate("Welcome");}).catch((error)=>{
    alert(error)
  })}   >
      <Image 
          style={{height:90,width:80}}
          source={require('../Images/finale1.png')}
        />
        </TouchableOpacity>
</View>
</LinearGradient>
</ImageBackground>
);
}
} 
const styles = StyleSheet.create({
 text:{
     margin:10,
     color:"#fff",
     fontSize:15
 }
})
const mapStateToProps=(state)=>{
    return {
      firstname:state.firstname,
      lastname:state.lastname,
      email:state.email,
      case:state.case,
      uri:state.uri,
      location:state.location,
      photo:state.photo,
      phone_number:state.phone_number,
    }
  }
 
export default connect(mapStateToProps)(Confirm);