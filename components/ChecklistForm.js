import React from "react";
import { View, KeyboardAvoidingView, Text, TextInput, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import Styles from "./styles";
import Theme from "../constants/Theme";

function ChecklistForm(props) {

    return (
        <KeyboardAvoidingView style={Styles.componentContainer} behavior="padding">
            <View style={Styles.loginScreenContainer}>
                <View>
                    <TextInput 
                        onChangeText={text => props.inputHandler("make", text)}
                        placeholder="Make" 
                        placeholderTextColor={Theme.colors.placeholder} 
                        style={Styles.loginFormTextInput}/>
                </View>
                <View>
                    <TextInput 
                        onChangeText={text => props.inputHandler("model", text)}
                        placeholder="Model" 
                        placeholderTextColor={Theme.colors.placeholder}
                        style={Styles.loginFormTextInput}/>
                </View>
                <View>
                    <TextInput 
                        onChangeText={text => props.inputHandler("registrationDate", text)}
                        placeholder="Registration Date" 
                        placeholderTextColor={Theme.colors.placeholder} 
                        style={Styles.loginFormTextInput}/>
                </View>
                <View>
                    <TextInput 
                        onChangeText={text => props.inputHandler("registrationNbr", text)}
                        placeholder="Registration Number" 
                        placeholderTextColor={Theme.colors.placeholder} 
                        style={Styles.loginFormTextInput}/>
                </View>
                <View>
                    <TextInput 
                        onChangeText={text => props.inputHandler("vinNbr", text)}
                        placeholder="VIN Number" 
                        placeholderTextColor={Theme.colors.placeholder} 
                        style={Styles.loginFormTextInput}/>
                </View>
                <View>
                    <TextInput 
                        onChangeText={text => props.inputHandler("year", text)}
                        placeholder="Year" 
                        placeholderTextColor={Theme.colors.placeholder} 
                        style={Styles.loginFormTextInput}/>
                </View>
                <TouchableOpacity onPress={() => props.submitHandler()} style={Styles.loginButton}>
                    <Text>Begin Inspection</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

ChecklistForm.propTypes = {
    inputHandler: PropTypes.func.isRequired,
    submitHandler: PropTypes.func.isRequired,
}

export default ChecklistForm;