/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import TimePicker from 'react-native-simple-time-picker';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
//import DateTimePicker from "react-native-modal-datetime-picker";
import MapView,{
Marker,
AnimatedRegion,
Polyline,  PROVIDER_GOOGLE } from 'react-native-maps';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      latitude: 0,
      longitude: 0,
      error:null,
      selectedHours: 0,
      selectedMinutes: 0,
      
    }
  }
  componentDidMount=()=>{
    Geolocation.getCurrentPosition(position=>{
      this.setState({
        latitude:position.coords.latitude,
        longitude:position.coords.longitude,
        error:null
      });
    },
    error =>this.setState({error:error.message }),
    { enableHighAccuracy:true,timeout:20000,maximumAge:2000}
    );
  }
  

  

  render() {
    const { selectedHours, selectedMinutes } = this.state;
  return (
    <View style={styles.container}>
      <View >
        <Text style={styles.title}> Enter time preferred</Text>
      
        <TimePicker 
          selectedHours={selectedHours}
          selectedMinutes={selectedMinutes}
          onChange={(hours, minutes) => this.setState({ 
               selectedHours: hours, selectedMinutes: minutes 
         })}
        />
        <Text style={styles.title2}>             {selectedHours}hr:{selectedMinutes}min</Text>
      

      </View>
      
      <MapView
       provider={PROVIDER_GOOGLE} 
       style={styles.map}
       region={{
         latitude: this.state.latitude,
         longitude: this.state.longitude,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
       <Marker coordinate={this.state}/>
    
     </MapView>
      

    
     
   </View>
    
    
  );
};
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    flex:1,
    height: 300,
    //width: 400,
    //borderWidth: 1,
    //borderColor: '#d6d7da',
    //justifyContent: 'flex-end',
    flexDirection: 'column',
    alignItems: 'center',
   
    backgroundColor:'#a98274'
    
 
  },
  container2: {
    ...StyleSheet.absoluteFillObject,
    flex:2,
    height: 500,
    //width: 400,
    //borderWidth: 1,
    //borderColor: '#d6d7da',
    //justifyContent: 'flex-end',
    flexDirection: 'column',
    alignItems: 'center',
   
    backgroundColor:'#a98274'
    
 
  },
  map: {
    ...StyleSheet.absoluteFillObject,
      //position:'relative'
      marginTop:300,

      width:'100%',
      height:'100%',
  },

  title:{
    marginTop:50,
    color:'black',
    fontSize:25,
    borderColor:"black",
    paddingBottom:20


  },
  title2:{
    marginTop:10,
    color:'black',
    fontSize:20,


    



  }
});

export default App;
