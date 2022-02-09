import React from 'react';
import { Text, View, TouchableOpacity,StyleSheet,Image} from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import {connect} from 'react-redux';
 class CameraExample extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };
  static navigationOptions={
    header:null    
      }; 
  
  
  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }
  async snapPhoto() {       
    console.log('Button Pressed');
    if (this.camera) {
       console.log('Taking photo');
       const options = { quality: 1, base64: true, fixOrientation: true, 
       exif: true};
       await this.camera.takePictureAsync(options).then(photo => {
          photo.exif.Orientation = 1;   
                
            this.props.snap('uri',photo.uri);
            
      
            this.props.navigation.navigate('Low');           
           });     
     }
    }

  render() {
  
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }} ref={ (ref) => {this.camera = ref} } type={this.state.type}           >
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
           
              }}>
             
             
              <View style={{ width:'100%',
  height:130,position:"absolute",bottom:0}}>
 <View style={styles.tabbar1}>
 <TouchableOpacity onPress={this.snapPhoto.bind(this)}>
<Image
          style={styles.img3}
          source={require('../Images/pic.png')}
        /></TouchableOpacity>
   </View>   
<View style={styles.tabbar} >
<TouchableOpacity style={styles.tab1} onPress={()=>{this.props.navigation.navigate('Low')} } >
<Image
          style={{width:"100%",height:"100%"}}
          source={require('../Images/tabcamera.png')}
        />
</TouchableOpacity>
<TouchableOpacity style={styles.tab2}  onPress={() => {
                  this.setState({
                    type:
                      this.state.type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back,
                  });
                }} >
<Image
          style={{width:"100%",height:"100%"}}
          source={require('../Images/tabcamera1.png')}
        />
</TouchableOpacity>
</View>
</View>    
                   

         

            </View>
  
          </Camera>
        </View>
      );
    }
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
  uri:state.uri,
  photo:state.photo,
  }


}
function mapDispatchToProps(dispatch){
  return{
    snap:(key,val)=>dispatch({type:'snap',val:val,key:key})
   }
}
export default connect(mapStateToProps,mapDispatchToProps)(CameraExample);