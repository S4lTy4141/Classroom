import React, {Component} from "react";
import { StyleSheet } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import MissedAssignments from "../screens/TodoFolder/MissedAssignments";
import Todo from "../screens/TodoFolder/Todo";
import CompletedAssignments from "../screens/TodoFolder/CompletedAssignments";
import Grades from "../screens/TodoFolder/Grades";

const Tab = createBottomTabNavigator();

export default class TodoBottomTabNavigator extends Component {
  render() {
    return(
        <Tab.Navigator>
          <Tab.Screen name="Missing" component={MissedAssignments} />
          <Tab.Screen name="Todo" component={Todo} />
          <Tab.Screen name="Completed" component={CompletedAssignments} />
          <Tab.Screen name="Grades" component={Grades} />
        </Tab.Navigator>
    );
  }
}