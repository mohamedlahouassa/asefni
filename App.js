import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Provider} from 'react-redux';
import React from 'react';
import Welcome from './compenents/Welcome';
import Low from './compenents/Low';
import Present from './compenents/Present';
import SignUP from './compenents/SignUp';
import Info from './compenents/Info';
import Camera from './compenents/Camera'
import {createStore} from 'redux'
import Map1 from './compenents/Map'
import Confirm from './compenents/Confirm'
const initialState={
  firstname:'',
  lastname:'',
  email: '',
  phone_number: '',
  uri:"require('../Images/pic.png')",
  location:"",
  photo:"",
  case:"ACCIDENT",
  
}
const reducer=(state=initialState,action)=>{
 let nextstate;
switch(action.type){
  case 'change':{nextstate={...state,[action.key]:action.val}
  return nextstate
}
  case 'snap':{nextstate={...state,[action.key]:action.val}
  return nextstate
}

  
}
return state;
}
const store=createStore(reducer)
const MainNavigator = createStackNavigator({
  Present:{screen:Present},
  SignUp:{screen:SignUP}, 
  Welcome: {screen: Welcome},
  Low: {screen:Low},
  Info:{screen:Info},
  Camera:{screen:Camera},
  Map1:{screen:Map1},
  Confirm:{screen:Confirm}
},
{navigationOptions:{
header:null
}});
const Navigation = createAppContainer(MainNavigator);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <Navigation />
      </Provider>
    );
  }
}
