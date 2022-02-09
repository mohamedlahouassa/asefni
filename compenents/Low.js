import React from 'react';
import { StyleSheet, Text, View,ImageBackground,Image,TouchableOpacity,TextInput} from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { LinearGradient } from 'expo-linear-gradient';
import {connect} from 'react-redux';
import { firstFromTime } from 'uuid-js';
class   Low extends React.Component{
    static navigationOptions={
        header:null    
          };
          state={
            radioprops : [
              {label: 'ACCIDENT', value: 0 },
              {label: 'FIRE', value: 1 },
              {label: 'Other', value: 4 }
            ],
            value:0,
            op:0,opa:0,opac:0

           
          }
          componentDidMount(){
            this.props.change("case","ACCIDENT")
          }
          fct=(value)=>{
            this.setState({value:value})
            if(value==4){
            this.setState({op:350,opa:70,opac:1})
            }
            else{
              this.setState({op:0,opa:0,opac:0})
              if(value==0){
                this.props.change("case","ACCIDENT")
              }
              else{
                this.props.change("case","FIRE")
              }
            }
            }
           
render(){
   
    const {navigate} = this.props.navigation;
   
return(
<ImageBackground source={require('../Images/Home.jpg')} style={{width: '100%', height: '100%'}} >
<LinearGradient colors={['rgba(207,10,0,0.7)','rgba(245,165,0,0.2)']} style={styles.form}>
<View  style={styles.head} >
<TouchableOpacity style={{alignSelf:"flex-start"}} onPress={()=> navigate('Welcome')} >
     <Image 
          style={{height:40,width:40}}
          source={require('../Images/left.png')}
        />
</TouchableOpacity>
<Text style={{alignSelf:'center',color:"rgba(255,255,255,0.7)",fontSize:22,marginLeft:"25%"}}>Case Type</Text></View>
<RadioForm
          radio_props={this.state.radioprops}
          initial={0}
          formHorizontal={false}
          labelHorizontal={true}
          buttonColor={'#ffc000'}
          selectedButtonColor={'#ffc000'}
          labelColor={'#fff'}
          animation={true}
          onPress={(value) => {this.fct(value)}}
         
        />
    <TextInput style={[{width:this.state.op,height:this.state.opa,opacity:this.state.opac},styles.other]}
     multiline={true}
     numberOfLines={4}
    placeholder="your Case"
    onChangeText={val => this.props.change('case',val)} />
    <View style={{flexDirection:'row',alignItems:"center",margin:10}}>
        <TouchableOpacity  onPress={()=> navigate('Camera')} >
         <Image 
          style={styles.sub}
          source={require('../Images/pic.png')}
        />
        </TouchableOpacity>
        <Image 
           style={{height:120,width:120,marginLeft:100}}
          source={{uri:this.props.uri}}
        />
        </View>
     <TouchableOpacity style={{marginTop:10,alignSelf:'center'}} onPress={()=> navigate('Map1')}>
     <Image 
           style={{height:60,width:60}}
          source={require('../Images/right.png')}
        />
   </TouchableOpacity>
        </LinearGradient>
<View style={{ width:'100%',
  height:130,position:"absolute",bottom:0}}>
 <View style={styles.tabbar1}>
 <TouchableOpacity onPress={()=> navigate('Welcome')}>
<Image
          style={styles.img3}
          source={require('../Images/case.png')}
        /></TouchableOpacity>
   </View>   
<View style={styles.tabbar} >
<TouchableOpacity  style={styles.tab1} >
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
other:{
  color:'#fff',
  borderColor:'#ffc000',
  borderWidth:1,
  borderRadius:20,
  padding:10
},
sub:{
height:60,
width:60,



},
head:{
  height:100,
 width:'100%',
 
  flexDirection:'row'
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
 marginLeft:3,
  marginTop:20
   
},
form:{
   
    borderRadius:14,
    borderColor:'#ffc000',
    borderWidth:1,
    marginTop:20,
    
   padding: 13,
   margin:13
},

})
const mapStateToProps=(state)=>{
  return {
  uri:state.uri,
  case:state.case
  }
}
function mapDispatchToProps(dispatch){
  return{
   change:(key,val)=>dispatch({type:'change',val:val,key:key})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Low);