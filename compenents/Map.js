import React, { Component } from 'react';
import { TouchableOpacity, Image, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

import {connect} from 'react-redux';
 class Map1 extends Component {
  
  state = {

    mapRegion: { latitude: 37.78825, longitude: -122.4324, latitudeDelta: 0.0922, longitudeDelta: 0.0421 },
    locationResult: null,
    location: {coords: { latitude: 37.78825, longitude: -122.4324}},
  };
  static navigationOptions = {
    title: 'Your Place',
  };

  componentDidMount() {
    this._getLocationAsync();
  }

  _handleMapRegionChange = mapRegion => {
    this.setState({ mapRegion });
  };

  _getLocationAsync = async () => {
   let { status } = await Permissions.askAsync(Permissions.LOCATION);
   if (status !== 'granted') {
     this.setState({
       locationResult: 'Permission to access location was denied',
       location,
     });
   }

   let location = await Location.getCurrentPositionAsync({});
   this.setState({location});
   this.props.change('location',this.state.location);
   this.setState({ locationResult: JSON.stringify(location), location, });
   
 };

  render() {
    console.log(this.props.location)
    return (
      <View style={styles.container}>
      
        <TouchableOpacity style={{alignSelf:"center",position:"absolute",bottom:20}} onPress={()=>this.props.navigation.navigate('Confirm')}   >
      <Image 
          style={{height:70,width:70,}}
          source={require('../Images/right.png')}
        />
        </TouchableOpacity>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {                              
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  
});
const mapStateToProps=(state)=>{
  return {
    firstname:state.firstname,
    location:state.location,
    
  }

}
function mapDispatchToProps(dispatch){
  return{
   change:(key,val)=>dispatch({type:'change',val:val,key:key})
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Map1)