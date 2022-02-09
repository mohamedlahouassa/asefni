import React from 'react';
import { StyleSheet, Text, View,ImageBackground,Image,TouchableOpacity } from 'react-native';
import {connect} from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';
class Info extends React.Component{
    static navigationOptions={
        header:null    
          };       
render(){
  const {navigate} = this.props.navigation;
    return(
        <ImageBackground source={require('../Images/Home.jpg')} style={{width: '100%', height: '100%'}} >
          <LinearGradient colors={['rgba(207,10,0,0.5)','rgba(245,165,0,0.5)']} style={{flex:1}}>
        <View style={styles.container}>
  
        <Text style={{color:"rgba(255,255,255,0.7)",margin:7,fontSize: 25}} >Your informations</Text>
        <TouchableOpacity  onPress={()=> navigate('SignUp')}>
        <Image
         source={require("../Images/edit.png")}
         style={styles.img1}
        />
        </TouchableOpacity>   
        <Text style={styles.info} >First-Name  :{this.props.firstname}</Text>
        <Text style={styles.info} >Last-Name : {this.props.lastname}</Text>    
        <Text style={styles.info} >Email : {this.props.email}</Text>            
        <Text style={styles.info} >Phone-Number : {this.props.phone_number}</Text>    

               
        </View>
        <View style={{ width:'100%',
  height:130}}>
 <View style={styles.tabbar1}>
 <TouchableOpacity onPress={()=> navigate('Welcome')}>
<Image
          style={styles.img3}
          source={require('../Images/case.png')}
        /></TouchableOpacity>
   </View>   
<View style={styles.tabbar} >
<TouchableOpacity style={styles.tab1} >
<Image
          style={{width:"100%",height:"100%"}}
          source={require('../Images/asantea.png')}
        />
</TouchableOpacity>
<TouchableOpacity style={styles.tab2}  >
<Image
          style={{width:"100%",height:"100%"}}
          source={require('../Images/ainfob.png')}
        />
</TouchableOpacity>
</View>
</View>
            
           
              
        
    
        
</LinearGradient>
         </ImageBackground>
        
    );
}
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
       paddingTop:30,
   alignItems:'center',
     
    },
    img1:{
    
      width:196,
      height:70
  },
    info:{
      width: 350,
      height: 55,
     backgroundColor:'rgba(207,10,0,0.3)',
      margin: 7,
   padding:16,
      color: '#fff',
      borderRadius: 50,
      fontSize: 17,
      fontWeight: '300',
     
     
    },
    tab1:{
      flex:1,
     
    },
    tab2:{
      flex:1,
    },
    tabbar1:{
      flex:1,
      alignItems:'center',
      
    },
     tabbar:{
     flexDirection:'row',
     
     width:'100%',
     flex:1
     },
     img3:{
      width:70,
        height:70,
     marginLeft:4,
      marginTop:20
       
    }
  })
  const mapStateToProps=(state)=>{
    return {
      firstname:state.firstname,
      lastname:state.lastname,
      email:state.email,
      phone_number:state.phone_number,
   
    }
 

  }


export default connect(mapStateToProps)(Info);