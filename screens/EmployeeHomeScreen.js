//import modules
import React, { Component } from "react";
import { AsyncStorage } from "react-native";
import { Header, Button } from "react-native-elements";
import PropTypes from "prop-types";
import { ButtonGroup } from "../components";

class EmployeeHomeScreen extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
          header: (
            <Header rightComponent={
                <Button title="Logout" onPress={() => navigation.getParam("logout")()}  />
            } />
          ),
        };
    };

    state = {
        buttonData: [
            // {actionName: "Clock In", action: "clockin"},
            {key: "0", actionName: "Vehicle Inspection", action: "checklist"},
        ]
    }

    //lifecycle methods
    componentWillMount() {
        
        this.props.navigation.setParams({ logout: this._signoutAsync })
        
        //TODO: make API request for real data
    }

    render = () => {
        return <ButtonGroup buttonData={this.state.buttonData} clickHandler={this._clickHandler} />;
    }

    //classs methods
    _signoutAsync = async() => {
        await AsyncStorage.clear();
        // eslint-disable-next-line react/prop-types
        this.props.navigation.navigate('Auth');
    }

    _clickHandler = () => {
        this.props.navigation.navigate("Checklist", {title: "Vehicle Inspection"});                
    }
}

EmployeeHomeScreen.propTypes = {
    navigation: PropTypes.object.isRequired
}

export default EmployeeHomeScreen;