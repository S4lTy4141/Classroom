import React from "react";
import { Text, StyleSheet, View, TouchableOpacity, Image } from "react-native";

export default class Home extends React.Component {

  constructor() {
    super();
    this.state ={
      classes: [],
    }
  }
  
  render() {
    return(
      <View>
        <Text>
          Google Classroom
        </Text>
        <Image 
        source={require("../Assets/Classrom_App_Icon.jpg")} />
        <TouchableOpacity>
          
        </TouchableOpacity>
      </View>
    )
  }
}