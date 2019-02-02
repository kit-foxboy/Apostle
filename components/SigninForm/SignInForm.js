//import modules
import React from "react";
import {View, KeyboardAvoidingView, TouchableWithoutFeedback, TouchableOpacity, Text, TextInput} from "react-native";
import PropTypes from "prop-types";

//import styles
import Theme from "../../constants/Theme";
import Styles from "./styles";

function SignInForm(props) {
    
    return (
        <KeyboardAvoidingView style={Styles.componentContainer} behavior="padding">
            <TouchableWithoutFeedback>
                <View style={Styles.loginScreenContainer}>
                    <View style={Styles.loginFormView}>
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
                            <Text>Log In</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
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