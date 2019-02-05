import React, { Component } from "react";
import { View, Text } from "react-native";

class Checklist extends Component {
    render () {
        return(
            <View styles={{ flex: 1, backgroundColor: "gray" }}>
                <Text>Check List</Text>
            </View>
        );
    }
}

export default Checklist;