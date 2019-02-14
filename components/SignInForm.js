//import modules
import React from "react";
import {View, KeyboardAvoidingView, TouchableOpacity, Text, TextInput} from "react-native";
import PropTypes from "prop-types";

//import styles
import Theme from "../constants/Theme";
import Styles from "./styles";

function SignInForm(props) {
    
    return (
        <KeyboardAvoidingView style={Styles.componentContainer} behavior="padding">
            <View style={Styles.loginScreenContainer}>
                <View style={Styles.formView}>
                    <Text style={Styles.logoText}>Apostle</Text>
                    <TextInput 
                        onChangeText={text => props.userNameHandler(text)}
                        placeholder="Username" 
                        placeholderTextColor={Theme.colors.placeholder} 
                        style={Styles.loginFormTextInput} />
                    <TextInput 
                        onChangeText={text => props.passwordHandler(text)}
                        placeholder="Password" 
                        placeholderTextColor={Theme.colors.placeholder} 
                        style={Styles.loginFormTextInput} 
                        secureTextEntry={true}/>
                    <TouchableOpacity onPress={() => props.signInHandler()} style={Styles.loginButton}>
                        <Text style={Styles.loginButtonText}>Log In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}

//define prop types
SignInForm.propTypes = {
    userNameHandler: PropTypes.func.isRequired,
    passwordHandler: PropTypes.func.isRequired,
    signInHandler: PropTypes.func.isRequired,
}

export default SignInForm;