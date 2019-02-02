//import modules
import React, { Component } from "react";
import { AsyncStorage } from "react-native";
import { SignInForm } from "../components/SigninForm";


class SignInScreen extends Component {

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
            <SignInForm userNameHandler={this._userNameHandler} passwordHandler={this._passwordHandler} signInHandler={this._signInAsync} />
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

        //TODO: make api call with usrname and password
        //TODO: show error message if API rejects user
        //TODO: send real data to AsyncStorage when provided
        await AsyncStorage.setItem("userToken", "abc123");
        await AsyncStorage.setItem("userType", "employee");
        
        //navigate to main app
        // eslint-disable-next-line react/prop-types
        this.props.navigation.navigate((this.userType === "admin") ? "AdminApp" : "EmployeeApp");
    };
}

export default SignInScreen;