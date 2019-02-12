//import modules
import React, { Component } from "react";
import { AsyncStorage, Alert } from "react-native";
import { Header } from "react-native-elements";
import PropTypes from "prop-types";
import { SignInForm } from "../components/SigninForm";
import Axios from "axios";


class SignInScreen extends Component {

    static navigationOptions = () => {
        return {
          header: (

            <Header />
            
          ),
        };
    };

    constructor() {
        super();
        this.state = {
            userName: "",
            password: "",
            userToken: "",
            userType: ""
        }
    }

    render() {
        return (
            <SignInForm userNameHandler={this._userNameHandler} 
                passwordHandler={this._passwordHandler} 
                signInHandler={this._signInAsync} 
            />
        );
    }

    //class methods
    _userNameHandler = userName => {
        this.setState({
            userName: userName,
            password: this.state.password,
            userToken: this.state.userToken,
            userType: this.state.userType,
        })
    }

    _passwordHandler = password => {
        this.setState({
            userName: this.state.userName,
            password: password,
            userToken: this.state.userToken,
            userType: this.state.userType,
        })
    }

    _signInAsync = async () => {

        
        if (this.state.username !== "" && this.state.password !== "") {
            Axios.post("https://apostle-dsp.herokuapp.com/api/login", {
                userName: this.state.userName,
                password: this.state.password
            }).then((async results => {
                
                if (results.data.error || !results.data.id) {
                    return Alert.alert("Invalid Credentials", "Invalid username or password.");
                }

                await AsyncStorage.setItem("userToken", results.data.id.toString());
                await AsyncStorage.setItem("userType", "employee");

                //navigate to main stack
                this.props.navigation.navigate((this.userType === "admin") ? "AdminApp" : "EmployeeApp");

            })).catch(err => Alert.alert("Sign In Failed", "An error ocurred: " + err));
        }
        
    };
}

SignInScreen.propTypes = {
    navigation: PropTypes.object.isRequired
}

export default SignInScreen;