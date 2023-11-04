import React, {Component} from "react";
import { StyleSheet } from "react-native";

import { createDrawerNavigator } from "@react-navigation/drawer";

import Todo from "../screens/TodoFolder/Todo";
import Home from "../screens/Home";
import JoinClass from "../screens/JoinClass";
import TodoBottomTabNavigator from "./CreateTabNavigation";
import Schedule from "../screens/Schedule";

const Drawer = createDrawerNavigator();

export default class DrawerNavigator extends Component {
  render() {
    return(
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home}/>
        <Drawer.Screen name="Todo" component={TodoBottomTabNavigator} />
        <Drawer.Screen name="Join Class" component={JoinClass}/>
        <Drawer.Screen name="Schedule" component={Schedule}/>
      </Drawer.Navigator>
    );
  }
}