//import modules
import React from "react";
import {View, KeyboardAvoidingView, TouchableWithoutFeedback, Text, TextInput, Button} from "react-native";
import PropTypes from "prop-types";

//import styles
import Theme from "../../theme/theme";
import Styles from "./styles";

function SigninForm(props) {
    return (
        <KeyboardAvoidingView style={Styles.containerView} behavior="padding">
            <TouchableWithoutFeedback>
                <View style={Styles.loginScreenContainer}>
                    <View style={Styles.loginFormView}>
                        <Text style={Styles.logoText}>Apostle</Text>
                        <TextInput 
                            onChangeText={text => props.usernameHandler(text)}
                            placeholder="Username" 
                            placeholderTextColor={Theme.colors.placeholder} 
                            style={Styles.loginFormTextInput} />
                        <TextInput 
                            onChangeText={text => props.passwordHandler(text)}
                            placeholder="Password" 
                            placeholderTextColor={Theme.colors.placeholder} 
                            style={Styles.loginFormTextInput} 
                            secureTextEntry={true}/>
                        <View style={Styles.loginButtonContainer}>
                            <Button
                                color={Theme.colors.lightText}
                                title="Login"
                                onPress={() => props.signinHandler()}
                            />
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

//define prop types
SigninForm.propTypes = {
    usernameHandler: PropTypes.func.isRequired,
    passwordHandler: PropTypes.func.isRequired,
    signinHandler: PropTypes.func.isRequired,
}

export default SigninForm;