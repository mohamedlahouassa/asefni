import React from 'react';
import { StyleSheet, Text, View,ImageBackground,Image,TouchableOpacity,TextInput,AsyncStorage  } from 'react-native';
class   Present extends React.Component{
    static navigationOptions={
        
        header:null    
          };
          state={
            data:''
          }
          
nav=()=> {
  if(this.state.data==''){
  setTimeout(()=> { this.props.navigation.navigate("SignUp")},2000);}
  else{
    setTimeout(()=> { this.props.navigation.navigate("Welcome")},2000);
  }
}
check= async () => {
  try{
    let user=await AsyncStorage.getItem('user');
    this.setState({data:user});
  }
  catch(error){
    this.setState({data:''}); 
  }
}

          componentDidMount(){
            this.check();
            this.nav();
        }
render(){
return(
    <View style={{backgroundColor:'#000', flex:1,justifyContent:'center',alignItems:'center'}}>

    <TouchableOpacity >
    <Image 
      source={require('../Images/finale1.png')}
      style={{height:200,width:180}}
      
    />
     </TouchableOpacity>
  
    
    </View> 
);

}
}
export default Present;



