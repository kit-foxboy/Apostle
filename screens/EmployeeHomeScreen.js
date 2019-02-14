//import modules
import React, { Component } from "react";
import { AsyncStorage, Text } from "react-native";
import { Header, Button } from "react-native-elements";
import PropTypes from "prop-types";
import { ButtonGroup } from "../components";

class EmployeeHomeScreen extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
          header: (
            <Header 
                centerComponent={<Text style={{fontSize: 35, fontFamily: "righteous"}}>Apostle</Text>}
                rightComponent={<Button title="Logout" onPress={() => navigation.getParam("logout", () => {})()}  />} 
            />
          ),
        };
    };

    state = {
        buttonData: [
            // {actionName: "Clock In", action: "clockin"},
            {key: "0", actionName: "Begin Day", action: "checklist"},
            {key: "1", actionName: "Pre-Vehicle Inspection", action: "checklist"},
            {key: "2", actionName: "Out of the Barn", action: "checklist"},
            {key: "3", actionName: "Going to Lunch", action: "checklist"},
            {key: "4", actionName: "Back from Lunch", action: "checklist"},
            {key: "5", actionName: "Vehicle Fueled", action: "checklist"},
            {key: "6", actionName: "Back at the Barn", action: "checklist"},
            {key: "7", actionName: "Post-Vehicle Inspection", action: "checklist"},
            {key: "8", actionName: "End Day", action: "checklist"},
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
        this.props.navigation.navigate("Checklist", {title: "Vehicle Inspection", backButton: true});                
    }
}

EmployeeHomeScreen.propTypes = {
    navigation: PropTypes.object.isRequired
}

export default EmployeeHomeScreen;