import React from 'react';
import {connect} from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View,ImageBackground,Image,TouchableOpacity,TextInput,Button,Picker, BackHandler, AsyncStorage  } from 'react-native';
class SignUp extends React.Component{
  static navigationOptions={
    header:null    
      };
          componentWillMount(){
            BackHandler.addEventListener('hardwareBackPress', function() {
                return true ;
              });
          }
render(){

return(
<LinearGradient colors={['rgb(245,165,0)','rgba(207,10,0,1)']} style={{flex:1}}>
<View style={styles.container}>
<Image 
          style={{height:90,width:75
          }}
          source={require('../Images/finale2.png')}
        />

        <TextInput
          style={styles.input}
          placeholder='First-Name'
          placeholderTextColor='rgba(255,255,255,0.5)'
         value={this.props.firstname}
          onChangeText={val => this.props.change('firstname',val)}
        />
         <TextInput
          style={styles.input}
          placeholder='Last-Name'
          autoCapitalize="none"
 
          placeholderTextColor='rgba(255,255,255,0.5)'
          value={this.props.lastname}
          onChangeText={val => this.props.change('lastname',val)}
        />
        
        
        <TextInput
          style={styles.input}
          placeholder='Email'
          autoCapitalize="none"
          placeholderTextColor='rgba(255,255,255,0.5)'
          value={this.props.email}
          onChangeText={val => this.props.change('email',val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Phone Number'
          autoCapitalize="none"
          placeholderTextColor='rgba(255,255,255,0.5)'
          value={this.props.phone_number}
          onChangeText={val => this.props.change('phone_number',val)}
        />
       
        <TouchableOpacity onPress={()=>{
  
  const {firstname,lastname, email } = this.props
  if(firstname=='' || lastname=='' || email=='' ){
     alert("charge your informations");
  }
 else{
   let user=this.props.firstname;
   alert(user);
   AsyncStorage.setItem('user',user);
    this.props.navigation.navigate("Welcome");
  }
  
}
          }  >
         <Image 
          style={styles.sub}
          source={require('../Images/right.png')}
        />
        </TouchableOpacity>
      </View>






      </LinearGradient>
);

}
}

const styles = StyleSheet.create({
    input: {
      width: 350,
      height: 60,
      backgroundColor: 'rgba(255,255,255,0.5)',
      margin: 7,
      padding: 14,
      color: '#fff',
      borderRadius: 50,
      fontSize: 18,
      fontWeight: '300',
      
    },
    picker:{
        width: 350,
      height: 60,
      backgroundColor: 'rgba(255,255,255,0.5)',
      
         
         borderRadius: 50,
         flexDirection:'row',
         alignItems:"center",
         paddingLeft:15,
         margin:7
         
    },
    pick:{
        height: 40,
         width: 100 ,
         color:'#fff',
        
        
         
    },
    container: {
      flex: 1,
       paddingTop:70,
      alignItems: 'center',
      
    },sub:{
        height:60,
        width:60,
        
        
        
        }
  })


  const mapStateToProps=(state)=>{
    return {
      firstname:state.firstname,
      lastname:state.lastname,
      phone_number:state.phone_number,
    
      
    }

  }
  function mapDispatchToProps(dispatch){
    return{
     change:(key,val)=>dispatch({type:'change',val:val,key:key})
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(SignUp);