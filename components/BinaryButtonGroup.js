import React, { Component } from "react";
import { ButtonGroup, Button } from "react-native-elements";

class BinaryButtonGroup extends ButtonGroup {

    constructor() {
        super();

        this.state = {
            selectedIndex: null
        }
    }

    // componentWillReceiveProps = props => {
    //     this.setState({props.selectedIndex})
    // }
}

export default BinaryButtonGroup;