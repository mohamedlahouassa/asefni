import React from 'react';
import { StyleSheet, Text, View,ImageBackground,Image,TouchableOpacity } from 'react-native';
import {connect} from 'react-redux';
class Welcome extends React.Component{    
  static navigationOptions={
    header:null    
      };   

render(){
    const {navigate} = this.props.navigation;
  
return(
<ImageBackground source={require('../Images/Home.jpg')} style={{width: '100%', height: '100%'}} >
<View  style={styles.vu1} >
 
<TouchableOpacity onPress={()=> {this.props.change("uri","hi");navigate('Low')}}>
<Image 
          style={styles.img1}
          source={require('../Images/fireman2.png')}
        />
        </TouchableOpacity>
</View>

<View style={styles.vu2}>
<TouchableOpacity onPress={()=>{this.props.change("uri","hi");this.props.change("case","UNKNOWN"); this.props.navigation.navigate('Confirm')}}>
<Image
          style={styles.img2}
          source={require('../Images/speed1.png')}
        /></TouchableOpacity>
</View>
<View style={{ width:'100%',
  height:"18%"}}>
 <View style={styles.tabbar1}>
 <TouchableOpacity>
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
<TouchableOpacity style={styles.tab2} onPress={()=> navigate('Info')} >
<Image
          style={{width:"100%",height:"100%"}}
          source={require('../Images/ainfoa.png')}
        />
</TouchableOpacity>
</View>
</View>
</ImageBackground>
);
}
} 
const styles = StyleSheet.create({
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
    vu1:{
        flex:1,
        justifyContent:'flex-end',
    alignItems:'center'
    },
    vu2:{
        flex:2,
        justifyContent:'center',
        paddingTop:20,
    alignItems:'center'
    },
img1:{
    
    width:120,
    height:120
},
img2:{
    width:220,
    height:220,

},
img3:{
  width:70,
    height:70,
 marginLeft:3,
  marginTop:20
   
}


})
const mapStateToProps=(state)=>{
  return {
    uri:state.uri
    
  }

}
function mapDispatchToProps(dispatch){
  return{
   change:(key,val)=>dispatch({type:'change',val:val,key:key})
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Welcome);