//import modules
import React, { Component } from "react";
import { ActivityIndicator, AsyncStorage, StatusBar,View } from "react-native";
import PropTypes from "prop-types";
import Layout from "../constants/Layout";

class AuthLoadingScreen extends Component {

    constructor(props) {
        super(props);
        this._bootstrapAsync();
    }

    render() {
        return(
            <View style={Layout.container}>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }

    //class methods
    _bootstrapAsync = async () => {
        
        // Fetch the token from storage then navigate
        const userToken = await AsyncStorage.getItem("userToken");
        const userType = await AsyncStorage.getItem("userType");
        const appType = (userType && userType === "admin") ? "AdminApp" : "EmployeeApp";
        
        this.props.navigation.navigate(userToken ? appType : "Auth");
    };

}

AuthLoadingScreen.propTypes = {
    navigation: PropTypes.object.isRequired
}

export default AuthLoadingScreen;