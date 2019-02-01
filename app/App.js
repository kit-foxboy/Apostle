/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

//import modules
import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

//import screens
import { SigninScreen, EmployeeActionScreen } from "./screens";

//define navigator
const appNavigator = createStackNavigator(
    {
        Signin: {
            screen: SigninScreen
        },
        EmployeeActions: {
            screen: EmployeeActionScreen,
            navigationOptions: () => ({
                title: "Employee Actions",
                headerLeft: null,
            })
        }
    },
    {
        initialRouteName: "Signin",
    } 
);

//add navigator to app contianer
const AppContainer = createAppContainer(appNavigator);

//export app
type Props = {};
export default class App extends Component<Props> {

   render() {
      return <AppContainer />;
    }
  }
