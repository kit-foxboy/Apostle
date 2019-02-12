import React, { Component } from "react";
import { View, Text } from "react-native";
import { Header } from "react-native-elements";
import PropTypes from "prop-types";
import ChecklistForm from "../components/ChecklistForm";
import Styles from "../components/styles";
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
            <View style={Styles.componentContainer}>
                <ChecklistForm />
            </View>
        );
    }
}

export default Checklist;