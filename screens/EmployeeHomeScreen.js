//import modules
import React, { Component } from "react";
import { AsyncStorage, Button } from "react-native";
import { ButtonGroup } from "../components/ButtonGroup";

class EmployeeHomeScreen extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
          headerRight: (
            <Button
              onPress={() => navigation.getParam("logout")()}
              title="Logout"
            />
          ),
        };
    };

    state = {
        buttonData: []
    }

    //lifecycle methods
    componentWillMount() {
        
        // eslint-disable-next-line react/prop-types
        this.props.navigation.setParams({ logout: this._signoutAsync })
        
        //TODO: make API request for real data
    }

    render = () => {

        return <ButtonGroup clickHandler={this._clickHandler} />;
    }

    //classs methods
    _signoutAsync = async() => {
        await AsyncStorage.clear();
        // eslint-disable-next-line react/prop-types
        this.props.navigation.navigate('Auth');
    }

    _clickHandler = () => {
        
        //TODO: handle button click
    }
}

export default EmployeeHomeScreen;