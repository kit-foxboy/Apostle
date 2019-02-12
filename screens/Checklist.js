import React, { Component } from "react";
import { View, Text } from "react-native";
import { Header } from "react-native-elements";
import PropTypes from "prop-types";
import ChecklistForm from "../components/ChecklistForm";
console.log(ChecklistForm);

class Checklist extends Component {
    
    static navigationOptions = ({ navigation }) => {
        return {
          header: (
            <Header leftComponent={null} centerComponent={
                <Text>{navigation.getParam("title")}</Text>
            }/>
          ),
        };
    };
    
    render () {
        return(
            <View>
                <ChecklistForm />
            </View>
        );
    }
}

export default Checklist;