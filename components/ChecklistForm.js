import React from "react";
import { View, TextInput } from "react-native";
import Styles from "./styles";

function ChecklistForm(props) {

    return (
        <View style={Styles.componentContainer}>
            <TextInput 
                placeholder="Make"
            />
        </View>
    );
}

export default ChecklistForm;