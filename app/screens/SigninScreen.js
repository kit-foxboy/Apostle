//import modules
import React, { Component } from "react";
import { SigninForm } from "../components/SigninForm";


class SigninScreen extends Component {

    constructor() {
        super();
        this.state = {
            User: {
                username: "",
                password: ""
            }
        }
    }

    render() {
        return (
            <SigninForm usernameHandler={this.usernameHandler} passwordHandler={this.passwordHandler} signinHandler={this.signinHandler}></SigninForm>
        );
    }

    usernameHandler = (username) => {
        this.setState({
            User: {
                username: username,
                password: this.state.User.password
            }
        })
    }

    passwordHandler = (password) => {
        this.setState({
            User: {
                username: this.state.User.username,
                password: password
            }
        })
    }

    signinHandler = () => {
        //TODO: Log User in with API
        //navigate to next screen
        // eslint-disable-next-line react/prop-types
        this.props.navigation.navigate("EmployeeActions");
    };
}

export default SigninScreen;